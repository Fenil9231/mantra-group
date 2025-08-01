import React from 'react';

import Slider from "react-slick";
import PortfolioItem from './items/PortfolioItem';
import { portfolios } from '../data/HomeOneData/HomeOneData';

  var settings = {
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    speed: 1500,
    dots: false,
    pauseOnHover: true,
    arrows: false,
    centerMode: true,
    responsive: [
        {
          breakpoint: 991,
          settings: {
            slidesToShow: 2
          }
        },
        {
          breakpoint: 530,
          settings: {
            slidesToShow: 1
          }
        }
    ]
  };
  
const Portfolio = () => {

    const slider = React.useRef(null);
  
    return (
        <>
            <section className="portfolio padding-t-120 padding-b-60 overflow-hidden">
                <div className="section-heading">
                    <span className="section-heading__subtitle"> <span className="text-gradient fw-semibold">Featured Properties</span> </span>
                    <h2 className="section-heading__title">Optimum Homes & Properties Realty Experts</h2>
                </div>
                <div className="portfolio-wrapper">
                    <Slider {...settings}  ref={slider}>
                        {
                            portfolios.map((portfolio, index) => {
                                return (
                                    <PortfolioItem portfolio={portfolio} key={index}/>
                                )
                            })
                        }
                    </Slider>
                    <button className='d-none' onClick={() => slider?.current?.slickPrev()}>Prev</button>
                    <button className='d-none' onClick={() => slider?.current?.slickNext()}>Next</button>
                </div>
            </section>
        </>
    );
};

export default Portfolio;