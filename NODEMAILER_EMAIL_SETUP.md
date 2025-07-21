# Nodemailer Email Service Setup Guide

This guide explains how to set up the Nodemailer-based serverless email service for your React application.

## Overview

The email service has been migrated from EmailJS to a Nodemailer-based serverless API. This provides:
- Better control over email templates
- Server-side email processing
- Enhanced security
- More reliable email delivery
- Support for auto-replies and welcome emails

## Files Structure

```
├── src/services/emailServiceServerless.js  # Frontend email service
├── api/send-email.js                       # Serverless API endpoint
├── .env.local                              # Environment variables
└── NODEMAILER_EMAIL_SETUP.md              # This setup guide
```

## Setup Instructions

### 1. Deploy the Serverless Function

The `api/send-email.js` file contains the serverless function that handles email sending. Deploy this to your preferred platform:

#### For Vercel:
1. Place `api/send-email.js` in the `api/` directory
2. Deploy your project to Vercel
3. The endpoint will be available at `https://your-domain.vercel.app/api/send-email`

#### For Netlify:
1. Place `api/send-email.js` in the `netlify/functions/` directory
2. Rename it to `send-email.js`
3. Deploy your project to Netlify
4. The endpoint will be available at `https://your-domain.netlify.app/.netlify/functions/send-email`

#### For Other Platforms:
Adapt the serverless function according to your platform's requirements.

### 2. Configure Environment Variables

#### Frontend Environment Variables (.env.local):
```env
# Email API Configuration
VITE_EMAIL_API_ENDPOINT=/api/send-email  # Update this to your deployed API URL

# Company Information
VITE_ADMIN_EMAIL=your-admin@example.com
VITE_FROM_NAME=Your Company Name
VITE_COMPANY_NAME=Your Company Name
VITE_CONTACT_EMAIL=contact@example.com
VITE_CONTACT_PHONE=+1-234-567-8900
VITE_BUSINESS_ADDRESS=Your Business Address
```

#### Serverless Platform Environment Variables:
Configure these on your serverless platform (Vercel, Netlify, etc.):

```env
# SMTP Configuration
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your-email@gmail.com
SMTP_PASS=your-app-password
FROM_EMAIL=your-email@gmail.com
FROM_NAME=Your Company Name
ADMIN_EMAIL=admin@example.com
```

### 3. Gmail App Password Setup

If using Gmail SMTP:
1. Enable 2-Factor Authentication on your Gmail account
2. Generate an App Password:
   - Go to Google Account settings
   - Security → 2-Step Verification → App passwords
   - Generate a password for "Mail"
   - Use this password as `SMTP_PASS`

### 4. Update API Endpoint

Update the `VITE_EMAIL_API_ENDPOINT` in your `.env.local` file to point to your deployed API:

```env
# For Vercel
VITE_EMAIL_API_ENDPOINT=https://your-domain.vercel.app/api/send-email

# For Netlify
VITE_EMAIL_API_ENDPOINT=https://your-domain.netlify.app/.netlify/functions/send-email

# For local development
VITE_EMAIL_API_ENDPOINT=http://localhost:3000/api/send-email
```

## Email Types Supported

The service supports the following email types:

1. **Contact Form** (`contact`)
   - Sends inquiry to admin
   - Sends auto-reply to user

2. **Newsletter Subscription** (`newsletter`)
   - Notifies admin of new subscription
   - Sends welcome email to subscriber

3. **Property Listing** (`propertyListing`)
   - Sends property details to admin
   - Sends confirmation to user

4. **Auto-Reply** (`autoReply`)
   - Automatic response to users

5. **Welcome Email** (`welcome`)
   - Welcome message for new subscribers

## API Usage

The frontend service automatically handles API calls. Example usage:

```javascript
import ServerlessEmailService from './services/emailServiceServerless';

// Send contact form
const result = await ServerlessEmailService.sendContactForm({
  name: 'John Doe',
  email: 'john@example.com',
  phone: '+1-234-567-8900',
  subject: 'Inquiry',
  message: 'Hello, I have a question...'
});

// Subscribe to newsletter
const result = await ServerlessEmailService.subscribeToNewsletter(
  'user@example.com',
  'John Doe'
);
```

## Testing

Test the email service:

```javascript
// Test configuration
const status = await ServerlessEmailService.testConfiguration();
console.log(status);

// Check service status
const serviceStatus = ServerlessEmailService.getServiceStatus();
console.log(serviceStatus);
```

## Troubleshooting

### Common Issues:

1. **CORS Errors**
   - Ensure your API endpoint includes proper CORS headers
   - Check that the API endpoint URL is correct

2. **SMTP Authentication Failed**
   - Verify Gmail App Password is correct
   - Ensure 2FA is enabled on Gmail account
   - Check SMTP credentials in environment variables

3. **API Not Found (404)**
   - Verify the serverless function is deployed correctly
   - Check the API endpoint URL in environment variables

4. **Email Not Sending**
   - Check serverless function logs
   - Verify SMTP configuration
   - Test with a simple email first

### Debug Mode:

Enable debug logging in development:

```javascript
// The service automatically logs in development mode
// Check browser console for configuration status
```

## Migration from EmailJS

If migrating from EmailJS:

1. ✅ Remove `@emailjs/browser` dependency from package.json
2. ✅ Update `emailServiceServerless.js` with new Nodemailer service
3. ✅ Deploy the serverless API function
4. ✅ Configure environment variables
5. ✅ Update API endpoint in `.env.local`
6. ✅ Test all email functionality

## Security Notes

- Never expose SMTP credentials in frontend code
- Use environment variables for all sensitive configuration
- Implement rate limiting on your API endpoint
- Validate and sanitize all input data
- Use HTTPS for all API communications

## Support

For issues or questions:
1. Check the troubleshooting section above
2. Review serverless function logs
3. Test with simple email configurations first
4. Ensure all environment variables are properly set

---

**Note**: This setup provides a more robust and secure email solution compared to EmailJS, with better control over email templates and delivery.