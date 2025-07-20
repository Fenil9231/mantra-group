// Serverless function for sending emails using Nodemailer
// This can be deployed to Vercel, Netlify, or any serverless platform

import nodemailer from 'nodemailer';

// CORS headers for cross-origin requests
const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'POST, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type, Authorization',
};

// Email configuration
const createTransporter = () => {
  // In test mode, return a mock transporter
  if (process.env.EMAIL_TEST_MODE === 'true') {
    return {
      verify: async () => true,
      sendMail: async (mailOptions) => {
        console.log('📧 [TEST MODE] Email would be sent:');
        console.log('  To:', mailOptions.to);
        console.log('  Subject:', mailOptions.subject);
        console.log('  From:', mailOptions.from);
        if (mailOptions.replyTo) console.log('  Reply-To:', mailOptions.replyTo);
        return { messageId: 'test-' + Date.now() };
      }
    };
  }
  
  return nodemailer.createTransporter({
    host: process.env.SMTP_HOST || 'smtp.gmail.com',
    port: parseInt(process.env.SMTP_PORT) || 587,
    secure: false, // true for 465, false for other ports
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });
};

// Email templates
const getEmailTemplate = (type, data) => {
  const baseStyle = `
    <style>
      body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
      .container { max-width: 600px; margin: 0 auto; padding: 20px; }
      .header { background-color: #f8f9fa; padding: 20px; text-align: center; }
      .content { padding: 20px; background-color: #ffffff; }
      .footer { background-color: #f8f9fa; padding: 15px; text-align: center; font-size: 12px; }
      .button { display: inline-block; padding: 12px 24px; background-color: #007bff; color: white; text-decoration: none; border-radius: 4px; }
    </style>
  `;

  switch (type) {
    case 'contact':
      return `
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="utf-8">
          <title>New Contact Form Submission</title>
          ${baseStyle}
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h2>New Contact Form Submission</h2>
            </div>
            <div class="content">
              <p><strong>Name:</strong> ${data.name}</p>
              <p><strong>Email:</strong> ${data.email}</p>
              <p><strong>Phone:</strong> ${data.phone || 'Not provided'}</p>
              <p><strong>Subject:</strong> ${data.subject || 'Contact Form Submission'}</p>
              <p><strong>Message:</strong></p>
              <p>${data.message}</p>
            </div>
            <div class="footer">
              <p>This email was sent from your website contact form.</p>
            </div>
          </div>
        </body>
        </html>
      `;

    case 'autoReply':
      return `
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="utf-8">
          <title>Thank you for contacting us</title>
          ${baseStyle}
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h2>Thank you for contacting us!</h2>
            </div>
            <div class="content">
              <p>Dear ${data.name},</p>
              <p>Thank you for reaching out to us. We have received your message and will get back to you within 24 hours.</p>
              <p><strong>Your message:</strong></p>
              <p>${data.message}</p>
              <p>Best regards,<br>${process.env.COMPANY_NAME || 'Our Team'}</p>
            </div>
            <div class="footer">
              <p>This is an automated response. Please do not reply to this email.</p>
            </div>
          </div>
        </body>
        </html>
      `;

    case 'newsletter':
      return `
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="utf-8">
          <title>New Newsletter Subscription</title>
          ${baseStyle}
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h2>New Newsletter Subscription</h2>
            </div>
            <div class="content">
              <p><strong>Email:</strong> ${data.email}</p>
              <p><strong>Name:</strong> ${data.name || 'Not provided'}</p>
              <p><strong>Subscription Date:</strong> ${new Date().toLocaleDateString()}</p>
            </div>
            <div class="footer">
              <p>New subscriber added to your newsletter list.</p>
            </div>
          </div>
        </body>
        </html>
      `;

    case 'welcomeNewsletter':
      return `
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="utf-8">
          <title>Welcome to our Newsletter</title>
          ${baseStyle}
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h2>Welcome to ${process.env.COMPANY_NAME || 'Our'} Newsletter!</h2>
            </div>
            <div class="content">
              <p>Dear ${data.name || 'Subscriber'},</p>
              <p>Thank you for subscribing to our newsletter! You'll receive the latest updates about real estate opportunities, market insights, and exclusive offers.</p>
              <p>Stay tuned for exciting content!</p>
              <p>Best regards,<br>${process.env.COMPANY_NAME || 'Our Team'}</p>
            </div>
            <div class="footer">
              <p>You can unsubscribe at any time by contacting us.</p>
            </div>
          </div>
        </body>
        </html>
      `;

    case 'propertyListing':
      return `
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="utf-8">
          <title>New Property Listing Submission</title>
          ${baseStyle}
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h2>New Property Listing Submission</h2>
            </div>
            <div class="content">
              <p><strong>Submitted by:</strong> ${data.name}</p>
              <p><strong>Email:</strong> ${data.email}</p>
              <p><strong>Phone:</strong> ${data.phone || 'Not provided'}</p>
              <p><strong>Property Title:</strong> ${data.propertyTitle || 'Not provided'}</p>
              <p><strong>Property Type:</strong> ${data.type || 'Not provided'}</p>
              <p><strong>Status:</strong> ${data.status || 'Not provided'}</p>
              <p><strong>Price:</strong> ${data.price || 'Not provided'}</p>
              <p><strong>Area:</strong> ${data.area || 'Not provided'}</p>
              <p><strong>Bedrooms:</strong> ${data.bedrooms || 'Not provided'}</p>
              <p><strong>Bathrooms:</strong> ${data.bathrooms || 'Not provided'}</p>
              <p><strong>Description:</strong></p>
              <p>${data.description || 'Not provided'}</p>
            </div>
            <div class="footer">
              <p>New property listing submitted for review.</p>
            </div>
          </div>
        </body>
        </html>
      `;

    default:
      return `
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="utf-8">
          <title>New Message</title>
          ${baseStyle}
        </head>
        <body>
          <div class="container">
            <div class="content">
              <p>${data.message || 'No message content'}</p>
            </div>
          </div>
        </body>
        </html>
      `;
  }
};

// Main handler function
export default async function handler(req, res) {
  // Handle CORS preflight
  if (req.method === 'OPTIONS') {
    return res.status(200).json({ message: 'OK' });
  }

  // Only allow POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { type, data } = req.body;

    // Validate required environment variables
    if (!process.env.SMTP_USER || !process.env.SMTP_PASS) {
      throw new Error('SMTP credentials not configured');
    }

    // Create transporter
    const transporter = createTransporter();

    // Verify transporter configuration
    await transporter.verify();

    let emailsSent = [];

    switch (type) {
      case 'contact':
        // Send contact form to admin
        const contactEmail = {
          from: `"${process.env.COMPANY_NAME || 'Website'}" <${process.env.SMTP_USER}>`,
          to: process.env.ADMIN_EMAIL || process.env.SMTP_USER,
          subject: `New Contact: ${data.subject || 'Contact Form Submission'}`,
          html: getEmailTemplate('contact', data),
          replyTo: data.email,
        };

        await transporter.sendMail(contactEmail);
        emailsSent.push('contact');

        // Send auto-reply to user
        if (data.email) {
          const autoReplyEmail = {
            from: `"${process.env.COMPANY_NAME || 'Website'}" <${process.env.SMTP_USER}>`,
            to: data.email,
            subject: 'Thank you for contacting us',
            html: getEmailTemplate('autoReply', data),
          };

          await transporter.sendMail(autoReplyEmail);
          emailsSent.push('autoReply');
        }
        break;

      case 'newsletter':
        // Send newsletter subscription notification to admin
        const newsletterEmail = {
          from: `"${process.env.COMPANY_NAME || 'Website'}" <${process.env.SMTP_USER}>`,
          to: process.env.ADMIN_EMAIL || process.env.SMTP_USER,
          subject: 'New Newsletter Subscription',
          html: getEmailTemplate('newsletter', data),
        };

        await transporter.sendMail(newsletterEmail);
        emailsSent.push('newsletter');

        // Send welcome email to subscriber
        if (data.email) {
          const welcomeEmail = {
            from: `"${process.env.COMPANY_NAME || 'Website'}" <${process.env.SMTP_USER}>`,
            to: data.email,
            subject: `Welcome to ${process.env.COMPANY_NAME || 'our'} Newsletter!`,
            html: getEmailTemplate('welcomeNewsletter', data),
          };

          await transporter.sendMail(welcomeEmail);
          emailsSent.push('welcome');
        }
        break;

      case 'propertyListing':
        // Send property listing to admin
        const propertyEmail = {
          from: `"${process.env.COMPANY_NAME || 'Website'}" <${process.env.SMTP_USER}>`,
          to: process.env.ADMIN_EMAIL || process.env.SMTP_USER,
          subject: `New Property Listing: ${data.propertyTitle || 'Property Submission'}`,
          html: getEmailTemplate('propertyListing', data),
          replyTo: data.email,
        };

        await transporter.sendMail(propertyEmail);
        emailsSent.push('propertyListing');

        // Send confirmation to user
        if (data.email) {
          const confirmationEmail = {
            from: `"${process.env.COMPANY_NAME || 'Website'}" <${process.env.SMTP_USER}>`,
            to: data.email,
            subject: 'Property Listing Received',
            html: getEmailTemplate('autoReply', {
              name: data.name,
              message: 'Thank you for submitting your property listing. We will review it and contact you soon.'
            }),
          };

          await transporter.sendMail(confirmationEmail);
          emailsSent.push('confirmation');
        }
        break;

      default:
        throw new Error('Invalid email type');
    }

    // Set CORS headers
    Object.entries(corsHeaders).forEach(([key, value]) => {
      res.setHeader(key, value);
    });

    res.status(200).json({
      success: true,
      message: 'Email sent successfully',
      emailsSent,
    });

  } catch (error) {
    console.error('Email sending error:', error);
    
    // Set CORS headers
    Object.entries(corsHeaders).forEach(([key, value]) => {
      res.setHeader(key, value);
    });

    res.status(500).json({
      success: false,
      error: error.message || 'Failed to send email',
    });
  }
}

// For Netlify Functions
export { handler as netlifyHandler };

// For Vercel
export { handler };