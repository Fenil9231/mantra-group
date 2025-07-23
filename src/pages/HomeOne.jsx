import React from 'react';
import TopHeader from '../common/TopHeader';
import Header from './../common/Header';
import Banner from '../components/Banner';
import About from '../components/About';
// Removed Property component import
// PropertyType component removed - focusing on consultation services

import Counter from './../components/Counter';
import Portfolio from '../components/Portfolio';
import Testimonial from './../components/Testimonial';
import Blog from './../components/Blog';

import FooterTwo from './../common/FooterTwo';
import Message from './../components/Message';
import MobileMenu from '../common/MobileMenu';
import OffCanvas from '../common/OffCanvas';
import SEOHead from '../components/SEOHead';

const HomeOne = () => {
    return (
        <>
            <SEOHead 
                title="Pre-Construction & Commercial Real Estate | Mantra Group - Serving South Asian Community"
                description="Specialized in pre-construction and commercial real estate across Ontario and Alberta. Proudly serving the South Asian community with expert guidance in Punjabi, Hindi, and Urdu."
                keywords="pre-construction Ontario, commercial real estate Alberta, South Asian real estate, Punjabi realtor, Hindi speaking agent, pre-construction condos Toronto"
                canonicalUrl={`${import.meta.env.VITE_SITE_URL || 'https://mantragroup.ca'}/`}
                ogImage={`${import.meta.env.VITE_SITE_URL || 'https://mantragroup.ca'}/assets/images/og-home.jpg`}
                structuredData={{
                    "@context": "https://schema.org",
                    "@type": "RealEstateAgent",
                    "name": "Mantra Group",
                    "description": "Premier real estate services in Toronto and GTA",
                    "url": import.meta.env.VITE_SITE_URL || 'https://mantragroup.ca',
                    "telephone": import.meta.env.VITE_BUSINESS_PHONE || '+1 647-560-0736',
                    "address": {
                        "@type": "PostalAddress",
                        "streetAddress": "123 Bay Street",
                        "addressLocality": "Toronto",
                        "addressRegion": "ON",
                        "postalCode": "M5K 1A1",
                        "addressCountry": "CA"
                    },
                    "areaServed": ["Toronto", "GTA", "Ontario"],
                    "serviceType": ["Real Estate Sales", "Property Management", "Real Estate Consultation"]
                }}
            />
            <OffCanvas/>
            <MobileMenu/>
            
            <main className="body-bg">

                {/* Top header */}
                <TopHeader/>

                {/* Header */}
                <Header 
                    headerClass="" 
                    logoBlack={true}
                    logoWhite={false}
                    headerMenusClass=""
                    btnClass="btn btn-outline-light d-lg-block d-none"
                    btnLink="/contact"
                    btnText="Contact Us"
                    spanClass="icon-right text-gradient" 
                    showHeaderBtn={true}
                    showOffCanvasBtn={true}
                    offCanvasBtnClass=""
                    showContactNumber={false}
                />

                {/* Banner */}
                <Banner/>
                
                {/* About */}
                <About/>

                {/* Property section removed - focusing on pre-construction and commercial */}

                {/* Property Type section removed - focusing on consultation services */}



                {/* Counter */}
                <Counter/>

                {/* Message */}
                <Message/>

                {/* Portfolio */}
                <Portfolio/>

                {/* Testimonial */}
                <Testimonial/>

                {/* Blog */}
                <Blog/>



                {/* FooterTwo */}
                <FooterTwo/>
                
            </main>
        </>
    );
};

export default HomeOne;