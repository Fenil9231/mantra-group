import React from 'react';

const TopHeaderFour = () => {
    return (
        <div className="header-top header-top-two py-0">
            <div className="container container-two">
                <div className="header-top__inner flx-between">    
                    <div className="header-info flx-align d-sm-block d-none">
                        <div className="header-info__item flx-align">
                            <span className="header-info__icon text-gradient"><i className="fas fa-map-marker-alt"></i></span>
                            <span className="header-info__text text-body">2972 Westheimer Rd. Santa Ana</span>
                        </div>
                    </div>
                    <div className="header-info flx-align">
                        <div className="header-info__item flx-align">
                            <span className="header-info__icon text-gradient"><i className="fas fa-phone"></i></span>
                            <a href="tel:" className="header-info__text text-body">+1 647-560-0736</a>
                        </div>
                        <div className="header-info__item flx-align">
                            <span className="header-info__icon text-gradient"><i className="fas fa-envelope"></i></span>
                            <a href="mailto:info@eliteproperty.ca" className="header-info__text text-body">info@eliteproperty.ca</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TopHeaderFour;