import React from 'react';

const TopHeaderFive = () => {
    return (
        <div className="header-top bg--gradient">
            <div className="container container-two">
                <div className="flx-between justify-content-sm-between justify-content-center gap-2">    
                    <div className="header-info flx-align">
                        <div className="header-info__item text-white flx-align">
                            <span className="header-info__icon"><i className="fas fa-map-marker-alt"></i></span>
                            <span className="header-info__text text-white fw-light">6391 Elgin St. Celina, 10299</span>
                        </div>
                        <div className="header-info__item text-white flx-align">
                            <span className="header-info__icon"><i className="fas fa-envelope"></i></span>
                            <a href={`mailto:${import.meta.env.VITE_BUSINESS_EMAIL || 'info@mantragroup.ca'}`} className="header-info__text text-white fw-light">{import.meta.env.VITE_BUSINESS_EMAIL || 'info@mantragroup.ca'}</a>
                        </div>
                    </div>
                    <ul className="social-icon-list flx-align gap-2">
                        <li className="social-icon-list__item">
                            <a href={import.meta.env.VITE_FACEBOOK_URL || 'https://facebook.com/mantragroup'} className="social-icon-list__link" target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook-f"></i></a>
            </li>
            <li className="social-icon-list__item">
                <a href={import.meta.env.VITE_TWITTER_URL || 'https://twitter.com/mantragroup'} className="social-icon-list__link" target="_blank" rel="noopener noreferrer"><i className="fab fa-twitter"></i></a>
            </li>
            <li className="social-icon-list__item">
                <a href={import.meta.env.VITE_LINKEDIN_URL || 'https://linkedin.com/company/mantragroup'} className="social-icon-list__link" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin-in"></i></a>
            </li>
            <li className="social-icon-list__item">
                <a href={import.meta.env.VITE_INSTAGRAM_URL || 'https://instagram.com/mantragroup'} className="social-icon-list__link" target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram"></i></a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default TopHeaderFive;