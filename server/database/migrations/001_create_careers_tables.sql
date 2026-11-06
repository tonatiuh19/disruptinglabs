-- =============================================
-- CAREERS SYSTEM MIGRATION
-- =============================================

USE disruptinglabs;

-- =============================================
-- JOB POSTINGS TABLE
-- Store job listings with markdown content
-- =============================================
CREATE TABLE IF NOT EXISTS job_postings (
    id INT AUTO_INCREMENT PRIMARY KEY,
    slug VARCHAR(255) UNIQUE NOT NULL,
    title VARCHAR(255) NOT NULL,
    location VARCHAR(255),
    employment_type ENUM('full-time', 'part-time', 'contract', 'internship') DEFAULT 'full-time',
    experience_level ENUM('junior', 'mid', 'senior', 'lead', 'executive') DEFAULT 'mid',
    department VARCHAR(100),
    markdown_content MEDIUMTEXT NOT NULL,
    is_active BOOLEAN DEFAULT TRUE,
    featured BOOLEAN DEFAULT FALSE,
    positions_available INT DEFAULT 1,
    salary_range VARCHAR(255),
    remote_policy ENUM('remote', 'hybrid', 'onsite', 'wfa') DEFAULT 'hybrid',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    published_at TIMESTAMP NULL,
    expires_at TIMESTAMP NULL,
    INDEX idx_slug (slug),
    INDEX idx_is_active (is_active),
    INDEX idx_department (department),
    INDEX idx_created_at (created_at)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- =============================================
-- JOB APPLICATIONS TABLE
-- Store job applications with PDF resumes
-- =============================================
CREATE TABLE IF NOT EXISTS job_applications (
    id INT AUTO_INCREMENT PRIMARY KEY,
    job_posting_id INT NOT NULL,
    visitor_id INT,
    first_name VARCHAR(255) NOT NULL,
    last_name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    phone VARCHAR(50),
    linkedin_url VARCHAR(500),
    github_url VARCHAR(500),
    portfolio_url VARCHAR(500),
    resume_filename VARCHAR(255) NOT NULL,
    resume_path VARCHAR(500) NOT NULL,
    resume_size INT, -- in bytes
    cover_letter TEXT,
    years_of_experience INT,
    current_location VARCHAR(255),
    available_from DATE,
    salary_expectation VARCHAR(100),
    status ENUM('new', 'reviewing', 'shortlisted', 'interview', 'rejected', 'accepted') DEFAULT 'new',
    notes TEXT, -- internal notes for hiring team
    ip_address VARCHAR(45),
    user_agent TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    reviewed_at TIMESTAMP NULL,
    FOREIGN KEY (job_posting_id) REFERENCES job_postings(id) ON DELETE CASCADE,
    FOREIGN KEY (visitor_id) REFERENCES visitors(id) ON DELETE SET NULL,
    INDEX idx_job_posting_id (job_posting_id),
    INDEX idx_email (email),
    INDEX idx_status (status),
    INDEX idx_created_at (created_at)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- =============================================
-- APPLICATION NOTES TABLE
-- Store timeline of notes/activities on applications
-- =============================================
CREATE TABLE IF NOT EXISTS application_notes (
    id INT AUTO_INCREMENT PRIMARY KEY,
    application_id INT NOT NULL,
    note TEXT NOT NULL,
    note_type ENUM('general', 'interview', 'feedback', 'status_change') DEFAULT 'general',
    created_by VARCHAR(255), -- admin/reviewer name
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (application_id) REFERENCES job_applications(id) ON DELETE CASCADE,
    INDEX idx_application_id (application_id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- =============================================
-- Insert sample job posting
-- =============================================
INSERT INTO job_postings (
    slug, 
    title, 
    location, 
    employment_type, 
    experience_level, 
    department, 
    markdown_content, 
    remote_policy, 
    is_active, 
    featured,
    published_at
) VALUES (
    'junior-fullstack-engineer-ai',
    'Junior Full Stack Software Engineer (AI-Focused)',
    'Remote - Work From Anywhere',
    'full-time',
    'junior',
    'Engineering',
    '',
    'wfa',
    TRUE,
    TRUE,
    NOW()
);
