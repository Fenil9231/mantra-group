# Email Production Setup Guide

## Current Status
✅ Email server is running on `http://localhost:3002`  
✅ React app is running on `http://localhost:3000`  
✅ Contact form is available at `http://localhost:3000/contact`  
✅ Nodemailer is installed and configured  

## Quick Test (Current Setup)
The system is currently in **TEST MODE** which means:
- Emails are sent to Ethereal Email (test service)
- You'll get preview URLs in the console to view sent emails
- No real emails are delivered to actual mailboxes

## Production Email Setup

### Step 1: Choose Email Provider

#### Option A: Gmail (Recommended for small businesses)
1. Enable 2-factor authentication on your Gmail account
2. Generate an App Password:
   - Go to Google Account settings
   - Security → 2-Step Verification → App passwords
   - Generate password for "Mail"
3. Update `.env` file:
```env
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_SECURE=false
SMTP_USER=your-email@gmail.com
SMTP_PASS=your-16-character-app-password
EMAIL_TEST_MODE=false
```

#### Option B: Professional Email Service
```env
SMTP_HOST=mail.your-domain.com
SMTP_PORT=587
SMTP_SECURE=false
SMTP_USER=contact@your-domain.com
SMTP_PASS=your-email-password
EMAIL_TEST_MODE=false
```

#### Option C: SendGrid (Recommended for high volume)
```env
SMTP_HOST=smtp.sendgrid.net
SMTP_PORT=587
SMTP_SECURE=false
SMTP_USER=apikey
SMTP_PASS=your-sendgrid-api-key
EMAIL_TEST_MODE=false
```

### Step 2: Update Environment Variables

Edit your `.env` file with these settings:

```env
# SMTP Configuration (PRODUCTION)
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_SECURE=false
SMTP_USER=contact@mantragrp.com
SMTP_PASS=your-actual-app-password-here

# Email Configuration
ADMIN_EMAIL=contact@mantragrp.com
COMPANY_NAME=Mantra Group
FROM_NAME=Mantra Group Contact

# IMPORTANT: Set to false for production
EMAIL_TEST_MODE=false
```

### Step 3: Restart Email Server
After updating `.env`, restart the email server:
```bash
# Stop current server (Ctrl+C in terminal)
# Then restart:
node email-server.cjs
```

### Step 4: Test Production Setup
1. Fill out the contact form at `http://localhost:3000/contact`
2. Check the email server console for success messages
3. Check your admin email inbox for the notification
4. Check the sender's email for the auto-reply

## Email Features

### Admin Notification Email
- Sent to: `ADMIN_EMAIL` (contact@mantragrp.com)
- Contains: All form data in formatted HTML
- Subject: "New Contact Form Submission - [Subject]"

### Auto-Reply Email
- Sent to: Form submitter's email
- Contains: Thank you message with copy of their message
- Subject: "Thank you for contacting Mantra Group"

## Troubleshooting

### Common Issues

1. **Gmail "Less secure app access" error**
   - Solution: Use App Passwords instead of regular password
   - Enable 2FA first, then generate App Password

2. **SMTP Authentication failed**
   - Check username/password are correct
   - Verify SMTP settings for your provider
   - Check if 2FA is required

3. **Emails going to spam**
   - Use a professional email address as sender
   - Set up SPF/DKIM records for your domain
   - Use a reputable SMTP service

4. **Connection timeout**
   - Check firewall settings
   - Try different SMTP ports (25, 465, 587)
   - Verify SMTP_SECURE setting

### Testing Commands

Test email server health:
```bash
curl http://localhost:3002/health
```

Test email sending (replace with actual data):
```bash
curl -X POST http://localhost:3002/api/send-email \
  -H "Content-Type: application/json" \
  -d '{
    "type": "contact",
    "data": {
      "name": "Test User",
      "email": "test@example.com",
      "subject": "Test Message",
      "message": "This is a test message"
    }
  }'
```

## Security Notes

- Never commit real passwords to version control
- Use environment variables for all sensitive data
- Consider using a dedicated email service for production
- Regularly rotate email passwords
- Monitor email sending logs for suspicious activity

## Next Steps

1. **For Testing**: Keep `EMAIL_TEST_MODE=true` and use Ethereal Email
2. **For Production**: Set `EMAIL_TEST_MODE=false` and configure real SMTP
3. **For Deployment**: Use environment variables on your hosting platform

---

**Current Configuration Status:**
- ✅ Email server running with full functionality
- ✅ Contact form connected and working
- ⚠️  Currently in TEST MODE (change EMAIL_TEST_MODE to false for production)
- ⚠️  SMTP credentials need to be updated for real email delivery