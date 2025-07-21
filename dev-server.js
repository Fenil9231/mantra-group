// Simple development server to test email API locally
import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import handler from './api/send-email.js';

// Load environment variables
dotenv.config({ path: '.env.test' });
dotenv.config({ path: '.env.local' });
dotenv.config({ path: '.env' });

// Set test mode
process.env.EMAIL_TEST_MODE = 'true';

const app = express();
const PORT = 3001;

// Middleware
app.use(cors());
app.use(express.json());

// API route that mimics the serverless function
app.post('/api/send-email', async (req, res) => {
  try {
    // Create a mock request/response object for the serverless function
    const mockReq = {
      method: 'POST',
      body: req.body,
      headers: req.headers
    };
    
    const mockRes = {
      status: (code) => ({
        json: (data) => {
          res.status(code).json(data);
          return mockRes;
        }
      }),
      json: (data) => {
        res.json(data);
        return mockRes;
      },
      setHeader: (key, value) => {
        res.setHeader(key, value);
        return mockRes;
      }
    };
    
    // Call the serverless function
    await handler(mockReq, mockRes);
  } catch (error) {
    console.error('Error in email API:', error);
    res.status(500).json({ error: 'Internal server error', details: error.message });
  }
});

// Health check endpoint
app.get('/health', (req, res) => {
  res.json({ status: 'OK', message: 'Development email server is running' });
});

app.listen(PORT, () => {
  console.log(`Development email server running on http://localhost:${PORT}`);
  console.log(`Email API available at http://localhost:${PORT}/api/send-email`);
});