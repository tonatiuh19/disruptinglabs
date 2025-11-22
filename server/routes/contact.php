<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, OPTIONS');
header('Access-Control-Allow-Headers: Origin, Content-Type, X-Auth-Token');
header('Content-Type: application/json');

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit();
}

require_once(__DIR__ . '/../db_cnn/cnn.php');
require_once(__DIR__ . '/../vendor/autoload.php');

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

$method = $_SERVER['REQUEST_METHOD'];

if ($method === 'POST') {
    $requestBody = file_get_contents('php://input');
    $params = json_decode($requestBody, true);

    // Validate required fields
    $requiredFields = ['name', 'email', 'message'];
    foreach ($requiredFields as $field) {
        if (!isset($params[$field]) || empty(trim($params[$field]))) {
            http_response_code(400);
            echo json_encode(['error' => "Missing required field: $field"]);
            exit;
        }
    }

    $name = trim($params['name']);
    $email = trim($params['email']);
    $company = trim($params['company'] ?? '');
    $message = trim($params['message']);
    $visitorId = $params['visitor_id'] ?? null;
    $source = $params['source'] ?? 'contact_form';
    
    // Get visitor info
    $ipAddress = $_SERVER['HTTP_X_FORWARDED_FOR'] ?? $_SERVER['REMOTE_ADDR'] ?? null;
    $userAgent = $_SERVER['HTTP_USER_AGENT'] ?? null;

    // Validate email format
    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        http_response_code(400);
        echo json_encode(['error' => 'Invalid email format']);
        exit;
    }

    // Insert contact
    $sql = "INSERT INTO contacts (visitor_id, name, email, company, message, source, ip_address, user_agent, status) 
            VALUES (?, ?, ?, ?, ?, ?, ?, ?, 'new')";
    
    $stmt = $conn->prepare($sql);
    if (!$stmt) {
        http_response_code(500);
        echo json_encode(['error' => 'Database error: ' . $conn->error]);
        exit;
    }

    $stmt->bind_param("isssssss", $visitorId, $name, $email, $company, $message, $source, $ipAddress, $userAgent);
    
    if ($stmt->execute()) {
        $contactId = $stmt->insert_id;
        $stmt->close();

        // Send confirmation email
        try {
            $emailSent = sendConfirmationEmail($contactId, $name, $email, $company, $message, $conn);
            
            if ($emailSent) {
                echo json_encode([
                    'success' => true,
                    'contact_id' => $contactId,
                    'message' => 'Thank you for reaching out! We\'ll get back to you within 1 business day.'
                ]);
            } else {
                echo json_encode([
                    'success' => true,
                    'contact_id' => $contactId,
                    'message' => 'Your message has been received.',
                    'email_status' => 'failed'
                ]);
            }
        } catch (Exception $e) {
            error_log('Email sending error: ' . $e->getMessage());
            echo json_encode([
                'success' => true,
                'contact_id' => $contactId,
                'message' => 'Your message has been received.',
                'email_status' => 'error'
            ]);
        }
    } else {
        http_response_code(500);
        echo json_encode(['error' => 'Failed to save contact: ' . $stmt->error]);
        $stmt->close();
    }
} else {
    http_response_code(405);
    echo json_encode(['error' => 'Method not allowed. Only POST is accepted.']);
}

$conn->close();

// =============================================
// EMAIL SENDING FUNCTION
// =============================================
function sendConfirmationEmail($contactId, $name, $email, $company, $message, $conn) {
    try {
        // Load email template
        $templatePath = __DIR__ . '/../templates/contact-confirmation.html';
        $emailBody = file_exists($templatePath) ? file_get_contents($templatePath) : getDefaultEmailTemplate();

        // Replace placeholders
        $firstName = explode(' ', $name)[0];
        $currentYear = date('Y');
        
        $replacements = [
            '{{name}}' => htmlspecialchars($firstName),
            '{{full_name}}' => htmlspecialchars($name),
            '{{email}}' => htmlspecialchars($email),
            '{{company}}' => htmlspecialchars($company ?: 'Not provided'),
            '{{message}}' => nl2br(htmlspecialchars($message)),
            '{{date}}' => date('F j, Y'),
            '{{year}}' => $currentYear
        ];

        foreach ($replacements as $placeholder => $value) {
            $emailBody = str_replace($placeholder, $value, $emailBody);
        }

        // Configure PHPMailer
        $mail = new PHPMailer(true);
        
        // Server settings
        $mail->isSMTP();
        $mail->Host = 'smtp.gmail.com'; // Update with your SMTP host
        $mail->SMTPAuth = true;
        $mail->Username = 'your-email@gmail.com'; // Update with your email
        $mail->Password = 'your-app-password'; // Update with your password
        $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
        $mail->Port = 587;
        $mail->CharSet = 'UTF-8';

        // Recipients
        $mail->setFrom('no-reply@disruptinglabs.com', 'Disrupting Labs');
        $mail->addAddress($email, $name);
        $mail->addReplyTo('hello@disruptinglabs.com', 'Disrupting Labs Team');

        // Content
        $mail->isHTML(true);
        $mail->Subject = '🚀 We received your message - Disrupting Labs';
        $mail->Body = $emailBody;
        $mail->AltBody = strip_tags("Hi $firstName,\n\nThank you for reaching out to Disrupting Labs! We've received your message and our team will get back to you within 1 business day.\n\nBest regards,\nThe Disrupting Labs Team");

        $mail->send();
        
        // Log email success
        $sql = "INSERT INTO email_logs (contact_id, recipient_email, subject, status, sent_at) 
                VALUES (?, ?, ?, 'sent', NOW())";
        $stmt = $conn->prepare($sql);
        $subject = '🚀 We received your message - Disrupting Labs';
        $stmt->bind_param("iss", $contactId, $email, $subject);
        $stmt->execute();
        $stmt->close();
        
        return true;
    } catch (Exception $e) {
        // Log email failure
        $sql = "INSERT INTO email_logs (contact_id, recipient_email, subject, status, error_message) 
                VALUES (?, ?, ?, 'failed', ?)";
        $stmt = $conn->prepare($sql);
        $subject = '🚀 We received your message - Disrupting Labs';
        $errorMsg = $e->getMessage();
        $stmt->bind_param("isss", $contactId, $email, $subject, $errorMsg);
        $stmt->execute();
        $stmt->close();
        
        error_log('Email Error: ' . $e->getMessage());
        return false;
    }
}

function getDefaultEmailTemplate() {
    return '
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body style="margin: 0; padding: 0; font-family: -apple-system, BlinkMacSystemFont, \'Segoe UI\', Roboto, \'Helvetica Neue\', Arial, sans-serif; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); min-height: 100vh;">
    <table width="100%" cellpadding="0" cellspacing="0" style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); padding: 40px 20px;">
        <tr>
            <td align="center">
                <table width="600" cellpadding="0" cellspacing="0" style="background: white; border-radius: 24px; overflow: hidden; box-shadow: 0 20px 60px rgba(0,0,0,0.3);">
                    <!-- Header with Gradient -->
                    <tr>
                        <td style="background: linear-gradient(135deg, #9b1b5e 0%, #e91e63 50%, #9b1b5e 100%); padding: 50px 40px; text-align: center; position: relative;">
                            <div style="font-size: 48px; margin-bottom: 10px;">🚀</div>
                            <h1 style="margin: 0; color: white; font-size: 32px; font-weight: 900; text-shadow: 0 2px 4px rgba(0,0,0,0.2);">Message Received!</h1>
                            <p style="margin: 10px 0 0; color: rgba(255,255,255,0.9); font-size: 16px;">We\'re excited to connect with you</p>
                        </td>
                    </tr>
                    
                    <!-- Content -->
                    <tr>
                        <td style="padding: 50px 40px;">
                            <h2 style="color: #1a1a1a; font-size: 24px; font-weight: 700; margin: 0 0 20px;">Hi {{name}}! ✨</h2>
                            
                            <p style="color: #4a5568; font-size: 16px; line-height: 1.8; margin: 0 0 20px;">
                                Thank you for reaching out to <strong style="color: #9b1b5e;">Disrupting Labs</strong>! We\'ve received your message and our innovation team is reviewing it.
                            </p>
                            
                            <p style="color: #4a5568; font-size: 16px; line-height: 1.8; margin: 0 0 30px;">
                                We\'ll get back to you within <strong>1 business day</strong> with insights and next steps for your project.
                            </p>
                            
                            <!-- Info Box -->
                            <div style="background: linear-gradient(135deg, #f3f4f6 0%, #fce7f3 100%); border-left: 4px solid #9b1b5e; border-radius: 12px; padding: 25px; margin: 30px 0;">
                                <h3 style="margin: 0 0 15px; color: #1a1a1a; font-size: 18px; font-weight: 700;">What happens next?</h3>
                                <ul style="margin: 0; padding-left: 20px; color: #4a5568; line-height: 1.8;">
                                    <li>Our team reviews your project requirements</li>
                                    <li>We prepare a customized consultation plan</li>
                                    <li>You receive a detailed response within 1 business day</li>
                                    <li>We schedule a call to discuss your vision</li>
                                </ul>
                            </div>
                            
                            <!-- Benefits Section -->
                            <div style="background: #f9fafb; border-radius: 12px; padding: 25px; margin: 30px 0;">
                                <h3 style="margin: 0 0 15px; color: #1a1a1a; font-size: 18px; font-weight: 700; display: flex; align-items: center;">
                                    <span style="font-size: 24px; margin-right: 10px;">💎</span> What you get:
                                </h3>
                                <ul style="margin: 0; padding-left: 20px; color: #4a5568; line-height: 1.8;">
                                    <li><strong>Free consultation</strong> & project roadmap</li>
                                    <li><strong>Transparent pricing</strong> with no hidden costs</li>
                                    <li><strong>Expert insights</strong> from our innovation team</li>
                                    <li><strong>Cutting-edge technology</strong> recommendations</li>
                                </ul>
                            </div>
                            
                            <p style="color: #4a5568; font-size: 16px; line-height: 1.8; margin: 30px 0 0;">
                                Have urgent questions? Reply to this email or reach us at <a href="mailto:hello@disruptinglabs.com" style="color: #9b1b5e; text-decoration: none; font-weight: 600;">hello@disruptinglabs.com</a>
                            </p>
                        </td>
                    </tr>
                    
                    <!-- Footer -->
                    <tr>
                        <td style="background: #1a1a1a; padding: 40px; text-align: center;">
                            <div style="margin-bottom: 20px;">
                                <a href="https://disruptinglabs.com" style="display: inline-block; background: linear-gradient(135deg, #9b1b5e 0%, #e91e63 100%); color: white; padding: 15px 35px; text-decoration: none; border-radius: 12px; font-weight: 700; font-size: 16px; transition: transform 0.2s;">
                                    Visit Our Website
                                </a>
                            </div>
                            
                            <p style="color: #9ca3af; font-size: 14px; margin: 20px 0 10px; line-height: 1.6;">
                                <strong style="color: #e91e63;">Disrupting Labs</strong><br>
                                Revolutionary digital solutions that disrupt industries
                            </p>
                            
                            <p style="color: #6b7280; font-size: 12px; margin: 10px 0 0;">
                                © {{year}} Disrupting Labs. All rights reserved.
                            </p>
                        </td>
                    </tr>
                </table>
            </td>
        </tr>
    </table>
</body>
</html>
    ';
}
?>
