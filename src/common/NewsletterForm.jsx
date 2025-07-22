import React, { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import ServerlessEmailService from '../services/emailServiceServerless';
import { useSitemapUpdate } from '../hooks/useSitemapUpdate';

const NewsletterForm = (props) => {
    const [email, setEmail] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');
    const { updateSitemap } = useSitemapUpdate();

    // Initialize Nodemailer email service on component mount
    useEffect(() => {
        ServerlessEmailService.init();
    }, []);

    const validateEmail = (email) => {
        if (!email.trim()) {
            return 'Email is required';
        }
        if (!ServerlessEmailService.validateEmail(email)) {
            return 'Please enter a valid email address';
        }
        return '';
    };

    const handleInputChange = (e) => {
        const value = e.target.value;
        setEmail(value);
        
        // Clear error when user starts typing
        if (error) {
            setError('');
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        const emailError = validateEmail(email);
        if (emailError) {
            setError(emailError);
            toast.error(emailError, {
                theme: "colored",
            });
            return;
        }
        
        setIsLoading(true);
        
        try {
            const result = await ServerlessEmailService.subscribeToNewsletter(email);
            
            if (result.success) {
                setEmail('');
                setError('');
                toast.success(result.message || "Thank you! You have subscribed successfully.", {
                    theme: "colored",
                });
                
                // Update sitemap after successful newsletter subscription
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
            <form action="#" onSubmit={handleSubmit} className={`newsletter-content__form  d-flex align-items-start gap-2 ${props.formClass}`}>
                <div className="w-100">
                    <div className="position-relative w-100">
                        <input 
                            type="email" 
                            placeholder="Your Email"
                            name='email'
                            id='email'
                            onChange={handleInputChange}
                            value={email}
                            disabled={isLoading}
                            className={`common-input common-input--withLeftIcon w-100 ${props.inputClass} ${
                                error ? "is-invalid" : ""
                            }`}
                        />
                        <span className={`input-icon input-icon--left text-white font-20 line-height-1 ${props.iconClass}`}><i className="far fa-envelope"></i></span>
                    </div>
                    {error && (
                        <span className="text-danger text-start d-block">{error}</span>
                    )}
                </div>
                <button type="submit" className="btn btn-main text-uppercase flex-shrink-0" disabled={isLoading || !email.trim()}>
                    {isLoading ? (
                        <>
                            <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                            Subscribing...
                        </>
                    ) : (
                        <>Subscribe <span className="text">Now</span></>
                    )}
                </button>
            </form>   
        </>
    );
};

export default NewsletterForm;