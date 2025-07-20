# Migration Guide: Server-based to Serverless Email

This guide will help you migrate from the Node.js/Nodemailer server-based email solution to the new serverless EmailJS implementation.

## 🎯 What Changed

### Before (Server-based)
- Required Node.js backend server
- Used Nodemailer with Gmail SMTP
- Required server hosting and maintenance
- Environment variables for email credentials

### After (Serverless)
- No backend server required
- Uses EmailJS service
- Frontend-only solution
- Simplified deployment

## 🚀 Migration Steps

### 1. EmailJS Account Setup

1. **Create EmailJS Account**
   - Go to [EmailJS.com](https://www.emailjs.com/)
   - Sign up for a free account
   - Verify your email address

2. **Add Email Service**
   - Go to Email Services in your dashboard
   - Click "Add New Service"
   - Choose Gmail (or your preferred provider)
   - Follow the setup instructions
   - Note your **Service ID**

3. **Create Email Templates**
   
   **Contact Form Template:**
   ```html
   Subject: New Contact Form Submission from {{from_name}}
   
   Hello,
   
   You have received a new contact form submission:
   
   Name: {{from_name}}
   Email: {{reply_to}}
   Phone: {{phone}}
   Subject: {{subject}}
   
   Message:
   {{message}}
   
   Best regards,
   Your Website
   ```
   
   **Newsletter Template:**
   ```html
   Subject: New Newsletter Subscription
   
   Hello,
   
   A new user has subscribed to your newsletter:
   
   Email: {{subscriber_email}}
   Date: {{subscription_date}}
   Time: {{subscription_time}}
   
   Best regards,
   Your Website
   ```

4. **Get Your Credentials**
   - Public Key: Found in Account > API Keys
   - Service ID: From your email service
   - Template IDs: From each template you created

### 2. Environment Configuration

1. **Copy the example file:**
   ```bash
   cp .env.emailjs.example .env.local
   ```

2. **Update `.env.local` with your credentials:**
   ```env
   VITE_EMAILJS_PUBLIC_KEY=your_actual_public_key
   VITE_EMAILJS_SERVICE_ID=your_actual_service_id
   VITE_EMAILJS_CONTACT_TEMPLATE_ID=your_contact_template_id
   VITE_EMAILJS_NEWSLETTER_TEMPLATE_ID=your_newsletter_template_id
   VITE_ADMIN_EMAIL=admin@yourcompany.com
   ```

### 3. Remove Server Dependencies (Optional)

If you no longer need the server-based solution:

1. **Remove server dependencies:**
   ```bash
   npm uninstall express nodemailer cors dotenv concurrently
   ```

2. **Remove server files:**
   - `server.js`
   - `.env.example`
   - `EMAIL_SETUP.md`

3. **Update `.gitignore`:**
   ```gitignore
   # Remove if no longer needed
   .env
   
   # Keep for EmailJS
   .env.local
   ```

### 4. Testing

1. **Start the development server:**
   ```bash
   npm run dev
   ```

2. **Test the forms:**
   - Navigate to the contact section
   - Fill out and submit the contact form
   - Test the newsletter subscription
   - Check your email for notifications

3. **Check browser console:**
   - Look for EmailJS configuration status
   - Verify no errors are logged

## 📋 Deployment Changes

### Before (Server-based)
```bash
# Build frontend
npm run build

# Deploy both frontend and backend
# Required server hosting (Heroku, DigitalOcean, etc.)
```

### After (Serverless)
```bash
# Build frontend only
npm run build

# Deploy to static hosting
# (Netlify, Vercel, GitHub Pages, etc.)
```

## 🔧 Troubleshooting

### Common Issues

1. **"EmailJS not configured" warning**
   - Check your `.env.local` file
   - Ensure all environment variables are set
   - Restart the development server

2. **Emails not sending**
   - Verify EmailJS service is active
   - Check template IDs are correct
   - Ensure you're within EmailJS free tier limits

3. **CORS errors**
   - Add your domain to EmailJS allowed origins
   - Check browser network tab for specific errors

### EmailJS Limits

**Free Tier:**
- 200 emails/month
- 50 emails/day
- Basic templates

**Paid Plans:**
- Higher limits
- Advanced features
- Priority support

## 🎉 Benefits of Serverless

✅ **Simplified Deployment**
- No server maintenance
- Static hosting compatible
- Faster deployments

✅ **Cost Effective**
- No server hosting costs
- Pay-per-use pricing
- Free tier available

✅ **Better Performance**
- No server latency
- CDN-delivered assets
- Global availability

✅ **Easier Scaling**
- Automatic scaling
- No infrastructure management
- Built-in reliability

## 📚 Additional Resources

- [EmailJS Documentation](https://www.emailjs.com/docs/)
- [EmailJS Templates Guide](https://www.emailjs.com/docs/user-guide/creating-templates/)
- [Vite Environment Variables](https://vitejs.dev/guide/env-and-mode.html)

## 🆘 Need Help?

If you encounter issues during migration:

1. Check the browser console for errors
2. Verify your EmailJS dashboard settings
3. Test with a simple template first
4. Refer to the `SERVERLESS_EMAIL_SETUP.md` guide

---

**Note:** Keep your old server files as backup until you've fully tested the new serverless implementation.