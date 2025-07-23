import React from 'react';

import LogoImg from '/assets/images/logo/logo.png';
import { Link } from 'react-router-dom';

const Logo = () => {
    return   (
        <>
            <Link to="/" className="link">
                <img src={LogoImg} alt="Logo" style={{width: '160px', height: '70px', objectFit: 'contain'}}/>
            </Link>
        </>
    );
};

export default Logo;