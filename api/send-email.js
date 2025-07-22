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
  
  return nodemailer.createTransport({
    host: process.env.SMTP_HOST || 'smtp.gmail.com',
    port: parseInt(process.env.SMTP_PORT) || 587,
    secure: false, // true for 465, false for other ports
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });
};

// Enhanced Email templates with modern UI/UX design
const getEmailTemplate = (type, data) => {
  const baseStyle = `
    <style>
      * { margin: 0; padding: 0; box-sizing: border-box; }
      body { 
        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; 
        line-height: 1.6; 
        color: #333333; 
        background-color: #f8fafc;
      }
      .email-wrapper { 
        max-width: 600px; 
        margin: 0 auto; 
        background-color: #ffffff;
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        border-radius: 8px;
        overflow: hidden;
      }
      .header { 
        background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
        padding: 30px 20px; 
        text-align: center; 
        color: white;
      }
      .header h1 { 
        font-size: 24px; 
        font-weight: 600; 
        margin-bottom: 8px;
      }
      .header p { 
        font-size: 14px; 
        opacity: 0.9;
      }
      .content { 
        padding: 30px 20px; 
        background-color: #ffffff; 
      }
      .content h2 { 
        color: #2d3748; 
        font-size: 20px; 
        margin-bottom: 16px;
      }
      .content p { 
        margin-bottom: 12px; 
        color: #4a5568;
      }
      .info-box { 
        background-color: #f7fafc; 
        border-left: 4px solid #667eea; 
        padding: 16px; 
        margin: 20px 0; 
        border-radius: 4px;
      }
      .info-row { 
        display: flex; 
        margin-bottom: 8px; 
        align-items: center;
      }
      .info-label { 
        font-weight: 600; 
        color: #2d3748; 
        min-width: 100px; 
        margin-right: 12px;
      }
      .info-value { 
        color: #4a5568; 
        flex: 1;
      }
      .message-box { 
        background-color: #edf2f7; 
        padding: 20px; 
        border-radius: 6px; 
        margin: 20px 0;
        border: 1px solid #e2e8f0;
      }
      .button { 
        display: inline-block; 
        padding: 12px 24px; 
        background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
        color: white; 
        text-decoration: none; 
        border-radius: 6px; 
        font-weight: 600;
        text-align: center;
        transition: transform 0.2s;
      }
      .button:hover { 
        transform: translateY(-1px);
      }
      .footer { 
        background-color: #2d3748; 
        padding: 20px; 
        text-align: center; 
        color: #a0aec0;
      }
      .footer p { 
        font-size: 12px; 
        margin-bottom: 8px;
      }
      .social-links { 
        margin-top: 16px;
      }
      .social-links a { 
        color: #a0aec0; 
        text-decoration: none; 
        margin: 0 8px;
      }
      .divider { 
        height: 1px; 
        background-color: #e2e8f0; 
        margin: 20px 0;
      }
      .success-icon { 
        color: #48bb78; 
        font-size: 48px; 
        text-align: center; 
        margin-bottom: 16px;
      }
      .timestamp { 
        color: #718096; 
        font-size: 12px; 
        font-style: italic;
      }
      @media only screen and (max-width: 600px) {
        .email-wrapper { margin: 10px; }
        .header, .content, .footer { padding: 20px 15px; }
        .info-row { flex-direction: column; align-items: flex-start; }
        .info-label { min-width: auto; margin-bottom: 4px; }
      }
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
          <div class="email-wrapper">
            <div class="header">
              <h1>📧 New Contact Form Submission</h1>
              <p>You have received a new message from your website</p>
            </div>
            <div class="content">
              <h2>Contact Information</h2>
              <div class="info-box">
                <div class="info-row">
                  <span class="info-label">👤 Name:</span>
                  <span class="info-value">${data.name}</span>
                </div>
                <div class="info-row">
                  <span class="info-label">📧 Email:</span>
                  <span class="info-value">${data.email}</span>
                </div>
                <div class="info-row">
                  <span class="info-label">📞 Phone:</span>
                  <span class="info-value">${data.phone || 'Not provided'}</span>
                </div>
                <div class="info-row">
                  <span class="info-label">📋 Subject:</span>
                  <span class="info-value">${data.subject || 'Contact Form Submission'}</span>
                </div>
                <div class="info-row">
                  <span class="info-label">⏰ Submitted:</span>
                  <span class="info-value timestamp">${new Date().toLocaleString()}</span>
                </div>
              </div>
              
              <h2>Message</h2>
              <div class="message-box">
                <p>${data.message.replace(/\n/g, '<br>')}</p>
              </div>
              
              <div class="divider"></div>
              <p style="text-align: center; margin-top: 20px;">
                <a href="mailto:${data.email}" class="button">Reply to ${data.name}</a>
              </p>
            </div>
            <div class="footer">
              <p>This email was automatically generated from your website contact form.</p>
              <p>© ${new Date().getFullYear()} Mantra Group. All rights reserved.</p>
              <div class="social-links">
                <a href="#">Website</a> |
                <a href="#">Contact</a> |
                <a href="#">Privacy Policy</a>
              </div>
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
          <div class="email-wrapper">
            <div class="header">
              <h1>✅ Thank You for Contacting Us!</h1>
              <p>We've received your message and will respond soon</p>
            </div>
            <div class="content">
              <div class="success-icon">✅</div>
              <h2>Hello ${data.name}!</h2>
              <p>Thank you for reaching out to <strong>Mantra Group</strong>. We have successfully received your message and truly appreciate you taking the time to contact us.</p>
              
              <div class="info-box">
                <h3 style="margin-bottom: 12px; color: #2d3748;">📋 Your Submission Details:</h3>
                <div class="info-row">
                  <span class="info-label">📧 Email:</span>
                  <span class="info-value">${data.email}</span>
                </div>
                <div class="info-row">
                  <span class="info-label">📋 Subject:</span>
                  <span class="info-value">${data.subject || 'Contact Form Submission'}</span>
                </div>
                <div class="info-row">
                  <span class="info-label">⏰ Submitted:</span>
                  <span class="info-value timestamp">${new Date().toLocaleString()}</span>
                </div>
              </div>
              
              <h3 style="color: #2d3748; margin-bottom: 12px;">Your Message:</h3>
              <div class="message-box">
                <p>${data.message.replace(/\n/g, '<br>')}</p>
              </div>
              
              <div class="divider"></div>
              
              <h3 style="color: #2d3748; margin-bottom: 12px;">⏱️ What Happens Next?</h3>
              <p>• Our team will review your message within <strong>24 hours</strong></p>
              <p>• You'll receive a personalized response from one of our real estate experts</p>
              <p>• For urgent matters, feel free to call us directly</p>
              
              <div style="text-align: center; margin: 30px 0;">
                <a href="tel:+1234567890" class="button">📞 Call Us Now</a>
              </div>
              
              <p style="font-size: 14px; color: #718096; text-align: center;">
                Need immediate assistance? Our office hours are Monday-Friday, 9 AM - 6 PM EST
              </p>
            </div>
            <div class="footer">
              <p>Thank you for choosing Mantra Group!</p>
                <p>© ${new Date().getFullYear()} Mantra Group. All rights reserved.</p>
              <div class="social-links">
                <a href="#">Visit Our Website</a> |
                <a href="#">View Properties</a> |
                <a href="#">Contact Us</a>
              </div>
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