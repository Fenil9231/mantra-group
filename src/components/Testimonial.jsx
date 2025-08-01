import React from 'react';
import Slider from "react-slick";

import { testimonials } from '../data/HomeOneData/HomeOneData';
import TestimonialItem from './items/TestimonialItem';
import TestimonialThumb from '/assets/images/thumbs/testimonial-img.png';
import SectionHeading from '../common/SectionHeading';

var settings = {
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    dots: false,
    pauseOnHover: true,
    arrows: true,
    fade: true,
    draggable: true,
    speed: 900,
    infinite: true,
};

const Testimonial = () => {

    const slider = React.useRef(null);

    return (
        <>
            {/* ==================== Testimonials Section Start ==================== */}
            <section className="testimonial padding-y-60">
                <div className="container container-two">

                    <SectionHeading
                        headingClass="section-heading style-left style-flex"  
                        subtitle="Client Testimonial"
                        subtitleClass="" 
                        title="Optimum Homes & Properties property for you" 
                        renderDesc={false}
                        desc="Discover what our satisfied clients say about their real estate journey with us. From first-time homebuyers to seasoned investors, we've helped thousands achieve their property goals across the Greater Toronto Area."
                        renderButton={false}
                        renderBesideDesc={true}
                        buttonClass="btn-main"
                        buttonText="View More"
                    />

                    <div className="testimonial__inner">
                        <div className="row">
                            <div className="col-lg-6 col-md-8">
                                <div className="testimonial-box overflow-hidden position-relative">
                                    <Slider {...settings} ref={slider}>
                                        {
                                            testimonials.map((testimonial, index) => {
                                                return (
                                                    <TestimonialItem testimonial={testimonial} key={index}/>
                                                )
                                            })
                                        }
                                    </Slider>
                                    <button className='slick-arrow slick-prev' onClick={() => slider?.current?.slickPrev()}> 
                                        <i className="fas fa-arrow-left"></i> 
                                    </button>
                                    <button className='slick-arrow slick-next' onClick={() => slider?.current?.slickNext()}> 
                                        <i className="fas fa-arrow-right"></i> 
                                    </button>
                                </div>
                            </div>

                            <div className="col-lg-6">
                                <div className="testimonial-thumb">
                                    <img src={TestimonialThumb} alt="" className="cover-img"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* ==================== Testimonials Section End ==================== */}   
        </>
    );
};

export default Testimonial;