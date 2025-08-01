import React from 'react';

// ============================== Property Sidebar Page Data Start ==============================
// Property types removed - focusing on consultation services

export const reasons = [
    {
        text: 'Buying',
        value: 'Buy',
    },
    {
        text: 'Selling',
        value: 'Sell',
    },
]

export const searchAmenities = [
    {
        text: 'Dishwasher'
    },
    {
        text: 'Floor Coverings'
    },
    {
        text: 'Internet'
    },
    {
        text: 'Build Wardrobes'
    },
    {
        text: 'Supermarket'
    },
    {
        text: 'Kids Zone'
    },
]
export const priceRanges = [
    {
        text: 'Low Budget',
        value: 'Low Price'
    },
    {
        text: 'Medium',
        value: 'Medium Price'
    },
    {
        text: 'High Budget',
        value: 'High Price'
    }
]
export const bedBaths = [
    {
        text: 'Single'
    },
    {
        text: 'Double'
    },
    {
        text: 'Up To 3'
    },
    {
        text: 'Up To 5'
    },
    {
        text: 'Supermarket'
    },
]

// ============================== Property Sidebar Page Data End ==============================


// ============================== Property Details Page Data Start ==============================
import propertyDetailsThumb1 from '/assets/images/thumbs/property-details-1.png';
import propertyDetailsThumb2 from '/assets/images/thumbs/property-details-2.png';
import propertyDetailsThumb3 from '/assets/images/thumbs/property-details-3.png';
import propertyDetailsThumb4 from '/assets/images/thumbs/property-details-4.png';
export const propertyDetailsThumbs = [
    {
        thumb: propertyDetailsThumb1
    },
    {
        thumb: propertyDetailsThumb2
    },
    {
        thumb: propertyDetailsThumb3
    },
    {
        thumb: propertyDetailsThumb4
    },
]

import amenitiesIcon1 from '/assets/images/icons/amenities1.svg';
import amenitiesIcon2 from '/assets/images/icons/amenities2.svg';
import amenitiesIcon3 from '/assets/images/icons/amenities3.svg';
import amenitiesIcon4 from '/assets/images/icons/amenities4.svg';
import amenitiesIcon5 from '/assets/images/icons/amenities5.svg';
import amenitiesIcon6 from '/assets/images/icons/amenities6.svg';
export const propertyDetailsAmenities = [ 
    {
        icon: amenitiesIcon1,
        text: "Room", 
        title: "4 Room"  
    },
    {
        icon: amenitiesIcon2,
        text: "Bed", 
        title: "3 Beds"  
    },
    {
        icon: amenitiesIcon3,
        text: "Bath", 
        title: "2 Baths"  
    },
    {
        icon: amenitiesIcon4,
        text: "Space", 
        title: "3 Space"  
    },
    {
        icon: amenitiesIcon5,
        text: "Size", 
        title: "1020 sqft"  
    },
    {
        icon: amenitiesIcon6,
        text: " Property Type ", 
        title: "Apartment"  
    },
]

export const featureLists = [
    {
        icon: <i className="fas fa-check"></i>,
        text: 'Dream Property Solutions'
    },
    {
        icon: <i className="fas fa-check"></i>,
        text: 'Prestige Property Management'
    },
    {
        icon: <i className="fas fa-check"></i>,
        text: 'Secure Property Partners'
    },
    {
        icon: <i className="fas fa-check"></i>,
        text: 'Global Real Estate Investments'
    },
    {
        icon: <i className="fas fa-check"></i>,
        text: 'Doors to Your Future'
    },
    {
        icon: <i className="fas fa-check"></i>,
        text: 'You Home with Experience'
    },
]

export const addressContents = [
    {
        text: 'Address',
        title: 'Mirpur 1,Chineese'
    },
    {
        text: 'Code',
        title: '2365'
    }
]

// Common Sidebar Data
export const categoryLists = [
    {
        link: '/blog',
        text: 'Prime Investments',
        number: '(1)'
    },
    {
        link: '/blog',
        text: 'ProHome Finders',
        number: '(8)'
    },
    {
        link: '/blog',
        text: 'SmartHouse Agency',
        number: '(3)'
    },
    {
        link: '/blog',
        text: 'Secure Property Partners',
        number: '(5)'
    },
]

import SidebarPropertyImg1 from '/assets/images/thumbs/properties-1.png';
import SidebarPropertyImg2 from '/assets/images/thumbs/properties-2.png';
import SidebarPropertyImg3 from '/assets/images/thumbs/properties-3.png';
import SidebarPropertyImg4 from '/assets/images/thumbs/properties-4.png';
import SidebarPropertyImg5 from '/assets/images/thumbs/properties-5.png';
import SidebarPropertyImg6 from '/assets/images/thumbs/properties-6.png';

export const sidebarProperties = [
    {
        link: '/property',
        image: SidebarPropertyImg1,
        text: 'Relax House'
    },
    {
        link: '/property',
        image: SidebarPropertyImg2,
        text: 'Hunting Adventure'
    },
    {
        link: '/property',
        image: SidebarPropertyImg3,
        text: 'Homeowner ship'
    },
    {
        link: '/property',
        image: SidebarPropertyImg4,
        text: 'Real Dreams'
    },
    {
        link: '/property',
        image: SidebarPropertyImg5,
        text: 'New Doors'
    },
    {
        link: '/property',
        image: SidebarPropertyImg6,
        text: 'The Heart'
    },
]

export const sidebarTags = [
    {
        text: 'All Project',
        link: '/blog'
    },
    {
        text: 'Finders',
        link: '/blog'
    },
    {
        text: 'Home Sales',
        link: '/blog'
    },
    {
        text: 'Swift',
        link: '/blog'
    },
    {
        text: 'Reliable Sales',
        link: '/blog'
    },
    {
        text: 'Living',
        link: '/blog'
    },
]
// ============================== Property Details Page Data End ==============================


// ============================== Listing Page Data Removed ==============================
// Listing functionality has been removed from the website
// ============================== Listing Page Data End ==============================


// ============================== Map Location Page Data Start ==============================
export const mapLocations = [
    {
        id: 1,
        title: 'Toronto',
        mapLocationsCards: [
            {
                title: 'Main Office - Woodbridge',
                mapLocationsContacts: [
                    {
                        icon: <i className="fas fa-map-marker-alt"></i>,
                        title: 'Address',
                        address: ' 4040 Steeles Ave W, Woodbridge, ON L4L 4Y5 '
                    },
                    {
                        icon: <i className="fas fa-phone"></i>,
                        title: 'Phone Number',
                        address: ' +1 647-560-0736 '
                    },
                ],
                mapLocationsButtons: [
                    {
                        link: '/contact',
                        text: 'Appointment',
                        icon: <i className="fas fa-paper-plane"></i>
                    },
                    {
                        link: 'https://www.google.com',
                        text: 'Website',
                        icon: <i className="fas fa-paper-plane"></i>
                    },
                ]           
            },
            {
                title: 'North York',
                mapLocationsContacts: [
                    {
                        icon: <i className="fas fa-map-marker-alt"></i>,
                        title: 'Address',
                        address: ' 456 Yonge Street, North York, ON M2N 5S2 '
                    },
                    {
                        icon: <i className="fas fa-phone"></i>,
                        title: 'Phone Number',
                        address: ' +1 647-560-0736 '
                    },
                ],
                mapLocationsButtons: [
                    {
                        link: '/contact',
                        text: 'Appointment',
                        icon: <i className="fas fa-paper-plane"></i>
                    },
                    {
                        link: 'https://www.google.com',
                        text: 'Website',
                        icon: <i className="fas fa-paper-plane"></i>
                    },
                ]           
            },
            {
                title: 'Etobicoke',
                mapLocationsContacts: [
                    {
                        icon: <i className="fas fa-map-marker-alt"></i>,
                        title: 'Address',
                        address: ' 789 The Queensway, Etobicoke, ON M8Z 1N4 '
                    },
                    {
                        icon: <i className="fas fa-phone"></i>,
                        title: 'Phone Number',
                        address: ' +1 647-560-0736 '
                    },
                ],
                mapLocationsButtons: [
                    {
                        link: '/contact',
                        text: 'Appointment',
                        icon: <i className="fas fa-paper-plane"></i>
                    },
                    {
                        link: 'https://www.google.com',
                        text: 'Website',
                        icon: <i className="fas fa-paper-plane"></i>
                    },
                ]           
            },
            {
                title: 'Scarborough',
                mapLocationsContacts: [
                    {
                        icon: <i className="fas fa-map-marker-alt"></i>,
                        title: 'Address',
                        address: ' 321 McCowan Road, Scarborough, ON M1S 3S6 '
                    },
                    {
                        icon: <i className="fas fa-phone"></i>,
                        title: 'Phone Number',
                        address: ' +1 647-560-0736 '
                    },
                ],
                mapLocationsButtons: [
                    {
                        link: '/contact',
                        text: 'Appointment',
                        icon: <i className="fas fa-paper-plane"></i>
                    },
                    {
                        link: 'https://www.google.com',
                        text: 'Website',
                        icon: <i className="fas fa-paper-plane"></i>
                    },
                ]           
            },
        ]
    },
    {
        id: 2,
        title: 'GTA',
        mapLocationsCards: [
            {
                title: 'Mississauga',
                mapLocationsContacts: [
                    {
                        icon: <i className="fas fa-map-marker-alt"></i>,
                        title: 'Address',
                        address: ' 100 City Centre Drive, Mississauga, ON L5B 2C9 '
                    },
                    {
                        icon: <i className="fas fa-phone"></i>,
                        title: 'Phone Number',
                        address: ' (905) 555-0100 '
                    },
                ],
                mapLocationsButtons: [
                    {
                        link: '/contact',
                        text: 'Appointment',
                        icon: <i className="fas fa-paper-plane"></i>
                    },
                    {
                        link: 'https://www.google.com',
                        text: 'Website',
                        icon: <i className="fas fa-paper-plane"></i>
                    },
                ]           
            },
            {
                title: 'Brampton',
                mapLocationsContacts: [
                    {
                        icon: <i className="fas fa-map-marker-alt"></i>,
                        title: 'Address',
                        address: ' 200 Main Street North, Brampton, ON L6V 1P2 '
                    },
                    {
                        icon: <i className="fas fa-phone"></i>,
                        title: 'Phone Number',
                        address: ' (905) 555-0200 '
                    },
                ],
                mapLocationsButtons: [
                    {
                        link: '/contact',
                        text: 'Appointment',
                        icon: <i className="fas fa-paper-plane"></i>
                    },
                    {
                        link: 'https://www.google.com',
                        text: 'Website',
                        icon: <i className="fas fa-paper-plane"></i>
                    },
                ]           
            },
            {
                title: 'Markham',
                mapLocationsContacts: [
                    {
                        icon: <i className="fas fa-map-marker-alt"></i>,
                        title: 'Address',
                        address: ' 300 Highway 7 East, Markham, ON L3R 0E1 '
                    },
                    {
                        icon: <i className="fas fa-phone"></i>,
                        title: 'Phone Number',
                        address: ' (905) 555-0300 '
                    },
                ],
                mapLocationsButtons: [
                    {
                        link: '/contact',
                        text: 'Appointment',
                        icon: <i className="fas fa-paper-plane"></i>
                    },
                    {
                        link: 'https://www.google.com',
                        text: 'Website',
                        icon: <i className="fas fa-paper-plane"></i>
                    },
                ]           
            },
            {
                title: 'Richmond Hill',
                mapLocationsContacts: [
                    {
                        icon: <i className="fas fa-map-marker-alt"></i>,
                        title: 'Address',
                        address: ' 400 Major Mackenzie Drive, Richmond Hill, ON L4C 3G8 '
                    },
                    {
                        icon: <i className="fas fa-phone"></i>,
                        title: 'Phone Number',
                        address: ' (905) 555-0400 '
                    },
                ],
                mapLocationsButtons: [
                    {
                        link: '/contact',
                        text: 'Appointment',
                        icon: <i className="fas fa-paper-plane"></i>
                    },
                    {
                        link: 'https://www.google.com',
                        text: 'Website',
                        icon: <i className="fas fa-paper-plane"></i>
                    },
                ]           
            },
        ]
    },
    {
        id: 3,
        title: 'Ontario',
        mapLocationsCards: [
            {
                title: 'Vaughan',
                mapLocationsContacts: [
                    {
                        icon: <i className="fas fa-map-marker-alt"></i>,
                        title: 'Address',
                        address: ' 500 Rutherford Road, Vaughan, ON L4K 4H1 '
                    },
                    {
                        icon: <i className="fas fa-phone"></i>,
                        title: 'Phone Number',
                        address: ' (905) 555-0500 '
                    },
                ],
                mapLocationsButtons: [
                    {
                        link: '/contact',
                        text: 'Appointment',
                        icon: <i className="fas fa-paper-plane"></i>
                    },
                    {
                        link: 'https://www.google.com',
                        text: 'Website',
                        icon: <i className="fas fa-paper-plane"></i>
                    },
                ]           
            },
            {
                title: 'Oakville',
                mapLocationsContacts: [
                    {
                        icon: <i className="fas fa-map-marker-alt"></i>,
                        title: 'Address',
                        address: ' 600 Kerr Street, Oakville, ON L6K 3C7 '
                    },
                    {
                        icon: <i className="fas fa-phone"></i>,
                        title: 'Phone Number',
                        address: ' (905) 555-0600 '
                    },
                ],
                mapLocationsButtons: [
                    {
                        link: '/contact',
                        text: 'Appointment',
                        icon: <i className="fas fa-paper-plane"></i>
                    },
                    {
                        link: 'https://www.google.com',
                        text: 'Website',
                        icon: <i className="fas fa-paper-plane"></i>
                    },
                ]           
            },
            {
                title: 'Ajax',
                mapLocationsContacts: [
                    {
                        icon: <i className="fas fa-map-marker-alt"></i>,
                        title: 'Address',
                        address: ' 700 Westney Road South, Ajax, ON L1S 6M7 '
                    },
                    {
                        icon: <i className="fas fa-phone"></i>,
                        title: 'Phone Number',
                        address: ' (905) 555-0700 '
                    },
                ],
                mapLocationsButtons: [
                    {
                        link: '/contact',
                        text: 'Appointment',
                        icon: <i className="fas fa-paper-plane"></i>
                    },
                    {
                        link: 'https://www.google.com',
                        text: 'Website',
                        icon: <i className="fas fa-paper-plane"></i>
                    },
                ]           
            },
            {
                title: 'Pickering',
                mapLocationsContacts: [
                    {
                        icon: <i className="fas fa-map-marker-alt"></i>,
                        title: 'Address',
                        address: ' 800 Liverpool Road, Pickering, ON L1W 1R2 '
                    },
                    {
                        icon: <i className="fas fa-phone"></i>,
                        title: 'Phone Number',
                        address: ' (905) 555-0800 '
                    },
                ],
                mapLocationsButtons: [
                    {
                        link: '/contact',
                        text: 'Appointment',
                        icon: <i className="fas fa-paper-plane"></i>
                    },
                    {
                        link: 'https://www.google.com',
                        text: 'Website',
                        icon: <i className="fas fa-paper-plane"></i>
                    },
                ]           
            },
        ]
    },
]
// ============================== Map Location Page Data End ==============================


// ============================== Team Section Data Start ==============================
import teamImg1 from '/assets/images/thumbs/team1.png';
import teamImg2 from '/assets/images/thumbs/team2.png';
import teamImg3 from '/assets/images/thumbs/team3.png';

export const teams = [
    {
        thumb: teamImg1,
        name: 'Sarah Johnson',
        designation: 'Senior Real Estate Agent',
        shareIcon: <i className="fas fa-share-alt"></i>
    },  
    {
        thumb: teamImg2,
        name: 'Michael Chen',
        designation: 'Commercial Property Specialist',
        shareIcon: <i className="fas fa-share-alt"></i>
    },  
    {
        thumb: teamImg3,
        name: 'Emily Rodriguez',
        designation: 'Investment Property Advisor',
        shareIcon: <i className="fas fa-share-alt"></i>
    },  
]

// ============================== Team Section Data End ==============================



// ====================== Faq Page Counter Four Data Start ====================
import counterFourIcon1 from '/assets/images/icons/counter-four1.svg';
import counterFourIcon2 from '/assets/images/icons/counter-four2.svg';
import counterFourIcon3 from '/assets/images/icons/counter-four3.svg';
import counterFourIcon4 from '/assets/images/icons/counter-four4.svg';

export const counterFourContents = [
    {
        icon: counterFourIcon1,
        number: '800+',
        text: 'Happy Client'
    },
    {
        icon: counterFourIcon2,
        number: '440+',
        text: ' Project done '
    },
    {
        icon: counterFourIcon3,
        number: '500k',
        text: 'Employees'
    },
    {
        icon: counterFourIcon4,
        number: '80+',
        text: ' Award winning '
    },
]
// ====================== Faq Page Counter Four Data End ====================


// ========================= Checkout Page Data Start =========================
import paymentMethodImg1 from '/assets/images/thumbs/paypal.png';
import paymentMethodImg2 from '/assets/images/thumbs/visa.png';

export const paymentMethods = [
    {
        text: 'Debit card / Credit card',
        img: paymentMethodImg1
    },
    {
        text: 'Paypal',
        img: paymentMethodImg2
    },
]

// Bill Lists
export const billingLists = [
    {
        text: '3 Rooms Downtown Toronto × 2',
        amount: '321.95'
    },
    {
        text: 'OE Replica Wheels × 2',
        amount: ' $185.00 '
    },
    {
        text: 'Wheel Bearing Retainer × 2',
        amount: ' $130.00'
    },
    {
        text: 'Shipping and Handing',
        amount: ' $15.00'
    },
    {
        text: 'Vat',
        amount: ' $20.00'
    }
]
// ========================= Checkout Page Data End =========================


// ========================= Cart Page Data Start =========================
import cartThumb1 from '/assets/images/thumbs/property-1.png';
import cartThumb2 from '/assets/images/thumbs/property-2.png';
import cartThumb3 from '/assets/images/thumbs/property-3.png';
import cartThumb4 from '/assets/images/thumbs/property-4.png';

export const cartItems = [
    {       
        thumb: cartThumb1,
        title: '3 Rooms Downtown Toronto',
        locationIcon: <i className="fas fa-map-marker-alt"></i>,
        location: '4040 Steeles Ave W, Woodbridge, ON L4L 4Y5',
        price: '85.10'
    },
    {       
        thumb: cartThumb2,
        title: 'Luxury Condo North York',
        locationIcon: <i className="fas fa-map-marker-alt"></i>,
        location: '456 Yonge Street, North York, ON',
        price: '50.50'
    },
    {       
        thumb: cartThumb3,
        title: 'Your journey home owner',
        locationIcon: <i className="fas fa-map-marker-alt"></i>,
        location: '789 Queen Street East, Toronto, ON',
        price: '45.80'
    },
    {       
        thumb: cartThumb4,
        title: '3 Rooms Etobicoke',
        locationIcon: <i className="fas fa-map-marker-alt"></i>,
        location: '321 Lakeshore Boulevard, Etobicoke, ON',
        price: '90.20'
    },
]
// ========================= Cart Page Data End =========================


// ========================= Account Page Data Start =========================
export const accountTabs = [
    {
        icon: <i className="fas fa-home"></i>,
        text: 'Home '
    },
    {
        icon: <i className="fas fa-user"></i>,
        text: ' Profile'
    },
    {
        icon: <i className="fas fa-map-marker-alt"></i>,
        text: ' address'
    },
    {
        icon: <i className="fas fa-user"></i>,
        text: ' Account Details'
    },
    {
        icon: <i className="fas fa-list"></i>,
        text: ' My Properties'
    },
    {
        icon: <i className="fas fa-heart"></i>,
        text: ' Favorite Properties'
    },
    {
        icon: <i className="fas fa-map-marked-alt"></i>,
        text: ' Add Property'
    },
    {
        icon: <i className="fas fa-money-check"></i>,
        text: ' Payments'
    },
    {
        icon: <i className="fas fa-lock"></i>,
        text: ' Change Password'
    },
]


export const accountAddress = [ 
    {
        title: 'Billing Address',
        name: 'Rosalina D. William',
        accountAddressInfos: [
            {
                title: 'location:',
                text: import.meta.env.VITE_BUSINESS_ADDRESS || '4040 Steeles Ave W, Woodbridge, ON L4L 4Y5'
            },
            {
                title: 'Phone:',
                text: import.meta.env.VITE_CONTACT_PHONE || '+1 647-560-0736'
            },
            {
                title: 'Email:',
                text: import.meta.env.VITE_CONTACT_EMAIL || 'info@mantragroup.ca'
            },
        ]
    },
    {
        title: 'Shipping Address',
        name: 'Rosalina D. William',
        accountAddressInfos: [
            {
                title: 'location:',
                text: import.meta.env.VITE_BUSINESS_ADDRESS || '4040 Steeles Ave W, Woodbridge, ON L4L 4Y5'
            },
            {
                title: 'Phone:',
                text: import.meta.env.VITE_CONTACT_PHONE || '+1 647-560-0736'
            },
            {
                title: 'Email:',
                text: import.meta.env.VITE_CONTACT_EMAIL || 'info@mantragroup.ca'
            },
        ]
    },
]

import PropertyTableThumb1 from '/assets/images/thumbs/property-1.png';
import PropertyTableThumb2 from '/assets/images/thumbs/property-2.png';
import PropertyTableThumb3 from '/assets/images/thumbs/property-3.png';
import PropertyTableThumb4 from '/assets/images/thumbs/property-4.png';

export const propertyTables = [ 
    {
        thumb: PropertyTableThumb1,
        title: '3 Rooms Downtown Toronto',
        location: ' 4040 Steeles Ave W, Woodbridge, ON L4L 4Y5 ',
        locationIcon: <i className="fas fa-map-marker-alt"></i>,
        price: '$85.00',
        date: '17/02/2024',
        editIcon: <i className="fas fa-edit"></i>,
        deleteIcon: <i className="fas fa-trash-alt"></i> 
    },
    {
        thumb: PropertyTableThumb2,
        title: 'Luxury Condo North York',
        location: ' 456 Yonge Street, North York, ON ',
        locationIcon: <i className="fas fa-map-marker-alt"></i>,
        price: '$85.00',
        date: '17/02/2024',
        editIcon: <i className="fas fa-edit"></i>,
        deleteIcon: <i className="fas fa-trash-alt"></i> 
    },
    {
        thumb: PropertyTableThumb3,
        title: 'Your journey home owner',
        location: ' 789 Queen Street East, Toronto, ON ',
        locationIcon: <i className="fas fa-map-marker-alt"></i>,
        price: '$85.00',
        date: '17/02/2024',
        editIcon: <i className="fas fa-edit"></i>,
        deleteIcon: <i className="fas fa-trash-alt"></i> 
    },
    {
        thumb: PropertyTableThumb4,
        title: 'Turning Dreams into Reality',
        location: ' 321 Lakeshore Boulevard, Etobicoke, ON ',
        locationIcon: <i className="fas fa-map-marker-alt"></i>,
        price: '$85.00',
        date: '17/02/2024',
        editIcon: <i className="fas fa-edit"></i>,
        deleteIcon: <i className="fas fa-trash-alt"></i> 
    },
]
// ========================= Account Page Data End =========================


// ========================= Project Page Data End =========================
import projectItemThumb1 from '/assets/images/thumbs/project-img1.png';
import projectItemThumb2 from '/assets/images/thumbs/project-img2.png';
import projectItemThumb3 from '/assets/images/thumbs/project-img3.png';
import projectItemThumb4 from '/assets/images/thumbs/project-img4.png';
export const projectItems = [
    {
        id: 1,
        thumb: projectItemThumb1,
        title: 'Turning Dreams into Addresses Home State',
        desc: 'Experience luxury living in this stunning residential development featuring modern architecture, premium finishes, and world-class amenities. Located in a prime neighborhood with excellent connectivity to downtown, shopping centers, and top-rated schools. This project represents the perfect blend of comfort, style, and investment potential for discerning homeowners.',
    },
    {
        id: 2,
        thumb: projectItemThumb2,
        title: 'Your journey homeownership starts here too',
        desc: 'Discover your path to homeownership with our comprehensive real estate services. From first-time buyers to seasoned investors, we provide expert guidance through every step of the property acquisition process. Our dedicated team ensures you find the perfect home that matches your lifestyle, budget, and long-term investment goals.',
    },
    {
        id: 3,
        thumb: projectItemThumb3,
        title: 'Opening Doors to Your Dreams For Living',
        desc: 'Unlock exceptional opportunities in premium real estate developments designed for modern living. Our portfolio features carefully selected properties that offer superior quality, strategic locations, and strong appreciation potential. Whether you seek a family home or investment property, we open doors to your real estate dreams.',
    },
    {
        id: 4,
        thumb: projectItemThumb4,
        title: 'Home is Where Your Story Begins',
        desc: 'Begin your unique real estate story with properties that reflect your personal style and aspirations. Our curated selection of homes provides the foundation for creating lasting memories and building generational wealth. From cozy starter homes to luxury estates, every property tells a story of possibility and potential.',
    },
    {
        id: 5,
        thumb: projectItemThumb1,
        title: 'Building Trust, One Home at a Tim',
        desc: 'Establish lasting relationships built on integrity, transparency, and exceptional service in every real estate transaction. Our commitment to excellence has earned the trust of countless families and investors throughout the region. Experience the difference that dedicated professionals make in achieving your property goals.',
    },
    {
        id: 6,
        thumb: projectItemThumb2,
        title: 'Brick by Brick Your Dream Home Awaits',
        desc: 'Realize your vision of the perfect home with our meticulous attention to detail and personalized approach. Each property in our portfolio is carefully selected and presented to meet the highest standards of quality and value. Let us help you build your dream home brick by brick, ensuring every element exceeds your expectations.',
    },
    {
        id: 7,
        thumb: projectItemThumb3,
        title: 'Guiding You Home with Experienc',
        desc: 'Benefit from decades of experience and deep market knowledge in navigating complex real estate transactions. Our seasoned professionals guide you through every aspect of buying, selling, or investing in property. Trust our expertise to help you make informed decisions and achieve optimal outcomes in your real estate journey.',
    },
    {
        id: 8,
        thumb: projectItemThumb4,
        title: 'A Tradition of Trust in Real Estate',
        desc: 'Continue a legacy of excellence in real estate services that spans generations of satisfied clients. Our tradition of trust is built on consistent results, ethical practices, and unwavering commitment to client success. Join the thousands of families who have trusted us with their most important real estate decisions.',
    },
]

export const challengeLists = [
    {
        text: 'Unleash the Potential of your Interiors'
    },
    {
        text: 'Professional Market Analysis and Property Valuation'
    },
    {
        text: 'Unleash the Potential of your Interiors'
    },
    {
        text: 'MBA rotter of the litter university in united state'
    },
    {
        text: 'BSC, Engineering of institute of trade and science'
    },
    {
        text: 'MBA rotter of the litter university united state'
    },
]

export const projectSidebarLists = [
    {
        text: 'Client',
        title: 'Sandi leo rakiul'
    },
    {
        text: '150000 USD',
        title: 'consultation real estate'
    },
    {
        text: 'Category',
        title: 'Planing, Real Estate'
    }
]
// ========================= Project Page Data End =========================



// ========================= Project Page Data End =========================
export const contactTopInfos = [
    {
        icon: <i className="fas fa-envelope"></i>,
        title: 'Email Us',
        textOne: 'info@mantragroup.ca',
        textTwo: 'sales@mantragroup.ca',
        link: 'mailto:'
    },
    {
        icon: <i className="fas fa-map-marker-alt"></i>,
        title: 'Our Location',
        text: 'Greater Toronto Area, Ontario, Canada',
    },
    {
        icon: <i className="fas fa-phone"></i>,
        title: 'Call Us',
        textOne: '+1 (647) 560-0736',
        textTwo: '+1 (416) 890-1234',
        link: 'tel:'
    },
    {
        icon: <i className="fas fa-clock"></i>,
        title: 'Office Hours',
        text: 'Monday - Friday: 9:00 AM - 7:00 PM, Saturday: 10:00 AM - 5:00 PM, Sunday: By Appointment',
    },
]
// ========================= Project Page Data End =========================


// ========================= Project Page Data End =========================
// export const propertyTables = [
//     {

//     },
// ]
// ========================= Project Page Data End =========================


// ========================= Project Page Data End =========================
// export const propertyTables = [
//     {

//     },
// ]
// ========================= Project Page Data End =========================

