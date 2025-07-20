import React, { useState } from 'react';
import { toast } from 'react-toastify';
import ServerlessEmailService from '../services/emailServiceServerless';
import { useSitemapUpdate } from '../hooks/useSitemapUpdate';

const NewsletterFooter = () => {
    const [email, setEmail] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const { updateSitemap } = useSitemapUpdate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        if (!email.trim()) {
            toast.error('Please enter your email address');
            return;
        }

        if (!ServerlessEmailService.validateEmail(email)) {
            toast.error('Please enter a valid email address');
            return;
        }

        setIsLoading(true);
        
        try {
            const result = await ServerlessEmailService.subscribeToNewsletter(email);
            
            if (result.success) {
                setEmail('');
                toast.success(result.message || 'Thank you for subscribing!');
                
                // Update sitemap after successful newsletter subscription
                updateSitemap();
            }
        } catch (error) {
            toast.error(error.message || 'Failed to subscribe. Please try again.');
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="footer-top flx-between gap-3">
            <div className="footer-top__left">
                <span className="icon">
                    <img src="/assets/images/icons/envelop-icon.svg" alt=""/>
                </span>
                <h2 className="text text-white mb-0">Subscribe to My newsletter</h2>
            </div>
            <form onSubmit={handleSubmit} className="subscribe-form d-flex align-items-center gap-3">
                <div className="position-relative w-100">
                    <input 
                        type="email" 
                        className="common-input common-input--withLeftIcon w-100" 
                        placeholder="Enter Your Email Address"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        disabled={isLoading}
                    />
                    <span className="input-icon input-icon--left text-gradient font-20 line-height-1"><i className="far fa-envelope"></i></span>
                </div>
                <button type="submit" className="btn btn-main flex-shrink-0 fw-normal" disabled={isLoading}>
                    {isLoading ? 'Subscribing...' : 'Subscribe'}
                </button>
            </form>
        </div>
    );
};

export default NewsletterFooter;