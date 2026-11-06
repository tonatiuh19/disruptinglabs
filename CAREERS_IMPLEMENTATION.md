# Careers System Implementation Guide

## Overview

This guide documents the complete careers system implementation for DisruptingLabs, including job postings with markdown support, application submission with PDF resume uploads, and a full-featured careers page.

## Database Setup

### 1. Run the Migration

Execute the SQL migration to create the necessary database tables:

```bash
mysql -u your_username -p disruptinglabs < server/database/migrations/001_create_careers_tables.sql
```

This creates three tables:

- `job_postings` - Stores job listings with markdown content
- `job_applications` - Stores applications with resume file references
- `application_notes` - Tracks notes and activities on applications

### 2. Update Job Posting with Markdown

After running the migration, update the sample job posting with the markdown content:

```sql
UPDATE job_postings
SET markdown_content = (
  -- Copy the content from public/careers/junior-fullstack-engineer-ai.md
)
WHERE slug = 'junior-fullstack-engineer-ai';
```

Or use the following command to load the markdown file directly:

```sql
UPDATE job_postings
SET markdown_content = LOAD_FILE('/path/to/public/careers/junior-fullstack-engineer-ai.md')
WHERE slug = 'junior-fullstack-engineer-ai';
```

## API Configuration

The PHP API endpoints are located in `/server/routes/careers.php`. Make sure your server is configured to route API requests correctly.

### API Endpoints

#### GET `/api/careers`

Fetch all active job postings or a specific posting by slug.

**Query Parameters:**

- `slug` (optional) - Fetch a specific job posting
- `featured` (optional) - Filter by featured jobs only

**Response:**

```json
{
  "success": true,
  "jobs": [
    {
      "id": 1,
      "slug": "junior-fullstack-engineer-ai",
      "title": "Junior Full Stack Software Engineer (AI-Focused)",
      "location": "Remote - Work From Anywhere",
      "employment_type": "full-time",
      "experience_level": "junior",
      "department": "Engineering",
      "markdown_content": "...",
      "remote_policy": "wfa",
      "featured": true,
      "...": "..."
    }
  ]
}
```

#### POST `/api/careers`

Submit a job application with resume upload.

**Request (multipart/form-data):**

- `job_posting_id` (required) - ID of the job posting
- `first_name` (required) - Applicant's first name
- `last_name` (required) - Applicant's last name
- `email` (required) - Applicant's email address
- `resume` (required) - PDF file (max 5MB)
- `phone` (optional) - Phone number
- `linkedin_url` (optional) - LinkedIn profile URL
- `github_url` (optional) - GitHub profile URL
- `portfolio_url` (optional) - Portfolio website URL
- `cover_letter` (optional) - Cover letter text
- `years_of_experience` (optional) - Years of experience
- `current_location` (optional) - Current location
- `available_from` (optional) - Date available to start
- `salary_expectation` (optional) - Salary expectations
- `visitor_id` (optional) - Visitor tracking ID

**Response:**

```json
{
  "success": true,
  "message": "Application submitted successfully",
  "application_id": 123
}
```

## File Storage

Resume files are stored in `/uploads/resumes/` with unique filenames. Make sure this directory exists and has proper write permissions:

```bash
mkdir -p uploads/resumes
chmod 755 uploads/resumes
```

## Frontend Routes

The careers page is accessible at `/careers` and includes:

- Job listings grid with filtering
- Job detail modal with full markdown rendering
- Application form modal with PDF upload
- Responsive design for all screen sizes

## Adding New Job Postings

### Option 1: Via Database

```sql
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
    'your-job-slug',
    'Job Title',
    'Location',
    'full-time',
    'mid',
    'Department',
    'Your markdown content here...',
    'remote',
    TRUE,
    FALSE,
    NOW()
);
```

### Option 2: Create Markdown File

1. Create a new markdown file in `/public/careers/your-job-slug.md`
2. Follow the template from `junior-fullstack-engineer-ai.md`
3. Insert the job posting into the database
4. Update the `markdown_content` field with the file contents

## Markdown Template Structure

The markdown files should follow this structure:

```markdown
# Job Title

## About the Role

[Description]

### Location & Work Model

[Details]

### Employment Type

[Type]

---

## What You'll Do

- [Responsibility 1]
- [Responsibility 2]

---

## What We're Looking For

### Required Skills

- ✅ [Skill 1]
- ✅ [Skill 2]

### Nice to Have

- 🚀 [Skill 1]
- 🚀 [Skill 2]

---

## Our Tech Stack

[List your tech stack]

---

## What We Offer

[Benefits and perks]

---

## Our Culture

[Company culture description]

---

## Application Process

[Application steps]

---

## Ready to Apply?

[Call to action]
```

## Development & Testing

### Start the Development Server

```bash
npm run dev
```

### Test API Endpoints

Test getting job postings:

```bash
curl http://localhost:8080/api/careers
```

Test getting a specific job:

```bash
curl http://localhost:8080/api/careers?slug=junior-fullstack-engineer-ai
```

Test application submission:

```bash
curl -X POST http://localhost:8080/api/careers \
  -F "job_posting_id=1" \
  -F "first_name=John" \
  -F "last_name=Doe" \
  -F "email=john@example.com" \
  -F "resume=@/path/to/resume.pdf"
```

## Security Considerations

1. **File Upload Validation**

   - Only PDF files are accepted
   - Maximum file size: 5MB
   - Files are stored with unique names to prevent overwrites

2. **Input Sanitization**

   - All user inputs are validated and sanitized
   - Email validation is performed
   - SQL injection protection via prepared statements

3. **Access Control**
   - Resume files should not be publicly accessible
   - Consider adding authentication for viewing applications
   - Implement rate limiting for application submissions

## Future Enhancements

- [ ] Admin dashboard for managing applications
- [ ] Email notifications for new applications
- [ ] Application status tracking for applicants
- [ ] Interview scheduling system
- [ ] Integration with ATS (Applicant Tracking System)
- [ ] Advanced filtering and search for job postings
- [ ] Job posting expiration and automatic archiving
- [ ] Application analytics and reporting

## Troubleshooting

### Common Issues

**Issue: Resume upload fails**

- Check that `/uploads/resumes/` directory exists and has write permissions
- Verify that `upload_max_filesize` and `post_max_size` in php.ini are set appropriately

**Issue: Markdown not rendering**

- Ensure `react-markdown` package is installed
- Check that markdown content is properly stored in the database

**Issue: API returns 404**

- Verify API routing configuration in your server
- Check that the PHP files are in the correct directory

**Issue: Database connection fails**

- Check database credentials in `server/db_cnn/cnn.php`
- Ensure MySQL service is running
- Verify database exists and tables are created

## Support

For questions or issues, contact the development team or refer to the main project documentation.

---

**Last Updated:** April 22, 2026
**Version:** 1.0.0
