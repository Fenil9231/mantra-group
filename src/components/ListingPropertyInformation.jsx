import React from 'react';
import { addAmenities } from '../data/OthersPageData/OthersPageData';

const ListingPropertyInformation = ({ formData, handleInputChange }) => {
    return (
        <>
            <div className="card-item" id="propertyInformation">
            <div className="card common-card">
                <div className="card-header">
                    <h6 className="title mb-0">Details Information</h6>
                </div>
                <div className="card-body">
                    <div className="row gy-4">
                        <div className="col-xl-3 col-sm-6 col-xs-6">
                            <label htmlFor="propertyId" className="form-label">Property Id</label>
                            <input 
                                type="text" 
                                className="common-input" 
                                id="propertyId" 
                                placeholder="Property Id"
                                value={formData?.propertyId || ''}
                                onChange={handleInputChange}
                            />
                        </div>
                        <div className="col-xl-3 col-sm-6 col-xs-6">
                            <label htmlFor="areaSize" className="form-label">Area Size</label>
                            <input 
                                type="text" 
                                className="common-input" 
                                id="areaSize" 
                                placeholder="Area Size"
                                value={formData?.areaSize || ''}
                                onChange={handleInputChange}
                            />
                        </div>
                        <div className="col-xl-3 col-sm-6 col-xs-6">
                            <label htmlFor="sizePrefix" className="form-label">Size Prefix</label>
                            <input 
                                type="text" 
                                className="common-input" 
                                id="sizePrefix" 
                                placeholder="Size Prefix"
                                value={formData?.sizePrefix || ''}
                                onChange={handleInputChange}
                            />
                        </div>
                        <div className="col-xl-3 col-sm-6 col-xs-6">
                            <label htmlFor="landArea" className="form-label">Land Area</label>
                            <input 
                                type="text" 
                                className="common-input" 
                                id="landArea" 
                                placeholder="Land Area"
                                value={formData?.landArea || ''}
                                onChange={handleInputChange}
                            />
                        </div>
                        <div className="col-xl-3 col-sm-6 col-xs-6">
                            <label htmlFor="bedrooms" className="form-label">Bedrooms</label>
                            <input 
                                type="number" 
                                className="common-input" 
                                id="bedrooms" 
                                placeholder="Bedrooms"
                                value={formData?.bedrooms || ''}
                                onChange={handleInputChange}
                            />
                        </div>
                        <div className="col-xl-3 col-sm-6 col-xs-6">
                            <label htmlFor="bathrooms" className="form-label">Bathrooms</label>
                            <input 
                                type="number" 
                                className="common-input" 
                                id="bathrooms" 
                                placeholder="Bathrooms"
                                value={formData?.bathrooms || ''}
                                onChange={handleInputChange}
                            />
                        </div>
                        <div className="col-xl-3 col-sm-6 col-xs-6">
                            <label htmlFor="garages" className="form-label">Garages</label>
                            <input 
                                type="number" 
                                className="common-input" 
                                id="garages" 
                                placeholder="Garages"
                                value={formData?.garages || ''}
                                onChange={handleInputChange}
                            />
                        </div>
                        <div className="col-xl-3 col-sm-6 col-xs-6">
                            <label htmlFor="yearBuild" className="form-label">Year Build</label>
                            <input 
                                type="number" 
                                className="common-input" 
                                id="yearBuild" 
                                placeholder="Year Build"
                                value={formData?.yearBuild || ''}
                                onChange={handleInputChange}
                            />
                        </div>
                        <div className="col-12">
                            <h6 className="checkboxes__title mt-4 fw-500 font-18">Amenities</h6>
                            <div className="row gy-3 checkboxes">
                                {
                                    addAmenities.reduce((prevValue, currValue, ItemIndex) => {
                                        if (ItemIndex % 1 === 0) {
                                            prevValue.push([]);
                                        }
                                        prevValue[prevValue.length - 1].push(currValue);
                                        return prevValue;
                                    }, []).map((amenityGroup, groupIndex) => (
                                        <div className="col-md-4 col-sm-6 col-xs-6" key={groupIndex}>
                                            {
                                                amenityGroup.map((amenity, amenityIndex) => (
                                                    <div className="common-check" key={amenityIndex}>
                                                        <input className="form-check-input" type="checkbox" value="" id={amenity.text}/>
                                                        <label className="form-check-label" htmlFor={amenity.text}> {amenity.text} </label>
                                                    </div>
                                                ))
                                            }
                                        </div>
                                    ))
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>   
        </>
    );
};

export default ListingPropertyInformation;