// Test script to check if email server is working
import http from 'http';

function testEmailServer() {
  console.log('Testing email server connection...');
  
  // Test health endpoint
  const options = {
    hostname: 'localhost',
    port: 3001,
    path: '/health',
    method: 'GET'
  };
  
  const req = http.request(options, (res) => {
    console.log(`Health check status: ${res.statusCode}`);
    
    let data = '';
    res.on('data', (chunk) => {
      data += chunk;
    });
    
    res.on('end', () => {
      console.log('Health response:', data);
      
      if (res.statusCode === 200) {
        console.log('✅ Email server is running!');
        testEmailAPI();
      } else {
        console.log('❌ Email server health check failed');
      }
    });
  });
  
  req.on('error', (error) => {
    console.error('❌ Cannot connect to email server:', error.message);
    console.log('Make sure the email server is running on port 3001');
  });
  
  req.end();
}

function testEmailAPI() {
  console.log('\nTesting email API...');
  
  const postData = JSON.stringify({
    type: 'contact',
    data: {
      name: 'Test User',
      email: 'test@testclient.com',
      message: 'This is a test message',
      subject: 'Test Subject'
    }
  });
  
  const options = {
    hostname: 'localhost',
    port: 3001,
    path: '/api/send-email',
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Content-Length': Buffer.byteLength(postData)
    }
  };
  
  const req = http.request(options, (res) => {
    console.log(`Email API status: ${res.statusCode}`);
    
    let data = '';
    res.on('data', (chunk) => {
      data += chunk;
    });
    
    res.on('end', () => {
      console.log('Email API response:', data);
      if (res.statusCode === 200) {
        console.log('✅ Email API is working!');
      } else {
        console.log('❌ Email API failed');
      }
    });
  });
  
  req.on('error', (error) => {
    console.error('❌ Email API error:', error.message);
  });
  
  req.write(postData);
  req.end();
}

testEmailServer();