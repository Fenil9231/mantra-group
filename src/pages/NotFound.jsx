import React, { useState } from 'react';
import Button from '../common/Button';
import { useNavigate, Link } from 'react-router-dom';
import SEOHead from '../components/SEOHead';
import Footer from '../common/Footer';

const NotFound = () => {
    const navigate = useNavigate();
    const [searchQuery, setSearchQuery] = useState('');

    // Popular pages for quick navigation
    const popularPages = [
        { title: 'About Us', path: '/about-us', icon: 'fas fa-info-circle' },
        { title: 'Services', path: '/services', icon: 'fas fa-concierge-bell' },
        { title: 'Projects', path: '/project', icon: 'fas fa-building' },
        { title: 'Blog', path: '/blog', icon: 'fas fa-blog' },
        { title: 'Contact', path: '/contact', icon: 'fas fa-phone' },
        { title: 'Map Location', path: '/map-location', icon: 'fas fa-map-marker-alt' }
    ];

    const handleSearch = (e) => {
        e.preventDefault();
        if (searchQuery.trim()) {
            // Navigate to blog search with query
            navigate(`/blog?search=${encodeURIComponent(searchQuery.trim())}`);
        }
    };

    const goBack = () => {
        if (window.history.length > 1) {
            navigate(-1);
        } else {
            navigate('/');
        }
    };
    
    return (
        <>
            <SEOHead 
                title="404 Page Not Found - Mantra Group | Toronto Real Estate"
                description="The page you are looking for could not be found. Return to our homepage to explore Toronto real estate listings and services."
                keywords="404 error, page not found, Toronto real estate, Mantra Group"
                canonicalUrl="/404"
                ogImage="/assets/images/404-og.jpg"
                noIndex={true}
            />

            <div className="not-found text-center">
                <div className="container">
                    <div className="not-found__inner">
                        {/* 404 Icon and Title */}
                        <div className="not-found__header mb-5">
                            <span className="not-found__icon">
                                <i className="fas fa-exclamation-triangle text-main"></i>
                            </span>
                            <h1 className='mt-4 mb-3 display-1 fw-bold text-main'>404</h1>
                            <h2 className='mb-3'>Oops! Page Not Found</h2>
                            <p className='text-body mb-0'>The page you're looking for doesn't exist or has been moved.</p>
                        </div>

                        {/* Search Section */}
                        <div className="not-found__search mb-5">
                            <h4 className='mb-3'>Try searching for what you need:</h4>
                            <form onSubmit={handleSearch} className="search-form mx-auto" style={{maxWidth: '500px'}}>
                                <div className="input-group">
                                    <input 
                                        type="text" 
                                        className="form-control form-control-lg"
                                        placeholder="Search services, projects, or blog posts..."
                                        value={searchQuery}
                                        onChange={(e) => setSearchQuery(e.target.value)}
                                    />
                                    <button className="btn btn-main btn-lg" type="submit">
                                        <i className="fas fa-search"></i>
                                    </button>
                                </div>
                            </form>
                        </div>

                        {/* Popular Pages */}
                        <div className="not-found__popular mb-5">
                            <h4 className='mb-4'>Or explore these popular pages:</h4>
                            <div className="row g-3 justify-content-center">
                                {popularPages.map((page, index) => (
                                    <div key={index} className="col-6 col-md-4 col-lg-2">
                                        <Link to={page.path} className="popular-page-card text-decoration-none">
                                            <div className="card h-100 border-0 shadow-sm hover-shadow">
                                                <div className="card-body text-center p-3">
                                                    <i className={`${page.icon} fa-2x text-main mb-2`}></i>
                                                    <h6 className="card-title mb-0 text-heading">{page.title}</h6>
                                                </div>
                                            </div>
                                        </Link>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Action Buttons */}
                        <div className="not-found__actions">
                            <div className="d-flex flex-wrap gap-3 justify-content-center">
                                <Button 
                                    btnLink="/" 
                                    btnClass="btn-main btn-lg" 
                                    btnText="Go to Homepage" 
                                    spanClass="icon-right" 
                                    iconClass="fas fa-home" 
                                />
                                <button 
                                    onClick={goBack}
                                    className="btn btn-outline-main btn-lg"
                                >
                                    <i className="fas fa-arrow-left me-2"></i>
                                    Go Back
                                </button>
                                <Button 
                                    btnLink="/contact" 
                                    btnClass="btn btn-outline-main btn-lg" 
                                    btnText="Contact Support" 
                                    spanClass="icon-right" 
                                    iconClass="fas fa-headset" 
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Footer */}
            <Footer />
        </>
    );
};

export default NotFound;