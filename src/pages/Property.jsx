import React from 'react';
import Header from '../common/Header';
import Footer from '../common/Footer';
import Breadcrumb from '../common/Breadcrumb';
import PropertyPageSection from '../components/PropertyPageSection';
import Cta from '../components/Cta';
import Service from '../components/Service';
import PageTitle from '../common/PageTitle';
import MobileMenu from '../common/MobileMenu';
import OffCanvas from '../common/OffCanvas';

const Property = () => {
    return (
        <>
        <PageTitle title="Mantra Group - Property" />

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
            
            {/* Mobile Menu */}
            <MobileMenu />
            
            {/* Off Canvas */}
            <OffCanvas />

            {/* BreadCrumb */}
            <Breadcrumb 
                pageTitle="Property"
                pageName="Property"
            />

            {/* Property Page Section */}
            <PropertyPageSection/>

            {/* Cta */}
            <Cta ctaClass=""/>

            {/* Services */}
            <Service/>

            {/* Footer */}
            <Footer/>

        </main>   
        </>
    );
};

export default Property;