import React from 'react';
import { Link } from 'react-router-dom';
import SectionHeading from '../common/SectionHeading';

const services = [
    {
        id: 1,
        icon: 'fas fa-home',
        title: 'Residential Sales',
        text: 'Expert guidance in buying and selling residential properties with comprehensive market analysis, professional marketing, and skilled negotiation to achieve optimal results.',
        features: ['Market Analysis', 'Professional Marketing', 'Skilled Negotiation', 'Transaction Management'],

    },
    {
        id: 2,
        icon: 'fas fa-building',
        title: 'Commercial Real Estate',
        text: 'Specialized commercial property services for office spaces, retail locations, and industrial properties with strategic guidance for business expansion and relocation.',
        features: ['Commercial Analysis', 'Business Consultation', 'Lease Negotiation', 'Investment Strategy'],

    },
    {
        id: 3,
        icon: 'fas fa-chart-line',
        title: 'Investment Advisory',
        text: 'Comprehensive investment analysis and portfolio optimization with detailed market research, financial modeling, and strategic recommendations for maximum returns.',
        features: ['ROI Analysis', 'Market Research', 'Portfolio Strategy', 'Risk Assessment'],

    },
    {
        id: 4,
        icon: 'fas fa-tools',
        title: 'Property Management',
        text: 'Full-service property management including tenant screening, rent collection, maintenance coordination, and regular inspections to maximize investment returns.',
        features: ['Tenant Screening', 'Rent Collection', 'Maintenance Services', 'Property Inspections'],

    },
    {
        id: 5,
        icon: 'fas fa-handshake',
        title: 'Buyer Representation',
        text: 'Personalized buyer services to help you find your perfect property with custom search criteria, property tours, market insights, and negotiation assistance.',
        features: ['Custom Property Search', 'Market Insights', 'Property Tours', 'Negotiation Support'],

    },
    {
        id: 6,
        icon: 'fas fa-user-tie',
        title: 'Real Estate Consulting',
        text: 'Professional consultation services providing expert guidance on market trends, property valuation, investment strategies, and regulatory compliance.',
        features: ['Market Analysis', 'Property Valuation', 'Strategic Planning', 'Compliance Guidance'],

    }
];

const Service = () => {
    return (
        <>
            <section className="service padding-y-120">
                <div className="container container-two">
                    {/* Section Heading */}
                    <div className="row">
                        <div className="col-lg-8 mx-auto">
                            <SectionHeading
                                headingClass="text-center"  
                                subtitle="Our Services"
                                subtitleClass="bg-white" 
                                title="Comprehensive Real Estate Solutions" 
                                renderDesc={true}
                                desc="We provide a full range of professional real estate services to help you achieve your property goals with confidence and success."
                                renderButton={false}
                            />
                        </div>
                    </div>
                    
                    {/* Services Grid */}
                    <div className="row gy-4 mt-4">
                        {   
                            services.map((service, index) => {
                                return (
                                    <div className="col-lg-4 col-md-6" key={service.id}>
                                        <div className="service-item h-100 d-flex flex-column">
                                            <div className="service-item__icon mb-3">
                                <i className={service.icon}></i>
                            </div>
                                            <h5 className="service-item__title mb-3">{service.title}</h5>
                                            <p className="service-item__text mb-3 flex-grow-1">{service.text}</p>
                                            
                                            {/* Service Features */}
                                            <ul className="service-features mb-4">
                                                {service.features.map((feature, idx) => (
                                                    <li key={idx} className="service-features__item">
                                                        <i className="fas fa-check text-gradient me-2"></i>
                                                        <span>{feature}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                            

                                        </div>
                                    </div>
                                )
                            })   
                        }
                    </div>
                </div>
            </section>
        </>
    );
};

export default Service;