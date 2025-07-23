const express = require('express');
const cors = require('cors');
const nodemailer = require('nodemailer');
require('dotenv').config();

const app = express();
const PORT = 3002;

// Middleware
app.use(cors());
app.use(express.json());

// Email configuration
const createTransporter = async () => {
  if (process.env.EMAIL_TEST_MODE === 'true') {
    // Test mode - create ethereal test account
    try {
      const testAccount = await nodemailer.createTestAccount();
      return nodemailer.createTransport({
        host: 'smtp.ethereal.email',
        port: 587,
        secure: false,
        auth: {
          user: testAccount.user,
          pass: testAccount.pass
        }
      });
    } catch (error) {
      console.error('❌ Failed to create test account, falling back to console logging');
      // Fallback to a mock transporter that just logs
      return {
        sendMail: async (mailOptions) => {
          console.log('📧 [MOCK EMAIL] Would send:', mailOptions);
          return { messageId: 'mock-' + Date.now() };
        }
      };
    }
  } else {
    // Production mode - use real SMTP
    return nodemailer.createTransport({
      host: process.env.SMTP_HOST || 'smtp.gmail.com',
      port: parseInt(process.env.SMTP_PORT) || 587,
      secure: process.env.SMTP_SECURE === 'true',
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS
      }
    });
  }
};

// Email endpoint
app.post('/api/send-email', async (req, res) => {
  try {
    const { type, data } = req.body;
    
    if (!data || !data.name || !data.email || !data.message) {
      return res.status(400).json({
        success: false,
        message: 'Missing required fields: name, email, message'
      });
    }

    const transporter = await createTransporter();
    const isTestMode = process.env.EMAIL_TEST_MODE === 'true';
    
    console.log(`📧 [${isTestMode ? 'TEST' : 'PRODUCTION'} MODE] Processing email request:`);
    console.log('  Type:', type);
    console.log('  From:', data.name, '<' + data.email + '>');
    console.log('  Subject:', data.subject || 'Contact Form Submission');
    
    // Admin notification email
    const adminMailOptions = {
      from: `"${process.env.FROM_NAME || 'Website Contact'}" <${process.env.SMTP_USER}>`,
      to: process.env.ADMIN_EMAIL || 'contact@mantragrp.com',
      subject: `New Contact Form Submission - ${data.subject || 'General Inquiry'}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${data.name}</p>
        <p><strong>Email:</strong> ${data.email}</p>
        <p><strong>Phone:</strong> ${data.phone || 'Not provided'}</p>
        <p><strong>Subject:</strong> ${data.subject || 'General Inquiry'}</p>
        <p><strong>Message:</strong></p>
        <div style="background: #f5f5f5; padding: 15px; border-radius: 5px;">
          ${data.message.replace(/\n/g, '<br>')}
        </div>
        <hr>
        <p><small>Sent from: ${process.env.VITE_SITE_NAME || 'Website'} Contact Form</small></p>
      `
    };

    // Auto-reply email
    const autoReplyOptions = {
      from: `"${process.env.COMPANY_NAME || 'Mantra Group'}" <${process.env.SMTP_USER}>`,
      to: data.email,
      subject: `Thank you for contacting ${process.env.COMPANY_NAME || 'Mantra Group'}`,
      html: `
        <h2>Thank you for your message!</h2>
        <p>Dear ${data.name},</p>
        <p>We have received your message and will get back to you within 24 hours.</p>
        <p><strong>Your message:</strong></p>
        <div style="background: #f5f5f5; padding: 15px; border-radius: 5px;">
          ${data.message.replace(/\n/g, '<br>')}
        </div>
        <br>
        <p>Best regards,<br>
        ${process.env.COMPANY_NAME || 'Mantra Group'} Team</p>
        <hr>
        <p><small>This is an automated response. Please do not reply to this email.</small></p>
      `
    };

    const emailResults = [];
    
    // Send admin notification
    try {
      const adminResult = await transporter.sendMail(adminMailOptions);
      emailResults.push('admin');
      console.log('✅ Admin notification sent:', adminResult.messageId);
      if (isTestMode) {
        console.log('📧 Preview URL:', nodemailer.getTestMessageUrl(adminResult));
      }
    } catch (error) {
      console.error('❌ Failed to send admin notification:', error.message);
    }

    // Send auto-reply
    try {
      const replyResult = await transporter.sendMail(autoReplyOptions);
      emailResults.push('autoReply');
      console.log('✅ Auto-reply sent:', replyResult.messageId);
      if (isTestMode) {
        console.log('📧 Preview URL:', nodemailer.getTestMessageUrl(replyResult));
      }
    } catch (error) {
      console.error('❌ Failed to send auto-reply:', error.message);
    }

    if (emailResults.length === 0) {
      throw new Error('Failed to send any emails');
    }

    res.json({
      success: true,
      message: `Email${emailResults.length > 1 ? 's' : ''} sent successfully${isTestMode ? ' (test mode)' : ''}`,
      emailsSent: emailResults,
      testMode: isTestMode
    });

  } catch (error) {
    console.error('❌ Email sending error:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to send email: ' + error.message
    });
  }
});

// Health check
app.get('/health', (req, res) => {
  res.json({ status: 'OK', message: 'Email server is running' });
});

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Email server running on http://localhost:${PORT}`);
  console.log(`📧 Email API available at http://localhost:${PORT}/api/send-email`);
});

// Keep process alive
process.on('SIGINT', () => {
  console.log('\n👋 Shutting down email server...');
  process.exit(0);
});