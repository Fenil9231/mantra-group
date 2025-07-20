import React from 'react';
import TopHeader from '../common/TopHeader';
import Header from './../common/Header';
import Banner from '../components/Banner';
import About from '../components/About';
import Property from '../components/Property';
import PropertyType from '../components/PropertyType';
import VideoPopup from '../components/VideoPopup';
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
                title="Toronto Real Estate - Find Your Dream Home | Mantra Group"
                description="Discover premium real estate properties in Toronto and GTA. Expert real estate services, luxury homes, condos, and investment opportunities with Mantra Group."
                keywords="Toronto real estate, GTA properties, luxury homes, condos for sale, real estate agent Toronto, property investment, Mantra Group"
                canonicalUrl={`${import.meta.env.VITE_SITE_URL || 'https://mantragroup.ca'}/`}
                ogImage={`${import.meta.env.VITE_SITE_URL || 'https://mantragroup.ca'}/assets/images/og-home.jpg`}
                structuredData={{
                    "@context": "https://schema.org",
                    "@type": "RealEstateAgent",
                    "name": "Mantra Group",
                    "description": "Premier real estate services in Toronto and GTA",
                    "url": import.meta.env.VITE_SITE_URL || 'https://mantragroup.ca',
                    "telephone": import.meta.env.VITE_BUSINESS_PHONE || '+1-416-555-0123',
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
                    btnLink="/property"
                    btnText="Sell Property"
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

                {/* Property */}
                <Property/>

                {/* Property Type */}
                <PropertyType/>

                {/* Video Popup */}
                <VideoPopup/>

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