// Simple email server that stays running
import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import nodemailer from 'nodemailer';

// Load environment variables
dotenv.config({ path: '.env' });
dotenv.config({ path: '.env.local' });
dotenv.config({ path: '.env.test' });

const app = express();
const PORT = 3001;

// Middleware
app.use(cors());
app.use(express.json());

// Create email transporter
const createTransporter = () => {
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
    secure: false,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });
};

// Simple email template
const getSimpleEmailTemplate = (type, data) => {
  const baseStyle = `
    <style>
      body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
      .container { max-width: 600px; margin: 0 auto; padding: 20px; }
      .header { background: #667eea; color: white; padding: 20px; text-align: center; }
      .content { padding: 20px; background: #f9f9f9; }
      .footer { padding: 10px; text-align: center; color: #666; }
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
              <h2>📧 New Contact Form Submission</h2>
            </div>
            <div class="content">
              <p><strong>Name:</strong> ${data.name}</p>
              <p><strong>Email:</strong> ${data.email}</p>
              <p><strong>Phone:</strong> ${data.phone || 'Not provided'}</p>
              <p><strong>Subject:</strong> ${data.subject || 'Contact Form'}</p>
              <p><strong>Message:</strong></p>
              <p>${data.message}</p>
              
              <hr style="margin: 20px 0; border: 1px solid #ddd;">
              <h3 style="color: #667eea;">📋 Consent Information</h3>
              <p><strong>SMS Notifications Consent:</strong> ${data.smsConsent ? '✅ Yes - Customer consents to receive SMS notifications & alerts' : '❌ No - Customer did not consent to SMS notifications'}</p>
              <p><strong>Marketing Communications Consent:</strong> ${data.marketingConsent ? '✅ Yes - Customer consents to receive marketing communications' : '❌ No - Customer did not consent to marketing communications'}</p>
              
              ${data.smsConsent ? '<p style="background: #e8f5e8; padding: 10px; border-radius: 5px; font-size: 12px;"><strong>SMS Consent Details:</strong> Customer consents to receive SMS notifications & alerts from Mantra Group. Message frequency varies. Message & data rates may apply. Customer can text HELP for assistance or reply STOP to unsubscribe at any time.</p>' : ''}
              ${data.marketingConsent ? '<p style="background: #e8f5e8; padding: 10px; border-radius: 5px; font-size: 12px;"><strong>Marketing Consent:</strong> Customer consents to receive occasional marketing communications from Mantra Group.</p>' : ''}
            </div>
            <div class="footer">
              <p>Sent from ${process.env.VITE_COMPANY_NAME || 'Website'}</p>
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
              <p>Thank you for reaching out to us. We have received your message and will get back to you as soon as possible.</p>
              <p>Your message: "${data.message}"</p>
              <p>Best regards,<br>${process.env.VITE_COMPANY_NAME || 'Our Team'}</p>
            </div>
            <div class="footer">
              <p>This is an automated response.</p>
            </div>
          </div>
        </body>
        </html>
      `;
    
    default:
      return `<p>${data.message || 'No message content'}</p>`;
  }
};

// Email API endpoint
app.post('/api/send-email', async (req, res) => {
  try {
    console.log('📧 Received email request:', req.body);
    
    const { type, data } = req.body;
    
    // Validate required environment variables (skip in test mode)
    if (process.env.EMAIL_TEST_MODE !== 'true' && (!process.env.SMTP_USER || !process.env.SMTP_PASS)) {
      throw new Error('SMTP credentials not configured');
    }
    
    // Create transporter
    const transporter = createTransporter();
    
    // Verify transporter
    await transporter.verify();
    console.log('✅ SMTP connection verified');
    
    let emailsSent = [];
    
    if (type === 'contact') {
      // Send to admin
      const adminEmail = {
        from: `"${process.env.VITE_COMPANY_NAME || 'Website'}" <${process.env.SMTP_USER}>`,
        to: process.env.VITE_ADMIN_EMAIL || process.env.SMTP_USER,
        subject: `New Contact: ${data.subject || 'Contact Form Submission'}`,
        html: getSimpleEmailTemplate('contact', data),
        replyTo: data.email,
      };
      
      console.log('📤 Sending admin email to:', adminEmail.to);
      await transporter.sendMail(adminEmail);
      emailsSent.push('admin');
      console.log('✅ Admin email sent');
      
      // Send auto-reply to user
      if (data.email) {
        const userEmail = {
          from: `"${process.env.VITE_COMPANY_NAME || 'Website'}" <${process.env.SMTP_USER}>`,
          to: data.email,
          subject: 'Thank you for contacting us',
          html: getSimpleEmailTemplate('autoReply', data),
        };
        
        console.log('📤 Sending auto-reply to:', userEmail.to);
        await transporter.sendMail(userEmail);
        emailsSent.push('autoReply');
        console.log('✅ Auto-reply sent');
      }
    }
    
    res.json({
      success: true,
      message: 'Email sent successfully',
      emailsSent,
    });
    
  } catch (error) {
    console.error('❌ Email error:', error);
    res.status(500).json({
      success: false,
      error: error.message || 'Failed to send email',
    });
  }
});

// Health check
app.get('/health', (req, res) => {
  res.json({ status: 'OK', message: 'Simple email server is running' });
});

// Keep the server running
app.listen(PORT, () => {
  console.log(`🚀 Simple email server running on http://localhost:${PORT}`);
  console.log(`📧 Email API available at http://localhost:${PORT}/api/send-email`);
  console.log(`🔧 Test mode: ${process.env.EMAIL_TEST_MODE === 'true' ? 'ON' : 'OFF'}`);
  console.log(`🔍 EMAIL_TEST_MODE value: '${process.env.EMAIL_TEST_MODE}'`);
});

// Keep process alive
process.on('SIGINT', () => {
  console.log('\n👋 Shutting down email server...');
  process.exit(0);
});