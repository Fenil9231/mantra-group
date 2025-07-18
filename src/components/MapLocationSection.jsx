import React from 'react';
import { mapLocations } from '../data/OthersPageData/OthersPageData';
import { Link } from 'react-router-dom';

const MapLocationSection = () => {
    return (
        <>
            <div className="map-location padding-y-120">
                <div className="container container-two">
                    <div className="row gy-4">
                        <div className="col-lg-8">
                            <div className="property-filter__bottom flx-between gap-2 mt-0 mb-4">
                                <span className="property-filter__text font-18 fw-500 text-heading">Showing 1-10 of 23</span>
                                <div className="d-flex align-items-center gap-2">
                                    <h6 className="property-filter__text font-16 mb-0"> Your Province: </h6>
                                    <div className="select-has-icon icon-black">
                                        <select className="select common-input">
                                            <option disabled>Make A Selection</option>
                                            <option value="1">Ontario</option>
                                            <option value="1">British Columbia</option>
                                            <option value="1">Alberta</option>
                                            <option value="1">Quebec</option>
                                            <option value="1">Manitoba</option>
                                            <option value="1">Saskatchewan</option>
                                            <option value="1">Nova Scotia</option>
                                        </select>
                                    </div>
                                </div>
                            </div>

                            <div className="map-location__content">
                                {
                                    mapLocations.map((mapLocation, mapLocationsIndex) => {
                                        return (
                                            <div className="map-location__item mb-5" key={mapLocationsIndex}>
                                            <h3 className="title text-poppins mb-3 fw-semibold">{mapLocation.title}</h3>
                                            <div className="row gy-4">
                                                {
                                                    mapLocation.mapLocationsCards.map((mapLocationsCard, mapLocationsCardIndex) => {
                                                        return (
                                                            <div className="col-lg-6 col-sm-6" key={mapLocationsCardIndex}>
                                                                <div className="card common-card">
                                                                    <div className="card-body p-lg-4 p-3">
                                                                        <h6 className="mb-4 border-bottom pb-3 mb-3 font-18">{mapLocation.title}, {mapLocationsCard.title}</h6>
                                                                        {
                                                                        mapLocationsCard.mapLocationsContacts.map((mapLocationsContact, mapLocationsContactIndex) => {
                                                                            return (
                                                                                    <div className="contact-info style-two d-flex align-items-center gap-lg-3 gap-2" key={mapLocationsContactIndex}>
                                                                                        <span className="contact-info__icon flex-shrink-0">{mapLocationsContact.icon}</span>
                                                                                        <div className="contact-info__content">
                                                                                            <span className="contact-info__text text-heading fw-bold font-16">{mapLocationsContact.title}</span>
                                                                                            <span className="contact-info__address font-15 fw-500">{mapLocationsContact.address}</span>
                                                                                        </div>
                                                                                    </div>
                                                                                )
                                                                        })
                                                                        }
                                                                        <div className="d-flex mt-4 align-items-center gap-2">
                                                                            {
                                                                                mapLocationsCard.mapLocationsButtons.map((mapLocationsButton, mapLocationsButtonIndex) => {
                                                                                    return (
                                                                                        <Link to={mapLocationsButton.link} className="btn btn-outline-light btn-sm w-50" key={mapLocationsButtonIndex}>
                                                                                            {mapLocationsButton.text} 
                                                                                            <span className="icon-right text-gradient icon"> 
                                                                                                {mapLocationsButton.icon}
                                                                                            </span> 
                                                                                        </Link>
                                                                                    )
                                                                                })
                                                                            }
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        )
                                                    })
                                                }
                                            </div>
                                        </div>
                                        )
                                    })
                                }
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="google-map position-sticky top-120">
                                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d184552.30943582457!2d-79.54286406249999!3d43.718371!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89d4cb90d7c63ba5%3A0x323555502ab4c477!2sToronto%2C%20ON%2C%20Canada!5e0!3m2!1sen!2sca!4v1707882951920!5m2!1sen!2sca" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                            </div>
                        </div>
                    </div>
                </div>
            </div>   
        </>
    );
};

export default MapLocationSection;