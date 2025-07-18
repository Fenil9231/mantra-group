import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

import SectionHeading from '../common/SectionHeading';
import FloorImage from '../../public/assets/images/thumbs/floor-plan.png';

const floorTabLists = [
    { text: "1st" },
    { text: "2nd" },
    { text: "3rd" }
];

const floorTabPanels = [
    {
        floorPlanLists: [
            { text: "Total Area", number: "2,800 Sq Ft" },
            { text: "Bedroom", number: "150 Sq Ft" },
            { text: "Bathroom", number: "45 Sq Ft" },
            { text: "Belcony", number: "42 Sq Ft" }
        ]
    },
    {
        floorPlanLists: [
            { text: "Total Area", number: "3,200 Sq Ft" },
            { text: "Bedroom", number: "180 Sq Ft" },
            { text: "Bathroom", number: "50 Sq Ft" },
            { text: "Belcony", number: "48 Sq Ft" }
        ]
    },
    {
        floorPlanLists: [
            { text: "Total Area", number: "2,600 Sq Ft" },
            { text: "Bedroom", number: "140 Sq Ft" },
            { text: "Bathroom", number: "40 Sq Ft" },
            { text: "Belcony", number: "38 Sq Ft" }
        ]
    }
];

const FloorPlan = () => {
    return (
        <>
        {/* ==================== Floor Plan Section Start =============================== */}
        <section className="floor-plan padding-y-60">
            <div className="container container-two">

                <SectionHeading
                    headingClass=""  
                    subtitle="Floor plan"
                    subtitleClass="" 
                    title="Unlocking the door to your a the new home" 
                    renderDesc={false}
                    desc=""
                    renderButton={false}
                    buttonClass="btn-main"
                    buttonText="View More"
                />

                <div className="row gy-4 align-items-center">
                    <div className="col-lg-6">
                        <div className="floor-plan__thumb">
                            <img src={FloorImage} alt="Image"/>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="floor-plan__content">
                            <div className="d-block">
                                <Tabs>
                                    <div className="d-flex justify-content-between flex-wrap">
                                        <h6 className="text fw-normal mb-0 floor-plan__title">Select Floor</h6>
                                        <TabList className={'common-tab style-two nav nav-pills mb-0'}>
                                            {
                                                floorTabLists.map((floorTabList, floorTabListIndex) => {
                                                    return (
                                                        <Tab className={'nav-link'} key={floorTabListIndex}>
                                                            <span className="text">{floorTabList.text}</span>
                                                        </Tab>
                                                    )
                                                })
                                            }
                                        </TabList>
                                    </div>

                                    {
                                        floorTabPanels.map((floorTabPanel, FloorTabIndex) => {
                                            return (
                                                <TabPanel key={FloorTabIndex}>
                                                    <ul className="floor-plan-list">
                                                        {
                                                            floorTabPanel.floorPlanLists && floorTabPanel.floorPlanLists.map((floorPlanList, floorPlanListIndex) => {

                                                                const isLastItem = floorPlanListIndex === floorTabPanel.floorPlanLists.length - 1;
                                                                
                                                                return (
                                                                    <li 
                                                                    className={`floor-plan-list__item flx-between ${isLastItem ? 'last-item' : '' }`} 
                                                                    key={floorPlanListIndex}>
                                                                        <h6 className="text fw-normal mb-0">{floorPlanList.text}</h6>
                                                                        <span className="number font-16">{floorPlanList.number}</span>
                                                                    </li>
                                                                )
                                                            })
                                                        }
                                                    </ul>                                               
                                                </TabPanel>
                                            )
                                        })
                                    }
                                </Tabs>   
                            </div>
                            <p className="floor-plan__desc font-18 fw-light">*Real estate is a lucrative industry that involves the buying and selling of properties. It encompasses</p>
                            
                        </div>
                    </div>
                </div>
            </div>
        </section>
        {/* ==================== Floor Plan Section End =============================== */}
        </>
    );
};

export default FloorPlan;