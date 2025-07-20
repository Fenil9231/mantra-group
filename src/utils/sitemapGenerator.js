import { properties, blogs } from '../data/HomeOneData/HomeOneData';
import { projectItems } from '../data/OthersPageData/OthersPageData';
import { slugURL } from '../utility/Utility';

// Static routes configuration
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

// Get site URL from environment or default
const getSiteUrl = () => {
  if (typeof window !== 'undefined') {
    return window.location.origin;
  }
  return process.env.VITE_SITE_URL || 'https://your-domain.com';
};

// Generate dynamic property URLs
const generatePropertyUrls = () => {
  return properties.map(property => {
    const propertyURL = slugURL({ url: 'property', slug: property.title });
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
  return projectItems.map(project => {
    const projectURL = slugURL({ url: 'project', slug: project.title });
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
  return blogs.map(blog => {
    const blogURL = slugURL({ url: 'blog', slug: blog.title });
    return {
      path: blogURL,
      priority: '0.6',
      changefreq: 'weekly',
      lastmod: new Date().toISOString().split('T')[0]
    };
  });
};

// Generate complete sitemap XML
export const generateSitemap = () => {
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
  
  return sitemapXml;
};

// Generate robots.txt content
export const generateRobotsTxt = () => {
  const siteUrl = getSiteUrl();
  
  return `User-agent: *
Allow: /

Sitemap: ${siteUrl}/sitemap.xml`;
};

// Get all routes for navigation or other purposes
export const getAllRoutes = () => {
  return [
    ...staticRoutes,
    ...generatePropertyUrls(),
    ...generateProjectUrls(),
    ...generateBlogUrls()
  ];
};

// Function to save sitemap to public directory (for build process)
export const saveSitemapToPublic = async () => {
  try {
    const sitemapContent = generateSitemap();
    const robotsContent = generateRobotsTxt();
    
    // In a real implementation, you would write these files to the public directory
    // This is a placeholder for the actual file writing logic
    console.log('Sitemap generated successfully');
    console.log('Total URLs:', getAllRoutes().length);
    
    return {
      sitemap: sitemapContent,
      robots: robotsContent,
      totalUrls: getAllRoutes().length
    };
  } catch (error) {
    console.error('Error generating sitemap:', error);
    throw error;
  }
};

// Function to update sitemap when new content is added
export const updateSitemap = () => {
  return saveSitemapToPublic();
};