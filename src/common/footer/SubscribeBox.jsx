import React, { useState } from 'react';
import { toast } from 'react-toastify';
import ServerlessEmailService from '../../services/emailServiceServerless';
import { useSitemapUpdate } from '../../hooks/useSitemapUpdate';

const SubscribeBox = () => {
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
        <>
            <form onSubmit={handleSubmit} className="mt-4 subscribe-box">
                <div className="input-group">
                    <input 
                        type="email" 
                        className="form-control common-input common-input--md text-white" 
                        placeholder="Your mail address"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        disabled={isLoading}
                    />
                    <button type="submit" className="px-4 input-group-text bg--gradient border-0 text-white" disabled={isLoading}>
                        {isLoading ? <i className="fas fa-spinner fa-spin"></i> : <i className="fas fa-paper-plane"></i>}
                    </button>
                </div>
            </form>   
        </>
    );
};

export default SubscribeBox;