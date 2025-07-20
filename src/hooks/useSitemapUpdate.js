import { useCallback } from 'react';
import { generateSitemap, generateRobotsTxt } from '../utils/sitemapGenerator';

/**
 * Custom hook for updating sitemap when new content is added
 * This hook provides functions to trigger sitemap regeneration
 */
export const useSitemapUpdate = () => {
  
  // Function to update sitemap after new content is added
  const updateSitemap = useCallback(async () => {
    try {
      console.log('🔄 Updating sitemap...');
      
      // Generate new sitemap content
      const sitemapContent = generateSitemap();
      const robotsContent = generateRobotsTxt();
      
      // In a production environment, you would send this to your server
      // to update the actual sitemap.xml file
      if (process.env.NODE_ENV === 'production') {
        // Example: Send to API endpoint to update sitemap
        await fetch('/api/update-sitemap', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            sitemap: sitemapContent,
            robots: robotsContent
          })
        });
      } else {
        // In development, just log the update
        console.log('✅ Sitemap updated (development mode)');
        console.log('New sitemap would contain:', sitemapContent.split('\n').length - 2, 'URLs');
      }
      
      return { success: true, message: 'Sitemap updated successfully' };
    } catch (error) {
      console.error('❌ Error updating sitemap:', error);
      return { success: false, error: error.message };
    }
  }, []);
  
  // Function to trigger sitemap update after adding new property
  const updateSitemapAfterPropertyAdd = useCallback(async (newProperty) => {
    console.log('🏠 New property added, updating sitemap...', newProperty.title);
    return await updateSitemap();
  }, [updateSitemap]);
  
  // Function to trigger sitemap update after adding new project
  const updateSitemapAfterProjectAdd = useCallback(async (newProject) => {
    console.log('🏗️ New project added, updating sitemap...', newProject.title);
    return await updateSitemap();
  }, [updateSitemap]);
  
  // Function to trigger sitemap update after adding new blog post
  const updateSitemapAfterBlogAdd = useCallback(async (newBlog) => {
    console.log('📝 New blog post added, updating sitemap...', newBlog.title);
    return await updateSitemap();
  }, [updateSitemap]);
  
  // Function to manually trigger sitemap update
  const manualSitemapUpdate = useCallback(async () => {
    console.log('🔧 Manual sitemap update triggered...');
    return await updateSitemap();
  }, [updateSitemap]);
  
  return {
    updateSitemap,
    updateSitemapAfterPropertyAdd,
    updateSitemapAfterProjectAdd,
    updateSitemapAfterBlogAdd,
    manualSitemapUpdate
  };
};

export default useSitemapUpdate;