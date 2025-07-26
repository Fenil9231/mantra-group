import React from 'react';
import NewsletterThumb from '/assets/images/thumbs/newsletter-bg.png';
import NewsletterForm from '../common/NewsletterForm';

const Newsletter = () => {
    return (
        <>
            <section className="newsletter bg-white">
                <div className="container container-two">
                    <div className="newsletter-content text-center background-img" style={{ backgroundImage: `url(${NewsletterThumb})`}}>
                        <h2 className="newsletter-content__title text-white">Subscribe To Our Newsletter</h2>
                        <p className="newsletter-content__desc text-white fw-light font-18">Get exclusive access to new property listings, market insights, and investment opportunities before they hit the market.</p>
                        
                        <NewsletterForm formClass="" inputClass="white-bordered-input" iconClass="text-gradient"/>

                    </div>
                </div>
            </section>
        </>
    );
};

export default Newsletter;