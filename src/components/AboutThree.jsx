import React from 'react';
import SectionHeading from '../common/SectionHeading';
import Button from '../common/Button';
import { aboutContent } from '../data/HomeOneData/HomeOneData';
import CountUp from 'react-countup';

import AboutThreeThumb from '../../public/assets/images/thumbs/about-three-img.png';

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
                                    title="Your Trusted Partner in Toronto Real Estate" 
                                    renderDesc={true}
                                    desc="With over a decade of experience in the Toronto real estate market, Mantra Group has established itself as a leading brokerage firm. We specialize in residential, commercial, and investment properties, providing comprehensive real estate solutions tailored to your unique needs. Our team of licensed professionals is committed to delivering exceptional service and achieving outstanding results for our clients."
                                    renderButton={false}
                                    buttonClass="btn-main"
                                    buttonText="View More"
                                />

                                <ul className="check-list style-two">
                                    <li className="check-list__item d-flex align-items-center">
                                        <span className="icon"><i className="fas fa-check"></i></span>
                                        <span className="text fw-semibold">10+ Years of Toronto Market Expertise</span>
                                    </li>
                                    <li className="check-list__item d-flex align-items-center">
                                        <span className="icon"><i className="fas fa-check"></i></span>
                                        <span className="text fw-semibold">Award-Winning Customer Service</span>
                                    </li>
                                    <li className="check-list__item d-flex align-items-center">
                                        <span className="icon"><i className="fas fa-check"></i></span>
                                        <span className="text fw-semibold">$500M+ in Successful Transactions</span>
                                    </li>
                                    <li className="check-list__item d-flex align-items-center">
                                        <span className="icon"><i className="fas fa-check"></i></span>
                                        <span className="text fw-semibold">Licensed & Insured Professionals</span>
                                    </li>
                                    <li className="check-list__item d-flex align-items-center">
                                        <span className="icon"><i className="fas fa-check"></i></span>
                                        <span className="text fw-semibold">Comprehensive Market Analysis</span>
                                    </li>
                                </ul>
                                <div className="about-button">
                                    <Button
                                        btnLink="/about-us" 
                                        btnClass="btn btn-outline-main bg-white" 
                                        btnText="Learn More" 
                                        spanClass="icon-right" 
                                        iconClass="fas fa-arrow-right" 
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>   
        </>
    );
};

export default AboutThree;