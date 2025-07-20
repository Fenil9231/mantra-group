import React, { useState, useEffect } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import ServerlessEmailService from '../services/emailServiceServerless';
import { useSitemapUpdate } from '../hooks/useSitemapUpdate';

const ContactUsSection = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
    });
    const [isLoading, setIsLoading] = useState(false);
    const [errors, setErrors] = useState({});
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
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
        
        // Clear error when user starts typing
        if (errors[name]) {
            setErrors(prev => ({
                ...prev,
                [name]: ''
            }));
        }
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
        
        try {
            const result = await ServerlessEmailService.sendContactForm({
                name: formData.name,
                email: formData.email,
                phone: formData.phone,
                subject: formData.subject,
                message: formData.message
            });
            
            if (result.success) {
                setFormData({
                    name: '',
                    email: '',
                    phone: '',
                    subject: '',
                    message: ''
                });
                toast.success(result.message || "Thank you! Your message has been sent successfully.", {
                    theme: "colored",
                });
                
                // Update sitemap after successful contact form submission
                updateSitemap();
            }
        } catch (error) {
            toast.error(error.message || "Something went wrong! Please try again later.", {
                theme: "colored",
            });
        } finally {
            setIsLoading(false);
        }
    };
    
    return (
        <>
            <ToastContainer/>
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
                                    <div className="col-12">
                                        <button 
                                            type="submit" 
                                            className="btn btn-main w-100"
                                            disabled={isLoading}
                                        >
                                            {isLoading ? (
                                                <>
                                                    <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                                                    Sending...
                                                </>
                                            ) : (
                                                'Submit Now'
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