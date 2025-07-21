import React from 'react';

const ListingContactDetails = ({ formData, handleInputChange }) => {
    return (
        <>
            <div className="card-item" id="propertyContactDetails">
                <div className="card common-card">
                    <div className="card-header">
                        <h6 className="title mb-0">Property Contact Details</h6>
                    </div>
                    <div className="card-body">
                        <div className="row gy-4">
                            <div className="col-md-4 col-sm-6 col-xs-6">
                                <label htmlFor="name" className="form-label">Your Name</label>
                                <input 
                                    type="text" 
                                    id="name" 
                                    className="common-input" 
                                    placeholder="Your Name"
                                    value={formData?.name || ''}
                                    onChange={handleInputChange}
                                    required
                                />
                            </div>
                            <div className="col-md-4 col-sm-6 col-xs-6">
                                <label htmlFor="email" className="form-label">Your E-mail</label>
                                <input 
                                    type="email" 
                                    id="email" 
                                    className="common-input" 
                                    placeholder="Your E-Mail"
                                    value={formData?.email || ''}
                                    onChange={handleInputChange}
                                    required
                                />
                            </div>
                            <div className="col-md-4 col-sm-6 col-xs-6">
                                <label htmlFor="phone" className="form-label">Phone Number</label>
                                <input 
                                    type="tel" 
                                    id="phone" 
                                    className="common-input" 
                                    placeholder="Phone Number"
                                    value={formData?.phone || ''}
                                    onChange={handleInputChange}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>   
        </>
    );
};

export default ListingContactDetails;