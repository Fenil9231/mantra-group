import React from 'react';
import CtaThumb from '/assets/images/thumbs/cta-img.png';
import NewsletterForm from '../common/NewsletterForm';

const Cta = (props) => {
    return (
        <section className={`cta padding-b-120 ${props.ctaClass}`}>
            <div className="container container-two">
                <div className="cta-box flx-between gap-2">
                    <div className="cta-content">
                        <h2 className="cta-content__title">Subscribe To Our <span className="text-gradient">Newsletter</span> </h2>
                        <p className="cta-content__desc">Stay updated with the latest property listings, market trends, and exclusive real estate opportunities delivered directly to your inbox.</p>

                        <NewsletterForm formClass="max-w-unset" inputClass="bg-danger" iconClass="text-gradient"/>
                        
                    </div>
                    <div className="cta-content__thumb d-xl-block d-none">
                        <img src={CtaThumb} alt="Cta Image"/>
                    </div>
                </div>
            </div>
        </section>   
    );
};

export default Cta;