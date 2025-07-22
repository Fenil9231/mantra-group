import React from 'react';
import { Link } from 'react-router-dom';

const AboutFive = () => {
    return (
        <section className="about-five padding-y-120">
            <div className="container container-two">
                <div className="row flex-wrap-reverse">
                    <div className="col-lg-5 col-md-6">
                        <div className="about-five__thumbs">
                            <div className="row gy-4">
                                <div className="col-sm-6 col-6">
                                    <div className="about-five__thumb one h-100 d-flex">
                                        <img src="assets/images/thumbs/about-five-img1.png" alt="Image"/>
                                    </div>
                                </div>
                                <div className="col-sm-6 col-6">
                                    <div className="about-five__thumb two">
                                        <img src="assets/images/thumbs/about-five-img2.png" alt="Image"/>
                                    </div>
                                    <div className="about-five__thumb three">
                                        <img src="assets/images/thumbs/about-five-img3.png" alt="Image"/>
                                    </div>
                                </div>
                            </div>
                            <div className="about-five__content d-inline-flex align-items-center">
                                <span className="about-five__icon"><i className="fas fa-users"></i></span>
                                <div className="about-five__texts">
                                    <h5 className="about-five__amount mb-0 text-white">2500+</h5>
                                    <span className="about-five__text text-white font-18">Happy Clients Served</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-7 col-md-6 ps-xl-5">
                        <div className="about-contents">
                            <div className="section-heading style-left">
                                <span className="section-heading__subtitle"> <span className="text-gradient fw-semibold">About Us</span> </span>
                                <h2 className="section-heading__title">Your Trusted Partner in Toronto Real Estate</h2>

                                <ul className="check-list mt-4 mt-lg-5">
                                    <li className="check-list__item d-flex align-items-center">
                                        <span className="icon"><i className="fas fa-check"></i></span>
                                        <span className="text text-body fw-normal font-16">Expert guidance through every step of your real estate journey</span>
                                    </li>
                                    <li className="check-list__item d-flex align-items-center">
                                        <span className="icon"><i className="fas fa-check"></i></span>
                                        <span className="text text-body fw-normal font-16">Comprehensive market knowledge and personalized service</span>
                                    </li>
                                </ul>
                                
                                <p className="section-heading__desc">With over 15 years of experience in Toronto's real estate market, we provide comprehensive property solutions for buying, selling, and investing. Our commitment to excellence ensures you receive expert guidance and personalized service throughout your real estate journey.</p>



                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutFive;