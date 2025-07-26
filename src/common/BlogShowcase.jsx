import React from 'react';

const BlogShowcase = () => {
    return (
        <>
             <div className="blog-showcase">
                <h5 className="blog-showcase__title">Showcase your talent with our portfolio</h5>
                <p className="blog-showcase__desc">Discover exceptional real estate opportunities with our comprehensive portfolio of premium properties. From luxury residential estates to commercial investments, we showcase the finest properties that match your vision and investment goals.</p>
                <div className="blog-showcase__content flx-align gap-4">
                    <div className="blog-showcase__thumb">
                        <img src="assets/images/thumbs/blog-showcase.png" alt=""/>
                    </div>
                    <ul className="check-list">
                        <li className="check-list__item d-flex align-items-center">
                            <span className="icon"><i className="fas fa-check"></i></span>
                            <span className="text">Your trusted real estate partner</span>
                        </li>
                        <li className="check-list__item d-flex align-items-center">
                            <span className="icon"><i className="fas fa-check"></i></span>
                            <span className="text">Unlocking the door to your new home</span>
                        </li>
                        <li className="check-list__item d-flex align-items-center">
                            <span className="icon"><i className="fas fa-check"></i></span>
                            <span className="text">Luxury living at affordable prices</span>
                        </li>
                        <li className="check-list__item d-flex align-items-center">
                            <span className="icon"><i className="fas fa-check"></i></span>
                            <span className="text">Your journey to homeownership starts here</span>
                        </li>
                    </ul>
                </div>
                <p className="blog-showcase__desc">Real estate is a lucrative industry that involves the buying and selling properties It encompass residential commercial and industrial properties. Real estate agents play a crucial role in facilitating at transactions and an english helping commercial, and industrial</p>
            </div>   
        </>
    );
};

export default BlogShowcase;