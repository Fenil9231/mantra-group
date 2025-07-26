import React, { useState } from 'react';
import FaqItem from '../components/items/FaqItem';

const faqs = [
    {
        id: 1,
        btnText: 'What real estate consultation services does Mantra Group offer?',
        bodyText: 'Mantra Group provides comprehensive real estate consultation services including market analysis, investment strategy planning, property valuation, portfolio optimization, and personalized guidance for buying, selling, or investing in Toronto and GTA properties.'
    },
    {
        id: 2,
        btnText: 'How do I get started with a real estate consultation?',
        bodyText: 'Getting started is simple! Contact us through our website, phone, or email to schedule your initial consultation. We\'ll discuss your goals, analyze your situation, and create a customized strategy tailored to your specific real estate needs.'
    },
    {
        id: 3,
        btnText: 'What makes Mantra Group different from other real estate consultants?',
        bodyText: 'Our team combines deep local market knowledge with data-driven insights and personalized service. We focus on long-term relationships, transparent communication, and delivering measurable results that align with your financial goals and lifestyle preferences.'
    },
    {
        id: 4,
        btnText: 'Do you work with first-time homebuyers?',
        bodyText: 'Absolutely! We specialize in guiding first-time homebuyers through every step of the process. From mortgage pre-approval assistance to neighborhood selection and negotiation strategies, we ensure you make informed decisions with confidence.'
    },
    {
        id: 5,
        btnText: 'What areas do you serve in the Greater Toronto Area?',
        bodyText: 'We serve the entire Greater Toronto Area including Toronto, Mississauga, Brampton, Markham, Richmond Hill, Vaughan, Oakville, Burlington, and surrounding communities. Our extensive local knowledge covers both urban and suburban markets.'
    },
    {
        id: 6,
        btnText: 'How much do your consultation services cost?',
        bodyText: 'Our initial consultation is complimentary, allowing us to understand your needs and explain how we can help. Ongoing consultation fees are transparent and discussed upfront, with flexible packages designed to fit different budgets and service levels.'
    },
    {
        id: 7,
        btnText: 'Can you help with real estate investment strategies?',
        bodyText: 'Yes, we provide expert investment consultation including market trend analysis, cash flow projections, rental property evaluation, and portfolio diversification strategies. Whether you\'re a beginner or experienced investor, we tailor our advice to your investment goals.'
    },
    {
        id: 8,
        btnText: 'How long does a typical consultation process take?',
        bodyText: 'The timeline varies based on your specific needs. Initial consultations typically last 60-90 minutes, while comprehensive market analysis and strategy development may take 1-2 weeks. We work at your pace to ensure thorough, well-informed decisions.'
    },
    {
        id: 9,
        btnText: 'Do you provide ongoing support after the consultation?',
        bodyText: 'Yes, we believe in building long-term relationships. We offer ongoing support, market updates, and are available to answer questions as your real estate journey evolves. Many clients return to us for future transactions and investment opportunities.'
    },
    {
        id: 10,
        btnText: 'What should I prepare for my consultation appointment?',
        bodyText: 'Come prepared with your goals, budget range, timeline, and any specific questions or concerns. If you have financial documents, property listings of interest, or previous real estate experience details, these can help us provide more targeted advice.'
    }
];

const FaqAccordion = (props) => {

    const [activeAccordion, setActiveAccordion] = useState(null); 
    
    const handleAccordionClick = (faqId) => {
        setActiveAccordion(activeAccordion === faqId ? null : faqId); 
    }
    
    return (
        <>
            <div className={`common-accordion accordion ${props.accordionClass}`}>
                {
                    faqs.map((faq, faqIndex) => {
                        return (
                            <FaqItem 
                                itemClass={props.itemClass}
                                faq={faq} 
                                key={faqIndex}   
                                faqIndex={faqIndex}
                                activeAccordion={activeAccordion}
                                handleAccordionClick={handleAccordionClick}
                            />
                        )
                    })
                }
            </div>   
        </>
    );
};

export default FaqAccordion;