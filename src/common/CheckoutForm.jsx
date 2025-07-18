import React from 'react';

const CheckoutForm = () => {
    return (
        <div className="card common-card">
            <div className="card-body">
                <h6 className="title mb-4">Shipping Address</h6>
                <div className="row gy-4">
                    <div className="col-sm-6 col-xs-6">
                        <label htmlFor="FirstName" className="form-label">First Name</label>
                        <input type="text" className="common-input" id="FirstName" placeholder="First Name"/>
                    </div>
                    <div className="col-sm-6 col-xs-6">
                        <label htmlFor="LastName" className="form-label">Last Name</label>
                        <input type="text" className="common-input" id="LastName" placeholder="Last Name"/>
                    </div>
                    <div className="col-sm-6 col-xs-6">
                        <label htmlFor="EmailAddress" className="form-label">Email Address</label>
                        <input type="email" className="common-input" id="EmailAddress" placeholder="Email Address"/>
                    </div>
                    <div className="col-sm-6 col-xs-6">
                        <label htmlFor="PhoneNumber" className="form-label">Phone Number</label>
                        <input type="tel" className="common-input" id="PhoneNumber" placeholder="Phone Number"/>
                    </div>
                    <div className="col-sm-6 col-xs-6">
                        <label htmlFor="Address" className="form-label">Address</label>
                        <input type="text" className="common-input" id="Address" placeholder="Address"/>
                    </div>
                    <div className="col-sm-6 col-xs-6">
                        <label htmlFor="Province" className="form-label">Province</label>
                        <div className="select-has-icon icon-black">
                            <select className="select common-input" id="Province">
                                <option value="" disabled> Select Province</option>
                                <option value="AB">Alberta</option>
                                <option value="BC">British Columbia</option>
                                <option value="MB">Manitoba</option>
                                <option value="NB">New Brunswick</option>
                                <option value="NL">Newfoundland and Labrador</option>
                                <option value="NS">Nova Scotia</option>
                                <option value="ON">Ontario</option>
                                <option value="PE">Prince Edward Island</option>
                                <option value="QC">Quebec</option>
                                <option value="SK">Saskatchewan</option>
                                <option value="NT">Northwest Territories</option>
                                <option value="NU">Nunavut</option>
                                <option value="YT">Yukon</option>
                            </select>
                        </div>
                    </div>
                    <div className="col-sm-6 col-xs-6">
                        <label htmlFor="City" className="form-label">City</label>
                        <input type="text" className="common-input" id="City" placeholder="City"/>
                    </div>
                    <div className="col-sm-6 col-xs-6">
                        <label htmlFor="State" className="form-label">State</label>
                        <input type="text" className="common-input" id="State" placeholder="State"/>
                    </div>
                    <div className="col-sm-6 col-xs-6">
                        <label htmlFor="Region" className="form-label">Region</label>
                        <input type="text" className="common-input" id="Region" placeholder="Region"/>
                    </div>
                    <div className="col-sm-6 col-xs-6">
                        <label htmlFor="ZipCode" className="form-label">ZipCode</label>
                        <input type="text" className="common-input" id="ZipCode" placeholder="ZipCode"/>
                    </div>
                </div>
            </div>
        </div>   
    );
};

export default CheckoutForm;