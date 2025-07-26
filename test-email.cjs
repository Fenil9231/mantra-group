// Email API Test Script
// Run this with: node test-email.js

const https = require('http');

const testData = {
  type: 'contact',
  data: {
    name: 'John Doe',
    email: 'john.doe@testclient.com',
    phone: '+1234567890',
    subject: 'Test Email from API',
    message: 'This is a test message to verify the email functionality is working correctly.'
  }
};

const postData = JSON.stringify(testData);

const options = {
  hostname: 'localhost',
  port: 3002,
  path: '/api/send-email',
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Content-Length': Buffer.byteLength(postData)
  }
};

console.log('🧪 Testing email API...');
console.log('📧 Sending test email with data:', testData);

const req = https.request(options, (res) => {
  console.log(`\n📊 Response Status: ${res.statusCode}`);
  console.log(`📊 Response Headers:`, res.headers);
  
  let data = '';
  
  res.on('data', (chunk) => {
    data += chunk;
  });
  
  res.on('end', () => {
    try {
      const response = JSON.parse(data);
      console.log('\n📧 Email API Response:');
      console.log(JSON.stringify(response, null, 2));
      
      if (response.success) {
        console.log('\n✅ EMAIL TEST PASSED!');
        console.log('📧 Emails sent:', response.emailsSent);
        console.log('🧪 Test mode:', response.testMode);
        if (response.testMode) {
          console.log('\n💡 Note: Currently in TEST MODE');
          console.log('   - Check the email server console for preview URLs');
          console.log('   - To enable real email delivery, set EMAIL_TEST_MODE=false in .env');
        }
      } else {
        console.log('\n❌ EMAIL TEST FAILED!');
        console.log('Error:', response.message);
      }
    } catch (error) {
      console.log('\n❌ Failed to parse response:', data);
      console.log('Parse error:', error.message);
    }
  });
});

req.on('error', (error) => {
  console.log('\n❌ REQUEST FAILED!');
  console.log('Error:', error.message);
  console.log('\n🔍 Troubleshooting:');
  console.log('   - Make sure email server is running on http://localhost:3002');
  console.log('   - Check if port 3002 is available');
  console.log('   - Verify email-server.cjs is running without errors');
});

req.write(postData);
req.end();