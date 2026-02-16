<?php
/**
 * Modern Contact Form Handler
 * Handles form submissions with proper validation and security
 */

// Enable CORS for development
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST');
header('Access-Control-Allow-Headers: Content-Type');

// Set content type to JSON
header('Content-Type: application/json');

// Only allow POST requests
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['error' => 'Method not allowed']);
    exit;
}

// Configuration
$config = [
    'to_email' => 'eberegodsent@gmail.com',
    'from_email' => 'noreply@portfolio.local',
    'subject_prefix' => '[Akojuru Portfolio] ',
    'max_message_length' => 1000,
    'required_fields' => ['name', 'email', 'subject', 'message']
];

/**
 * Sanitize input data
 */
function sanitizeInput($data) {
    $data = trim($data);
    $data = stripslashes($data);
    $data = htmlspecialchars($data);
    return $data;
}

/**
 * Validate email address
 */
function validateEmail($email) {
    return filter_var($email, FILTER_VALIDATE_EMAIL);
}

/**
 * Validate required fields
 */
function validateRequiredFields($data, $required_fields) {
    $errors = [];
    
    foreach ($required_fields as $field) {
        if (empty($data[$field])) {
            $errors[] = ucfirst($field) . ' is required.';
        }
    }
    
    return $errors;
}

/**
 * Send email notification
 */
function sendEmail($to, $subject, $message, $from_email, $from_name, $reply_to = null) {
    $headers = [
        'From' => "$from_name <$from_email>",
        'Reply-To' => $reply_to ? $reply_to : $from_email,
        'X-Mailer' => 'PHP/' . phpversion(),
        'Content-Type' => 'text/html; charset=UTF-8'
    ];
    
    $html_message = "
    <html>
    <head>
        <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background: #3b82f6; color: white; padding: 20px; text-align: center; }
            .content { background: #f8f9fa; padding: 20px; }
            .field { margin-bottom: 15px; }
            .label { font-weight: bold; color: #374151; }
            .value { margin-top: 5px; }
            .footer { background: #e5e7eb; padding: 15px; text-align: center; font-size: 14px; color: #6b7280; }
        </style>
    </head>
    <body>
        <div class='container'>
            <div class='header'>
                <h2>New Portfolio Contact Form Submission</h2>
            </div>
            <div class='content'>
                <div class='field'>
                    <div class='label'>Name:</div>
                    <div class='value'>" . htmlspecialchars($from_name) . "</div>
                </div>
                <div class='field'>
                    <div class='label'>Email:</div>
                    <div class='value'>" . htmlspecialchars($from_email) . "</div>
                </div>
                <div class='field'>
                    <div class='label'>Subject:</div>
                    <div class='value'>" . htmlspecialchars($subject) . "</div>
                </div>
                <div class='field'>
                    <div class='label'>Message:</div>
                    <div class='value'>" . nl2br(htmlspecialchars($message)) . "</div>
                </div>
                <div class='field'>
                    <div class='label'>Submitted:</div>
                    <div class='value'>" . date('Y-m-d H:i:s') . "</div>
                </div>
            </div>
            <div class='footer'>
                <p>This message was sent from your portfolio contact form.</p>
            </div>
        </div>
    </body>
    </html>";
    
    return mail($to, $subject, $html_message, $headers);
}

/**
 * Log form submission (optional)
 */
function logSubmission($data) {
    $log_entry = date('Y-m-d H:i:s') . " - Contact form submission from: " . $data['email'] . "\n";
    file_put_contents('contact_submissions.log', $log_entry, FILE_APPEND | LOCK_EX);
}

// Main processing
try {
    // Get form data
    $form_data = [
        'name' => sanitizeInput($_POST['name'] ?? ''),
        'email' => sanitizeInput($_POST['email'] ?? ''),
        'subject' => sanitizeInput($_POST['subject'] ?? ''),
        'message' => sanitizeInput($_POST['message'] ?? '')
    ];
    
    // Validate required fields
    $errors = validateRequiredFields($form_data, $config['required_fields']);
    
    // Validate email format
    if (!empty($form_data['email']) && !validateEmail($form_data['email'])) {
        $errors[] = 'Please enter a valid email address.';
    }
    
    // Validate message length
    if (strlen($form_data['message']) > $config['max_message_length']) {
        $errors[] = 'Message is too long. Please keep it under ' . $config['max_message_length'] . ' characters.';
    }
    
    // If there are validation errors, return them
    if (!empty($errors)) {
        http_response_code(400);
        echo json_encode([
            'success' => false,
            'errors' => $errors
        ]);
        exit;
    }
    
    // Prepare email
    $to = $config['to_email'];
    $subject = $config['subject_prefix'] . $form_data['subject'];
    $message = $form_data['message'];
    $from_email = $config['from_email'];
    $from_name = 'Akojuru Godsent';
    
    // Send email
    $email_sent = sendEmail($to, $subject, $message, $from_email, $from_name, $form_data['email']);
    
    if ($email_sent) {
        // Log successful submission
        logSubmission($form_data);
        
        // Send auto-reply to user
        $auto_reply_subject = "Thank you for contacting Akojuru Godsent";
        $auto_reply_message = "
        <html>
        <body style='font-family: Arial, sans-serif; line-height: 1.6; color: #333;'>
            <div style='max-width: 600px; margin: 0 auto; padding: 20px;'>
                <div style='background: #3b82f6; color: white; padding: 20px; text-align: center; border-radius: 8px 8px 0 0;'>
                    <h2>Thank You for Your Message!</h2>
                </div>
                <div style='background: #f8f9fa; padding: 20px; border-radius: 0 0 8px 8px;'>
                    <p>Dear " . htmlspecialchars($form_data['name']) . ",</p>
                    <p>Thank you for reaching out! I've received your message and will get back to you as soon as possible, usually within 24 hours.</p>
                    <p><strong>Your message:</strong></p>
                    <div style='background: white; padding: 15px; border-left: 4px solid #3b82f6; margin: 15px 0;'>
                        <p><strong>Subject:</strong> " . htmlspecialchars($form_data['subject']) . "</p>
                        <p><strong>Message:</strong><br>" . nl2br(htmlspecialchars($form_data['message'])) . "</p>
                    </div>
                    <p>Best regards,<br><strong>Akojuru Godsent</strong></p>
                    <hr style='margin: 20px 0; border: none; border-top: 1px solid #e5e7eb;'>
                    <p style='font-size: 14px; color: #6b7280;'>
                        This is an automated response. Please do not reply to this email.
                    </p>
                </div>
            </div>
        </body>
        </html>";
        
        sendEmail($form_data['email'], $auto_reply_subject, $auto_reply_message, $config['from_email'], 'Akojuru Godsent', $config['to_email']);
        
        echo json_encode([
            'success' => true,
            'message' => 'Thank you for your message! I\'ll get back to you soon.'
        ]);
    } else {
        throw new Exception('Failed to send email');
    }
    
} catch (Exception $e) {
    http_response_code(500);
    echo json_encode([
        'success' => false,
        'error' => 'An error occurred while sending your message. Please try again later.'
    ]);
    
    // Log error for debugging
    error_log('Contact form error: ' . $e->getMessage());
}
?>
