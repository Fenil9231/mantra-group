import React from 'react';
import SectionHeading from '../common/SectionHeading';
import PropertyTypeThreeItem from './items/PropertyTypeThreeItem';

const propertyThreeTypes = [
    {
        id: 1,
        icon: 'assets/images/icons/property-type1.svg',
        title: 'Residential',
        desc: 'Beautiful homes and apartments for comfortable living.',
        properties: '150+ Properties'
    },
    {
        id: 2,
        icon: 'assets/images/icons/property-type2.svg',
        title: 'Commercial',
        desc: 'Office spaces and retail locations for your business needs.',
        properties: '80+ Properties'
    },
    {
        id: 3,
        icon: 'assets/images/icons/property-type3.svg',
        title: 'Industrial',
        desc: 'Warehouses and manufacturing facilities for industrial use.',
        properties: '45+ Properties'
    }
];

const PropertyTypeThree = () => {
    return (
        <>
            <section className="property-type-three padding-t-120 padding-b-60">
                <div className="container container-two">

                    <SectionHeading
                        headingClass="style-left"  
                        subtitle="Property Type"
                        subtitleClass="bg-white" 
                        title="Investing in real estate made it lot easy" 
                        renderDesc={false}
                        desc="Real estate is a lucrative industry that involves the buying and selling of properties. It encompasses residential commercial and industrial properties Real estate agents play a crucial role in facilitating real estate"
                        renderButton={false}
                        buttonClass="btn-main"
                        buttonText="View More"
                    />
                    
                    <div className="row gy-4">
                        {
                            propertyThreeTypes.map((propertyTypeItem, index) => {
                                return (
                                    <div className="col-xl-4 col-sm-6 col-xs-6" key={index}>
                                        <PropertyTypeThreeItem propertyTypeItem={propertyTypeItem} />
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

export default PropertyTypeThree;