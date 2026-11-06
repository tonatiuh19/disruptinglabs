<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST, OPTIONS');
header('Access-Control-Allow-Headers: Origin, Content-Type, X-Auth-Token');
header('Content-Type: application/json');

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit();
}

require_once(__DIR__ . '/../db_cnn/cnn.php');

$method = $_SERVER['REQUEST_METHOD'];

// =============================================
// GET: Fetch all active job postings
// =============================================
if ($method === 'GET') {
    try {
        $db = getDbConnection();
        
        // Get specific job by slug if provided
        if (isset($_GET['slug'])) {
            $slug = $_GET['slug'];
            $stmt = $db->prepare("
                SELECT id, slug, title, location, employment_type, experience_level, 
                       department, markdown_content, positions_available, salary_range, 
                       remote_policy, featured, created_at, published_at
                FROM job_postings 
                WHERE slug = ? AND is_active = 1
            ");
            $stmt->bind_param('s', $slug);
            $stmt->execute();
            $result = $stmt->get_result();
            $job = $result->fetch_assoc();
            
            if (!$job) {
                http_response_code(404);
                echo json_encode(['error' => 'Job posting not found']);
                exit;
            }
            
            echo json_encode(['success' => true, 'job' => $job]);
        } else {
            // Get all active job postings
            $featured = isset($_GET['featured']) ? (bool)$_GET['featured'] : null;
            
            $query = "
                SELECT id, slug, title, location, employment_type, experience_level, 
                       department, markdown_content, positions_available, salary_range, 
                       remote_policy, featured, created_at, published_at
                FROM job_postings 
                WHERE is_active = 1
            ";
            
            if ($featured !== null) {
                $query .= " AND featured = " . ($featured ? '1' : '0');
            }
            
            $query .= " ORDER BY featured DESC, published_at DESC";
            
            $result = $db->query($query);
            $jobs = [];
            
            while ($row = $result->fetch_assoc()) {
                $jobs[] = $row;
            }
            
            echo json_encode(['success' => true, 'jobs' => $jobs]);
        }
        
        $db->close();
    } catch (Exception $e) {
        http_response_code(500);
        echo json_encode(['error' => 'Failed to fetch job postings', 'details' => $e->getMessage()]);
    }
}

// =============================================
// POST: Submit job application
// =============================================
else if ($method === 'POST') {
    try {
        $db = getDbConnection();
        
        // Validate required fields
        $requiredFields = ['job_posting_id', 'first_name', 'last_name', 'email'];
        foreach ($requiredFields as $field) {
            if (!isset($_POST[$field]) || empty(trim($_POST[$field]))) {
                http_response_code(400);
                echo json_encode(['error' => "Missing required field: $field"]);
                exit;
            }
        }
        
        // Validate email format
        if (!filter_var($_POST['email'], FILTER_VALIDATE_EMAIL)) {
            http_response_code(400);
            echo json_encode(['error' => 'Invalid email format']);
            exit;
        }
        
        // Validate job posting exists
        $jobId = intval($_POST['job_posting_id']);
        $stmt = $db->prepare("SELECT id FROM job_postings WHERE id = ? AND is_active = 1");
        $stmt->bind_param('i', $jobId);
        $stmt->execute();
        if ($stmt->get_result()->num_rows === 0) {
            http_response_code(400);
            echo json_encode(['error' => 'Invalid job posting']);
            exit;
        }
        
        // Handle PDF resume upload
        if (!isset($_FILES['resume']) || $_FILES['resume']['error'] !== UPLOAD_ERR_OK) {
            http_response_code(400);
            echo json_encode(['error' => 'Resume PDF is required']);
            exit;
        }
        
        $file = $_FILES['resume'];
        
        // Validate file is PDF
        $fileType = mime_content_type($file['tmp_name']);
        if ($fileType !== 'application/pdf') {
            http_response_code(400);
            echo json_encode(['error' => 'Resume must be a PDF file']);
            exit;
        }
        
        // Validate file size (max 5MB)
        $maxSize = 5 * 1024 * 1024; // 5MB
        if ($file['size'] > $maxSize) {
            http_response_code(400);
            echo json_encode(['error' => 'Resume file size must not exceed 5MB']);
            exit;
        }
        
        // Create upload directory if it doesn't exist
        $uploadDir = __DIR__ . '/../../uploads/resumes/';
        if (!file_exists($uploadDir)) {
            mkdir($uploadDir, 0755, true);
        }
        
        // Generate unique filename
        $fileExtension = pathinfo($file['name'], PATHINFO_EXTENSION);
        $uniqueFilename = uniqid() . '_' . time() . '.' . $fileExtension;
        $uploadPath = $uploadDir . $uniqueFilename;
        
        // Move uploaded file
        if (!move_uploaded_file($file['tmp_name'], $uploadPath)) {
            http_response_code(500);
            echo json_encode(['error' => 'Failed to save resume file']);
            exit;
        }
        
        // Get visitor info
        $ipAddress = $_SERVER['HTTP_X_FORWARDED_FOR'] ?? $_SERVER['REMOTE_ADDR'] ?? null;
        $userAgent = $_SERVER['HTTP_USER_AGENT'] ?? null;
        
        // Insert application
        $stmt = $db->prepare("
            INSERT INTO job_applications (
                job_posting_id, visitor_id, first_name, last_name, email, phone,
                linkedin_url, github_url, portfolio_url, resume_filename, resume_path,
                resume_size, cover_letter, years_of_experience, current_location,
                available_from, salary_expectation, ip_address, user_agent
            ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
        ");
        
        $visitorId = isset($_POST['visitor_id']) ? intval($_POST['visitor_id']) : null;
        $firstName = trim($_POST['first_name']);
        $lastName = trim($_POST['last_name']);
        $email = trim($_POST['email']);
        $phone = trim($_POST['phone'] ?? '');
        $linkedinUrl = trim($_POST['linkedin_url'] ?? '');
        $githubUrl = trim($_POST['github_url'] ?? '');
        $portfolioUrl = trim($_POST['portfolio_url'] ?? '');
        $originalFilename = $file['name'];
        $resumeSize = $file['size'];
        $coverLetter = trim($_POST['cover_letter'] ?? '');
        $yearsOfExperience = isset($_POST['years_of_experience']) ? intval($_POST['years_of_experience']) : null;
        $currentLocation = trim($_POST['current_location'] ?? '');
        $availableFrom = $_POST['available_from'] ?? null;
        $salaryExpectation = trim($_POST['salary_expectation'] ?? '');
        
        $stmt->bind_param(
            'iisssssssssisssssss',
            $jobId, $visitorId, $firstName, $lastName, $email, $phone,
            $linkedinUrl, $githubUrl, $portfolioUrl, $originalFilename, $uniqueFilename,
            $resumeSize, $coverLetter, $yearsOfExperience, $currentLocation,
            $availableFrom, $salaryExpectation, $ipAddress, $userAgent
        );
        
        if ($stmt->execute()) {
            $applicationId = $db->insert_id;
            
            // TODO: Send confirmation email to applicant
            // TODO: Send notification email to hiring team
            
            echo json_encode([
                'success' => true,
                'message' => 'Application submitted successfully',
                'application_id' => $applicationId
            ]);
        } else {
            // Delete uploaded file if database insert fails
            unlink($uploadPath);
            throw new Exception('Failed to save application');
        }
        
        $db->close();
        
    } catch (Exception $e) {
        http_response_code(500);
        echo json_encode(['error' => 'Failed to submit application', 'details' => $e->getMessage()]);
    }
}

else {
    http_response_code(405);
    echo json_encode(['error' => 'Method not allowed']);
}
?>
