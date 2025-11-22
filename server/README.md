# Disrupting Labs Backend Setup

## Database Setup

1. **Create MySQL Database:**

   ```bash
   mysql -u root -p < server/database/schema.sql
   ```

2. **Configure Database Connection:**
   Update `server/db_cnn/cnn.php` with your database credentials:
   ```php
   define('DB_HOST', 'localhost');
   define('DB_USER', 'your_username');
   define('DB_PASS', 'your_password');
   define('DB_NAME', 'disruptinglabs');
   ```

## Email Configuration

Update the email settings in `server/routes/contact.php`:

```php
$mail->Host = 'smtp.gmail.com'; // Your SMTP host
$mail->Username = 'your-email@gmail.com'; // Your email
$mail->Password = 'your-app-password'; // Your app password
$mail->Port = 587;
```

### Gmail Setup:

1. Enable 2-factor authentication in your Google account
2. Generate an App Password at: https://myaccount.google.com/apppasswords
3. Use the generated password in the configuration

## API Endpoints

### Contact Form

- **Endpoint:** `POST /server/routes/contact.php`
- **Body:**
  ```json
  {
    "name": "John Doe",
    "email": "john@example.com",
    "company": "Acme Inc",
    "message": "I want to build something amazing",
    "visitor_id": 123,
    "source": "modal_form"
  }
  ```

### Visitor Tracking

- **Track Visitor:** `POST /server/routes/visitors.php`
- **Track Page View:** `GET /server/routes/visitors.php?action=pageview&visitor_id=123&page_url=/about&page_title=About`
- **Get Analytics:** `GET /server/routes/visitors.php?action=analytics&days=7`

## Environment Variables

Create a `.env` file in the root:

```
VITE_API_URL=http://localhost:8080/server/routes
```

## Testing

1. Start your PHP server (if using built-in PHP server):

   ```bash
   cd server
   php -S localhost:8080
   ```

2. Or configure your Apache/Nginx to serve the `server` directory

3. Test the contact form by filling it out on your website

## Database Tables

- `visitors` - Track website visitors
- `page_views` - Track individual page views
- `contacts` - Store contact form submissions
- `email_logs` - Log sent emails
- `analytics_daily` - Daily aggregated analytics

## Features

✅ Visitor tracking with device/browser detection
✅ Page view analytics
✅ Contact form with beautiful email confirmations
✅ Session management
✅ Real-time analytics
✅ Email delivery tracking

## Security Notes

- Update CORS settings in production
- Use environment variables for sensitive data
- Enable HTTPS in production
- Add rate limiting to prevent spam
- Sanitize all user inputs (already implemented)
