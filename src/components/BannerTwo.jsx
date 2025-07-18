import React from 'react';

import BannerTwoThumb from '../../public/assets/images/thumbs/banner-two-filter-bg.png';
import TabFilter from '../common/TabFilter';
import { bannerContent } from '../data/HomeOneData/HomeOneData';
import { Link } from 'react-router-dom';

const BannerTwo = () => {
    return (
        <>
            {/* ============================= Banner Two Start ============================= */}
            <div className="banner-two">
                <div className="container container-two">
                    <div className="banner-two__content flx-between">
                        <h1 className="banner-two__title"> {bannerContent.title}<span className="text">{ bannerContent.boldTitle}</span> </h1>
                        <div className="contact-content">
                            <p className="contact-content__desc font-18">{bannerContent.desc}</p>
                            <div className="d-flex align-items-center gap-3">
                                <div className="contact-content__icon">
                                    <img src={bannerContent.icon} alt=""/>
                                </div>
                                <div className="contact-content__infos">
                                    <span className="contact-content__text">{bannerContent.text}</span> 
                                    <Link to={`${bannerContent.numberLink}${bannerContent.number}`} className="contact-content__contact">{bannerContent.number}</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="banner-two__filter background-img" style={{ backgroundImage: `url(${BannerTwoThumb})` }}>
                        <div className="filter--box ms-auto">
                            <TabFilter colClass="col-12"/>
                        </div>
                    </div>
                </div>
            </div>
            {/* ============================= Banner Two End ============================= */}
        </>
    );
};

export default BannerTwo;