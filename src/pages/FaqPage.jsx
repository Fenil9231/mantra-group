import React from 'react';
import Header from '../common/Header';
import Footer from '../common/Footer';
import Breadcrumb from '../common/Breadcrumb';
import Cta from '../components/Cta';
import FaqTwo from '../components/FaqTwo';
import FaqContactUs from '../components/FaqContactUs';
import CounterFour from '../components/CounterFour';

import SEOHead from '../components/SEOHead';
import MobileMenu from '../common/MobileMenu';
import OffCanvas from '../common/OffCanvas';

const FaqPage = () => {
    return (
        <>
            <SEOHead 
                title="Frequently Asked Questions - Mantra Group | Toronto Real Estate FAQ"
                description="Get answers to common questions about buying, selling, and investing in Toronto real estate. Expert guidance from Mantra Group's experienced real estate professionals."
                keywords="Toronto real estate FAQ, real estate questions, buying home Toronto, selling property GTA, real estate process, Mantra Group FAQ"
                canonicalUrl="/faq"
                ogImage="/assets/images/faq-og.jpg"
                structuredData={{
                    "@context": "https://schema.org",
                    "@type": "FAQPage",
                    "mainEntity": [
                        {
                            "@type": "Question",
                            "name": "How do I start the home buying process in Toronto?",
                            "acceptedAnswer": {
                                "@type": "Answer",
                                "text": "Start by getting pre-approved for a mortgage, then work with our experienced real estate agents to find properties that match your criteria and budget."
                            }
                        },
                        {
                            "@type": "Question",
                            "name": "What are the current market conditions in the GTA?",
                            "acceptedAnswer": {
                                "@type": "Answer",
                                "text": "Our team provides up-to-date market analysis and trends to help you make informed decisions about buying or selling in the Greater Toronto Area."
                            }
                        }
                    ],
                    "provider": {
                        "@type": "RealEstateAgent",
                        "name": "Mantra Group",
                        "url": "https://mantra-group-toronto.com"
                    }
                }}
            />

            {/* Header */}
            <Header 
                headerClass="dark-header has-border" 
                logoBlack={false}
                logoWhite={true}
                headerMenusClass="mx-auto"
                btnClass="btn btn-outline-main btn-outline-main-dark d-lg-block d-none"
                btnLink="/contact"
                btnText="Contact Us"
                spanClass="icon-right text-gradient" 
                showHeaderBtn={true}
                showOffCanvasBtn={false}
                offCanvasBtnClass=""
                showContactNumber={false}
            />
            
            {/* Mobile Menu */}
            <MobileMenu />
            
            {/* Off Canvas */}
            <OffCanvas />

            {/* BreadCrumb */}
            <Breadcrumb 
                pageTitle="FAQ"
                pageName="FAQ"
            />

            {/* Faq Two */}
            <FaqTwo/>

            {/* Faq Contact Us */}
            <FaqContactUs/>

            {/* Counter Four */}
            <CounterFour/>
            
            {/* Cta */}
            <Cta ctaClass=""/>



            {/* Footer */}
            <Footer/>
        </>
    );
};

export default FaqPage;