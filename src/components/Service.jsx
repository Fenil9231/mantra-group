import React from 'react';
import { Link } from 'react-router-dom';
import SectionHeading from '../common/SectionHeading';

const services = [
    {
        id: 1,
        icon: 'assets/images/icons/service1.svg',
        title: 'Property Management',
        text: 'Comprehensive property management services including tenant screening, rent collection, maintenance coordination, and regular property inspections to maximize your investment returns.',
        features: ['Tenant Screening', 'Rent Collection', 'Maintenance Coordination', 'Property Inspections'],
        btnText: 'Learn More',
        btnLink: '/services/property-management'
    },
    {
        id: 2,
        icon: 'assets/images/icons/service2.svg',
        title: 'Real Estate Consulting',
        text: 'Expert consultation services to help you make informed real estate decisions with market analysis, investment strategies, and personalized guidance.',
        features: ['Market Analysis', 'Investment Strategies', 'Property Valuation', 'Risk Assessment'],
        btnText: 'Learn More',
        btnLink: '/services/real-estate-consulting'
    },
    {
        id: 3,
        icon: 'assets/images/icons/service3.svg',
        title: 'Investment Analysis',
        text: 'Detailed investment analysis and portfolio optimization to maximize your real estate returns with comprehensive market research and financial modeling.',
        features: ['ROI Analysis', 'Market Research', 'Financial Modeling', 'Portfolio Optimization'],
        btnText: 'Learn More',
        btnLink: '/services/investment-analysis'
    },
    {
        id: 4,
        icon: 'fas fa-home',
        title: 'Property Sales',
        text: 'Expert assistance in buying and selling residential and commercial properties with comprehensive market analysis and skilled negotiation support.',
        features: ['Market Analysis', 'Property Listing', 'Negotiation Support', 'Transaction Management'],
        btnText: 'Learn More',
        btnLink: '/services/property-sales'
    },
    {
        id: 5,
        icon: 'fas fa-search',
        title: 'Property Search',
        text: 'Personalized property search services to help you find your dream home or investment property that perfectly matches your specific requirements.',
        features: ['Custom Search', 'Property Tours', 'Market Insights', 'Negotiation Assistance'],
        btnText: 'Learn More',
        btnLink: '/services/property-search'
    },
    {
        id: 6,
        icon: 'fas fa-file-contract',
        title: 'Legal Assistance',
        text: 'Professional guidance through all legal aspects of real estate transactions, contracts, documentation processes, and regulatory compliance.',
        features: ['Contract Review', 'Legal Documentation', 'Compliance Support', 'Transaction Security'],
        btnText: 'Learn More',
        btnLink: '/services/legal-assistance'
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
                                const isIconClass = service.icon.startsWith('fas');
                                return (
                                    <div className="col-lg-4 col-md-6" key={service.id}>
                                        <div className="service-item h-100 d-flex flex-column">
                                            <div className="service-item__icon mb-3">
                                                {isIconClass ? (
                                                    <i className={service.icon}></i>
                                                ) : (
                                                    <img src={service.icon} alt={service.title} />
                                                )}
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
                                            
                                            <Link to={service.btnLink} className="btn btn-outline-main btn-sm mt-auto">
                                                {service.btnText}
                                                <span className="icon-right ms-2">
                                                    <i className="fas fa-arrow-right"></i>
                                                </span>
                                            </Link>
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