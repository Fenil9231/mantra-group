import React from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';

const PageTitle = ({ title }) => {
    return (
        <HelmetProvider>
            <Helmet>
                <title>{title} | Toronto Real Estate Experts - Mantra Group</title>
      <meta name="description" content="Find your perfect home in Toronto and GTA with Mantra Group. Expert real estate services for condos, family homes, and investment properties in Toronto, Mississauga, Markham, and Richmond Hill." />
      <meta name="keywords" content="Toronto real estate, GTA homes, Toronto condos, Mississauga homes, Markham real estate, Richmond Hill properties, real estate agent Toronto" />
      <meta name="author" content="Mantra Group Toronto" />
      <meta property="og:title" content={`${title} | Toronto Real Estate Experts - Mantra Group`} />
      <meta property="og:description" content="Find your perfect home in Toronto and GTA with Mantra Group. Expert real estate services for condos, family homes, and investment properties." />
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
