import React from 'react';
import { Link } from 'react-router-dom';

import LogoWhiteImage from '/assets/images/logo/white-logo.png';

const LogoWhite = () => {
    return (
        <>
            <Link to="/" className="mobile-menu__logo">
                <img src={LogoWhiteImage} alt="Logo" style={{width: '160px', height: '70px', objectFit: 'contain'}}/>
            </Link>   
        </>
    );
};

export default LogoWhite;