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
                title="Real Estate Consultation FAQ - Mantra Group | Toronto GTA Expert Advice"
                description="Get expert answers about our real estate consultation services in Toronto and GTA. Learn about our investment strategies, market analysis, and personalized guidance for buyers and investors."
                keywords="real estate consultation Toronto, GTA property consultant, real estate investment advice, Toronto market analysis, property consultation services, real estate expert guidance"
                canonicalUrl="/faq"
                ogImage="/assets/images/faq-og.jpg"
                structuredData={{
                    "@context": "https://schema.org",
                    "@type": "FAQPage",
                    "mainEntity": [
                        {
                            "@type": "Question",
                            "name": "What real estate consultation services does Mantra Group offer?",
                            "acceptedAnswer": {
                                "@type": "Answer",
                                "text": "Mantra Group provides comprehensive real estate consultation services including market analysis, investment strategy planning, property valuation, portfolio optimization, and personalized guidance for buying, selling, or investing in Toronto and GTA properties."
                            }
                        },
                        {
                            "@type": "Question",
                            "name": "How do I get started with a real estate consultation?",
                            "acceptedAnswer": {
                                "@type": "Answer",
                                "text": "Getting started is simple! Contact us through our website, phone, or email to schedule your initial consultation. We'll discuss your goals, analyze your situation, and create a customized strategy tailored to your specific real estate needs."
                            }
                        },
                        {
                            "@type": "Question",
                            "name": "What makes Mantra Group different from other real estate consultants?",
                            "acceptedAnswer": {
                                "@type": "Answer",
                                "text": "Our team combines deep local market knowledge with data-driven insights and personalized service. We focus on long-term relationships, transparent communication, and delivering measurable results that align with your financial goals and lifestyle preferences."
                            }
                        },
                        {
                            "@type": "Question",
                            "name": "Do you work with first-time homebuyers?",
                            "acceptedAnswer": {
                                "@type": "Answer",
                                "text": "Absolutely! We specialize in guiding first-time homebuyers through every step of the process. From mortgage pre-approval assistance to neighborhood selection and negotiation strategies, we ensure you make informed decisions with confidence."
                            }
                        },
                        {
                            "@type": "Question",
                            "name": "What areas do you serve in the Greater Toronto Area?",
                            "acceptedAnswer": {
                                "@type": "Answer",
                                "text": "We serve the entire Greater Toronto Area including Toronto, Mississauga, Brampton, Markham, Richmond Hill, Vaughan, Oakville, Burlington, and surrounding communities. Our extensive local knowledge covers both urban and suburban markets."
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