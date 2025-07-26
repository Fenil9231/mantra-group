import React from 'react';
import SectionHeading from '../common/SectionHeading';
import ValidationForm from './ValidationForm';

const FaqContactUs = () => {
    return (
        <>
            <section className="contact-us">
                <div className="container container-two">
                    <div className="contact-form bg-gray-100 shadow-none">  

                        <SectionHeading
                            headingClass=""  
                            subtitle="Contact Us"
                            subtitleClass="bg-gray-100" 
                            title="Still have questions about our consultation services?" 
                            renderDesc={true}
                            desc="Our experienced real estate consultants are here to help. Get personalized answers to your specific questions and discover how we can assist with your real estate goals in the Greater Toronto Area."
                            renderButton={false}
                            buttonClass="btn-main"
                            buttonText="View More"
                        />
                        <div className="contact-form__form">
                            <ValidationForm
                                colClass="col-sm-6 col-xs-6" 
                                inputClass="common-input"
                                iconSpanClass="d-none text-gradient"
                                renderLabel={false}
                                labelClass="text-white fw-normal"
                            />
                        </div>
                    </div>
                </div>
            </section>   
        </>
    );
};

export default FaqContactUs;