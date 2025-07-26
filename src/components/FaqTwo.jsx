import React from 'react';
import FaqAccordion from '../common/FaqAccordion';
import FaqTwoThumb from '/assets/images/thumbs/faq-two-img.png';
import SectionHeading from '../common/SectionHeading';

const FaqTwo = () => {
    return (
        <section className="faq-two padding-y-120">
            <div className="container container-two">

                <SectionHeading
                    headingClass=""  
                    subtitle="Frequently Asked Questions"
                    subtitleClass="bg-gray-100" 
                    title="Expert Real Estate Consultation Answers" 
                    renderDesc={true}
                    desc="Get answers to the most common questions about our real estate consultation services in Toronto and the Greater Toronto Area."
                    renderButton={false}
                    buttonClass="btn-main"
                    buttonText="View More"
                />

                <div className="row gy-4">
                    <div className="col-lg-6">
                        
                        <FaqAccordion accordionClass="style-two" itemClass=""/>
                        
                    </div>
                    <div className="col-lg-6 ps-lg-4 d-lg-block d-none">
                        <div className="faq-two-thumb">
                            <img src={FaqTwoThumb} alt=""/>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FaqTwo;