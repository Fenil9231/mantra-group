import React from 'react';
import LatestPropertiesFourThumb from '/assets/images/thumbs/latest-properties-img.png';

const LatestPropertiesFour = () => {
    return (
        <section className="latest-properties-four padding-y-60">
        <div className="container container-two">
            <div className="row gy-4 flex-wrap-reverse">
                <div className="col-lg-5">
                    <div className="latest-properties-four__thumb">
                        <img src={LatestPropertiesFourThumb} alt=""/>
                    </div>
                </div>
                <div className="col-xl-1 d-xl-block d-none"></div>
                <div className="col-lg-6 ps-xl-5">
                    <div className="latest-properties-four__content">
                        <div className="section-heading style-left">
                            <span className="section-heading__subtitle bg-white"> <span className="text-gradient fw-semibold">Latest Properties</span> </span>
                            <h2 className="section-heading__title">Real estate Investing in made it lot easy</h2>
                        </div>
    
                        <div className="latest-properties-four__item d-flex align-items-start">
                            <span className="latest-properties-four__icon"> <i className="fas fa-check text-gradient"></i> </span>
                            <div className="latest-properties-four__info">
                                <h6 className="latest-properties-four__title">Premium Property Access</h6>
                                <p className="latest-properties-four__desc font-18">Access premium properties with flexible financing options and expert guidance throughout your investment journey.</p>
                            </div>
                        </div>
    
                        <div className="latest-properties-four__item d-flex align-items-start">
                            <span className="latest-properties-four__icon"> <i className="fas fa-check text-gradient"></i> </span>
                            <div className="latest-properties-four__info">
                                <h6 className="latest-properties-four__title">Expert Market Analysis</h6>
                                <p className="latest-properties-four__desc font-18">Comprehensive market analysis and personalized property recommendations tailored to your investment goals.</p>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
    </section>
    );
};

export default LatestPropertiesFour;