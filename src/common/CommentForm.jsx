import React, { useState } from 'react';
import { toast } from 'react-toastify';
import { useSitemapUpdate } from '../hooks/useSitemapUpdate';

const CommentForm = () => {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [formData, setFormData] = useState({
        userName: '',
        email: '',
        message: ''
    });
    const { updateSitemap } = useSitemapUpdate();

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        try {
            // Simulate comment submission (replace with actual API call)
            await new Promise(resolve => setTimeout(resolve, 1000));
            
            // Update sitemap after successful comment submission
            try {
                await updateSitemap();
            } catch (sitemapError) {
                console.warn('Sitemap update failed:', sitemapError);
                // Don't fail the entire submission if sitemap update fails
            }
            
            toast.success('Comment submitted successfully!');
            
            // Reset form
            setFormData({
                userName: '',
                email: '',
                message: ''
            });
        } catch (error) {
            console.error('Error submitting comment:', error);
            toast.error('Failed to submit comment. Please try again.');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <>
            <div className="comment-form" id="comment-box">
                <h5 className="comment-form__title"> Leave a Comment </h5>
                <p className="comment-form__desc"> By using form u agree with the message sorage, you can contact us directly now By using form agree with the message sorage, you can contact us directly now </p>
                <form onSubmit={handleSubmit} autoComplete="off">
                    <div className="row gy-4">
                        <div className="col-sm-6">
                            <input 
                                type="text" 
                                name="userName"
                                className="common-input common-input--grayBg" 
                                placeholder="User Name"
                                value={formData.userName}
                                onChange={handleInputChange}
                                required
                            />
                        </div>
                        <div className="col-sm-6">
                            <input 
                                type="email" 
                                name="email"
                                className="common-input common-input--grayBg" 
                                placeholder="Email Address"
                                value={formData.email}
                                onChange={handleInputChange}
                                required
                            />
                        </div>
                        <div className="col-sm-12">
                            <textarea 
                                name="message"
                                className="common-input common-input--grayBg" 
                                placeholder="Your Message"
                                value={formData.message}
                                onChange={handleInputChange}
                                required
                            ></textarea>
                        </div>
                        <div className="col-sm-12">
                            <button 
                                type="submit"
                                className="btn btn-main w-100"
                                disabled={isSubmitting}
                            > 
                                {isSubmitting ? 'Submitting...' : 'Send Message'}
                            </button>
                        </div>
                    </div>
                </form>
            </div>   
        </>
    );
};

export default CommentForm;