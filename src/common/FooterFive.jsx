import React from 'react';
import { Link } from 'react-router-dom';
import SocialList from './SocialList';
import FooterLogoDesc from './footer/FooterLogoDesc';
import FooterContactItem from './footer/FooterContactItem';
import FooterUsefulItem from './footer/FooterUsefulItem';
import { footerGallery } from '../data/CommonData/CommonData';
import FooterBottom from './FooterBottom';
import NewsletterFooter from '../components/NewsletterFooter';

const FooterFive = () => {
    return (
        <>
            <footer className="footer padding-y-120">
                <div className="container container-two">

                    {/* NewsletterFooter */}
                    <NewsletterFooter/>
                    
                    <div className="row gy-5">
                        <div className="col-xl-3 col-sm-6 col-xsm-6">
                            <div className="footer-item">
                                <FooterLogoDesc/>
                                <SocialList/>
                            </div>
                        </div>
                        
                        <div className="col-xl-3 col-sm-6 col-xsm-6">
                            <FooterUsefulItem/>
                        </div>
                        <div className="col-xl-3 col-sm-6 col-xsm-6">
                            <FooterContactItem/>
                        </div>
                        <div className="col-xl-3 col-sm-6 col-xsm-6">
                            <div className="footer-item">
                                <h6 className="footer-item__title">Our gallery</h6>
                                <div className="gallery-list">
                                    {
                                        footerGallery.map((gallery, GalleryIndex) => {
                                            return (
                                                <div className="gallery-list__item" key={GalleryIndex}>
                                                    <img src={gallery.img} alt="Gallery Image"/>
                                                    <Link to={gallery.link} className="gallery-list__link">
                                                        {gallery.icon}
                                                    </Link>
                                                </div>
                                            )
                                        })
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>

            {/* bottom Footer */}
            <FooterBottom footerClass=""/>
        </>
    );
};

export default FooterFive;