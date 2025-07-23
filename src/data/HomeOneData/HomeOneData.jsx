import React from 'react'; 

// Banner One
import BannerImg from '/assets/images/thumbs/banner-img.png'; 
export const bannerContent = {
    subtitle: 'Proudly Serving the South Asian Community',
    title: 'Pre-Construction & Commercial ',
    gradientTitle: 'Real Estate Experts ',
    desc: 'Mantra Group specializes in pre-construction and commercial real estate across Ontario and Alberta. We proudly serve the South Asian community with expert guidance in Punjabi, Hindi, and Urdu. From new developments to commercial investments, we help you secure your future with confidence.',
    thumb: BannerImg
}

// Filter Tabs
export const filterTabs = [
    {
        id: 1,
        text: 'Pre-Construction'
    },
    {
        id: 2,
        text: 'Commercial'
    },
]
  

// About One Content
export const aboutStatistics = {
    icon: <i className="fas fa-users text-gradient"></i>,
    number: '2500+',
    text: 'Satisfied Clients'
}
import aboutContentThumb from '/assets/images/thumbs/about-img.png';
import aboutContentIcon from '/assets/images/icons/about-icon.svg'; 
export const aboutContent = {
    thumb: aboutContentThumb,
    icon: aboutContentIcon,
    title: 'Your Trusted Partner for Pre-Construction & Commercial Real Estate',
    desc: 'Mantra Group proudly serves the South Asian community across Ontario and Alberta with specialized expertise in pre-construction and commercial real estate. Our multilingual team speaks Punjabi, Hindi, and Urdu, ensuring clear communication throughout your investment journey. We understand the unique needs of our community and provide culturally sensitive service while helping you secure prime pre-construction opportunities and commercial investments for long-term wealth building.'
}


// Property listings functionality has been removed
// Mantra Group now focuses on pre-construction and commercial real estate consultation


// Counts Data
export const counts = [
    {
        number: '15',
        text: 'Years Serving Toronto'
    },
    {
        number: '2500',
        text: 'Happy Toronto Families'
    },
    {
        number: '3200',
        text: 'GTA Properties Sold'
    },
    {
        number: '99',
        text: 'Client Satisfaction Rate'
    },
]


// portfolio  Data
import portfolioThumb1 from '/assets/images/thumbs/portfolio1.png';
import portfolioThumb2 from '/assets/images/thumbs/portfolio2.png';
import portfolioThumb3 from '/assets/images/thumbs/portfolio3.png';
import portfolioThumb4 from '/assets/images/thumbs/portfolio4.png'; 
export const portfolios = [
    {
        thumb: portfolioThumb1,
        title: 'Outsourcing business',
        desc: 'Real Estate is a vast industry that deals with the buying and selling of properties',
        btnIcon: <i className="fas fa-arrow-right"></i>
    },
    {
        thumb: portfolioThumb2,
        title: 'Outsourcing business',
        desc: 'Real Estate is a vast industry that deals with the buying and selling of properties',
        btnIcon: <i className="fas fa-arrow-right"></i>
    },
    {
        thumb: portfolioThumb3,
        title: 'Outsourcing business',
        desc: 'Real Estate is a vast industry that deals with the buying and selling of properties',
        btnIcon: <i className="fas fa-arrow-right"></i>
    },
    {
        thumb: portfolioThumb4,
        title: 'Outsourcing business',
        desc: 'Real Estate is a vast industry that deals with the buying and selling of properties',
        btnIcon: <i className="fas fa-arrow-right"></i>
    },
]


// Testimonial Data
import quoteIcon from '/assets/images/icons/quote.svg';
export const testimonials = [
    {
        name: 'Sarah Chen',
        designation: 'First-Time Homebuyer',
        desc: 'The team helped us find our dream condo in King West Village. Their knowledge of Toronto neighborhoods and market trends was invaluable. We couldn\'t be happier with our new home!',
        quote: quoteIcon
    },
    {
        name: 'Michael Rodriguez',
        designation: 'Property Investor',
        desc: 'As an investor, I needed someone who understood Toronto\'s real estate market. They found me three excellent investment properties in Mississauga with great appreciation potential.',
        quote: quoteIcon
    },
    {
        name: 'Jennifer Thompson',
        designation: 'Family Relocating to GTA',
        desc: 'Moving from Vancouver to Toronto was stressful, but this team made house hunting easy. They found us the perfect family home in Richmond Hill near excellent schools.',
        quote: quoteIcon
    },
]

// Blog Data
import blogThumb1 from '/assets/images/thumbs/blog1.png';
import blogThumb2 from '/assets/images/thumbs/blog2.png';
import blogThumb3 from '/assets/images/thumbs/blog3.png';
import blogThumb4 from '/assets/images/thumbs/property-4.png';
import blogThumb5 from '/assets/images/thumbs/property-5.png';
import blogThumb6 from '/assets/images/thumbs/property-6.png'; 

export const blogs = [
    {
        id: 1,
        thumb: blogThumb1,
        admin: 'Toronto Real Estate Team',
        meta: [
            {
                icon: <i className="fas fa-user"></i>,
                text: ' By admin'
            },
            {
                icon: <i className="fas fa-comments"></i>,
                text: 'Comments (30)'
            },
        ],
        title: 'Toronto Condo Market Trends: What Buyers Need to Know in 2024',
        desc: 'Discover the latest trends in Toronto\'s condo market, including price movements in King West, Entertainment District, and emerging neighborhoods. Essential insights for first-time buyers.',
        linkText: 'Read More',
    },
    {
        id: 2,
        thumb: blogThumb2,
        date: '28 Mar',
        admin: 'GTA Market Expert',
        meta: [
            {
                icon: <i className="fas fa-user"></i>,
                text: ' By admin'
            },
            {
                icon: <i className="fas fa-comments"></i>,
                text: 'Comments (50)'
            },
        ],
        title: 'Best Family Neighborhoods in the Greater Toronto Area',
        desc: 'Explore top family-friendly communities in Mississauga, Markham, and Richmond Hill. Compare schools, amenities, and housing options for growing families.',
        linkText: 'Read More',
    },
    {
        id: 3,
        thumb: blogThumb3,
        admin: 'Investment Specialist',
        meta: [
            {
                icon: <i className="fas fa-user"></i>,
                text: ' By admin'
            },
            {
                icon: <i className="fas fa-comments"></i>,
                text: 'Comments (10)'
            },
        ],
        title: 'Toronto Real Estate Investment: Opportunities and ROI Analysis',
        desc: 'Comprehensive guide to investing in Toronto properties. Learn about market analysis, appreciation potential, and the best neighborhoods for investment returns.',
        linkText: 'Read More',
    },
    {
        id: 4,
        thumb: blogThumb4,
        admin: 'Toronto Housing Expert',
        meta: [
            {
                icon: <i className="fas fa-user"></i>,
                text: ' By admin'
            },
            {
                icon: <i className="fas fa-comments"></i>,
                text: 'Comments (10)'
            },
        ],
        title: 'First-Time Home Buyer Guide for Toronto Market',
        desc: 'Navigate Toronto\'s competitive housing market with confidence. Learn about down payments, mortgage pre-approval, and finding the right neighborhood for your lifestyle.',
        linkText: 'Read More',
    },
    {
        id: 5,
        thumb: blogThumb5,
        admin: 'GTA Property Advisor',
        meta: [
            {
                icon: <i className="fas fa-user"></i>,
                text: ' By admin'
            },
            {
                icon: <i className="fas fa-comments"></i>,
                text: 'Comments (10)'
            },
        ],
        title: 'Selling Your Toronto Home: Maximizing Value in Today\'s Market',
        desc: 'Expert tips for selling your Toronto property quickly and for top dollar. Learn about staging, pricing strategies, and market timing in the GTA.',
        linkText: 'Read More',
    },
    {
        id: 6,
        thumb: blogThumb6,
        admin: 'Toronto Market Analyst',
        meta: [
            {
                icon: <i className="fas fa-user"></i>,
                text: ' By admin'
            },
            {
                icon: <i className="fas fa-comments"></i>,
                text: 'Comments (10)'
            },
        ],
        title: 'Toronto vs. GTA Suburbs: Where Should You Buy Your Next Home?',
        desc: 'Compare living in downtown Toronto versus GTA suburbs like Mississauga, Vaughan, and Markham. Analyze costs, commute times, and lifestyle factors.',
        linkText: 'Read More',
    },
]

