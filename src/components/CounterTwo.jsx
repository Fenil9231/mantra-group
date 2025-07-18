import React from 'react';
import { counts } from '../data/HomeOneData/HomeOneData';
import CounterTwoItem from './items/CounterTwoItem';

const CounterTwo = () => {
    return (
        <>
            {/* ===================== Counter Two Section Start ======================= */}
            <section className="counter-two padding-y-60">
                <div className="container container-two">
                    <div className="row gy-4">
                        {
                            counts.map((counter, counterIndex) => {
                                return (
                                    <div className="col-md-3 col-6" key={counterIndex}>
                                        <CounterTwoItem counter={counter}/>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </section>
            {/* ===================== Counter Two Section End ======================= */}   
        </>
    );
};

export default CounterTwo;