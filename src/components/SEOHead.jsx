import React from 'react';
import { Helmet } from 'react-helmet-async';

const SEOHead = ({
  title = 'Cityscape Real Estate - Premium Properties & Real Estate Services',
  description = 'Discover premium real estate properties with Cityscape Real Estate. We offer comprehensive property services, expert guidance, and the finest selection of homes, apartments, and commercial spaces.',
  keywords = 'real estate, properties, homes for sale, apartments, commercial real estate, property investment, real estate agent, property management',
  canonicalUrl = '',
  ogImage = '/assets/images/og-image.jpg',
  ogType = 'website',
  twitterCard = 'summary_large_image',
  author = 'Cityscape Real Estate',
  structuredData = null,
  noIndex = false
}) => {
  const siteUrl = window.location.origin;
  const fullCanonicalUrl = canonicalUrl ? `${siteUrl}${canonicalUrl}` : window.location.href;
  const fullOgImage = ogImage.startsWith('http') ? ogImage : `${siteUrl}${ogImage}`;

  const defaultStructuredData = {
    "@context": "https://schema.org",
    "@type": "RealEstateAgent",
    "name": "Cityscape Real Estate",
    "description": description,
    "url": siteUrl,
    "logo": `${siteUrl}/assets/images/logo.png`,
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+1-555-123-4567",
      "contactType": "customer service",
      "availableLanguage": "English"
    },
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "123 Real Estate Street",
      "addressLocality": "City",
      "addressRegion": "State",
      "postalCode": "12345",
      "addressCountry": "US"
    },
    "sameAs": [
      "https://www.facebook.com/cityscaperealestate",
      "https://www.twitter.com/cityscaperealestate",
      "https://www.linkedin.com/company/cityscaperealestate",
      "https://www.instagram.com/cityscaperealestate"
    ]
  };

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content={author} />
      <link rel="canonical" href={fullCanonicalUrl} />
      
      {/* Robots Meta */}
      {noIndex && <meta name="robots" content="noindex, nofollow" />}
      
      {/* Open Graph Meta Tags */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={fullCanonicalUrl} />
      <meta property="og:image" content={fullOgImage} />
      <meta property="og:site_name" content="Cityscape Real Estate" />
      
      {/* Twitter Card Meta Tags */}
      <meta name="twitter:card" content={twitterCard} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={fullOgImage} />
      
      {/* Additional Meta Tags */}
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
      <meta name="language" content="English" />
      <meta name="revisit-after" content="7 days" />
      
      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(structuredData || defaultStructuredData)}
      </script>
    </Helmet>
  );
};

export default SEOHead;