import React from 'react';
import { useParams } from 'react-router-dom';
import Header from '../common/Header';
import Footer from '../common/Footer';
import Breadcrumb from '../common/Breadcrumb';
import SEOHead from '../components/SEOHead';
import SectionHeading from '../common/SectionHeading';
import Cta from '../components/Cta';
import Counter from '../components/Counter';
import Testimonial from '../components/Testimonial';
import PropertyTypeThree from '../components/PropertyTypeThree';

const serviceDetails = {
    'property-management': {
        title: 'Property Management Services',
        subtitle: 'Professional Property Management',
        description: 'Comprehensive property management solutions designed to maximize your investment returns while minimizing your involvement in day-to-day operations. Our expert team handles everything from tenant screening to maintenance coordination, ensuring your property generates optimal income.',
        metaDescription: 'Professional property management services in Toronto. Expert tenant screening, rent collection, maintenance coordination, and property inspections. Maximize your rental income with Mantra Group.',
        keywords: ['property management Toronto', 'rental property management', 'tenant screening', 'rent collection', 'property maintenance', 'real estate investment'],
        image: 'assets/images/thumbs/property-details-img.png',
        stats: [
            { number: '500+', label: 'Properties Managed' },
            { number: '98%', label: 'Tenant Satisfaction' },
            { number: '24/7', label: 'Emergency Support' },
            { number: '15+', label: 'Years Experience' }
        ],
        features: [
            {
                title: 'Professional Tenant Screening',
                description: 'Comprehensive background checks, credit verification, employment verification, and reference checks to ensure quality tenants for your property.',
                icon: 'fas fa-user-check'
            },
            {
                title: 'Automated Rent Collection',
                description: 'Streamlined rent collection system with online payments, late fee management, and detailed financial reporting for maximum efficiency.',
                icon: 'fas fa-money-bill-wave'
            },
            {
                title: '24/7 Maintenance Coordination',
                description: 'Round-the-clock maintenance support with vetted contractors, emergency response, and preventive maintenance scheduling.',
                icon: 'fas fa-tools'
            },
            {
                title: 'Property Inspections',
                description: 'Regular property inspections, move-in/move-out documentation, and condition reports to protect your investment.',
                icon: 'fas fa-clipboard-check'
            },
            {
                title: 'Financial Reporting',
                description: 'Detailed monthly financial statements, expense tracking, tax preparation support, and investment performance analysis.',
                icon: 'fas fa-chart-line'
            },
            {
                title: 'Legal Compliance',
                description: 'Stay compliant with local rental laws, lease agreements, eviction procedures, and tenant rights regulations.',
                icon: 'fas fa-shield-alt'
            }
        ],
        benefits: [
            'Maximize rental income through competitive pricing strategies and efficient operations',
            'Reduce vacancy rates with professional marketing and tenant retention programs',
            'Save time and stress with professional handling of all tenant communications and issues',
            'Comprehensive financial reporting with detailed income and expense tracking',
            'Legal compliance and risk management to protect your investment',
            'Access to vetted contractors and competitive maintenance pricing',
            'Emergency response services available 24/7 for urgent issues',
            'Regular property inspections to maintain and improve property condition',
            'Professional lease agreements and tenant documentation',
            'Market analysis and rent optimization to ensure competitive returns'
        ],
        process: [
            {
                step: '1',
                title: 'Initial Property Assessment',
                description: 'Comprehensive evaluation of your property including market analysis, condition assessment, and development of a customized management strategy tailored to your investment goals.'
            },
            {
                step: '2',
                title: 'Professional Marketing & Tenant Screening',
                description: 'Strategic marketing across multiple platforms, professional photography, and rigorous tenant screening including credit checks, employment verification, and reference validation.'
            },
            {
                step: '3',
                title: 'Lease Agreement & Move-in',
                description: 'Professional lease preparation, move-in coordination, security deposit handling, and comprehensive property documentation to protect your interests.'
            },
            {
                step: '4',
                title: 'Ongoing Management & Support',
                description: 'Continuous rent collection, maintenance coordination, regular inspections, financial reporting, and 24/7 emergency support for optimal property performance.'
            }
        ],
        faqs: [
            {
                question: 'What is included in your property management fee?',
                answer: 'Our comprehensive fee includes tenant screening, rent collection, maintenance coordination, financial reporting, legal compliance, and 24/7 emergency support. No hidden fees or surprise charges.'
            },
            {
                question: 'How do you screen potential tenants?',
                answer: 'We conduct thorough background checks, credit verification, employment verification, previous landlord references, and income verification to ensure quality tenants for your property.'
            },
            {
                question: 'How quickly can you fill a vacant property?',
                answer: 'With our professional marketing strategy and extensive network, we typically fill vacant properties within 30 days, though this can vary based on market conditions and property specifics.'
            },
            {
                question: 'Do you handle emergency maintenance requests?',
                answer: 'Yes, we provide 24/7 emergency maintenance support with a network of vetted contractors. Emergency issues are addressed immediately to protect your property and ensure tenant satisfaction.'
            }
        ]
    },
    'real-estate-consulting': {
        title: 'Real Estate Consulting Services',
        subtitle: 'Expert Real Estate Consultation',
        description: 'Strategic real estate consulting to help you make informed decisions and maximize your investment potential in the Toronto market. Our experienced consultants provide comprehensive market analysis, investment strategies, and personalized guidance for all your real estate needs.',
        metaDescription: 'Expert real estate consulting services in Toronto. Market analysis, investment strategies, property valuation, and strategic planning. Make informed real estate decisions with Mantra Group.',
        keywords: ['real estate consulting Toronto', 'property investment advice', 'market analysis', 'real estate strategy', 'property valuation', 'investment planning'],
        image: 'assets/images/thumbs/property-details-img.png',
        stats: [
            { number: '1000+', label: 'Successful Consultations' },
            { number: '95%', label: 'Client Satisfaction' },
            { number: '$50M+', label: 'Deals Facilitated' },
            { number: '20+', label: 'Years Experience' }
        ],
        features: [
            {
                title: 'Comprehensive Market Analysis',
                description: 'In-depth market research, trend analysis, neighborhood comparisons, and future growth projections to identify the best investment opportunities.',
                icon: 'fas fa-chart-line'
            },
            {
                title: 'Strategic Investment Planning',
                description: 'Customized investment strategies tailored to your financial goals, risk tolerance, and timeline for maximum returns and portfolio growth.',
                icon: 'fas fa-lightbulb'
            },
            {
                title: 'Financial Analysis & Projections',
                description: 'Detailed ROI calculations, cash flow analysis, financing options, and long-term financial projections for informed decision-making.',
                icon: 'fas fa-calculator'
            },
            {
                title: 'Property Valuation Services',
                description: 'Professional property appraisals, comparative market analysis, and valuation reports for accurate pricing strategies.',
                icon: 'fas fa-home'
            },
            {
                title: 'Negotiation Support',
                description: 'Expert negotiation strategies and representation to secure the best deals and terms for your real estate transactions.',
                icon: 'fas fa-handshake'
            },
            {
                title: 'Location Intelligence',
                description: 'Detailed area analysis including demographics, amenities, transportation, schools, and future development plans.',
                icon: 'fas fa-map-marked-alt'
            }
        ],
        benefits: [
            'Make data-driven investment decisions with comprehensive market intelligence',
            'Maximize return on investment through strategic planning and expert guidance',
            'Minimize risks with thorough market analysis and professional risk assessment',
            'Optimize market timing for buying, selling, or investing in real estate',
            'Access to exclusive market insights and off-market opportunities',
            'Professional negotiation support to secure the best deals and terms',
            'Customized strategies tailored to your specific financial goals and timeline',
            'Ongoing support and consultation throughout your real estate journey',
            'Network access to trusted professionals including lawyers, inspectors, and contractors',
            'Stay ahead of market trends with regular updates and strategic adjustments'
        ],
        process: [
            {
                step: 1,
                title: 'Initial Consultation & Goal Setting',
                description: 'Comprehensive discussion of your investment goals, financial situation, risk tolerance, timeline, and preferences to create a personalized consultation framework.'
            },
            {
                step: 2,
                title: 'Market Research & Analysis',
                description: 'In-depth market analysis including current trends, neighborhood comparisons, pricing strategies, and identification of optimal investment opportunities.'
            },
            {
                step: 3,
                title: 'Strategic Planning & Recommendations',
                description: 'Development of a customized investment strategy with detailed recommendations, financial projections, and risk assessment tailored to your specific needs.'
            },
            {
                step: 4,
                title: 'Implementation & Ongoing Support',
                description: 'Hands-on support during implementation including property selection, negotiation assistance, and continuous monitoring with regular strategy updates.'
            }
        ],
        faqs: [
            {
                question: 'What types of real estate consulting services do you offer?',
                answer: 'We offer comprehensive consulting including market analysis, investment strategy development, property valuation, risk assessment, negotiation support, and ongoing portfolio management for both residential and commercial properties.'
            },
            {
                question: 'How do you determine the best investment strategy for my situation?',
                answer: 'We analyze your financial goals, risk tolerance, timeline, and market conditions to create a customized strategy. Our approach includes detailed market research, financial projections, and ongoing adjustments based on market changes.'
            },
            {
                question: 'Do you provide ongoing support after the initial consultation?',
                answer: 'Yes, we offer ongoing consultation services including regular market updates, strategy adjustments, and support for new investment opportunities. Our relationship continues beyond the initial consultation.'
            },
            {
                question: 'What makes your consulting services different from others?',
                answer: 'Our deep local market knowledge, data-driven approach, personalized strategies, and comprehensive support throughout the entire process set us apart. We focus on long-term relationships and your success.'
            }
        ]
    },
    'investment-analysis': {
        title: 'Investment Analysis Services',
        subtitle: 'Professional Investment Analysis',
        description: 'Detailed financial analysis and investment modeling to help you make profitable real estate investment decisions with comprehensive ROI calculations, risk assessment, and market projections for informed investment strategies.',
        metaDescription: 'Professional real estate investment analysis in Toronto. ROI calculations, market projections, risk assessment, and financial modeling. Make smart property investments with expert analysis.',
        keywords: ['investment analysis Toronto', 'real estate ROI', 'property investment calculator', 'market analysis', 'financial modeling', 'investment strategy'],
        image: 'assets/images/thumbs/property-details-img.png',
        stats: [
            { number: '200+', label: 'Investments Analyzed' },
            { number: '85%', label: 'Profitable Recommendations' },
            { number: '$25M+', label: 'Investment Value' },
            { number: '12%', label: 'Average ROI' }
        ],
        features: [
            {
                title: 'Comprehensive ROI Analysis',
                description: 'Detailed return on investment calculations, cash flow projections, and profitability analysis with multiple scenarios and sensitivity testing.',
                icon: 'fas fa-percentage'
            },
            {
                title: 'Risk Assessment & Mitigation',
                description: 'Thorough risk evaluation including market risks, financial risks, and property-specific risks with strategic mitigation recommendations.',
                icon: 'fas fa-balance-scale'
            },
            {
                title: 'Market Projections & Trends',
                description: 'Future market trends analysis, growth potential assessment, and long-term investment outlook based on comprehensive market data.',
                icon: 'fas fa-trending-up'
            },
            {
                title: 'Advanced Financial Modeling',
                description: 'Advanced financial models including DCF analysis, NPV calculations, IRR computations, and break-even analysis for accurate investment evaluation.',
                icon: 'fas fa-chart-bar'
            },
            {
                title: 'Location Analysis',
                description: 'Detailed location assessment including neighborhood growth potential, infrastructure development, and demographic trends affecting property values.',
                icon: 'fas fa-map-marked-alt'
            },
            {
                title: 'Investment Reports',
                description: 'Comprehensive investment reports with executive summaries, detailed analysis, recommendations, and actionable insights for decision-making.',
                icon: 'fas fa-file-alt'
            }
        ],
        benefits: [
            'Maximize investment returns through data-driven analysis and strategic recommendations',
            'Minimize investment risks with comprehensive risk assessment and mitigation strategies',
            'Make informed decisions based on professional market insights and financial modeling',
            'Access to exclusive market data and proprietary analysis tools',
            'Identify undervalued properties and emerging market opportunities',
            'Optimize investment timing with market cycle analysis and trend forecasting',
            'Compare multiple investment options with standardized evaluation criteria',
            'Understand tax implications and optimize investment structure for maximum returns',
            'Receive ongoing monitoring and portfolio performance analysis',
            'Professional guidance from experienced investment analysts and market experts'
        ],
        process: [
            {
                step: '1',
                title: 'Initial Investment Consultation',
                description: 'Comprehensive discussion of your investment goals, risk tolerance, budget constraints, and timeline. We analyze your current portfolio and identify investment objectives to create a customized analysis framework.'
            },
            {
                step: '2',
                title: 'Property & Market Research',
                description: 'In-depth market research including comparable sales analysis, rental market assessment, neighborhood trends, and economic indicators. We gather comprehensive data on target properties and market conditions.'
            },
            {
                step: '3',
                title: 'Financial Analysis & Modeling',
                description: 'Advanced financial modeling including cash flow projections, ROI calculations, NPV analysis, and sensitivity testing. We create multiple scenarios to assess investment performance under various market conditions.'
            },
            {
                step: '4',
                title: 'Risk Assessment & Due Diligence',
                description: 'Comprehensive risk evaluation including market risks, property-specific risks, and financial risks. We conduct thorough due diligence and develop risk mitigation strategies.'
            },
            {
                step: '5',
                title: 'Investment Report & Recommendations',
                description: 'Detailed investment analysis report with executive summary, findings, recommendations, and actionable insights. We present clear investment strategies and next steps for decision-making.'
            },
            {
                step: '6',
                title: 'Ongoing Support & Monitoring',
                description: 'Continued support with investment implementation, performance monitoring, and market updates. We provide ongoing analysis and recommendations to optimize your investment portfolio.'
            }
        ],
        faqs: [
            {
                question: 'How long does an investment analysis take?',
                answer: 'A comprehensive investment analysis typically takes 5-10 business days, depending on the complexity of the investment and availability of market data. Rush analysis can be completed in 2-3 days for an additional fee.'
            },
            {
                question: 'What information do I need to provide?',
                answer: 'We need details about the target property, your investment goals, budget, financing options, and risk tolerance. Property addresses, financial statements, and any existing analysis are helpful but not required.'
            },
            {
                question: 'Do you analyze both residential and commercial properties?',
                answer: 'Yes, we provide investment analysis for all property types including residential, commercial, industrial, and mixed-use properties. Our team has expertise across all real estate sectors.'
            },
            {
                question: 'What makes your analysis different from online calculators?',
                answer: 'Our analysis goes beyond basic calculations to include market research, risk assessment, location analysis, and professional insights. We provide customized recommendations based on current market conditions and your specific situation.'
            },
            {
                question: 'Can you help with investment strategy and portfolio planning?',
                answer: 'Absolutely! We provide strategic investment planning, portfolio optimization, and long-term investment strategies. Our analysis includes recommendations for building and managing a profitable real estate portfolio.'
            }
        ]
    },
    'property-sales': {
        title: 'Property Sales Services',
        subtitle: 'Expert Property Sales',
        description: 'Professional property sales services with expert market knowledge and skilled negotiation to achieve the best outcomes for buyers and sellers. Our comprehensive approach includes strategic marketing, pricing analysis, and full transaction support.',
        metaDescription: 'Professional property sales services in Toronto. Expert real estate agents, marketing strategies, pricing analysis, and negotiation support. Sell your property fast at the best price.',
        keywords: ['property sales Toronto', 'real estate agent', 'sell house fast', 'property marketing', 'home selling', 'real estate listing'],
        image: 'assets/images/thumbs/property-details-img.png',
        stats: [
            { number: '500+', label: 'Properties Sold' },
            { number: '95%', label: 'Sold Within 60 Days' },
            { number: '$150M+', label: 'Total Sales Value' },
            { number: '98%', label: 'Client Satisfaction' }
        ],
        features: [
            {
                title: 'Strategic Market Analysis',
                description: 'In-depth market analysis including comparable sales, pricing trends, and market conditions to develop optimal pricing strategies that attract buyers and maximize returns.',
                icon: 'fas fa-chart-line'
            },
            {
                title: 'Professional Property Listing',
                description: 'Comprehensive property listing with professional photography, virtual tours, detailed descriptions, and strategic placement across multiple MLS platforms and real estate websites.',
                icon: 'fas fa-home'
            },
            {
                title: 'Expert Negotiation Support',
                description: 'Skilled negotiation services to secure the best terms, handle multiple offers, and navigate complex transactions with professional expertise and market knowledge.',
                icon: 'fas fa-handshake'
            },
            {
                title: 'Complete Transaction Management',
                description: 'Full transaction coordination including paperwork management, inspection scheduling, financing coordination, and closing support for stress-free sales.',
                icon: 'fas fa-file-contract'
            },
            {
                title: 'Professional Marketing Package',
                description: 'Complete marketing package including professional photography, virtual staging, drone footage, floor plans, and targeted digital marketing campaigns.',
                icon: 'fas fa-camera'
            },
            {
                title: 'Buyer Qualification & Screening',
                description: 'Thorough buyer qualification and screening process to ensure serious inquiries, pre-approved financing, and smooth transaction completion.',
                icon: 'fas fa-users'
            }
        ],
        benefits: [
            'Maximum property exposure through strategic marketing across multiple platforms',
            'Professional marketing materials including photography, virtual tours, and staging',
            'Expert pricing strategies based on comprehensive market analysis and trends',
            'Skilled negotiation support to secure the best price and terms',
            'Complete transaction management from listing to closing',
            'Access to qualified buyer network and professional referrals',
            'Regular market updates and strategy adjustments for optimal results',
            'Legal compliance and documentation support throughout the process',
            'Flexible showing schedules and buyer accommodation services',
            'Post-sale support and assistance with moving and transition needs'
        ],
        process: [
            {
                step: '1',
                title: 'Property Evaluation',
                description: 'Comprehensive property assessment and market analysis to determine optimal pricing strategy and identify key selling points for maximum market appeal.'
            },
            {
                step: '2',
                title: 'Marketing Strategy',
                description: 'Developing and implementing a targeted marketing campaign with professional photography, online listings, and strategic promotion across multiple platforms.'
            },
            {
                step: '3',
                title: 'Buyer Engagement',
                description: 'Managing showings, inquiries, and buyer negotiations with expert guidance to secure the best offers and terms for your property sale.'
            },
            {
                step: '4',
                title: 'Transaction Completion',
                description: 'Managing all aspects of the transaction through to closing including paperwork, inspections, financing coordination, and legal compliance.'
            }
        ],
        faqs: [
            {
                question: 'How long does it typically take to sell a property?',
                answer: 'With our strategic marketing approach, most properties sell within 30-60 days. The timeline depends on market conditions, pricing strategy, and property condition. We provide regular updates and adjust our strategy as needed.'
            },
            {
                question: 'What is your commission structure?',
                answer: 'Our commission is competitive and includes comprehensive marketing, professional photography, listing management, negotiation support, and transaction coordination. We discuss our fee structure during the initial consultation.'
            },
            {
                question: 'Do you provide staging and photography services?',
                answer: 'Yes, we offer professional staging consultation and high-quality photography services to showcase your property in the best light. These services are included in our comprehensive marketing package.'
            },
            {
                question: 'How do you determine the right listing price?',
                answer: 'We conduct a comprehensive market analysis including recent comparable sales, current market conditions, and your property\'s unique features. Our pricing strategy is designed to attract buyers while maximizing your return.'
            }
        ]
    },
    'property-search': {
        title: 'Property Search Services',
        subtitle: 'Personalized Property Search',
        description: 'Customized property search services to help you find the perfect property that matches your specific requirements and budget with expert guidance, market insights, and personalized search strategies.',
        metaDescription: 'Professional property search services in Toronto. Expert buyer agents, property matching, market analysis, and negotiation support. Find your dream home with personalized search assistance.',
        keywords: ['property search Toronto', 'buyer agent', 'home search', 'property finder', 'real estate buyer', 'house hunting'],
        image: 'assets/images/thumbs/property-details-img.png',
        stats: [
            { number: '800+', label: 'Properties Found' },
            { number: '92%', label: 'Successful Matches' },
            { number: '45', label: 'Average Days to Find' },
            { number: '99%', label: 'Client Satisfaction' }
        ],
        features: [
            {
                title: 'Advanced Property Matching',
                description: 'Sophisticated property matching system based on your specific criteria including location, budget, features, and lifestyle preferences with AI-powered recommendations.',
                icon: 'fas fa-search'
            },
            {
                title: 'Comprehensive Location Analysis',
                description: 'Detailed location analysis including neighborhood insights, school districts, amenities, transportation, and future development plans affecting property values.',
                icon: 'fas fa-map-marker-alt'
            },
            {
                title: 'Budget Planning & Financing',
                description: 'Complete budget planning assistance including affordability analysis, financing options, mortgage pre-approval support, and cost estimation for informed decisions.',
                icon: 'fas fa-calculator'
            },
            {
                title: 'Exclusive Property Access',
                description: 'Access to exclusive listings, off-market properties, and pre-market opportunities through our extensive network of real estate professionals and industry connections.',
                icon: 'fas fa-eye'
            },
            {
                title: 'Property Tours & Inspections',
                description: 'Organized property viewings, virtual tours, and professional inspection coordination to help you evaluate properties thoroughly before making decisions.',
                icon: 'fas fa-home'
            },
            {
                title: 'Purchase Negotiation Support',
                description: 'Expert negotiation support for purchase offers, terms, conditions, and closing coordination to secure the best deal and smooth transaction process.',
                icon: 'fas fa-handshake'
            }
        ],
        benefits: [
            'Personalized property recommendations based on detailed preference analysis',
            'Access to exclusive listings and off-market opportunities',
            'Expert market knowledge and neighborhood insights',
            'Time-saving search process with pre-qualified properties',
            'Professional negotiation support for optimal purchase terms',
            'Comprehensive market analysis and property evaluation',
            'Financing assistance and mortgage pre-approval coordination',
            'Legal compliance and documentation support throughout the process',
            'Ongoing support from initial search to final closing',
            'Post-purchase assistance with moving and property transition'
        ],
        process: [
            {
                step: '1',
                title: 'Initial Consultation & Needs Assessment',
                description: 'Comprehensive discussion of your property requirements, budget, lifestyle preferences, timeline, and must-have features to create a personalized search strategy.'
            },
            {
                step: '2',
                title: 'Market Research & Property Search',
                description: 'Extensive search across MLS listings, exclusive properties, and off-market opportunities using advanced filtering and our professional network connections.'
            },
            {
                step: '3',
                title: 'Property Evaluation & Tours',
                description: 'Detailed property evaluation, organized viewings, market analysis, and professional assessment to identify the best options matching your criteria.'
            },
            {
                step: '4',
                title: 'Offer Preparation & Negotiation',
                description: 'Strategic offer preparation, professional negotiation support, and transaction coordination through to successful closing with ongoing guidance.'
            }
        ],
        faqs: [
            {
                question: 'How long does it typically take to find the right property?',
                answer: 'The timeline varies based on your specific criteria and market conditions. On average, our clients find their ideal property within 45-90 days. We work efficiently to present only pre-qualified options that match your requirements.'
            },
            {
                question: 'Do you have access to properties not listed publicly?',
                answer: 'Yes, through our extensive network of real estate professionals, we have access to exclusive listings, off-market properties, and pre-market opportunities that may not be available to the general public.'
            },
            {
                question: 'What information do you need to start the search process?',
                answer: 'We need details about your budget, preferred locations, property type, size requirements, must-have features, timeline, and any specific preferences. The more detailed information you provide, the better we can match properties to your needs.'
            },
            {
                question: 'Do you assist with financing and mortgage pre-approval?',
                answer: 'Yes, we provide comprehensive financing assistance including connecting you with trusted mortgage professionals, helping with pre-approval processes, and ensuring you understand all financing options available for your situation.'
            },
            {
                question: 'What happens after we find a property I want to purchase?',
                answer: 'We provide complete support through the purchase process including offer preparation, negotiation, inspection coordination, financing assistance, and closing support. Our goal is to ensure a smooth transaction from start to finish.'
            }
        ]
    },
    'legal-assistance': {
        title: 'Legal Assistance Services',
        subtitle: 'Professional Legal Support',
        description: 'Comprehensive legal assistance for all aspects of real estate transactions, ensuring compliance and protecting your interests with experienced real estate lawyers, comprehensive documentation, and expert guidance.',
        metaDescription: 'Professional real estate legal assistance in Toronto. Expert lawyers, contract review, title searches, closing support, and legal compliance. Comprehensive legal services for property transactions.',
        keywords: ['real estate lawyer Toronto', 'property legal services', 'contract review', 'title search', 'closing lawyer', 'legal assistance'],
        image: 'assets/images/thumbs/property-details-img.png',
        stats: [
            { number: '1000+', label: 'Transactions Completed' },
            { number: '100%', label: 'Legal Compliance' },
            { number: '15+', label: 'Years Experience' },
            { number: '99%', label: 'Client Satisfaction' }
        ],
        features: [
            {
                title: 'Comprehensive Contract Review',
                description: 'Thorough review and analysis of all real estate contracts, purchase agreements, lease documents, and legal terms to protect your interests and ensure favorable conditions.',
                icon: 'fas fa-file-contract'
            },
            {
                title: 'Title Search & Insurance',
                description: 'Complete title searches, title insurance coordination, and resolution of title issues to ensure clear property ownership and protect against future claims.',
                icon: 'fas fa-search'
            },
            {
                title: 'Legal Documentation & Preparation',
                description: 'Professional preparation and review of all necessary legal documents including deeds, mortgages, affidavits, and closing documentation.',
                icon: 'fas fa-file-alt'
            },
            {
                title: 'Closing Support & Representation',
                description: 'Complete closing support including document review, fund coordination, registration, and legal representation at closing to ensure smooth transactions.',
                icon: 'fas fa-handshake'
            },
            {
                title: 'Regulatory Compliance',
                description: 'Ensuring all transactions comply with local, provincial, and federal regulations including tax obligations, disclosure requirements, and legal standards.',
                icon: 'fas fa-gavel'
            },
            {
                title: 'Dispute Resolution & Litigation',
                description: 'Professional dispute resolution services, litigation support, and legal representation for property-related conflicts and legal issues.',
                icon: 'fas fa-shield-alt'
            }
        ],
        benefits: [
            'Complete legal protection throughout all real estate transactions',
            'Expert contract review and negotiation to secure favorable terms',
            'Comprehensive title searches and insurance coordination',
            'Professional closing support and document preparation',
            'Regulatory compliance and risk mitigation strategies',
            'Dispute resolution and litigation support when needed',
            'Experienced real estate lawyers with local market knowledge',
            'Transparent fee structure with no hidden costs',
            'Timely transaction processing and deadline management',
            'Post-closing support and ongoing legal consultation'
        ],
        process: [
            {
                step: '1',
                title: 'Initial Consultation & Document Review',
                description: 'Comprehensive consultation to understand your legal needs, review initial documents, and develop a customized legal strategy for your real estate transaction.'
            },
            {
                step: '2',
                title: 'Title Search & Legal Analysis',
                description: 'Complete title search, legal analysis of all documents, identification of potential issues, and development of solutions to protect your interests.'
            },
            {
                step: '3',
                title: 'Document Preparation & Review',
                description: 'Professional preparation and thorough review of all legal documentation including contracts, agreements, and closing documents with detailed explanations.'
            },
            {
                step: '4',
                title: 'Closing Coordination & Support',
                description: 'Complete closing coordination including fund management, document registration, and legal representation to ensure successful transaction completion.'
            }
        ],
        faqs: [
            {
                question: 'What legal services do you provide for real estate transactions?',
                answer: 'We provide comprehensive legal services including contract review, title searches, document preparation, closing support, regulatory compliance, and dispute resolution. Our experienced real estate lawyers handle all aspects of property transactions.'
            },
            {
                question: 'How much do your legal services cost?',
                answer: 'Our fees are competitive and transparent with no hidden costs. We provide detailed fee estimates upfront and offer flexible payment options. Costs vary based on transaction complexity and services required.'
            },
            {
                question: 'How long does the legal process take for a real estate transaction?',
                answer: 'The timeline varies based on transaction complexity, but most residential transactions are completed within 30-60 days. We work efficiently to meet your deadlines while ensuring thorough legal protection.'
            },
            {
                question: 'Do you handle both residential and commercial real estate legal matters?',
                answer: 'Yes, our experienced team handles all types of real estate legal matters including residential purchases and sales, commercial transactions, leasing, development projects, and investment properties.'
            },
            {
                question: 'What happens if legal issues arise during the transaction?',
                answer: 'We proactively identify and address potential issues early in the process. If problems arise, we provide expert guidance, negotiate solutions, and represent your interests to resolve issues efficiently and protect your investment.'
            }
        ]
    }
};

const ServiceDetail = () => {
    const { serviceSlug } = useParams();
    const service = serviceDetails[serviceSlug];

    if (!service) {
        return (
            <>
                <SEOHead 
                    title="Service Not Found - Mantra Group | Toronto Real Estate Services"
                    description="The requested service page could not be found. Explore our comprehensive real estate services in Toronto and GTA."
                    keywords="real estate services Toronto, property services, service not found"
                    canonicalUrl="/service-detail"
                    ogImage="/assets/images/service-og.jpg"
                />
                <Header 
                    headerClass="dark-header has-border" 
                    logoBlack={false}
                    logoWhite={true}
                    headerMenusClass="mx-auto"
                    btnClass="btn btn-outline-main btn-outline-main-dark d-lg-block d-none"
                    btnLink="/add-new-listing"
                    btnText="Add Listing"
                    spanClass="icon-right text-gradient" 
                    showHeaderBtn={true}
                    showOffCanvasBtn={false}
                    showContactNumber={false}
                />
                <div className="container py-5">
                    <div className="text-center">
                        <h1>Service Not Found</h1>
                        <p>The requested service page could not be found.</p>
                    </div>
                </div>
                <Footer />
            </>
        );
    }

    return (
        <>
            <SEOHead 
                title={`${service.title} - Mantra Group | Toronto Real Estate Services`}
                description={service.metaDescription}
                keywords={service.keywords?.join(', ')}
                canonicalUrl={`/service-detail/${serviceId}`}
                ogImage={service.image}
                structuredData={{
                    "@context": "https://schema.org",
                    "@type": "Service",
                    "name": service.title,
                    "description": service.description,
                    "provider": {
                        "@type": "RealEstateAgent",
                        "name": "Mantra Group",
                        "url": "https://mantra-group-toronto.com",
                        "address": {
                            "@type": "PostalAddress",
                            "addressLocality": "Toronto",
                            "addressRegion": "ON",
                            "addressCountry": "CA"
                        }
                    },
                    "serviceType": service.title,
                    "areaServed": {
                        "@type": "Place",
                        "name": "Greater Toronto Area"
                    }
                }}
            />
            
            {/* Header */}
            <Header 
                headerClass="dark-header has-border" 
                logoBlack={false}
                logoWhite={true}
                headerMenusClass="mx-auto"
                btnClass="btn btn-outline-main btn-outline-main-dark d-lg-block d-none"
                btnLink="/add-new-listing"
                btnText="Add Listing"
                spanClass="icon-right text-gradient" 
                showHeaderBtn={true}
                showOffCanvasBtn={false}
                showContactNumber={false}
            />

            {/* Breadcrumb */}
            <Breadcrumb 
                pageTitle={service.title}
                pageName={service.title}
            />

            {/* Service Detail Content */}
            <section className="service-detail padding-y-120">
                <div className="container container-two">
                    {/* Service Overview */}
                    <div className="row align-items-center mb-5">
                        <div className="col-lg-6">
                            <SectionHeading
                                headingClass="style-left"  
                                subtitle={service.subtitle}
                                subtitleClass="bg-white" 
                                title={service.title} 
                                renderDesc={true}
                                desc={service.description}
                                renderButton={false}
                            />
                        </div>
                        <div className="col-lg-6">
                            <div className="service-detail__image">
                                <img src={service.image} alt={service.title} className="img-fluid rounded" />
                            </div>
                        </div>
                    </div>

                    {/* Stats Section */}
                    {service.stats && (
                        <div className="row mb-5">
                            <div className="col-12">
                                <div className="row gy-4">
                                    {service.stats.map((stat, index) => (
                                        <div key={index} className="col-6 col-md-3">
                                            <div className="service-stat-card text-center">
                                                <h3 className="service-stat-card__number text-gradient">{stat.number}</h3>
                                                <p className="service-stat-card__label">{stat.label}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    )}

                    {/* Service Features */}
                    <div className="row mb-5">
                        <div className="col-12">
                            <h3 className="mb-4">Key Features & Services</h3>
                            <div className="row gy-4">
                                {service.features.map((feature, index) => (
                                    <div className="col-lg-6" key={index}>
                                        <div className="feature-card d-flex">
                                            <div className="feature-card__icon me-3">
                                                <i className={feature.icon}></i>
                                            </div>
                                            <div className="feature-card__content">
                                                <h5 className="feature-card__title">{feature.title}</h5>
                                                <p className="feature-card__desc">{feature.description}</p>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Benefits */}
                    <div className="row mb-5">
                        <div className="col-lg-6">
                            <h3 className="mb-4">Why Choose Our Services</h3>
                            <ul className="benefits-list">
                                {service.benefits.map((benefit, index) => (
                                    <li key={index} className="benefits-list__item">
                                        <i className="fas fa-check text-gradient me-2"></i>
                                        <span>{benefit}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="col-lg-6">
                            <h3 className="mb-4">Our Process</h3>
                            <div className="process-steps">
                                {service.process.map((step, index) => (
                                    <div key={index} className="process-step d-flex mb-3">
                                        <div className="process-step__number me-3">
                                            <span>{step.step}</span>
                                        </div>
                                        <div className="process-step__content">
                                            <h6 className="process-step__title">{step.title}</h6>
                                            <p className="process-step__desc">{step.description}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* FAQ Section */}
                    {service.faqs && (
                        <div className="row mb-5">
                            <div className="col-12">
                                <h3 className="mb-4">Frequently Asked Questions</h3>
                                <div className="service-faqs__list">
                                    {service.faqs.map((faq, index) => (
                                        <div key={index} className="service-faq-item mb-4">
                                            <h5 className="service-faq-item__question mb-2">{faq.question}</h5>
                                            <p className="service-faq-item__answer">{faq.answer}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    )}

                    {/* Contact CTA */}
                    <div className="row mb-5">
                        <div className="col-12 text-center">
                            <div className="service-contact-cta p-4 bg-light rounded">
                                <h4 className="mb-3">Ready to Get Started?</h4>
                                <p className="mb-4">Contact us today for a free consultation and discover how our {service.title.toLowerCase()} can benefit you.</p>
                                <div className="d-flex justify-content-center gap-3">
                                    <a href="/contact" className="btn btn-main">Get Free Consultation</a>
                                    <a href="tel:+1234567890" className="btn btn-outline-main">Call Now</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Stats Counter Section */}
            {service.stats && <Counter />}

            {/* Testimonials Section */}
            <Testimonial />

            {/* Property Types Section */}
            <PropertyTypeThree />

            {/* CTA */}
            <Cta ctaClass="" />

            {/* Footer */}
            <Footer />
        </>
    );
};

export default ServiceDetail;