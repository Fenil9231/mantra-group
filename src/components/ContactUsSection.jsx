import React, { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import ServerlessEmailService from '../services/emailServiceServerless';
import { useSitemapUpdate } from '../hooks/useSitemapUpdate';
import Modal from '../common/Modal';
import LoadingSpinner from '../common/LoadingSpinner';

const ContactUsSection = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
        smsConsent: false,
        marketingConsent: false
    });
    const [isLoading, setIsLoading] = useState(false);
    const [errors, setErrors] = useState({});
    const [showModal, setShowModal] = useState(false);
    const [modalContent, setModalContent] = useState({
        type: 'success', // 'success', 'error', 'loading'
        title: '',
        message: '',
        details: null
    });
    const { updateSitemap } = useSitemapUpdate();

    // Initialize Nodemailer email service on component mount
    useEffect(() => {
        ServerlessEmailService.init();
    }, []);

    const validateForm = () => {
        const newErrors = {};
        
        if (!formData.name.trim()) {
            newErrors.name = 'Name is required';
        }
        
        if (!formData.email.trim()) {
            newErrors.email = 'Email is required';
        } else if (!ServerlessEmailService.validateEmail(formData.email)) {
            newErrors.email = 'Please enter a valid email address';
        }
        
        if (formData.phone && !ServerlessEmailService.validatePhone(formData.phone)) {
            newErrors.phone = 'Please enter a valid phone number';
        }
        
        if (!formData.message.trim()) {
            newErrors.message = 'Message is required';
        }
        
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleInputChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value
        }));
        
        // Clear error when user starts typing
        if (errors[name]) {
            setErrors(prev => ({
                ...prev,
                [name]: ''
            }));
        }
    };

    const showLoadingModal = () => {
        setModalContent({
            type: 'loading',
            title: 'Sending Message',
            message: 'Please wait while we send your message...',
            details: null
        });
        setShowModal(true);
    };

    const showSuccessModal = (result) => {
        setModalContent({
            type: 'success',
            title: 'Message Sent Successfully!',
            message: 'Thank you for contacting us. We have received your message and will get back to you within 24 hours.',
            details: {
                name: formData.name,
                email: formData.email,
                subject: formData.subject || 'General Inquiry',
                timestamp: new Date().toLocaleString()
            }
        });
    };

    const showErrorModal = (error) => {
        setModalContent({
            type: 'error',
            title: 'Message Failed to Send',
            message: error.message || 'Something went wrong while sending your message. Please try again later.',
            details: {
                error: error.message,
                timestamp: new Date().toLocaleString()
            }
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        if (!validateForm()) {
            toast.error('Please fix the errors in the form', {
                theme: "colored",
            });
            return;
        }
        
        setIsLoading(true);
        showLoadingModal();
        
        try {
            const result = await ServerlessEmailService.sendContactForm({
                name: formData.name,
                email: formData.email,
                phone: formData.phone,
                subject: formData.subject,
                message: formData.message,
                smsConsent: formData.smsConsent,
                marketingConsent: formData.marketingConsent
            });
            
            if (result.success) {
                // Reset form
                setFormData({
                    name: '',
                    email: '',
                    phone: '',
                    subject: '',
                    message: '',
                    smsConsent: false,
                    marketingConsent: false
                });
                
                // Show success modal
                showSuccessModal(result);
                
                // Update sitemap after successful contact form submission
                updateSitemap();
                
                // Also show toast for additional feedback
                toast.success("Message sent successfully!", {
                    theme: "colored",
                });
            } else {
                throw new Error(result.message || 'Failed to send message');
            }
        } catch (error) {
            console.error('Contact form error:', error);
            showErrorModal(error);
            
            // Also show toast for immediate feedback
            toast.error(error.message || "Failed to send message. Please try again.", {
                theme: "colored",
            });
        } finally {
            setIsLoading(false);
        }
    };

    const closeModal = () => {
        setShowModal(false);
        setModalContent({
            type: 'success',
            title: '',
            message: '',
            details: null
        });
    };
    
    const renderModalContent = () => {
        switch (modalContent.type) {
            case 'loading':
                return (
                    <div className="text-center py-4">
                        <LoadingSpinner size="large" color="primary" text={modalContent.message} />
                    </div>
                );
            
            case 'success':
                return (
                    <div className="text-center">
                        <div className="mb-4">
                            <div className="success-icon mb-3">
                                <i className="las la-check-circle" style={{fontSize: '4rem', color: '#10b981'}}></i>
                            </div>
                            <p className="mb-4">{modalContent.message}</p>
                            {modalContent.details && (
                                <div className="bg-light p-3 rounded text-start">
                                    <h6 className="mb-2">Message Details:</h6>
                                    <p className="mb-1"><strong>Name:</strong> {modalContent.details.name}</p>
                                    <p className="mb-1"><strong>Email:</strong> {modalContent.details.email}</p>
                                    <p className="mb-1"><strong>Subject:</strong> {modalContent.details.subject}</p>
                                    <p className="mb-0"><strong>Sent:</strong> {modalContent.details.timestamp}</p>
                                </div>
                            )}
                        </div>
                        <button 
                            className="btn btn-main"
                            onClick={closeModal}
                        >
                            <i className="las la-thumbs-up me-2"></i>
                            Great, Thanks!
                        </button>
                    </div>
                );
            
            case 'error':
                return (
                    <div className="text-center">
                        <div className="mb-4">
                            <div className="error-icon mb-3">
                                <i className="las la-exclamation-triangle" style={{fontSize: '4rem', color: '#ef4444'}}></i>
                            </div>
                            <p className="mb-4">{modalContent.message}</p>
                            {modalContent.details && (
                                <div className="bg-light p-3 rounded text-start">
                                    <h6 className="mb-2">Error Details:</h6>
                                    <p className="mb-1"><strong>Error:</strong> {modalContent.details.error}</p>
                                    <p className="mb-0"><strong>Time:</strong> {modalContent.details.timestamp}</p>
                                </div>
                            )}
                        </div>
                        <div className="d-flex gap-2 justify-content-center">
                            <button 
                                className="btn btn-outline-secondary"
                                onClick={closeModal}
                            >
                                <i className="las la-times me-2"></i>
                                Close
                            </button>
                            <button 
                                className="btn btn-main"
                                onClick={() => {
                                    closeModal();
                                    // Optionally scroll back to form
                                    document.querySelector('.contact-form__form').scrollIntoView({ behavior: 'smooth' });
                                }}
                            >
                                <i className="las la-redo me-2"></i>
                                Try Again
                            </button>
                        </div>
                    </div>
                );
            
            default:
                return null;
        }
    };

    return (
        <>
            
            {/* Success/Error/Loading Modal */}
            <Modal
                isOpen={showModal}
                onClose={closeModal}
                title={modalContent.title}
                size="medium"
                className={`modal-${modalContent.type}`}
                closeOnOverlayClick={modalContent.type !== 'loading'}
                showCloseButton={modalContent.type !== 'loading'}
            >
                {renderModalContent()}
            </Modal>
            
            <section className="contact-us-section padding-b-120">
                <div className="container container-two">
                    <div className="contact-form bg-white">  
                        <div className="section-heading">
                            <span className="section-heading__subtitle bg-gray-100"> 
                                <span className="text-gradient fw-semibold">Contact us</span> 
                            </span>
                            <h2 className="section-heading__title">Do you have any question? </h2>
                            <p className="section-heading__desc">For your car we will do everything  advice, repairs and maintenance. We are the some preferred choice by many car owners because</p>
                        </div>
                        <div className="contact-form__form">

                            <form onSubmit={handleSubmit} className="contact-form__form">
                                <div className="row gy-4">
                                    <div className="col-sm-6 col-xs-6">
                                        <input 
                                            type="text" 
                                            className={`common-input ${errors.name ? 'is-invalid' : ''}`}
                                            name='name'
                                            value={formData.name}
                                            onChange={handleInputChange}
                                            placeholder="Your Name *"
                                            disabled={isLoading}
                                        />
                                        {errors.name && <span className="text-danger text-start d-block mt-1">{errors.name}</span>}
                                    </div>
                                    <div className="col-sm-6 col-xs-6">
                                        <input 
                                            type="email" 
                                            className={`common-input ${errors.email ? 'is-invalid' : ''}`}
                                            name='email'
                                            value={formData.email}
                                            onChange={handleInputChange}
                                            placeholder="Your E-mail *"
                                            disabled={isLoading}
                                        />
                                        {errors.email && <span className="text-danger text-start d-block mt-1">{errors.email}</span>}
                                    </div>
                                    <div className="col-sm-6 col-xs-6">
                                        <input 
                                            type="tel" 
                                            className={`common-input ${errors.phone ? 'is-invalid' : ''}`}
                                            name='phone'
                                            value={formData.phone}
                                            onChange={handleInputChange}
                                            placeholder="Phone Number"
                                            disabled={isLoading}
                                        />
                                        {errors.phone && <span className="text-danger text-start d-block mt-1">{errors.phone}</span>}
                                    </div>
                                    <div className="col-sm-6 col-xs-6">
                                        <input 
                                            type="text" 
                                            className="common-input"
                                            name='subject'
                                            value={formData.subject}
                                            onChange={handleInputChange}
                                            placeholder="Subject"
                                            disabled={isLoading}
                                        />
                                    </div>
                                    <div className="col-12">
                                        <textarea 
                                            className={`common-input ${errors.message ? 'is-invalid' : ''}`}
                                            name='message'
                                            value={formData.message}
                                            onChange={handleInputChange}
                                            placeholder="Your Message *"
                                            rows="5"
                                            disabled={isLoading}
                                        ></textarea>
                                        {errors.message && <span className="text-danger text-start d-block mt-1">{errors.message}</span>}
                                    </div>
                                    
                                    {/* Consent Checkboxes */}
                                    <div className="col-12">
                                        <div className="consent-checkboxes">
                                            <div className="form-check mb-3">
                                                <input 
                                                    className="form-check-input" 
                                                    type="checkbox" 
                                                    id="smsConsent"
                                                    name="smsConsent"
                                                    checked={formData.smsConsent}
                                                    onChange={handleInputChange}
                                                    disabled={isLoading}
                                                />
                                                <label className="form-check-label text-start" htmlFor="smsConsent">
                                                    <small>
                                                        I Consent to Receive SMS Notifications & Alerts from Mantra Group. 
                                                        Message frequency varies. Message & data rates may apply. 
                                                        Text HELP for assistance. You can reply STOP to unsubscribe at any time.
                                                    </small>
                                                </label>
                                            </div>
                                            
                                            <div className="form-check mb-3">
                                                <input 
                                                    className="form-check-input" 
                                                    type="checkbox" 
                                                    id="marketingConsent"
                                                    name="marketingConsent"
                                                    checked={formData.marketingConsent}
                                                    onChange={handleInputChange}
                                                    disabled={isLoading}
                                                />
                                                <label className="form-check-label text-start" htmlFor="marketingConsent">
                                                    <small>
                                                        I Consent to Receive Occasional Marketing Communication from Mantra Group.
                                                    </small>
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                    
                                    <div className="col-12">
                                        <button 
                                            type="submit" 
                                            className={`btn btn-main w-100 ${isLoading ? 'btn-loading' : ''}`}
                                            disabled={isLoading}
                                        >
                                            {isLoading ? (
                                                <>
                                                    <LoadingSpinner size="small" color="white" />
                                                    <span className="ms-2">Sending Message...</span>
                                                </>
                                            ) : (
                                                <>
                                                    <i className="las la-paper-plane me-2"></i>
                                                    Send Message
                                                </>
                                            )}
                                        </button>
                                    </div>
                                    <div className="col-12">
                                        <p className="text-muted text-center mb-0">
                                            <small>* Required fields</small>
                                        </p>
                                    </div>
                                </div>
                            </form>


                        </div>  
                    </div>
                </div>  
            </section>   
        </>
    );
};

export default ContactUsSection;