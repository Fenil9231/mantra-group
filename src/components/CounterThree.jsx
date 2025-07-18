import React from 'react';
import { counts } from '../data/HomeOneData/HomeOneData';
import CounterThreeItem from './items/CounterThreeItem';

import CounterBg from '../../public/assets/images/thumbs/counter-bg.png';

const CounterThree = () => {
    return (
        <>
            <section className="counter-three padding-y-120">
                <img src={CounterBg} alt="" className="counter-three__bg"/>
                <div className="container container-two">
                    <div className="counter-three-wrapper">
                        {
                            counts.map((counterThreeItem, counterThreeItemIndex) => {
                                return (
                                    <CounterThreeItem counterThreeItem={counterThreeItem} key={counterThreeItemIndex}/>
                                )
                            })
                        }

                    </div>
                </div>
            </section>      
        </>
    );
};

export default CounterThree;