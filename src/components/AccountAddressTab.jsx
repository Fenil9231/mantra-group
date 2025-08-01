import React from 'react';
import { accountAddress } from '../data/OthersPageData/OthersPageData';
import { useLocation } from 'react-router-dom';

const AccountAddressTab = () => {

    const location = useLocation();
    const {userData} = location.state || {};
    
    return (
        <>
            <p className="account-alert">The accompanying tends to will be utilized on the checkout page naturally.</p>
            <div className="row gy-4">

                <div className="col-sm-6">
                    <div className="card common-card">
                        <div className="card-body">
                            <h6 className="text-poppins mb-2">Charging Address alter</h6>
                            <span className="fw-semibold text-poppins font-14 mb-4">{userData.username}</span>
                            <div className="contact-info d-flex gap-3 align-items-center mb-2">
                                <div className="contact-info__content"><span className="contact-info__address"><strong className="fw-500">location:</strong>{import.meta.env.VITE_BUSINESS_ADDRESS || '4040 Steeles Ave W, Woodbridge, ON L4L 4Y5'}</span></div>
                            </div>
                            <div className="contact-info d-flex gap-3 align-items-center mb-2">
                                <div className="contact-info__content"><span className="contact-info__address"><strong className="fw-500">Phone:</strong> {import.meta.env.VITE_CONTACT_PHONE || '+1 647-560-0736'}</span></div>
                            </div>
                            <div className="contact-info d-flex gap-3 align-items-center mb-2">
                                <div className="contact-info__content"><span className="contact-info__address"><strong className="fw-500">Email:</strong> {userData.email}</span></div>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div className="col-sm-6">
                    <div className="card common-card">
                        <div className="card-body">
                            <h6 className="text-poppins mb-2">Transporting Address alter</h6>
                            <span className="fw-semibold text-poppins font-14 mb-4">{userData.username}</span>
                            <div className="contact-info d-flex gap-3 align-items-center mb-2">
                                <div className="contact-info__content"><span className="contact-info__address"><strong className="fw-500">location:</strong>{import.meta.env.VITE_BUSINESS_ADDRESS || '4040 Steeles Ave W, Woodbridge, ON L4L 4Y5'}</span></div>
                            </div>
                            <div className="contact-info d-flex gap-3 align-items-center mb-2">
                                <div className="contact-info__content"><span className="contact-info__address"><strong className="fw-500">Phone:</strong> {import.meta.env.VITE_CONTACT_PHONE || '+1 647-560-0736'}</span></div>
                            </div>
                            <div className="contact-info d-flex gap-3 align-items-center mb-2">
                                <div className="contact-info__content"><span className="contact-info__address"><strong className="fw-500">Email:</strong> {userData.email}</span></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default AccountAddressTab;