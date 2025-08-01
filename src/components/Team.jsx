import React from 'react';
import SectionHeading from '../common/SectionHeading';
import { teams } from '../data/OthersPageData/OthersPageData';
import TeamItem from './items/TeamItem';

const Team = ({ sectionClass }) => {
    return (
        <>
            <section className={`team ${sectionClass}`}>
                <div className="container container-two">

                <SectionHeading
                        headingClass=""  
                        subtitle="Our Team"
                        subtitleClass="" 
                        title="Meet Our Real Estate Professionals" 
                        renderDesc={false}
                        desc=""
                        renderButton={false}
                        buttonClass="btn-main"
                        buttonText="Learn More"
                    />
                    
                    <div className="row gy-4">
                        {
                            teams.map((team, teamIndex) => {
                                return (
                                    <div className="col-lg-4 col-sm-6 col-xs-6" key={teamIndex}>
                                        <TeamItem team={team}/>
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

export default Team;