import fs from 'fs';
import path from 'path';

// CORS headers for cross-origin requests
const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'POST, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type, Authorization',
};

/**
 * Serverless function to update sitemap.xml and robots.txt files
 * This endpoint receives sitemap content and saves it to the public directory
 */
export default async function handler(req, res) {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return res.status(200).setHeader(corsHeaders).end();
  }

  // Only allow POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({ 
      success: false, 
      error: 'Method not allowed. Use POST.' 
    });
  }

  try {
    const { sitemap, robots } = req.body;

    // Validate input
    if (!sitemap || !robots) {
      return res.status(400).json({
        success: false,
        error: 'Missing sitemap or robots content'
      });
    }

    // In Vercel, we can't write to the filesystem during runtime
    // This is a placeholder for the actual implementation
    // In a real scenario, you would:
    // 1. Store the sitemap in a database
    // 2. Use a CDN or external storage service
    // 3. Trigger a rebuild of the static site
    
    console.log('📝 Sitemap update request received');
    console.log('Sitemap length:', sitemap.length);
    console.log('Robots.txt length:', robots.length);
    
    // For demonstration purposes, we'll just log the update
    // In production, implement your preferred storage solution
    
    // Example implementation for different deployment scenarios:
    if (process.env.DEPLOYMENT_TYPE === 'static') {
      // For static deployments, trigger a rebuild
      console.log('🔄 Triggering static site rebuild...');
      
      // You could trigger a webhook to rebuild your site
      // await fetch(process.env.REBUILD_WEBHOOK_URL, { method: 'POST' });
    } else if (process.env.DEPLOYMENT_TYPE === 'server') {
      // For server deployments, write files directly
      const publicDir = path.join(process.cwd(), 'public');
      
      try {
        fs.writeFileSync(path.join(publicDir, 'sitemap.xml'), sitemap, 'utf8');
        fs.writeFileSync(path.join(publicDir, 'robots.txt'), robots, 'utf8');
        console.log('✅ Files written successfully');
      } catch (writeError) {
        console.error('❌ Error writing files:', writeError);
        throw writeError;
      }
    }

    // Set CORS headers
    Object.entries(corsHeaders).forEach(([key, value]) => {
      res.setHeader(key, value);
    });

    // Return success response
    return res.status(200).json({
      success: true,
      message: 'Sitemap updated successfully',
      timestamp: new Date().toISOString(),
      sitemapSize: sitemap.length,
      robotsSize: robots.length
    });

  } catch (error) {
    console.error('❌ Error updating sitemap:', error);
    
    // Set CORS headers even for error responses
    Object.entries(corsHeaders).forEach(([key, value]) => {
      res.setHeader(key, value);
    });

    return res.status(500).json({
      success: false,
      error: 'Internal server error',
      message: error.message
    });
  }
}

// Export configuration for Vercel
export const config = {
  api: {
    bodyParser: {
      sizeLimit: '1mb',
    },
  },
};