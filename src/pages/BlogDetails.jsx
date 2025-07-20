import React from 'react';
import Header from '../common/Header';
import Footer from '../common/Footer';
import Breadcrumb from '../common/Breadcrumb';
import Cta from '../components/Cta';
import { useLocation } from 'react-router-dom';
import BlogDetailsSection from '../components/BlogDetailsSection';
// import { BlogDataContext } from '../contextApi/BlogDataContext';
import SEOHead from '../components/SEOHead';

const BlogDetails = () => {

    const location = useLocation(); 
    
    return (
        <>
            <SEOHead 
                title={`${location.state?.title || 'Blog Post'} - Mantra Group | Toronto Real Estate Blog`}
                description={location.state?.desc ? location.state.desc.slice(0, 160) : 'Read the latest insights and tips about Toronto real estate market from Mantra Group\'s expert real estate professionals.'}
                keywords="Toronto real estate blog, real estate tips, property market insights, home buying advice, selling tips, GTA real estate news"
                canonicalUrl={`/blog-details`}
                ogImage={location.state?.thumb || '/assets/images/blog-og.jpg'}
                ogType="article"
                structuredData={{
                    "@context": "https://schema.org",
                    "@type": "BlogPosting",
                    "headline": location.state?.title || 'Real Estate Blog Post',
                    "description": location.state?.desc || 'Expert real estate insights and advice',
                    "image": location.state?.thumb || '/assets/images/blog-default.jpg',
                    "author": {
                        "@type": "Organization",
                        "name": "Mantra Group",
                        "url": "https://mantra-group-toronto.com"
                    },
                    "publisher": {
                        "@type": "Organization",
                        "name": "Mantra Group",
                        "logo": {
                            "@type": "ImageObject",
                            "url": "/assets/images/logo.png"
                        }
                    },
                    "datePublished": new Date().toISOString(),
                    "dateModified": new Date().toISOString()
                }}
            />

            {/* Header */}
            <Header 
                headerClass="dark-header has-border" 
                logoBlack={false}
                logoWhite={true}
                headerMenusClass="mx-auto"
                btnClass="btn btn-outline-main btn-outline-main-dark d-lg-block d-none"
                btnLink="/add-new-listing"
                btnText="Add Listing"
                spanClass="icon-right text-gradient" 
                showHeaderBtn={true}
                showOffCanvasBtn={false}
                offCanvasBtnClass=""
                showContactNumber={false}
            />

            {/* BreadCrumb */}
            <Breadcrumb 
                pageTitle="Blog Details"
                pageName={location.state.title}
            />

            <BlogDetailsSection/>

            {/* Cta */}
            <Cta ctaClass=""/>

            {/* Footer */}
            <Footer/>
        </>
    );
};

export default BlogDetails;

