// Serverless Email Service using Nodemailer API
// Backend API required - uses serverless functions

import { toast } from 'react-toastify';

// Email Service Configuration
const EMAIL_CONFIG = {
    // API endpoint for serverless email function
    apiEndpoint: import.meta.env.VITE_EMAIL_API_ENDPOINT || '/api/send-email',
    // Company Information
    adminEmail: import.meta.env.VITE_ADMIN_EMAIL || 'admin@example.com',
    fromName: import.meta.env.VITE_FROM_NAME || 'Website Contact',
    companyName: import.meta.env.VITE_COMPANY_NAME || 'Mantra Group',
    siteUrl: import.meta.env.VITE_SITE_URL || window.location.origin
};

// Check if configuration is properly set
const isConfigured = () => {
    return EMAIL_CONFIG.apiEndpoint !== '/api/send-email' ||
           EMAIL_CONFIG.adminEmail !== 'admin@example.com';
};

// Log configuration status in development
if (import.meta.env.DEV) {
    console.log('Email Service Configuration Status:', isConfigured() ? 'Configured' : 'Using defaults');
    console.log('API Endpoint:', EMAIL_CONFIG.apiEndpoint);
}

class ServerlessEmailService {
    // Initialize service
    static init() {
        console.log('Nodemailer Email Service initialized');
        return true;
    }

    // Check if service is properly configured
    static isConfigured() {
        return isConfigured();
    }

    // Validate email format
    static validateEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    // Generic API call method
    static async callEmailAPI(type, data) {
        try {
            const response = await fetch(EMAIL_CONFIG.apiEndpoint, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    type,
                    data: {
                        ...data,
                        company_name: EMAIL_CONFIG.companyName,
                        site_url: EMAIL_CONFIG.siteUrl,
                        admin_email: EMAIL_CONFIG.adminEmail
                    }
                })
            });

            const result = await response.json();

            if (!response.ok) {
                throw new Error(result.error || `HTTP error! status: ${response.status}`);
            }

            return result;
        } catch (error) {
            console.error('Email API Error:', error);
            throw error;
        }
    }

    // Send contact form
    static async sendContactForm(formData) {
        try {
            // Validate required fields
            if (!formData.name || !formData.email || !formData.message) {
                throw new Error('Name, email, and message are required fields.');
            }

            // Validate email format
            if (!this.validateEmail(formData.email)) {
                throw new Error('Please provide a valid email address.');
            }

            // Call API
            const result = await this.callEmailAPI('contact', {
                name: formData.name,
                email: formData.email,
                phone: formData.phone || '',
                subject: formData.subject || 'Contact Form Submission',
                message: formData.message
            });

            // Show success toast
            if (typeof toast !== 'undefined') {
                toast.success('Your message has been sent successfully!');
            }

            return {
                success: true,
                message: 'Your message has been sent successfully! We will get back to you soon.'
            };

        } catch (error) {
            console.error('Contact form error:', error);

            // Show error toast
            if (typeof toast !== 'undefined') {
                toast.error(error.message || 'Failed to send message. Please try again later.');
            }

            throw new Error(error.message || 'Failed to send message. Please try again later.');
        }
    }

    // Send property listing form
    static async sendPropertyListing(formData) {
        try {
            // Validate required fields
            if (!formData.name || !formData.email) {
                throw new Error('Name and email are required fields.');
            }

            // Validate email format
            if (!this.validateEmail(formData.email)) {
                throw new Error('Please provide a valid email address.');
            }

            // Call API
            const result = await this.callEmailAPI('propertyListing', {
                name: formData.name,
                email: formData.email,
                phone: formData.phone || '',
                propertyTitle: formData.propertyTitle || '',
                description: formData.description || '',
                status: formData.status || '',
                type: formData.type || '',
                price: formData.price || '',
                area: formData.area || '',
                rooms: formData.rooms || '',
                propertyId: formData.propertyId || '',
                areaSize: formData.areaSize || '',
                sizePrefix: formData.sizePrefix || '',
                landArea: formData.landArea || '',
                bedrooms: formData.bedrooms || '',
                bathrooms: formData.bathrooms || '',
                garages: formData.garages || '',
                yearBuild: formData.yearBuild || ''
            });

            return {
                success: true,
                message: 'Property listing submitted successfully! We will review and contact you soon.'
            };

        } catch (error) {
            console.error('Error sending property listing:', error);
            throw error;
        }
    }

    // Send quote request form
    static async sendQuoteRequest(formData) {
        try {
            // Validate required fields
            if (!formData.name || !formData.email || !formData.message) {
                throw new Error('Name, email, and message are required fields.');
            }

            // Validate email format
            if (!this.validateEmail(formData.email)) {
                throw new Error('Please provide a valid email address.');
            }

            // Call API
            const result = await this.callEmailAPI('contact', {
                name: formData.name,
                email: formData.email,
                phone: formData.phone || '',
                subject: 'Quote Request',
                message: formData.message
            });

            return {
                success: true,
                message: 'Quote request sent successfully! We will get back to you soon.'
            };

        } catch (error) {
            console.error('Error sending quote request:', error);
            throw error;
        }
    }

    // Subscribe to newsletter
    static async subscribeToNewsletter(email, name = '') {
        try {
            // Validate email
            if (!email) {
                throw new Error('Email is required.');
            }

            if (!this.validateEmail(email)) {
                throw new Error('Please provide a valid email address.');
            }

            // Call API
            const result = await this.callEmailAPI('newsletter', {
                email: email,
                name: name || 'Newsletter Subscriber'
            });

            // Show success toast
            if (typeof toast !== 'undefined') {
                toast.success('Successfully subscribed to newsletter!');
            }

            return {
                success: true,
                message: 'Successfully subscribed to newsletter! Welcome aboard.'
            };

        } catch (error) {
            console.error('Error subscribing to newsletter:', error);

            // Show error toast
            if (typeof toast !== 'undefined') {
                toast.error(error.message || 'Failed to subscribe. Please try again later.');
            }

            throw new Error(error.message || 'Failed to subscribe. Please try again later.');
        }
    }

    // Send auto-reply (internal method)
    static async sendAutoReply(formData) {
        // Auto-reply is handled by the API endpoint
        // This method is kept for compatibility
        return Promise.resolve(true);
    }

    // Send welcome email (internal method)
    static async sendWelcomeEmail(email, name = '') {
        // Welcome email is handled by the API endpoint
        // This method is kept for compatibility
        return Promise.resolve(true);
    }

    // Check configuration (alias for isConfigured)
    static checkConfiguration() {
        return this.isConfigured();
    }

    // Send bulk emails (for future use)
    static async sendBulkEmails(emailList, subject, message) {
        try {
            const results = [];
            
            for (const email of emailList) {
                if (this.validateEmail(email)) {
                    try {
                        const result = await this.callEmailAPI('contact', {
                            name: 'Subscriber',
                            email: email,
                            subject: subject,
                            message: message
                        });
                        results.push({ email, success: true });
                    } catch (error) {
                        results.push({ email, success: false, error: error.message });
                    }
                }
            }

            return {
                success: true,
                results: results,
                message: `Bulk email sent to ${results.filter(r => r.success).length} recipients`
            };

        } catch (error) {
            console.error('Error sending bulk emails:', error);
            throw error;
        }
    }

    // Test email configuration
    static async testConfiguration() {
        try {
            const result = await this.callEmailAPI('contact', {
                name: 'Test User',
                email: EMAIL_CONFIG.adminEmail,
                subject: 'Email Service Test',
                message: 'This is a test email to verify the email service configuration.'
            });

            return {
                success: true,
                message: 'Email service is working correctly!'
            };

        } catch (error) {
            console.error('Email service test failed:', error);
            return {
                success: false,
                message: error.message || 'Email service test failed'
            };
        }
    }

    // Get service status
    static getServiceStatus() {
        return {
            configured: this.isConfigured(),
            apiEndpoint: EMAIL_CONFIG.apiEndpoint,
            adminEmail: EMAIL_CONFIG.adminEmail,
            companyName: EMAIL_CONFIG.companyName,
            provider: 'Nodemailer (Serverless)'
        };
    }
}

export default ServerlessEmailService;