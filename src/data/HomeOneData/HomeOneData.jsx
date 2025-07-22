import React from 'react'; 

// Banner One
import BannerImg from '../../../public/assets/images/thumbs/banner-img.png'; 
export const bannerContent = {
    subtitle: 'Premier Real Estate Services',
    title: 'Your Dream Property ',
    gradientTitle: 'Awaits You ',
    desc: 'Experience excellence in real estate with Mantra Group. We provide comprehensive property solutions including buying, selling, leasing, and investment opportunities across Toronto and the Greater Toronto Area. Let our expertise guide you to your perfect property.',
    thumb: BannerImg
}

// Filter Tabs
export const filterTabs = [
    {
        id: 1,
        text: 'Buy'
    },
    {
        id: 2,
        text: 'Sell'
    },
]
  

// About One Content
export const aboutStatistics = {
    icon: <i className="fas fa-users text-gradient"></i>,
    number: '2500+',
    text: 'Satisfied Clients'
}
import aboutContentThumb from '../../../public/assets/images/thumbs/about-img.png'; 
import aboutContentIcon from '../../../public/assets/images/icons/about-icon.svg'; 
export const aboutContent = {
    thumb: aboutContentThumb,
    icon: aboutContentIcon,
    title: 'Your Trusted Real Estate Partner',
    desc: 'At Mantra Group, we bring decades of combined experience in Toronto\'s real estate market. Our commitment to excellence, personalized service, and deep market knowledge ensures that whether you\'re buying, selling, or investing, you receive expert guidance every step of the way. We specialize in residential and commercial properties across the GTA, helping clients achieve their real estate goals with confidence and success.'
}


// Property Data 
import propertyThumb1 from '../../../public/assets/images/thumbs/property-1.png'; 
import propertyThumb2 from '../../../public/assets/images/thumbs/property-2.png'; 
import propertyThumb3 from '../../../public/assets/images/thumbs/property-3.png'; 
import propertyThumb4 from '../../../public/assets/images/thumbs/property-4.png'; 
import propertyThumb5 from '../../../public/assets/images/thumbs/property-5.png'; 
import propertyThumb6 from '../../../public/assets/images/thumbs/property-6.png'; 
import propertyThumb7 from '../../../public/assets/images/thumbs/property-7.png'; 
import propertyThumb8 from '../../../public/assets/images/thumbs/property-8.png'; 
import propertyThumb9 from '../../../public/assets/images/thumbs/property-9.png'; 
import propertyThumb10 from '../../../public/assets/images/thumbs/property-10.png'; 
import propertyThumb11 from '../../../public/assets/images/thumbs/property-11.png'; 
import propertyThumb12 from '../../../public/assets/images/thumbs/property-12.png'; 
export const properties = [
    {
        id: 1,
        thumb: propertyThumb1,
        price: '$850,000',
        day: '',
        title: 'Modern Condo in King West Village',
        desc: 'Stunning 2-bedroom condo in Toronto\'s vibrant King West district. Features floor-to-ceiling windows, premium finishes, and access to world-class amenities. Walking distance to Union Station, Entertainment District, and top restaurants.',
        locationIcon: <i className="fas fa-map-marker-alt"></i>,
        location: '4040 Steeles Ave W, Woodbridge, ON L4L 4Y5',
        amenities: [
            {
                icon: <i className="fas fa-bed"></i>,
                text: '2 Beds',
            },
            {
                icon: <i className="fas fa-bath"></i>,
                text: ' 2 Baths ',
            }
        ],
        btnText: 'View Details',
        dataSort: 'Newest',
        dataStatuses: 'Sell',
        dataTypes: 'Houses',
        dataLocations: "Toronto",
    },
    {
        id: 2,
        thumb: propertyThumb2,
        price: '$1,250,000',
        day: '',
        title: 'Luxury Family Home in North York',
        desc: 'Beautiful 4-bedroom detached home in prestigious North York neighborhood. Features updated kitchen, hardwood floors throughout, finished basement, and private backyard. Close to top-rated schools and TTC access.',
        locationIcon: <i className="fas fa-map-marker-alt"></i>,
        location: '456 Willowdale Avenue, North York, ON',
        amenities: [
            {
                icon: <i className="fas fa-bed"></i>,
                text: '4 Beds',
            },
            {
                icon: <i className="fas fa-bath"></i>,
                text: ' 3 Baths ',
            }
        ],
        btnText: 'View Details',
        dataSort: 'Best Seller',
        dataStatuses: 'Buy',
        dataTypes: 'Apartments',
        dataLocations: "Toronto",
    },
    {
        id: 4,
        thumb: propertyThumb4,
        price: '$2,100,000',
        day: '',
        title: 'Executive Townhouse in Yorkville',
        desc: 'Sophisticated 5-bedroom executive townhouse in Toronto\'s prestigious Yorkville district. Features designer finishes, gourmet kitchen, rooftop terrace, and private garage. Steps from luxury shopping, fine dining, and cultural attractions.',
        locationIcon: <i className="fas fa-map-marker-alt"></i>,
        location: '123 Queen Street West, Toronto, ON',
        amenities: [
            {
                icon: <i className="fas fa-bed"></i>,
                text: '5 Beds',
            },
            {
                icon: <i className="fas fa-bath"></i>,
                text: ' 4 Baths ',
            }
        ],
        btnText: 'View Details',
        dataSort: 'Low Price',
        dataStatuses: 'Sell',
        dataTypes: 'Villa',
        dataLocations: "Ontario",
    },
    {
        id: 5,
        thumb: propertyThumb5,
        price: '$3,250,000',
        day: '',
        title: 'Luxury Estate in Forest Hill',
        desc: 'Magnificent 6-bedroom luxury estate in Toronto\'s exclusive Forest Hill neighborhood. Features grand foyer, chef\'s kitchen, wine cellar, home theater, and beautifully landscaped grounds. Perfect for entertaining and family living.',
        locationIcon: <i className="fas fa-map-marker-alt"></i>,
        location: '321 King Street East, Toronto, ON',
        amenities: [
            {
                icon: <i className="fas fa-bed"></i>,
                text: '6 Beds',
            },
            {
                icon: <i className="fas fa-bath"></i>,
                text: ' 4 Baths ',
            }
        ],
        btnText: 'View Details',
        dataSort: 'High Price',
        dataStatuses: 'Buy',
        dataTypes: 'Houses',
        dataLocations: "Toronto",
    },
    {
        id: 7,
        thumb: propertyThumb7,
        price: '$4,500,000',
        day: '',
        title: 'Premium Commercial Office Space',
        desc: 'Prime commercial office space in downtown Toronto\'s financial district. Features modern amenities, floor-to-ceiling windows, executive boardrooms, and premium location with excellent transit access. Perfect for growing businesses.',
        locationIcon: <i className="fas fa-map-marker-alt"></i>,
        location: '777 Dundas Street West, Toronto, ON',
        amenities: [
            {
                icon: <i className="fas fa-building"></i>,
                text: '15,000 sq ft',
            },
            {
                icon: <i className="fas fa-car"></i>,
                text: ' 50 Parking ',
            }
        ],
        btnText: 'View Details',
        dataSort: 'Best Seller',
        dataStatuses: 'Sell',
        dataTypes: 'Office',
        dataLocations: "Toronto",
    },
    {
        id: 8,
        thumb: propertyThumb8,
        price: '$1,850,000',
        day: '',
        title: 'Penthouse Suite in Midtown',
        desc: 'Stunning penthouse suite in prestigious Midtown Toronto. Features panoramic city views, private terrace, premium finishes, and concierge services. Located near Yonge-Eglinton with excellent transit and amenities.',
        locationIcon: <i className="fas fa-map-marker-alt"></i>,
        location: '888 Yonge Street, Toronto, ON',
        amenities: [
            {
                icon: <i className="fas fa-bed"></i>,
                text: '3 Beds',
            },
            {
                icon: <i className="fas fa-bath"></i>,
                text: ' 3 Baths ',
            }
        ],
        btnText: 'View Details',
        dataSort: 'Best Match',
        dataStatuses: 'Buy',
        dataTypes: 'Villa',
        dataLocations: "Toronto",
    },
    {
        id: 10,
        thumb: propertyThumb10,
        price: '$950,000',
        day: '',
        title: 'Modern Loft in Entertainment District',
        desc: 'Stylish converted loft in Toronto\'s vibrant Entertainment District. Features exposed brick, high ceilings, industrial finishes, and rooftop access. Walking distance to Rogers Centre, CN Tower, and waterfront.',
        locationIcon: <i className="fas fa-map-marker-alt"></i>,
        location: '111 College Street, Toronto, ON',
        amenities: [
            {
                icon: <i className="fas fa-bed"></i>,
                text: '2 Beds',
            },
            {
                icon: <i className="fas fa-bath"></i>,
                text: ' 2 Baths ',
            }
        ],
        btnText: 'View Details',
        dataSort: 'High Price',
        dataStatuses: 'Sell',
        dataTypes: 'Apartments',
        dataLocations: "Toronto",
    },
    {
        id: 11,
        thumb: propertyThumb11,
        price: '$2,800,000',
        day: '',
        title: 'Executive Office Building in Financial District',
        desc: 'Premium office building in Toronto\'s Financial District. Features modern infrastructure, high-speed elevators, executive suites, and prime location near major banks and corporate headquarters. Excellent investment opportunity.',
        locationIcon: <i className="fas fa-map-marker-alt"></i>,
        location: '222 Spadina Avenue, Toronto, ON',
        amenities: [
            {
                icon: <i className="fas fa-building"></i>,
                text: '25,000 sq ft',
            },
            {
                icon: <i className="fas fa-car"></i>,
                text: ' 100 Parking ',
            }
        ],
        btnText: 'View Details',
        dataSort: 'Newest',
        dataStatuses: 'Buy',
        dataTypes: 'Office',
        dataLocations: "Toronto",
    },
]


// Property Type Data
import propertyTypeIcon1 from '../../../public/assets/images/icons/property-type-icon1.svg';
import propertyTypeIcon2 from '../../../public/assets/images/icons/property-type-icon2.svg';
import propertyTypeIcon3 from '../../../public/assets/images/icons/property-type-icon3.svg';
export const propertyTypes = [ 
    {
        icon: propertyTypeIcon1,
        title: 'Residential Properties',
        desc: 'Comprehensive residential real estate services including condos, townhomes, and detached houses. We help families find their perfect home with expert market knowledge and personalized service.'
    },
    {
        icon: propertyTypeIcon2,
        title: 'Commercial Real Estate',
        desc: 'Professional commercial property services for office spaces, retail locations, and industrial properties. Strategic guidance for businesses looking to expand or relocate.'
    },
    {
        icon: propertyTypeIcon3,
        title: 'Investment Opportunities',
        desc: 'Expert investment property analysis and portfolio management. We identify high-potential properties and provide comprehensive market insights to maximize your real estate investments.'
    },
]


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
import portfolioThumb1 from '../../../public/assets/images/thumbs/portfolio1.png'; 
import portfolioThumb2 from '../../../public/assets/images/thumbs/portfolio2.png'; 
import portfolioThumb3 from '../../../public/assets/images/thumbs/portfolio3.png'; 
import portfolioThumb4 from '../../../public/assets/images/thumbs/portfolio4.png'; 
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
import quoteIcon from '../../../public/assets/images/icons/quote.svg';
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
import blogThumb1 from '../../../public/assets/images/thumbs/blog1.png'; 
import blogThumb2 from '../../../public/assets/images/thumbs/blog2.png'; 
import blogThumb3 from '../../../public/assets/images/thumbs/blog3.png'; 
import blogThumb4 from '../../../public/assets/images/thumbs/property-4.png'; 
import blogThumb5 from '../../../public/assets/images/thumbs/property-5.png'; 
import blogThumb6 from '../../../public/assets/images/thumbs/property-6.png'; 

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

