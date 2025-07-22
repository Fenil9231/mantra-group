import React from 'react';
import Header from '../common/Header';
import Footer from '../common/Footer';
import Breadcrumb from '../common/Breadcrumb';
import Cta from '../components/Cta';
import CheckoutSection from '../components/CheckoutSection';
import Service from '../components/Service';
import PageTitle from '../common/PageTitle';

const Checkout = () => {
    return (
        <>
        <PageTitle title="Mantra Group - Checkout" />

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
                pageTitle="Checkout"
                pageName="Checkout"
            />
            
            {/* Checkout Section */}
            <CheckoutSection/>

            {/* Service Section */}
            <Service />

            {/* Cta */}
            <Cta ctaClass=""/>

            {/* Footer */}
            <Footer/>
        </>
    );
};

export default Checkout;