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

import Service from '../components/Service';

import MobileMenu from '../common/MobileMenu';
import OffCanvas from '../common/OffCanvas';

const Services = () => {

    return (
        <>
            <PageTitle title="Mantra Group - Our Services" />
            <OffCanvas/>
            <MobileMenu/>
            
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
                pageTitle="Our Services"
                pageName="Services"
            />

            {/* Main Services Section */}
            <Service />
            
            {/* Toronto & Ontario Market Expertise */}
            <section className="market-expertise padding-y-120 bg-gray-50">
                <div className="container container-two">
                    <div className="row">
                        <div className="col-lg-8 mx-auto">
                            <SectionHeading
                                headingClass="text-center"  
                                subtitle="Local Market Expertise"
                                subtitleClass="bg-white" 
                                title="Toronto & Ontario Real Estate Specialists" 
                                renderDesc={true}
                                desc="With deep knowledge of Toronto's diverse neighborhoods and Ontario's growing markets, we provide unparalleled expertise in the region's most dynamic real estate landscape."
                                renderButton={false}
                            />
                        </div>
                    </div>
                    
                    <div className="row gy-4 mt-5">
                        <div className="col-lg-4 col-md-6">
                            <div className="expertise-card text-center p-4 bg-white rounded-3 h-100">
                                <div className="expertise-card__icon mb-3">
                                    <i className="fas fa-city text-gradient" style={{fontSize: '3rem'}}></i>
                                </div>
                                <h5 className="expertise-card__title mb-3">Downtown Toronto</h5>
                                <p className="expertise-card__text mb-0">Expert knowledge of Toronto's core districts including Financial District, Entertainment District, and King West, with access to exclusive luxury condos and penthouses.</p>
                            </div>
                        </div>
                        
                        <div className="col-lg-4 col-md-6">
                            <div className="expertise-card text-center p-4 bg-white rounded-3 h-100">
                                <div className="expertise-card__icon mb-3">
                                    <i className="fas fa-home text-gradient" style={{fontSize: '3rem'}}></i>
                                </div>
                                <h5 className="expertise-card__title mb-3">GTA Suburbs</h5>
                                <p className="expertise-card__text mb-0">Comprehensive coverage of Greater Toronto Area including Mississauga, Brampton, Markham, and Richmond Hill with family-friendly communities and excellent schools.</p>
                            </div>
                        </div>
                        
                        <div className="col-lg-4 col-md-6">
                            <div className="expertise-card text-center p-4 bg-white rounded-3 h-100">
                                <div className="expertise-card__icon mb-3">
                                    <i className="fas fa-map-marked-alt text-gradient" style={{fontSize: '3rem'}}></i>
                                </div>
                                <h5 className="expertise-card__title mb-3">Ontario Markets</h5>
                                <p className="expertise-card__text mb-0">Extensive reach across Ontario including Ottawa, Hamilton, London, and Kitchener-Waterloo with emerging opportunities and investment potential.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            
            {/* Service Process Section */}
            <section className="service-process padding-y-120">
                <div className="container container-two">
                    <div className="row">
                        <div className="col-lg-8 mx-auto">
                            <SectionHeading
                                headingClass="text-center"  
                                subtitle="Our Process"
                                subtitleClass="bg-gray-100" 
                                title="How We Deliver Excellence" 
                                renderDesc={true}
                                desc="Our proven 4-step process ensures seamless transactions and exceptional results for every client."
                                renderButton={false}
                            />
                        </div>
                    </div>
                    
                    <div className="row gy-4 mt-5">
                        <div className="col-lg-3 col-md-6">
                            <div className="process-step text-center">
                                <div className="process-step__number mb-3">
                                    <span className="bg--gradient text-white rounded-circle d-inline-flex align-items-center justify-content-center" style={{width: '60px', height: '60px', fontSize: '1.5rem', fontWeight: 'bold'}}>1</span>
                                </div>
                                <h5 className="process-step__title mb-3">Consultation</h5>
                                <p className="process-step__text mb-0">Initial meeting to understand your needs, goals, and preferences with detailed market analysis.</p>
                            </div>
                        </div>
                        
                        <div className="col-lg-3 col-md-6">
                            <div className="process-step text-center">
                                <div className="process-step__number mb-3">
                                    <span className="bg--gradient text-white rounded-circle d-inline-flex align-items-center justify-content-center" style={{width: '60px', height: '60px', fontSize: '1.5rem', fontWeight: 'bold'}}>2</span>
                                </div>
                                <h5 className="process-step__title mb-3">Strategy</h5>
                                <p className="process-step__text mb-0">Customized action plan with pricing strategy, marketing approach, and timeline for optimal results.</p>
                            </div>
                        </div>
                        
                        <div className="col-lg-3 col-md-6">
                            <div className="process-step text-center">
                                <div className="process-step__number mb-3">
                                    <span className="bg--gradient text-white rounded-circle d-inline-flex align-items-center justify-content-center" style={{width: '60px', height: '60px', fontSize: '1.5rem', fontWeight: 'bold'}}>3</span>
                                </div>
                                <h5 className="process-step__title mb-3">Execution</h5>
                                <p className="process-step__text mb-0">Professional marketing, showings, negotiations, and transaction management with regular updates.</p>
                            </div>
                        </div>
                        
                        <div className="col-lg-3 col-md-6">
                            <div className="process-step text-center">
                                <div className="process-step__number mb-3">
                                    <span className="bg--gradient text-white rounded-circle d-inline-flex align-items-center justify-content-center" style={{width: '60px', height: '60px', fontSize: '1.5rem', fontWeight: 'bold'}}>4</span>
                                </div>
                                <h5 className="process-step__title mb-3">Closing</h5>
                                <p className="process-step__text mb-0">Smooth closing process with legal support, final walkthrough, and post-sale follow-up services.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            
            {/* Toronto Neighborhoods Expertise */}
            <section className="neighborhoods-expertise padding-y-120">
                <div className="container container-two">
                    <div className="row">
                        <div className="col-lg-8 mx-auto">
                            <SectionHeading
                                headingClass="text-center"  
                                subtitle="Neighborhood Specialists"
                                subtitleClass="bg-gray-100" 
                                title="Toronto's Premier Neighborhoods" 
                                renderDesc={true}
                                desc="From luxury condos in Yorkville to family homes in North York, we know every corner of Toronto and can help you find the perfect property in your ideal neighborhood."
                                renderButton={false}
                            />
                        </div>
                    </div>
                    
                    <div className="row gy-4 mt-5">
                        <div className="col-lg-3 col-md-6">
                            <div className="neighborhood-card p-4 bg-white rounded-3 h-100 shadow-sm">
                                <div className="neighborhood-card__icon mb-3">
                                    <i className="fas fa-building text-gradient" style={{fontSize: '2.5rem'}}></i>
                                </div>
                                <h6 className="neighborhood-card__title mb-2">Yorkville & Rosedale</h6>
                                <p className="neighborhood-card__text mb-0 small">Luxury condos, heritage homes, upscale shopping and dining</p>
                            </div>
                        </div>
                        
                        <div className="col-lg-3 col-md-6">
                            <div className="neighborhood-card p-4 bg-white rounded-3 h-100 shadow-sm">
                                <div className="neighborhood-card__icon mb-3">
                                    <i className="fas fa-users text-gradient" style={{fontSize: '2.5rem'}}></i>
                                </div>
                                <h6 className="neighborhood-card__title mb-2">King West & Liberty</h6>
                                <p className="neighborhood-card__text mb-0 small">Modern condos, vibrant nightlife, young professionals</p>
                            </div>
                        </div>
                        
                        <div className="col-lg-3 col-md-6">
                            <div className="neighborhood-card p-4 bg-white rounded-3 h-100 shadow-sm">
                                <div className="neighborhood-card__icon mb-3">
                                    <i className="fas fa-graduation-cap text-gradient" style={{fontSize: '2.5rem'}}></i>
                                </div>
                                <h6 className="neighborhood-card__title mb-2">North York & Willowdale</h6>
                                <p className="neighborhood-card__text mb-0 small">Family homes, excellent schools, multicultural community</p>
                            </div>
                        </div>
                        
                        <div className="col-lg-3 col-md-6">
                            <div className="neighborhood-card p-4 bg-white rounded-3 h-100 shadow-sm">
                                <div className="neighborhood-card__icon mb-3">
                                    <i className="fas fa-leaf text-gradient" style={{fontSize: '2.5rem'}}></i>
                                </div>
                                <h6 className="neighborhood-card__title mb-2">Beaches & Leslieville</h6>
                                <p className="neighborhood-card__text mb-0 small">Waterfront living, trendy cafes, artistic community</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Client Testimonials */}
            <Testimonial />

            {/* Our Team */}
            <Team />

            {/* Counter Section */}
            <Counter />



            {/* Cta */}
            <Cta ctaClass=""/>

            {/* Footer */}
            <Footer/>
        </>
    );
};

export default Services;