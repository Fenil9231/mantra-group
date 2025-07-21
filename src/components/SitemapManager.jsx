import React, { useState } from 'react';
import { useSitemapUpdate } from '../hooks/useSitemapUpdate';
import { getAllRoutes } from '../utils/sitemapGenerator';

/**
 * Sitemap Manager Component
 * Provides an interface for managing and updating the sitemap
 * This component can be integrated into an admin panel or used for development
 */
const SitemapManager = ({ showInProduction = false }) => {
  const [isUpdating, setIsUpdating] = useState(false);
  const [lastUpdate, setLastUpdate] = useState(null);
  const [updateResult, setUpdateResult] = useState(null);
  const [sitemapStats, setSitemapStats] = useState(null);
  
  const {
    manualSitemapUpdate,
    updateSitemapAfterPropertyAdd,
    updateSitemapAfterProjectAdd,
    updateSitemapAfterBlogAdd
  } = useSitemapUpdate();

  // Don't show in production unless explicitly allowed
  if (process.env.NODE_ENV === 'production' && !showInProduction) {
    return null;
  }

  // Handle manual sitemap update
  const handleManualUpdate = async () => {
    setIsUpdating(true);
    setUpdateResult(null);
    
    try {
      const result = await manualSitemapUpdate();
      setUpdateResult(result);
      setLastUpdate(new Date().toLocaleString());
      
      // Get current sitemap statistics
      const routes = getAllRoutes();
      setSitemapStats({
        totalUrls: routes.length,
        staticPages: routes.filter(r => r.priority === '1.0' || r.priority === '0.9').length,
        dynamicPages: routes.filter(r => r.priority !== '1.0' && r.priority !== '0.9').length
      });
    } catch (error) {
      setUpdateResult({ success: false, error: error.message });
    } finally {
      setIsUpdating(false);
    }
  };

  // Simulate adding new content and updating sitemap
  const handleTestContentAdd = async (contentType) => {
    setIsUpdating(true);
    
    const testContent = {
      property: { title: 'Test Property ' + Date.now(), id: Date.now() },
      project: { title: 'Test Project ' + Date.now(), id: Date.now() },
      blog: { title: 'Test Blog Post ' + Date.now(), id: Date.now() }
    };
    
    try {
      let result;
      switch (contentType) {
        case 'property':
          result = await updateSitemapAfterPropertyAdd(testContent.property);
          break;
        case 'project':
          result = await updateSitemapAfterProjectAdd(testContent.project);
          break;
        case 'blog':
          result = await updateSitemapAfterBlogAdd(testContent.blog);
          break;
        default:
          throw new Error('Invalid content type');
      }
      
      setUpdateResult(result);
      setLastUpdate(new Date().toLocaleString());
    } catch (error) {
      setUpdateResult({ success: false, error: error.message });
    } finally {
      setIsUpdating(false);
    }
  };

  return (
    <div className="sitemap-manager" style={{
      padding: '20px',
      border: '1px solid #ddd',
      borderRadius: '8px',
      margin: '20px 0',
      backgroundColor: '#f9f9f9'
    }}>
      <h3 style={{ marginBottom: '20px', color: '#333' }}>
        🗺️ Sitemap Manager
      </h3>
      
      {/* Current Statistics */}
      {sitemapStats && (
        <div style={{
          padding: '15px',
          backgroundColor: '#e8f5e8',
          borderRadius: '5px',
          marginBottom: '20px'
        }}>
          <h4 style={{ margin: '0 0 10px 0', color: '#2d5a2d' }}>Current Sitemap Statistics</h4>
          <p style={{ margin: '5px 0' }}>📊 Total URLs: {sitemapStats.totalUrls}</p>
          <p style={{ margin: '5px 0' }}>🏠 Static Pages: {sitemapStats.staticPages}</p>
          <p style={{ margin: '5px 0' }}>🔄 Dynamic Pages: {sitemapStats.dynamicPages}</p>
        </div>
      )}
      
      {/* Manual Update Section */}
      <div style={{ marginBottom: '20px' }}>
        <h4 style={{ marginBottom: '10px' }}>Manual Sitemap Update</h4>
        <button
          onClick={handleManualUpdate}
          disabled={isUpdating}
          style={{
            padding: '10px 20px',
            backgroundColor: isUpdating ? '#ccc' : '#007bff',
            color: 'white',
            border: 'none',
            borderRadius: '5px',
            cursor: isUpdating ? 'not-allowed' : 'pointer'
          }}
        >
          {isUpdating ? '🔄 Updating...' : '🔧 Update Sitemap Now'}
        </button>
      </div>
      
      {/* Test Content Addition */}
      <div style={{ marginBottom: '20px' }}>
        <h4 style={{ marginBottom: '10px' }}>Test Content Addition</h4>
        <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
          <button
            onClick={() => handleTestContentAdd('property')}
            disabled={isUpdating}
            style={{
              padding: '8px 16px',
              backgroundColor: isUpdating ? '#ccc' : '#28a745',
              color: 'white',
              border: 'none',
              borderRadius: '5px',
              cursor: isUpdating ? 'not-allowed' : 'pointer'
            }}
          >
            🏠 Add Test Property
          </button>
          <button
            onClick={() => handleTestContentAdd('project')}
            disabled={isUpdating}
            style={{
              padding: '8px 16px',
              backgroundColor: isUpdating ? '#ccc' : '#ffc107',
              color: 'black',
              border: 'none',
              borderRadius: '5px',
              cursor: isUpdating ? 'not-allowed' : 'pointer'
            }}
          >
            🏗️ Add Test Project
          </button>
          <button
            onClick={() => handleTestContentAdd('blog')}
            disabled={isUpdating}
            style={{
              padding: '8px 16px',
              backgroundColor: isUpdating ? '#ccc' : '#17a2b8',
              color: 'white',
              border: 'none',
              borderRadius: '5px',
              cursor: isUpdating ? 'not-allowed' : 'pointer'
            }}
          >
            📝 Add Test Blog
          </button>
        </div>
      </div>
      
      {/* Update Result */}
      {updateResult && (
        <div style={{
          padding: '15px',
          backgroundColor: updateResult.success ? '#d4edda' : '#f8d7da',
          border: `1px solid ${updateResult.success ? '#c3e6cb' : '#f5c6cb'}`,
          borderRadius: '5px',
          marginBottom: '15px'
        }}>
          <h4 style={{ 
            margin: '0 0 10px 0', 
            color: updateResult.success ? '#155724' : '#721c24' 
          }}>
            {updateResult.success ? '✅ Success' : '❌ Error'}
          </h4>
          <p style={{ margin: '0' }}>
            {updateResult.success ? updateResult.message : updateResult.error}
          </p>
        </div>
      )}
      
      {/* Last Update Info */}
      {lastUpdate && (
        <div style={{
          padding: '10px',
          backgroundColor: '#e2e3e5',
          borderRadius: '5px',
          fontSize: '14px'
        }}>
          <strong>Last Update:</strong> {lastUpdate}
        </div>
      )}
      
      {/* Development Notice */}
      <div style={{
        marginTop: '20px',
        padding: '10px',
        backgroundColor: '#fff3cd',
        border: '1px solid #ffeaa7',
        borderRadius: '5px',
        fontSize: '12px',
        color: '#856404'
      }}>
        <strong>Note:</strong> This component is for development and testing purposes. 
        In production, sitemap updates should be handled through your content management system 
        or triggered automatically when new content is published.
      </div>
    </div>
  );
};

export default SitemapManager;