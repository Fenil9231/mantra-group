import React from 'react';

import CommentThumb1 from '/assets/images/thumbs/comment1.png';
import CommentThumb2 from '/assets/images/thumbs/comment2.png';
import { Link } from 'react-router-dom';

const Comment = () => {
    return (
        <>
            <div className="col-lg-12 pt-5">
                <h5 className="comment-title mb-4 mb-lg-5">2 Comment</h5>
                <ul className="comment-list">
                    <li className="comment-list__item d-flex">
                        <div className="comment-list__thumb">
                            <img src={CommentThumb1} className="cover-img" alt=""/>
                        </div>
                        <div className="comment-list__content">
                            <div className="flx-align gap-2 gap-sm-4">
                                <h6 className="comment-list__name font-16">Michael Thompson</h6>
                                <span className="comment-list__date">December 16, 2023</span>
                                <ul className="social-list mt-0 p-0 border-0 gap-3">
                                    <li className="social-list__item">
                                        <Link to="https://www.facebook.com" className="social-list__link text-gradient font-12 flx-center"><i className="fab fa-facebook-f"></i>
                                        </Link>
                                    </li>
                                    <li className="social-list__item">
                                        <Link to="https://www.twitter.com" className="social-list__link text-gradient font-12 flx-center"> <i className="fab fa-twitter"></i>
                                        </Link>
                                    </li>
                                    <li className="social-list__item">
                                        <Link to="https://www.pinterest.com" className="social-list__link text-gradient font-12 flx-center"> <i className="fab fa-instagram"></i>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                            <p className="comment-list__desc">Excellent service and professional guidance throughout the entire property buying process. The team's market knowledge and attention to detail made our home purchase seamless and stress-free.</p>
                            <a className="comment-list__reply" href="#comment-box"> Reply </a>
                        </div>
                    </li>
                    <li className="comment-list__item d-flex">
                        <div className="comment-list__thumb">
                            <img src={CommentThumb2} className="cover-img" alt=""/>
                        </div>
                        <div className="comment-list__content">
                            <div className="flx-align gap-2 gap-sm-4">
                                <h6 className="comment-list__name font-16">Jennifer Martinez</h6>
                                <span className="comment-list__date">December 16, 2023</span>
                                <ul className="social-list mt-0 p-0 border-0 gap-3">
                                    <li className="social-list__item">
                                        <Link to="https://www.facebook.com" className="social-list__link text-gradient font-12 flx-center"><i className="fab fa-facebook-f"></i>
                                        </Link>
                                    </li>
                                    <li className="social-list__item">
                                        <Link to="https://www.twitter.com" className="social-list__link text-gradient font-12 flx-center"> <i className="fab fa-twitter"></i>
                                        </Link>
                                    </li>
                                    <li className="social-list__item">
                                        <Link to="https://www.pinterest.com" className="social-list__link text-gradient font-12 flx-center"> <i className="fab fa-instagram"></i>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                            <p className="comment-list__desc">Outstanding real estate expertise! They helped us find the perfect investment property and provided valuable insights into market trends. Highly recommend their services to anyone looking for quality real estate solutions.</p>
                            <a className="comment-list__reply" href="#comment-box"> Reply </a>
                        </div>
                    </li>
                </ul>
            </div>   
        </>
    );
};

export default Comment;