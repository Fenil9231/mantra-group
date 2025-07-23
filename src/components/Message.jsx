import React from 'react';

import messageThumb from '/assets/images/thumbs/message-img.png';

// Custom styles for property info cards
const propertyCardStyles = {
    propertyInfoCard: {
        padding: '20px',
        backgroundColor: '#f8f9fa',
        borderRadius: '8px',
        border: '1px solid #e9ecef',
        height: '100%',
        transition: 'all 0.3s ease'
    },
    propertyValue: {
        fontSize: '24px',
        fontWeight: 'bold',
        color: '#2c3e50',
        marginBottom: '5px'
    },
    propertyIcon: {
        fontSize: '20px'
    }
};

const Message = () => {
    return (
        <>
            {/* ========================= Message Section Start ======================== */}
            <section className="message">
                <div className="container container-two">
                    <div className="row">
                        <div className="col-lg-5">
                            <div className="message-thumb">
                                <img src={messageThumb} alt="" className="cover-img"/>
                            </div>
                        </div>
                        <div className="col-lg-7">
                            <div className="form-box">
                                <h2 className="form-box__title">Ontario Real Estate Market</h2>
                                
                                <div className="ontario-property-details">
                                    <div className="row gy-4">
                                        <div className="col-md-6">
                                             <div className="property-info-card" style={propertyCardStyles.propertyInfoCard}>
                                                 <div className="d-flex align-items-center mb-3">
                                                     <span className="property-icon me-3" style={propertyCardStyles.propertyIcon}>
                                         <i className="fas fa-home" style={{color: '#ff6b35'}}></i>
                                     </span>
                                                     <h5 className="mb-0">Average Home Price</h5>
                                                 </div>
                                                 <p className="property-value" style={propertyCardStyles.propertyValue}>$685,000 CAD</p>
                                                 <p className="property-desc text-muted">Provincial average for residential properties</p>
                                             </div>
                                         </div>
                                        
                                        <div className="col-md-6">
                                             <div className="property-info-card" style={propertyCardStyles.propertyInfoCard}>
                                                 <div className="d-flex align-items-center mb-3">
                                                     <span className="property-icon me-3" style={propertyCardStyles.propertyIcon}>
                                         <i className="fas fa-chart-line" style={{color: '#ff6b35'}}></i>
                                     </span>
                                                     <h5 className="mb-0">Market Growth</h5>
                                                 </div>
                                                 <p className="property-value" style={propertyCardStyles.propertyValue}>+8.2%</p>
                                                 <p className="property-desc text-muted">Year-over-year price appreciation</p>
                                             </div>
                                         </div>
                                         
                                         <div className="col-md-6">
                                             <div className="property-info-card" style={propertyCardStyles.propertyInfoCard}>
                                                 <div className="d-flex align-items-center mb-3">
                                                     <span className="property-icon me-3" style={propertyCardStyles.propertyIcon}>
                                         <i className="fas fa-building" style={{color: '#ff6b35'}}></i>
                                     </span>
                                                     <h5 className="mb-0">New Listings</h5>
                                                 </div>
                                                 <p className="property-value" style={propertyCardStyles.propertyValue}>12,450</p>
                                                 <p className="property-desc text-muted">Properties available this month</p>
                                             </div>
                                         </div>
                                         
                                         <div className="col-md-6">
                                             <div className="property-info-card" style={propertyCardStyles.propertyInfoCard}>
                                                 <div className="d-flex align-items-center mb-3">
                                                     <span className="property-icon me-3" style={propertyCardStyles.propertyIcon}>
                                         <i className="fas fa-clock" style={{color: '#ff6b35'}}></i>
                                     </span>
                                                     <h5 className="mb-0">Days on Market</h5>
                                                 </div>
                                                 <p className="property-value" style={propertyCardStyles.propertyValue}>28 days</p>
                                                 <p className="property-desc text-muted">Average time to sell</p>
                                             </div>
                                         </div>
                                        
                                        <div className="col-12">
                                            <div className="ontario-highlights mt-4">
                                                <h6 className="mb-3">Ontario Market Highlights</h6>
                                                <ul className="list-unstyled">
                                                    <li className="mb-2">
                                                        <i className="fas fa-check-circle text-success me-2"></i>
                                                        Toronto remains the most active market with over 40% of provincial sales
                                                    </li>
                                                    <li className="mb-2">
                                                        <i className="fas fa-check-circle text-success me-2"></i>
                                                        Ottawa-Gatineau region shows strong growth in suburban areas
                                                    </li>
                                                    <li className="mb-2">
                                                        <i className="fas fa-check-circle text-success me-2"></i>
                                                        Hamilton and surrounding areas offer excellent value propositions
                                                    </li>
                                                    <li className="mb-2">
                                                        <i className="fas fa-check-circle text-success me-2"></i>
                                                        Waterloo region benefits from tech sector expansion
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* ========================= Message Section End ======================== */}   
        </>
    );
};

export default Message;


