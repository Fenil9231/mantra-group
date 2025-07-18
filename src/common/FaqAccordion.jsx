import React, { useState } from 'react';
import FaqItem from '../components/items/FaqItem';

const faqs = [
    {
        id: 1,
        question: 'How do I search for properties?',
        answer: 'You can search for properties using our advanced search filters including location, price range, property type, and amenities.'
    },
    {
        id: 2,
        question: 'What documents do I need to buy a property?',
        answer: 'You will need identification documents, proof of income, bank statements, and pre-approval letter from your lender.'
    },
    {
        id: 3,
        question: 'How long does the buying process take?',
        answer: 'The typical buying process takes 30-45 days from offer acceptance to closing, depending on financing and inspections.'
    },
    {
        id: 4,
        question: 'Do you offer property management services?',
        answer: 'Yes, we offer comprehensive property management services including tenant screening, rent collection, and maintenance coordination.'
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