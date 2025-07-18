import React, { useContext } from 'react';
import { PropertyFilterContext } from '../contextApi/PropertyFilterContext';

const PropertyFilterForm = () => {

    const {dataStatus, handleDataStatusChange, dataType, handleDataTypeChange, dataLocation, handleDataLocationChange} = useContext(PropertyFilterContext); 

    return (
        <>
            <form action="#">
                <div className="row gy-4">

                    <div className="col-lg-2 col-md-3 col-sm-6 col-xs-6">
                        <div className="select-has-icon">
                            <select className="form-select common-input common-input--withLeftIcon pill text-gray-800" onChange={handleDataStatusChange} value={dataStatus}>
                                <option value="Status" disabled defaultValue>Status</option>
                                <option value="All">All</option>
                                <option value="Sell">Sell</option>
                                <option value="Buy">Buy</option>
                            </select>
                            <span className="input-icon input-icon--left text-gradient">
                                <img src="assets/images/icons/status.svg" alt=""/>
                            </span>
                        </div>
                    </div>

                    <div className="col-lg-3 col-md-3 col-sm-6 col-xs-6">
                        <div className="select-has-icon">
                            <select className="form-select common-input common-input--withLeftIcon pill text-gray-800" onChange={handleDataTypeChange} value={dataType}>
                                <option value="Type" disabled defaultValue>Type</option>
                                <option value="All">All</option>
                                <option value="Houses">Houses</option>
                                <option value="Apartments">Apartments</option>
                                <option value="Office">Office</option>
                                <option value="Villa">Villa</option>
                            </select>
                            <span className="input-icon input-icon--left text-gradient">
                                <img src="assets/images/icons/type.svg" alt=""/>
                            </span>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-3 col-sm-6 col-xs-6">
                        <div className="select-has-icon">
                            <select className="form-select common-input common-input--withLeftIcon pill text-gray-800" onChange={handleDataLocationChange} value={dataLocation}>
                                <option value="Location" disabled defaultValue>Location</option>
                                <option value="All"> All Provinces</option>
                                <option value="Alberta" data-location="Alberta">Alberta</option>
                                <option value="British Columbia" data-location="British Columbia">British Columbia</option>
                                <option value="Manitoba" data-location="Manitoba">Manitoba</option>
                                <option value="New Brunswick" data-location="New Brunswick">New Brunswick</option>
                                <option value="Newfoundland and Labrador" data-location="Newfoundland and Labrador">Newfoundland and Labrador</option>
                                <option value="Nova Scotia" data-location="Nova Scotia">Nova Scotia</option>
                                <option value="Ontario" data-location="Ontario">Ontario</option>
                                <option value="Prince Edward Island" data-location="Prince Edward Island">Prince Edward Island</option>
                                <option value="Quebec" data-location="Quebec">Quebec</option>
                                <option value="Saskatchewan" data-location="Saskatchewan">Saskatchewan</option>
                                <option value="Northwest Territories" data-location="Northwest Territories">Northwest Territories</option>
                                <option value="Nunavut" data-location="Nunavut">Nunavut</option>
                                <option value="Yukon" data-location="Yukon">Yukon</option>
                            </select>
                            <span className="input-icon input-icon--left text-gradient">
                                <img src="assets/images/icons/location.svg" alt=""/>
                            </span>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-3 col-sm-6 col-xs-6">
                        <div className="position-relative">
                            <input type="text" className="common-input common-input--withLeftIcon pill text-gray-800" placeholder="Advanced Filter"/>
                            <span className="input-icon input-icon--left text-gradient">
                                <img src="assets/images/icons/filter.svg" alt=""/>
                            </span>
                        </div>
                    </div>
                </div>
            </form>   
        </>
    );
};

export default PropertyFilterForm;