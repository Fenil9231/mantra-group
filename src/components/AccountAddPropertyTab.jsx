import React from 'react';

const AccountAddPropertyTab = () => {
    return (
        <div className="text-center py-5">
            <div className="mb-4">
                <i className="fas fa-info-circle text-primary" style={{fontSize: '3rem'}}></i>
            </div>
            <h4 className="mb-3">Property Listing Feature Unavailable</h4>
            <p className="text-muted mb-4">
                Mantra Group now focuses exclusively on pre-construction and commercial real estate consultation. 
                We no longer offer property listing services through this platform.
            </p>
            <p className="text-muted">
                For assistance with pre-construction opportunities or commercial real estate investments, 
                please contact our team directly.
            </p>
            <div className="mt-4">
                <a href="/contact" className="btn btn-primary">
                    Contact Our Team
                </a>
            </div>
        </div>
    );
};

export default AccountAddPropertyTab;