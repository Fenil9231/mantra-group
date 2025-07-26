import React from 'react';
import BlogTestiThumb from '/assets/images/thumbs/blog-testi.png';

const BlogTesti = () => {
    return (
        <>
            <div className="blog-testi">
                <div className="blog-testi__thumb">
                    <img src={BlogTestiThumb} alt=""/>
                </div>
                <p className="blog-testi__desc">"Working with Elite Property has been an exceptional experience. Their deep understanding of the Toronto real estate market and commitment to client satisfaction made our home buying journey smooth and successful. Their expertise in both residential and commercial properties is unmatched."</p>
                <div className="blog-testi__bottom flx-between">
                    <span className="blog-testi__name text-gradient">Sarah Johnson</span>
                    <img src="assets/images/icons/quote-two.svg" alt="" className="blog-testi__quote"/>
                </div>
            </div>   
        </>
    );
};

export default BlogTesti;