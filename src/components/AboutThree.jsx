import React from 'react';
import SectionHeading from '../common/SectionHeading';
import Button from '../common/Button';
import { aboutContent } from '../data/HomeOneData/HomeOneData';
import CountUp from 'react-countup';

import AboutThreeThumb from '/assets/images/thumbs/about-three-img.png';

const AboutThree = () => {
    return (
        <>
            <section className="about-three bg-white padding-y-120">
                <div className="container container-two">
                    <div className="row gy-4">
                        <div className="col-lg-6">
                            <div className="about-three-thumb">
                                <div className="about-three-thumb__inner">
                                    <img src={AboutThreeThumb} alt=""/>
                                    <div className="project-content">
                                        <div className="project-content__inner">
                                            <h2 className="project-content__number">
                                                <CountUp end={parseInt(500)} duration={6} delay={0.2} />+                                            </h2>
                                            <span className="project-content__text font-12">Happy Clients</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="about-content">

                                <SectionHeading
                                    headingClass="style-left"  
                                    subtitle="About Mantra Group"
                                    subtitleClass="bg-gray-100" 
                                    title="Excellence in Real Estate Services" 
                                    renderDesc={true}
                                    desc="At Mantra Group, we bring decades of combined experience in Toronto's dynamic real estate market. Our commitment to excellence, personalized service, and deep market knowledge ensures that whether you're buying, selling, or investing, you receive expert guidance every step of the way. We specialize in residential and commercial properties across the GTA, helping clients achieve their real estate goals with confidence and success."
                                    renderButton={false}
                                    buttonClass="btn-main"
                                    buttonText="View More"
                                />

                                <ul className="check-list style-two">
                                    <li className="check-list__item d-flex align-items-center">
                                        <span className="icon"><i className="fas fa-check"></i></span>
                                        <span className="text fw-semibold">Extensive GTA Market Knowledge</span>
                                    </li>
                                    <li className="check-list__item d-flex align-items-center">
                                        <span className="icon"><i className="fas fa-check"></i></span>
                                        <span className="text fw-semibold">Personalized Client Service</span>
                                    </li>
                                    <li className="check-list__item d-flex align-items-center">
                                        <span className="icon"><i className="fas fa-check"></i></span>
                                        <span className="text fw-semibold">Proven Track Record of Success</span>
                                    </li>
                                    <li className="check-list__item d-flex align-items-center">
                                        <span className="icon"><i className="fas fa-check"></i></span>
                                        <span className="text fw-semibold">Professional Real Estate Expertise</span>
                                    </li>
                                    <li className="check-list__item d-flex align-items-center">
                                        <span className="icon"><i className="fas fa-check"></i></span>
                                        <span className="text fw-semibold">Comprehensive Property Solutions</span>
                                    </li>
                                </ul>

                            </div>
                        </div>
                    </div>
                </div>
            </section>   
        </>
    );
};

export default AboutThree;