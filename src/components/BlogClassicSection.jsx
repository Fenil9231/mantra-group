import React, { useState, useEffect, useCallback } from 'react';
import Pagination from '../common/Pagination';
import { blogs } from '../data/HomeOneData/HomeOneData';
import CommonSidebar from '../common/CommonSidebar';
import BlogClassicItem from './items/BlogClassicItem';

const BlogClassicSection = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const [displayedBlogs, setDisplayedBlogs] = useState([]);
    const [usePagination, setUsePagination] = useState(true);
    const [loading, setLoading] = useState(false);
    const [hasMore, setHasMore] = useState(true);
    
    const POSTS_PER_PAGE = 6;
    const totalPages = Math.ceil(blogs.length / POSTS_PER_PAGE);

    // Initialize displayed blogs
    useEffect(() => {
        if (usePagination) {
            const startIndex = (currentPage - 1) * POSTS_PER_PAGE;
            const endIndex = startIndex + POSTS_PER_PAGE;
            setDisplayedBlogs(blogs.slice(startIndex, endIndex));
        } else {
            // For infinite scroll, start with first 6 posts
            setDisplayedBlogs(blogs.slice(0, POSTS_PER_PAGE));
            setHasMore(blogs.length > POSTS_PER_PAGE);
        }
    }, [currentPage, usePagination]);

    // Handle pagination page change
    const handlePageChange = useCallback((page) => {
        try {
            setCurrentPage(page);
            // Smooth scroll to top of blog section
            const blogSection = document.querySelector('.blog-classic');
            if (blogSection) {
                blogSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        } catch (error) {
            console.error('Pagination failed, switching to infinite scroll:', error);
            setUsePagination(false);
        }
    }, []);

    // Load more posts for infinite scroll
    const loadMorePosts = useCallback(() => {
        if (loading || !hasMore) return;
        
        setLoading(true);
        
        setTimeout(() => {
            const currentLength = displayedBlogs.length;
            const nextPosts = blogs.slice(currentLength, currentLength + POSTS_PER_PAGE);
            
            if (nextPosts.length > 0) {
                setDisplayedBlogs(prev => [...prev, ...nextPosts]);
                setHasMore(currentLength + nextPosts.length < blogs.length);
            } else {
                setHasMore(false);
            }
            
            setLoading(false);
        }, 500); // Simulate loading delay
    }, [displayedBlogs.length, loading, hasMore]);

    // Infinite scroll detection
    useEffect(() => {
        if (!usePagination) {
            const handleScroll = () => {
                if (window.innerHeight + document.documentElement.scrollTop 
                    >= document.documentElement.offsetHeight - 1000) {
                    loadMorePosts();
                }
            };

            window.addEventListener('scroll', handleScroll);
            return () => window.removeEventListener('scroll', handleScroll);
        }
    }, [usePagination, loadMorePosts]);

    // Fallback mechanism - switch to infinite scroll if pagination fails
    const handlePaginationError = useCallback(() => {
        console.warn('Pagination system failed, switching to infinite scroll');
        setUsePagination(false);
        setCurrentPage(1);
        setDisplayedBlogs(blogs.slice(0, POSTS_PER_PAGE));
        setHasMore(blogs.length > POSTS_PER_PAGE);
    }, []);

    return (
        <>
            <div className="blog-classic padding-y-120">
                <div className="container container-two">
                    <div className="row gy-4">
                        <div className="col-lg-8">
                            {/* Blog Posts */}
                            {
                                displayedBlogs.map((blogItem, blogItemIndex) => {
                                    return (
                                        <BlogClassicItem 
                                            blogItem={blogItem} 
                                            key={`${blogItem.id}-${blogItemIndex}`}
                                        />
                                    )
                                })
                            }
                            
                            {/* Loading indicator for infinite scroll */}
                            {!usePagination && loading && (
                                <div className="text-center py-4">
                                    <div className="spinner-border text-primary" role="status">
                                        <span className="visually-hidden">Loading more posts...</span>
                                    </div>
                                    <p className="mt-2 text-muted">Loading more posts...</p>
                                </div>
                            )}
                            
                            {/* End of posts message for infinite scroll */}
                            {!usePagination && !hasMore && displayedBlogs.length > 0 && (
                                <div className="text-center py-4">
                                    <p className="text-muted">You've reached the end of our blog posts!</p>
                                    <button 
                                        className="btn btn-outline-primary btn-sm"
                                        onClick={() => {
                                            setUsePagination(true);
                                            setCurrentPage(1);
                                        }}
                                    >
                                        Switch to Pagination
                                    </button>
                                </div>
                            )}
                            
                            {/* Load More Button for infinite scroll */}
                            {!usePagination && hasMore && !loading && (
                                <div className="text-center py-4">
                                    <button 
                                        className="btn btn-primary"
                                        onClick={loadMorePosts}
                                    >
                                        Load More Posts
                                    </button>
                                </div>
                            )}
                            
                            {/* Pagination Component */}
                            {usePagination && (
                                <div onError={handlePaginationError}>
                                    <Pagination
                                        currentPage={currentPage}
                                        totalPages={totalPages}
                                        onPageChange={handlePageChange}
                                        showPagination={true}
                                    />
                                </div>
                            )}
                            
                            {/* Switch to Infinite Scroll Option */}
                            {usePagination && totalPages > 1 && (
                                <div className="text-center mt-3">
                                    <button 
                                        className="btn btn-outline-secondary btn-sm"
                                        onClick={() => setUsePagination(false)}
                                    >
                                        Switch to Infinite Scroll
                                    </button>
                                </div>
                            )}
                        </div>
                        <div className="col-lg-4">
                            <CommonSidebar renderSearch={true} renderProperties={false} renderTags={true}/>
                        </div>  
                    </div>
                </div>
            </div>   
        </>
    );
};

export default BlogClassicSection;