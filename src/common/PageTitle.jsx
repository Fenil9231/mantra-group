import React from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';

const PageTitle = ({ title, description, keywords }) => {
    const defaultDescription = "Find your perfect home in Toronto and GTA with Mantra Group. Expert real estate services for condos, family homes, and investment properties in Toronto, Mississauga, Markham, and Richmond Hill.";
    const defaultKeywords = "Toronto real estate, GTA homes, Toronto condos, Mississauga homes, Markham real estate, Richmond Hill properties, real estate agent Toronto";
    
    return (
        <HelmetProvider>
            <Helmet>
                <title>{title}</title>
      <meta name="description" content={description || defaultDescription} />
      <meta name="keywords" content={keywords || defaultKeywords} />
      <meta name="author" content="Mantra Group Toronto" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description || defaultDescription} />
                <meta property="og:type" content="website" />
                <meta property="og:locale" content="en_CA" />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content={`${title} | Toronto Real Estate Experts`} />
      <meta name="twitter:description" content="Find your perfect home in Toronto and GTA with Mantra Group." />
      <link rel="canonical" href="https://mantra-group-toronto.com" />
            </Helmet>
        </HelmetProvider>
    );
};

export default PageTitle;
