import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { toast } from 'react-toastify';
import ServerlessEmailService from '../services/emailServiceServerless';

const AccountProfileTab = () => {
    const location = useLocation();
    const {userData} = location.state || {};
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        type: '',
        message: '',
        saveInfo: false
    });

    const handleInputChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        
        try {
            // Send quote request email using the dedicated method
            await ServerlessEmailService.sendQuoteRequest({
                name: formData.name,
                email: formData.email,
                phone: formData.phone,
                type: formData.type,
                message: formData.message
            });
            
            // Reset form
            setFormData({
                name: '',
                email: '',
                phone: '',
                type: '',
                message: '',
                saveInfo: false
            });
            
            toast.success("Thank you! Your quote request has been sent successfully. We'll get back to you soon.", {
                theme: "colored",
            });
        } catch (error) {
            console.error('Error sending quote request:', error);
            toast.error("Sorry, there was an error sending your quote request. Please try again.", {
                theme: "colored",
            });
        } finally {
            setIsSubmitting(false);
        }
    };
    
    return (
        <>
            <div className="card common-card mb-4">
                <div className="card-body">
                    <div className="profile-info d-flex gap-4 align-items-center">
                        <div className="profile-info__thumb">
                            <img src="assets/images/thumbs/team1.png" alt=""/>
                        </div>
                        <div className="profile-info__content">
                            <span className="mb-1 fw-semibold text-main text-poppins font-13">Agent of Property</span>
                            <h4 className="profile-info__title text-poppins mb-4">{userData.username}</h4>

                            <div className="contact-info d-flex gap-3 align-items-center mb-2">
                                <span className="contact-info__icon text-gradient"><i className="fas fa-map-marker-alt"></i></span>
                                <div className="contact-info__content">
                                    <span className="contact-info__address">{import.meta.env.VITE_BUSINESS_ADDRESS || '4040 Steeles Ave W, Woodbridge, ON L4L 4Y5'}</span>
                                </div>
                            </div>
                            <div className="contact-info d-flex gap-3 align-items-center mb-2">
                                <span className="contact-info__icon text-gradient"><i className="fas fa-phone"></i></span>
                                <div className="contact-info__content">
                                    <span className="contact-info__address">{import.meta.env.VITE_CONTACT_PHONE || '+1 647-560-0736'}</span>
                                </div>
                            </div>
                            <div className="contact-info d-flex gap-3 align-items-center mb-2">
                                <span className="contact-info__icon text-gradient"><i className="fas fa-envelope"></i></span>
                                <div className="contact-info__content">
                                    <span className="contact-info__address"> {userData.email} </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="card common-card">
                <div className="card-body">
                    <form onSubmit={handleSubmit}>
                        <h6 className="loginRegister__title text-poppins">Get A Quote</h6>

                        <div className="row gy-lg-4 gy-3">
                            <div className="col-sm-6 col-xs-6">
                                <label htmlFor="name" className="form-label">Name</label>
                                <input 
                                    type="text" 
                                    className="common-input" 
                                    placeholder="Enter Your Name" 
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleInputChange}
                                    required
                                />
                            </div>
                            <div className="col-sm-6 col-xs-6">
                                <label htmlFor="Email" className="form-label">Email</label>
                                <input 
                                    type="email" 
                                    className="common-input" 
                                    placeholder="Enter Your Email" 
                                    id="Email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleInputChange}
                                    required
                                />
                            </div>
                            <div className="col-sm-6 col-xs-6">
                                <label htmlFor="Phone" className="form-label">Phone</label>
                                <input 
                                    type="tel" 
                                    className="common-input" 
                                    placeholder="Enter Your Phone" 
                                    id="Phone"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleInputChange}
                                    required
                                />
                            </div>
                            <div className="col-sm-6 col-xs-6">
                                <label htmlFor="serviceType" className="form-label">Type</label>
                                <div className="select-has-icon">
                                    <select 
                                        className="form-select common-input text-gray-800"
                                        id="serviceType"
                                        name="type"
                                        value={formData.type}
                                        onChange={handleInputChange}
                                        required
                                    >
                                        <option value="" disabled>Select Your Type</option>
                                        <option value="Property Management">Property Management</option>
                                        <option value="Mortgage Service">Mortgage Service</option>
                                        <option value="Consulting Service">Consulting Service</option>
                                        <option value="Home Buying">Home Buying</option>
                                        <option value="Home Selling">Home Selling</option>
                                        <option value="Escrow Service">Escrow Service</option>
                                    </select>
                                </div>
                            </div>
                            <div className="col-sm-12">
                                <label htmlFor="message" className="form-label">Message</label>
                                <textarea 
                                    className="common-input" 
                                    placeholder="Your Message" 
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleInputChange}
                                    required
                                ></textarea>
                            </div>
                            <div className="col-12">
                                <div className="common-check mb-0">
                                    <input 
                                        className="form-check-input" 
                                        type="checkbox" 
                                        id="remember"
                                        name="saveInfo"
                                        checked={formData.saveInfo}
                                        onChange={handleInputChange}
                                    />
                                    <label className="form-check-label" htmlFor="remember"> Save my name, email, and website in this browser for the next time I comment. </label>
                                </div>
                            </div>
                            <div className="col-12">
                                <button type="submit" className="btn btn-main w-100" disabled={isSubmitting}>
                                    {isSubmitting ? 'Sending...' : 'Get a free service'}
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
};

export default AccountProfileTab;