import React from 'react';

const PropertyTypeFive = () => {
    return (
        <section className="property-type-five padding-y-120">
            <div className="container container-two">
                <div className="section-heading">
                    <span className="section-heading__subtitle">
                        <span className="text-gradient fw-semibold">Our Services</span>
                    </span>
                    <h2 className="section-heading__title">Comprehensive Real Estate Solutions</h2>
                </div>
                <div className="row gy-4">
                    <div className="col-lg-4 col-sm-6">
                        <div className="property-type-five-item">
                            <div className="property-type-five-item__thumb">
                                <img src="assets/images/thumbs/property-type-five-img1.png" alt="Image" className="cover-img"/>
                            </div>
                            <div className="property-type-five-item__content">
                                <span className="property-type-five-item__date">01</span>
                                <h6 className="property-type-five-item__title">Residential Sales</h6>
                                <p className="property-type-five-item__desc">Expert guidance for buying and selling homes in Toronto's most desirable neighborhoods</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-sm-6">
                        <div className="property-type-five-item">
                            <div className="property-type-five-item__thumb">
                                <img src="assets/images/thumbs/property-type-five-img2.png" alt="Image" className="cover-img"/>
                            </div>
                            <div className="property-type-five-item__content">
                                <span className="property-type-five-item__date">02</span>
                                <h6 className="property-type-five-item__title">Investment Advisory</h6>
                                <p className="property-type-five-item__desc">Strategic investment planning and portfolio management for maximum returns</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-sm-6">
                        <div className="property-type-five-item">
                            <div className="property-type-five-item__thumb">
                                <img src="assets/images/thumbs/property-type-five-img3.png" alt="Image" className="cover-img"/>
                            </div>
                            <div className="property-type-five-item__content">
                                <span className="property-type-five-item__date">03</span>
                                <h6 className="property-type-five-item__title">Commercial Real Estate</h6>
                                <p className="property-type-five-item__desc">Comprehensive commercial property solutions for businesses and investors</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PropertyTypeFive;