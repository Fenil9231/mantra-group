import React from 'react';
import { Link } from 'react-router-dom';

const BlogKeyword = () => {
    return (
        <>
            <div className="blog-keyword flx-between gap-2">
                <div className="blog-keyword__content">
                    <span className="blog-keyword__text t text-heading fw-bold">Keywords: </span>
                    <Link to="#" className="blog-keyword__link">Toronto Real Estate</Link>
                    <Link to="#" className="blog-keyword__link">GTA Properties</Link>
                    <Link to="#" className="blog-keyword__link">Investment</Link>
                    <Link to="#" className="blog-keyword__link">Home Buying</Link>
                    <Link to="#" className="blog-keyword__link">Market Trends</Link>
                </div>
                <ul className="social-list style-two mt-0">
                    <li className="social-list__item">
                        <Link to="https://www.facebook.com" className="social-list__link flx-center text-facebook"><i className="fab fa-facebook"></i>
                        </Link>
                    </li>
                    <li className="social-list__item">
                        <Link to="https://www.pinterest.com" className="social-list__link flx-center text-pinterest"><i className="fab fa-pinterest"></i>
                        </Link>
                    </li>
                    <li className="social-list__item">
                        <Link to="https://www.linkedin.com" className="social-list__link flx-center text-linkedin"> <i className="fab fa-linkedin"></i>
                        </Link>
                    </li>
                </ul>
            </div>   
        </>
    );
};

export default BlogKeyword;