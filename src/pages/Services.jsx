import React from 'react';
import Header from '../common/Header';
import Footer from '../common/Footer';
import Breadcrumb from '../common/Breadcrumb';
import Cta from '../components/Cta';
import PageTitle from '../common/PageTitle';
import SectionHeading from '../common/SectionHeading';
import Counter from '../components/Counter';
import Team from '../components/Team';
import Testimonial from '../components/Testimonial';
import PropertyTypeThree from '../components/PropertyTypeThree';
import Service from '../components/Service';

const Services = () => {

    return (
        <>
            <PageTitle title="Mantra Group - Our Services" />
            
            {/* Header */}
            <Header 
                headerClass="dark-header has-border" 
                logoBlack={false}
                logoWhite={true}
                headerMenusClass="mx-auto"
                btnClass="btn btn-outline-main btn-outline-main-dark d-lg-block d-none"
                btnLink="/add-new-listing"
                btnText="Add Listing"
                spanClass="icon-right text-gradient" 
                showHeaderBtn={true}
                showOffCanvasBtn={false}
                offCanvasBtnClass=""
                showContactNumber={false}
            />

            {/* BreadCrumb */}
            <Breadcrumb 
                pageTitle="Our Services"
                pageName="Services"
            />

            {/* Services Section */}
            <Service />

            {/* Why Choose Us Section */}
            <section className="why-choose-us bg-gray-50 padding-y-120">
                <div className="container container-two">
                    <div className="row align-items-center">
                        <div className="col-lg-6">
                            <SectionHeading
                                headingClass="style-left"  
                                subtitle="Why Choose Us"
                                subtitleClass="bg-white" 
                                title="Your Trusted Real Estate Partner" 
                                renderDesc={true}
                                desc="With years of experience in the Toronto real estate market, Mantra Group has built a reputation for excellence, integrity, and results."
                                renderButton={false}
                                buttonClass="btn-main"
                                buttonText="Learn More"
                            />
                            
                            <ul className="check-list style-two">
                                <li className="check-list__item d-flex align-items-center">
                                    <span className="icon"><i className="fas fa-check"></i></span>
                                    <span className="text fw-semibold">Licensed and Experienced Professionals</span>
                                </li>
                                <li className="check-list__item d-flex align-items-center">
                                    <span className="icon"><i className="fas fa-check"></i></span>
                                    <span className="text fw-semibold">Comprehensive Market Knowledge</span>
                                </li>
                                <li className="check-list__item d-flex align-items-center">
                                    <span className="icon"><i className="fas fa-check"></i></span>
                                    <span className="text fw-semibold">Personalized Client Service</span>
                                </li>
                                <li className="check-list__item d-flex align-items-center">
                                    <span className="icon"><i className="fas fa-check"></i></span>
                                    <span className="text fw-semibold">Proven Track Record of Success</span>
                                </li>
                            </ul>
                        </div>
                        <div className="col-lg-6">
                            <div className="why-choose-stats">
                                <div className="row gy-4">
                                    <div className="col-6">
                                        <div className="stat-card text-center">
                                            <h3 className="stat-card__number text-gradient">500+</h3>
                                            <p className="stat-card__text">Properties Sold</p>
                                        </div>
                                    </div>
                                    <div className="col-6">
                                        <div className="stat-card text-center">
                                            <h3 className="stat-card__number text-gradient">15+</h3>
                                            <p className="stat-card__text">Years Experience</p>
                                        </div>
                                    </div>
                                    <div className="col-6">
                                        <div className="stat-card text-center">
                                            <h3 className="stat-card__number text-gradient">98%</h3>
                                            <p className="stat-card__text">Client Satisfaction</p>
                                        </div>
                                    </div>
                                    <div className="col-6">
                                        <div className="stat-card text-center">
                                            <h3 className="stat-card__number text-gradient">24/7</h3>
                                            <p className="stat-card__text">Support Available</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Property Types */}
            <PropertyTypeThree />

            {/* Counter Section */}
            <Counter />

            {/* Team Section */}
            <Team />

            {/* Testimonials */}
            <Testimonial />

            {/* Cta */}
            <Cta ctaClass=""/>

            {/* Footer */}
            <Footer/>
        </>
    );
};

export default Services;