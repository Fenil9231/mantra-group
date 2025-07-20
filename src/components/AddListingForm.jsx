import React, { useState } from 'react';
import { toast } from 'react-toastify';
import ServerlessEmailService from '../services/emailServiceServerless';
import { useSitemapUpdate } from '../hooks/useSitemapUpdate';

import ListingBasicInformation from '../common/ListingBasicInformation';
import ListingPropertyGallery from '../common/ListingPropertyGallery';
import ListingPropertyInformation from './ListingPropertyInformation';
import ListingContactDetails from '../common/ListingContactDetails';

const AddListingForm = () => {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const { updateSitemapAfterPropertyAdd } = useSitemapUpdate();
    const [formData, setFormData] = useState({
        propertyTitle: '',
        description: '',
        status: '',
        type: '',
        price: '',
        area: '',
        rooms: '',
        propertyId: '',
        areaSize: '',
        sizePrefix: '',
        landArea: '',
        bedrooms: '',
        bathrooms: '',
        garages: '',
        yearBuild: '',
        name: '',
        email: '',
        phone: ''
    });

    const handleInputChange = (e) => {
        const { id, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [id]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        try {
            // Send property listing using the dedicated method
            await ServerlessEmailService.sendPropertyListing(formData);
            
            // Update sitemap after successful property submission
            try {
                await updateSitemapAfterPropertyAdd({
                    title: formData.propertyTitle,
                    id: formData.propertyId || Date.now().toString(),
                    type: formData.type,
                    status: formData.status
                });
            } catch (sitemapError) {
                console.warn('Sitemap update failed:', sitemapError);
                // Don't fail the entire submission if sitemap update fails
            }
            
            toast.success('Property listing submitted successfully! We will review and contact you soon.');
            
            // Reset form
            setFormData({
                propertyTitle: '',
                description: '',
                status: '',
                type: '',
                price: '',
                area: '',
                rooms: '',
                propertyId: '',
                areaSize: '',
                sizePrefix: '',
                landArea: '',
                bedrooms: '',
                bathrooms: '',
                garages: '',
                yearBuild: '',
                name: '',
                email: '',
                phone: ''
            });
        } catch (error) {
            console.error('Error submitting property listing:', error);
            toast.error('Failed to submit property listing. Please try again.');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <>
            <form onSubmit={handleSubmit}>
                <ListingBasicInformation formData={formData} handleInputChange={handleInputChange} />
                <ListingPropertyGallery/>
                <ListingPropertyInformation formData={formData} handleInputChange={handleInputChange} />
                <ListingContactDetails formData={formData} handleInputChange={handleInputChange} />
                <button 
                    type="submit" 
                    className="btn btn-main w-100"
                    disabled={isSubmitting}
                >
                    {isSubmitting ? 'Submitting...' : 'Submit Property'}
                </button>
            </form>
        </>
    );
};

export default AddListingForm;