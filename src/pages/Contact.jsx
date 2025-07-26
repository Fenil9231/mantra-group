import React from 'react';
import Header from '../common/Header';
import Footer from '../common/Footer';
import Breadcrumb from '../common/Breadcrumb';
import Cta from '../components/Cta';
import ContactTop from '../components/ContactTop';
import ContactUsSection from '../components/ContactUsSection';

import SEOHead from '../components/SEOHead';
import MobileMenu from '../common/MobileMenu';
import OffCanvas from '../common/OffCanvas';

const Contact = () => {
    return (
        <>
            <SEOHead 
                title="Contact Us - Mantra Group | Toronto Real Estate Experts"
                description="Get in touch with Mantra Group for all your Toronto real estate needs. Professional consultation, property valuation, and personalized service. Contact us today!"
                keywords="contact real estate agent Toronto, real estate consultation, property valuation, Toronto real estate contact, Mantra Group contact"
                canonicalUrl={`${import.meta.env.VITE_SITE_URL || 'https://mantragroup.ca'}/contact`}
                ogImage={`${import.meta.env.VITE_SITE_URL || 'https://mantragroup.ca'}/assets/images/og-contact.jpg`}
                structuredData={{
                    "@context": "https://schema.org",
                    "@type": "ContactPage",
                    "name": "Contact Mantra Group",
                    "description": "Contact Toronto's premier real estate team",
                    "url": `${import.meta.env.VITE_SITE_URL || 'https://mantragroup.ca'}/contact`,
                    "mainEntity": {
                        "@type": "RealEstateAgent",
                        "name": "Mantra Group",
                        "telephone": import.meta.env.VITE_BUSINESS_PHONE || '+1 647-560-0736',
                        "email": import.meta.env.VITE_BUSINESS_EMAIL || 'info@mantragroup.ca'
                    }
                }}
            />
            <OffCanvas/>
            <MobileMenu/>

            <main className="body-bg">
                
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

                {/* BreadCrumb */}
                <Breadcrumb 
                    pageTitle="Contact Us"
                    pageName="Contact Us"
                />

                {/* Contact Top */}
                <ContactTop/>

                <div className="contact-map address-map">
                    <iframe 
                        src={import.meta.env.VITE_GOOGLE_MAPS_EMBED_URL || "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2886.234567890123!2d-79.66774!3d43.62185!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b47c123456789%3A0x123456789abcdef0!2s100%20Matheson%20Blvd%20E%2C%20Mississauga%2C%20ON%20L4Z%203P8%2C%20Canada!5e0!3m2!1sen!2sca!4v1734567890123!5m2!1sen!2sca"}
                        allowFullScreen="" 
                        loading="lazy" 
                        referrerPolicy="no-referrer-when-downgrade"
                        title="Mantra Group Office Location - 100 Matheson Blvd E, Mississauga"
                    ></iframe>
                </div>

                {/* Contact Us Section */}
                <ContactUsSection/>

                {/* Cta */}
                <Cta ctaClass=""/>



                {/* Footer */}
                <Footer/>

            </main>   
        </>
    );
};

export default Contact;
