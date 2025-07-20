// This script extracts data from JSX files and creates JSON files that can be imported by Node.js
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// ES module compatibility
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Static data that doesn't require JSX imports
const staticRoutes = [
  { path: '/', priority: '1.0', changefreq: 'daily' },
  { path: '/property', priority: '0.9', changefreq: 'daily' },
  { path: '/property-sidebar', priority: '0.8', changefreq: 'weekly' },
  { path: '/add-new-listing', priority: '0.7', changefreq: 'monthly' },
  { path: '/map-location', priority: '0.7', changefreq: 'monthly' },
  { path: '/about-us', priority: '0.8', changefreq: 'monthly' },
  { path: '/faq', priority: '0.6', changefreq: 'monthly' },
  { path: '/checkout', priority: '0.5', changefreq: 'yearly' },
  { path: '/cart', priority: '0.5', changefreq: 'yearly' },
  { path: '/login', priority: '0.4', changefreq: 'yearly' },
  { path: '/register', priority: '0.4', changefreq: 'yearly' },
  { path: '/account', priority: '0.5', changefreq: 'monthly' },
  { path: '/project', priority: '0.8', changefreq: 'weekly' },
  { path: '/blog', priority: '0.9', changefreq: 'daily' },
  { path: '/contact', priority: '0.7', changefreq: 'monthly' },
  { path: '/services', priority: '0.8', changefreq: 'monthly' }
];

// Mock data for properties (since we can't import JSX in Node.js)
const mockProperties = [
  { title: 'Luxury Villa in Downtown' },
  { title: 'Modern Apartment Complex' },
  { title: 'Cozy Family Home' },
  { title: 'Commercial Office Space' },
  { title: 'Beachfront Condo' },
  { title: 'Mountain View Retreat' }
];

// Mock data for projects
const mockProjects = [
  { title: 'Skyline Towers' },
  { title: 'Green Valley Homes' },
  { title: 'Urban Plaza Development' },
  { title: 'Riverside Community' }
];

// Mock data for blogs
const mockBlogs = [
  { title: 'Real Estate Market Trends 2024' },
  { title: 'Home Buying Tips for First-Time Buyers' },
  { title: 'Investment Properties Guide' },
  { title: 'Sustainable Housing Solutions' },
  { title: 'Commercial Real Estate Insights' }
];

// Utility function to create slug URLs
const createSlugURL = (url, slug) => {
  const cleanSlug = slug
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .trim();
  return `/${url}/${cleanSlug}`;
};

// Get site URL from environment
const getSiteUrl = () => {
  return process.env.VITE_SITE_URL || process.env.SITE_URL || 'https://your-domain.com';
};

// Generate dynamic property URLs
const generatePropertyUrls = () => {
  return mockProperties.map(property => {
    const propertyURL = createSlugURL('property', property.title);
    return {
      path: propertyURL,
      priority: '0.8',
      changefreq: 'weekly',
      lastmod: new Date().toISOString().split('T')[0]
    };
  });
};

// Generate dynamic project URLs
const generateProjectUrls = () => {
  return mockProjects.map(project => {
    const projectURL = createSlugURL('project', project.title);
    return {
      path: projectURL,
      priority: '0.7',
      changefreq: 'monthly',
      lastmod: new Date().toISOString().split('T')[0]
    };
  });
};

// Generate dynamic blog URLs
const generateBlogUrls = () => {
  return mockBlogs.map(blog => {
    const blogURL = createSlugURL('blog', blog.title);
    return {
      path: blogURL,
      priority: '0.6',
      changefreq: 'weekly',
      lastmod: new Date().toISOString().split('T')[0]
    };
  });
};

// Generate complete sitemap XML
const generateSitemap = () => {
  const siteUrl = getSiteUrl();
  const currentDate = new Date().toISOString().split('T')[0];
  
  // Combine all routes
  const allRoutes = [
    ...staticRoutes.map(route => ({ ...route, lastmod: currentDate })),
    ...generatePropertyUrls(),
    ...generateProjectUrls(),
    ...generateBlogUrls()
  ];
  
  // Generate XML sitemap
  const sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${allRoutes.map(route => `  <url>
    <loc>${siteUrl}${route.path}</loc>
    <lastmod>${route.lastmod}</lastmod>
    <changefreq>${route.changefreq}</changefreq>
    <priority>${route.priority}</priority>
  </url>`).join('\n')}
</urlset>`;
  
  return { xml: sitemapXml, totalUrls: allRoutes.length };
};

// Generate robots.txt content
const generateRobotsTxt = () => {
  const siteUrl = getSiteUrl();
  
  return `User-agent: *
Allow: /

# Sitemap
Sitemap: ${siteUrl}/sitemap.xml

# Disallow admin and private areas
Disallow: /admin/
Disallow: /api/
Disallow: /*.json$
Disallow: /*.xml$

# Allow all other content
Allow: /`;
};

// Main function to generate and save files
const generateSitemapFiles = async () => {
  try {
    console.log('🚀 Starting sitemap generation...');
    
    // Get project root and dist directories
    const projectRoot = path.resolve(__dirname, '..');
    const distDir = path.join(projectRoot, 'dist');
    const publicDir = path.join(projectRoot, 'public');
    
    // Ensure directories exist
    if (!fs.existsSync(distDir)) {
      fs.mkdirSync(distDir, { recursive: true });
    }
    if (!fs.existsSync(publicDir)) {
      fs.mkdirSync(publicDir, { recursive: true });
    }
    
    // Generate sitemap and robots.txt
    const { xml: sitemapContent, totalUrls } = generateSitemap();
    const robotsContent = generateRobotsTxt();
    
    // Write sitemap.xml to both public and dist directories
    const sitemapPath = path.join(distDir, 'sitemap.xml');
    const publicSitemapPath = path.join(publicDir, 'sitemap.xml');
    
    fs.writeFileSync(sitemapPath, sitemapContent, 'utf8');
    fs.writeFileSync(publicSitemapPath, sitemapContent, 'utf8');
    
    // Write robots.txt to both public and dist directories
    const robotsPath = path.join(distDir, 'robots.txt');
    const publicRobotsPath = path.join(publicDir, 'robots.txt');
    
    fs.writeFileSync(robotsPath, robotsContent, 'utf8');
    fs.writeFileSync(publicRobotsPath, robotsContent, 'utf8');
    
    console.log('✅ Sitemap generation completed successfully!');
    console.log(`📊 Total URLs generated: ${totalUrls}`);
    console.log(`📁 Files saved to:`);
    console.log(`   - ${sitemapPath}`);
    console.log(`   - ${publicSitemapPath}`);
    console.log(`   - ${robotsPath}`);
    console.log(`   - ${publicRobotsPath}`);
    
    // Generate summary report
    const propertyCount = mockProperties.length;
    const projectCount = mockProjects.length;
    const blogCount = mockBlogs.length;
    const staticCount = staticRoutes.length;
    
    console.log('\n📈 Sitemap Summary:');
    console.log(`   - Static pages: ${staticCount}`);
    console.log(`   - Property pages: ${propertyCount}`);
    console.log(`   - Project pages: ${projectCount}`);
    console.log(`   - Blog pages: ${blogCount}`);
    console.log(`   - Total URLs: ${totalUrls}`);
    
    return {
      success: true,
      totalUrls,
      breakdown: {
        static: staticCount,
        properties: propertyCount,
        projects: projectCount,
        blogs: blogCount
      }
    };
    
  } catch (error) {
    console.error('❌ Error generating sitemap:', error);
    throw error;
  }
};

// Run the script
generateSitemapFiles()
  .then(result => {
    console.log('\n🎉 Sitemap generation process completed!');
    process.exit(0);
  })
  .catch(error => {
    console.error('💥 Sitemap generation failed:', error);
    process.exit(1);
  });