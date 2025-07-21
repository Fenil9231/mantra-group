import React from 'react';
import ValidationForm from './ValidationForm';
import SectionHeading from '../common/SectionHeading';

const contactInfo = {
    icon: 'assets/images/icons/phone-calling.svg',
    text: 'Call us anytime',
    number: import.meta.env.VITE_CONTACT_PHONE || '+1 647-560-0736',
    desc: 'Real estate is a lucrative industry that involves the buying and selling of properties.'
};

const MessageThree = () => {
    return (
        <>
            <section className="message-three bg-white padding-y-120">
                <div className="container container-two">
                    <div className="row gy-4 gy-sm-5">
                        <div className="col-lg-4">
                            <div className="message-two__content">

                                <SectionHeading
                                    headingClass="section-heading style-left style-flex mb-0"  
                                    subtitle="Get a quote"
                                    subtitleClass="" 
                                    title="They chose perfect the property" 
                                    renderDesc={false}
                                    desc="Real estate is a lucrative ind involves the selling and a reproperties. It encompasses residential"
                                    renderButton={false}
                                    renderBesideDesc={true}
                                    buttonClass="btn-main"
                                    buttonText="View More"
                                />
                                
                                <div className="contact-content__box">
                                    <div className=" d-flex align-items-center gap-3">
                                        <div className="contact-content__icon">
                                            <img src={contactInfo.icon} alt=""/>
                                        </div>
                                        <div className="contact-content__infos">
                                            <span className="contact-content__text">{contactInfo.text}</span> 
                                            <a href="#" className="contact-content__contact font-20 fw-semibold text-heading">{contactInfo.number}</a>
                                        </div>
                                    </div>
                                    <p className="section-heading__desc">{contactInfo.desc}</p>
                                </div>
                                
                            </div>
                        </div>
                        <div className="col-lg-8 ps-lg-4">
                            <div className="form-box max-w-unset">
                                <ValidationForm
                                    colClass="col-sm-6 col-xs-6" 
                                    inputClass="common-input common-input--withIcon"
                                    iconSpanClass=""
                                    renderLabel={true}
                                    labelClass="text-black fw-normal font-14"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>   
        </>
    );
};

export default MessageThree;