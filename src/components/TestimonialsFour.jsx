import React from 'react';
import SectionHeading from '../common/SectionHeading';
import Slider from 'react-slick';


var settings = {
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    speed: 1500,
    dots: true,
    infinite: true,
    pauseOnHover: true,
    arrows: true,
    responsive: [
        {
          breakpoint: 991,
          settings: {
            slidesToShow: 1
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

const TestimonialsFour = () => {

    const slider = React.useRef(null);
    
    return (
        <section className="testimonial-four padding-y-120">
        <div className="container container-two">

            <SectionHeading
                headingClass=""  
                subtitle="Clients Testimonials"
                subtitleClass="bg-gray-100" 
                title="Investing in Real Estate for Brighter Tomorrow" 
                renderDesc={false}
                desc=""
                renderButton={false}
                buttonClass="btn-main"
                buttonText="View More"
            />
            
            <div className="testimonial-four-slider overflow-visible position-relative">
                <Slider {...settings} ref={slider}>
                    <div className="testimonial-item style-two style-four">
                        <p className="testimonial-item__desc mt-0">Working with this team was exceptional. They helped us find the perfect investment property in downtown Toronto. Their market knowledge and professional guidance made the entire process smooth and profitable.</p>
                        <div className="testimonial-item__top flx-between gap-2">
                            <div className="testimonial-item__info d-flex align-items-center">
                                <div className="testimonial-item__thumb">
                                    <img src="assets/images/thumbs/user-img1.png" alt=""/>
                                </div>
                                <div>
                                    <h6 className="testimonial-item__name">Robert Chen</h6>
                                <span className="testimonial-item__designation text-gradient">Property Investor</span>
                                </div>
                            </div>
                            <span className="testimonial-item__quote"><i className="fas fa-quote-right"></i></span>
                        </div>
                    </div>
                    <div className="testimonial-item style-two style-four">
                        <p className="testimonial-item__desc mt-0">As first-time homebuyers, we were nervous about the process. The team guided us every step of the way, from pre-approval to closing. We found our dream home in Mississauga within our budget!</p>
                        <div className="testimonial-item__top flx-between gap-2">
                            <div className="testimonial-item__info d-flex align-items-center">
                                <div className="testimonial-item__thumb">
                                    <img src="assets/images/thumbs/user-img2.png" alt=""/>
                                </div>
                                <div>
                                    <h6 className="testimonial-item__name">Sarah Johnson</h6>
                                <span className="testimonial-item__designation text-gradient">First-Time Homebuyer</span>
                                </div>
                            </div>
                            <span className="testimonial-item__quote"><i className="fas fa-quote-right"></i></span>
                        </div>
                    </div>
                    <div className="testimonial-item style-two style-four">
                        <p className="testimonial-item__desc mt-0">Their commercial real estate expertise helped us secure an excellent office space for our growing business. The negotiation skills and market insights were invaluable. Highly recommend their services!</p>
                        <div className="testimonial-item__top flx-between gap-2">
                            <div className="testimonial-item__info d-flex align-items-center">
                                <div className="testimonial-item__thumb">
                                    <img src="assets/images/thumbs/user-img3.png" alt=""/>
                                </div>
                                <div>
                                    <h6 className="testimonial-item__name">Michael Rodriguez</h6>
                                <span className="testimonial-item__designation text-gradient">Business Owner</span>
                                </div>
                            </div>
                            <span className="testimonial-item__quote"><i className="fas fa-quote-right"></i></span>
                        </div>
                    </div>
                </Slider>
                <button className='slick-arrow slick-prev' onClick={() => slider?.current?.slickPrev()}> 
                    <i className="fas fa-arrow-left"></i> 
                </button>
                <button className='slick-arrow slick-next' onClick={() => slider?.current?.slickNext()}> 
                    <i className="fas fa-arrow-right"></i> 
                </button>
            </div>
        </div>
    </section>
    );
};

export default TestimonialsFour;