<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, GET, OPTIONS');
header('Access-Control-Allow-Headers: Origin, Content-Type, X-Auth-Token');
header('Content-Type: application/json');

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit();
}

require_once(__DIR__ . '/../db_cnn/cnn.php');

$method = $_SERVER['REQUEST_METHOD'];

// =============================================
// TRACK VISITOR
// =============================================
if ($method === 'POST') {
    $requestBody = file_get_contents('php://input');
    $params = json_decode($requestBody, true);

    $sessionId = $params['session_id'] ?? null;
    $ipAddress = $_SERVER['HTTP_X_FORWARDED_FOR'] ?? $_SERVER['REMOTE_ADDR'] ?? null;
    $userAgent = $_SERVER['HTTP_USER_AGENT'] ?? null;
    $deviceType = $params['device_type'] ?? null;
    $browser = $params['browser'] ?? null;
    $os = $params['os'] ?? null;
    $country = $params['country'] ?? null;
    $city = $params['city'] ?? null;
    $referrer = $params['referrer'] ?? null;
    $landingPage = $params['landing_page'] ?? null;

    if (!$sessionId) {
        http_response_code(400);
        echo json_encode(['error' => 'Session ID is required']);
        exit;
    }

    // Check if visitor exists
    $sql = "SELECT id FROM visitors WHERE session_id = ?";
    $stmt = $conn->prepare($sql);
    $stmt->bind_param("s", $sessionId);
    $stmt->execute();
    $result = $stmt->get_result();
    
    if ($result->num_rows > 0) {
        // Update existing visitor
        $visitor = $result->fetch_assoc();
        $visitorId = $visitor['id'];
        
        $sql = "UPDATE visitors SET last_seen_at = CURRENT_TIMESTAMP WHERE id = ?";
        $stmt = $conn->prepare($sql);
        $stmt->bind_param("i", $visitorId);
        $stmt->execute();
        $stmt->close();
        
        echo json_encode(['success' => true, 'visitor_id' => $visitorId, 'new_visitor' => false]);
    } else {
        // Insert new visitor
        $sql = "INSERT INTO visitors (session_id, ip_address, user_agent, device_type, browser, os, country, city, referrer, landing_page) 
                VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";
        $stmt = $conn->prepare($sql);
        $stmt->bind_param("ssssssssss", $sessionId, $ipAddress, $userAgent, $deviceType, $browser, $os, $country, $city, $referrer, $landingPage);
        
        if ($stmt->execute()) {
            $visitorId = $stmt->insert_id;
            $stmt->close();
            echo json_encode(['success' => true, 'visitor_id' => $visitorId, 'new_visitor' => true]);
        } else {
            http_response_code(500);
            echo json_encode(['error' => 'Failed to track visitor']);
            $stmt->close();
        }
    }
}

// =============================================
// TRACK PAGE VIEW
// =============================================
elseif ($method === 'GET' && isset($_GET['action']) && $_GET['action'] === 'pageview') {
    $visitorId = $_GET['visitor_id'] ?? null;
    $pageUrl = $_GET['page_url'] ?? null;
    $pageTitle = $_GET['page_title'] ?? null;

    if (!$visitorId || !$pageUrl) {
        http_response_code(400);
        echo json_encode(['error' => 'Visitor ID and page URL are required']);
        exit;
    }

    $sql = "INSERT INTO page_views (visitor_id, page_url, page_title) VALUES (?, ?, ?)";
    $stmt = $conn->prepare($sql);
    $stmt->bind_param("iss", $visitorId, $pageUrl, $pageTitle);
    
    if ($stmt->execute()) {
        echo json_encode(['success' => true, 'pageview_id' => $stmt->insert_id]);
    } else {
        http_response_code(500);
        echo json_encode(['error' => 'Failed to track page view']);
    }
    $stmt->close();
}

// =============================================
// GET ANALYTICS
// =============================================
elseif ($method === 'GET' && isset($_GET['action']) && $_GET['action'] === 'analytics') {
    $days = $_GET['days'] ?? 7;
    
    $sql = "SELECT 
                DATE(created_at) as date,
                COUNT(*) as visitors,
                COUNT(DISTINCT session_id) as unique_visitors
            FROM visitors 
            WHERE created_at >= DATE_SUB(NOW(), INTERVAL ? DAY)
            GROUP BY DATE(created_at)
            ORDER BY date DESC";
    
    $stmt = $conn->prepare($sql);
    $stmt->bind_param("i", $days);
    $stmt->execute();
    $result = $stmt->get_result();
    
    $analytics = [];
    while ($row = $result->fetch_assoc()) {
        $analytics[] = $row;
    }
    
    echo json_encode(['success' => true, 'analytics' => $analytics]);
    $stmt->close();
}

else {
    http_response_code(405);
    echo json_encode(['error' => 'Method not allowed']);
}

$conn->close();
?>
