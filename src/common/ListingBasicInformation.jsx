import React from 'react';

const ListingBasicInformation = ({ formData, handleInputChange }) => {
    return (
        <>
            <div className="card-item" id="basicInformation">
                <div className="card common-card">
                    <div className="card-header">
                        <h6 className="title mb-0">Property Basic Information</h6>
                    </div>
                    <div className="card-body">
                        <div className="row gy-4">
                            <div className="col-sm-12">
                                <label htmlFor="propertyTitle" className="form-label">Property Title</label>
                                <input 
                                    type="text" 
                                    className="common-input" 
                                    id="propertyTitle" 
                                    placeholder="Property Title"
                                    value={formData?.propertyTitle || ''}
                                    onChange={handleInputChange}
                                />
                            </div>
                            <div className="col-12">
                                <label htmlFor="description" className="form-label">Description</label>
                                <textarea 
                                    className="common-input" 
                                    id="description" 
                                    placeholder="Your Message"
                                    value={formData?.description || ''}
                                    onChange={handleInputChange}
                                ></textarea>
                            </div>
                            <div className="col-sm-6 col-xs-6">
                                <label htmlFor="Status" className="form-label">Status</label>
                                <div className="select-has-icon icon-black">
                                    <select 
                                        className="select common-input" 
                                        id="status"
                                        value={formData?.status || ''}
                                        onChange={handleInputChange}
                                    >
                                        <option value="" disabled>Status</option>
                                        <option value="For Sale">For Sale</option>
                                        <option value="For Rent">For Rent</option>
                                    </select>
                                </div>
                            </div>
                            <div className="col-sm-6 col-xs-6">
                                <label htmlFor="Type" className="form-label">Status</label>
                                <div className="select-has-icon icon-black">
                                    <select 
                                        className="select common-input" 
                                        id="type"
                                        value={formData?.type || ''}
                                        onChange={handleInputChange}
                                    >
                                        <option value="" disabled>Type</option>
                                        <option value="Apartment">Apartment</option>
                                        <option value="House">House</option>
                                        <option value="Land">Land</option>
                                        <option value="Single Family">Single Family</option>
                                    </select>
                                </div>
                            </div>
                            <div className="col-sm-6 col-xs-6">
                                <label htmlFor="price" className="form-label">Price</label>
                                <input 
                                    type="number" 
                                    className="common-input" 
                                    id="price" 
                                    placeholder="USD"
                                    value={formData?.price || ''}
                                    onChange={handleInputChange}
                                />
                            </div>
                            <div className="col-sm-6 col-xs-6">
                                <label htmlFor="area" className="form-label">Area</label>
                                <input 
                                    type="number" 
                                    className="common-input" 
                                    id="area" 
                                    placeholder="Sq Ft"
                                    value={formData?.area || ''}
                                    onChange={handleInputChange}
                                />
                            </div>
                            <div className="col-sm-12">
                                <label htmlFor="Rooms" className="form-label">Rooms</label>
                                <div className="select-has-icon icon-black">
                                    <select 
                                        className="select common-input" 
                                        id="rooms"
                                        value={formData?.rooms || ''}
                                        onChange={handleInputChange}
                                    >
                                        <option value="" disabled>Rooms</option>
                                        <option value="1">1 Room</option>
                                        <option value="2">2 Rooms</option>
                                        <option value="3">3 Rooms</option>
                                        <option value="4">4 Rooms</option>
                                        <option value="5+">5+ Rooms</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>   
        </>
    );
};

export default ListingBasicInformation;