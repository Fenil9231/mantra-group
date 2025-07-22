import React from 'react';
import Header from '../common/Header';
import Footer from '../common/Footer';
import Breadcrumb from '../common/Breadcrumb';
import Cta from '../components/Cta';
import PropertyDetailsSection from '../components/PropertyDetailsSection';
import { useParams } from 'react-router-dom';
import Service from '../components/Service';
import PageTitle from '../common/PageTitle';
import MobileMenu from '../common/MobileMenu';
import OffCanvas from '../common/OffCanvas';

const PropertyDetails = () => {

    const {title} = useParams(); 
    
    return (
        <>
        <PageTitle title="Mantra Group - Property Details" />

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
                pageTitle="Property Details"
                pageName={title}
            />

            {/* Property Details Section */}
            <PropertyDetailsSection/>

            {/* Cta */}
            <Cta ctaClass=""/>

            {/* Services */}
            <Service/>

            {/* Footer */}
            <Footer/>
        </>
    );
};

export default PropertyDetails;
