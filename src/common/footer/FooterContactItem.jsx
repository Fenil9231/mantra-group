import React from 'react';
import { footerContactLinks } from '../../data/CommonData/CommonData';
import { Link } from 'react-router-dom';

const FooterContactItem = () => {
    return (
        <>
            <div className="footer-item">
                <h6 className="footer-item__title">Company</h6>
                <ul className="footer-menu">
                    {
                        footerContactLinks.map((footerContactLink, index) => {
                            return (
                                <li className="footer-menu__item" key={index}>
                                    <Link to={footerContactLink.link} className="footer-menu__link">{footerContactLink.text} </Link>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>   
        </>
    );
};

export default FooterContactItem;