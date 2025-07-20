import React, { useEffect } from 'react';
import Button from '../common/Button';
import { useNavigate } from 'react-router-dom';
import SEOHead from '../components/SEOHead';

const NotFound = () => {

    // Automatically redirect to previous page
    const navigate = useNavigate(); 

    useEffect(() => {
        setTimeout(() => {
            navigate(-1)
        }, 2500);
    }, []);
    
    return (
        <>
        <SEOHead 
            title="404 Page Not Found - Mantra Group | Toronto Real Estate"
            description="The page you are looking for could not be found. Return to our homepage to explore Toronto real estate listings and services."
            keywords="404 error, page not found, Toronto real estate, Mantra Group"
            canonicalUrl="/404"
            ogImage="/assets/images/404-og.jpg"
            noIndex={true}
        />

            <div className="not-found text-center">
                <div className="not-found__inner">
                    <span className="not-found__icon">
                        <i className="far fa-frown text-body"></i>
                    </span>
                    <h1 className='mt-4 mb-5'>404 Page Not Found</h1>   
                    <Button 
                        btnLink="/" 
                        btnClass="btn-main" 
                        btnText="Back To Home" 
                        spanClass="icon-right" 
                        iconClass="" 
                    />
                </div>
            </div>
        </>
    );
};

export default NotFound;