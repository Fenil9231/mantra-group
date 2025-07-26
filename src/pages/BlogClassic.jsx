import React from 'react';
import Header from '../common/Header';
import Footer from '../common/Footer';
import Breadcrumb from '../common/Breadcrumb';
import Cta from '../components/Cta';
import BlogClassicSection from '../components/BlogClassicSection';

import PageTitle from '../common/PageTitle';

const BlogClassic = () => {
    return (
        <>
        <PageTitle 
            title="Toronto Real Estate Blog | Property Investment Tips & Market Insights | Cityscape Realty"
            description="Stay informed with the latest Toronto real estate market trends, property investment strategies, mortgage tips, and expert insights. Your guide to successful real estate investing in the GTA."
            keywords="Toronto real estate blog, property investment tips, Toronto market trends, real estate investing, GTA property news, mortgage advice Toronto, real estate insights"
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

            {/* BreadCrumb */}
            <Breadcrumb 
                pageTitle="Blog Classic"
                pageName="Blog Classic"
            />

            <BlogClassicSection/> 

            {/* Cta */}
            <Cta ctaClass=""/>



            {/* Footer */}
            <Footer/>
        </>
    );
};

export default BlogClassic;