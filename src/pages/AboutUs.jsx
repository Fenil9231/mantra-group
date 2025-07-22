import React from 'react';
import Header from '../common/Header';
import Footer from '../common/Footer';
import Breadcrumb from '../common/Breadcrumb';
import Cta from '../components/Cta';
import AboutThree from '../components/AboutThree';
import PropertyTypeThree from '../components/PropertyTypeThree';
import Team from '../components/Team';
import Service from '../components/Service';
import PageTitle from '../common/PageTitle';
import MobileMenu from '../common/MobileMenu';
import OffCanvas from '../common/OffCanvas';

const AboutUs = () => {
    return (
        <>
            <PageTitle title="Mantra Group - About Us" />
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

            <MobileMenu />
            <OffCanvas />

            {/* BreadCrumb */}
            <Breadcrumb 
                pageTitle="About Us"
                pageName="About Us"
            />

            <AboutThree/>    

            <Team sectionClass=""/>

            <PropertyTypeThree/> 

            {/* Cta */}
            <Cta ctaClass=""/>

            {/* Services */}
            <Service/>

            {/* Footer */}
            <Footer/>
        </>
    );
};

export default AboutUs;