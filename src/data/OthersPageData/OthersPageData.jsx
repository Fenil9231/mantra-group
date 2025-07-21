import React from 'react';

// ============================== Property Sidebar Page Data Start ==============================
export const propertyTypes = [
    {
        text: 'House',
        value: 'Houses',
    },
    {
        text: 'Apartment',
        value: 'Apartments',
    },
    {
        text: 'Office',
        value: 'Office',
    },
    {
        text: 'Villa',
        value: 'Villa',
    },
    {
        text: 'Single Family',
        value: 'Single Family',
    },
    {
        text: 'Luxury Home',
        value: 'Luxury Home',
    },
]

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
import propertyDetailsThumb1 from '../../../public/assets/images/thumbs/property-details-1.png';
import propertyDetailsThumb2 from '../../../public/assets/images/thumbs/property-details-2.png';
import propertyDetailsThumb3 from '../../../public/assets/images/thumbs/property-details-3.png';
import propertyDetailsThumb4 from '../../../public/assets/images/thumbs/property-details-4.png';
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

import amenitiesIcon1 from '../../../public/assets/images/icons/amenities1.svg';
import amenitiesIcon2 from '../../../public/assets/images/icons/amenities2.svg';
import amenitiesIcon3 from '../../../public/assets/images/icons/amenities3.svg';
import amenitiesIcon4 from '../../../public/assets/images/icons/amenities4.svg';
import amenitiesIcon5 from '../../../public/assets/images/icons/amenities5.svg';
import amenitiesIcon6 from '../../../public/assets/images/icons/amenities6.svg';
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

import SidebarPropertyImg1 from '../../../public/assets/images/thumbs/properties-1.png';
import SidebarPropertyImg2 from '../../../public/assets/images/thumbs/properties-2.png';
import SidebarPropertyImg3 from '../../../public/assets/images/thumbs/properties-3.png';
import SidebarPropertyImg4 from '../../../public/assets/images/thumbs/properties-4.png';
import SidebarPropertyImg5 from '../../../public/assets/images/thumbs/properties-5.png';
import SidebarPropertyImg6 from '../../../public/assets/images/thumbs/properties-6.png';

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


// ============================== Listing Page Data Start ==============================
export const addListings = [
    {
        link: '#basicInformation',
        text: 'Basic Information'
    },
    {
        link: '#propertyGallery',
        text: 'Property Gallery'
    },
    {
        link: '#propertyInformation',
        text: 'Property Information'
    },
    {
        link: '#propertyContactDetails',
        text: 'Property Contact Details'
    },
]

export const addAmenities = [
    {
        text: 'Air Condition'
    },
    {
        text: 'Lawn'
    },
    {
        text: 'Swimming Pool'
    },
    {
        text: 'Barbeque'
    },
    {
        text: 'Microwave'
    },
    {
        text: 'TV Cable'
    },
    {
        text: 'Dryer'
    },
    {
        text: 'Outdoor Shower'
    },
    {
        text: 'Washer'
    },
    {
        text: 'Gym'
    },
    {
        text: 'Refrigerator'
    },
    {
        text: 'WiFi'
    },
    {
        text: 'Laundry'
    },
    {
        text: 'Souna'
    },
    {
        text: 'Window Coverings'
    },
]
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
                        address: ' (416) 555-0456 '
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
                        address: ' (416) 555-0789 '
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
                        address: ' (416) 555-0321 '
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
import teamImg1 from '../../../public/assets/images/thumbs/team1.png';
import teamImg2 from '../../../public/assets/images/thumbs/team2.png';
import teamImg3 from '../../../public/assets/images/thumbs/team3.png';

export const teams = [
    {
        thumb: teamImg1,
        name: 'Annette Black',
        designation: ' President of Sales ',
        shareIcon: <i className="fas fa-share-alt"></i>
    },  
    {
        thumb: teamImg2,
        name: 'Savannah Nguyen',
        designation: 'Manager of Sales',
        shareIcon: <i className="fas fa-share-alt"></i>
    },  
    {
        thumb: teamImg3,
        name: 'Bessie Cooper',
        designation: 'Director of Sales',
        shareIcon: <i className="fas fa-share-alt"></i>
    },  
]

// ============================== Team Section Data End ==============================



// ====================== Faq Page Counter Four Data Start ====================
import counterFourIcon1 from '../../../public/assets/images/icons/counter-four1.svg';
import counterFourIcon2 from '../../../public/assets/images/icons/counter-four2.svg';
import counterFourIcon3 from '../../../public/assets/images/icons/counter-four3.svg';
import counterFourIcon4 from '../../../public/assets/images/icons/counter-four4.svg';

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
import paymentMethodImg1 from '../../../public/assets/images/thumbs/paypal.png';
import paymentMethodImg2 from '../../../public/assets/images/thumbs/visa.png';

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
import cartThumb1 from '../../../public/assets/images/thumbs/property-1.png';
import cartThumb2 from '../../../public/assets/images/thumbs/property-2.png';
import cartThumb3 from '../../../public/assets/images/thumbs/property-3.png';
import cartThumb4 from '../../../public/assets/images/thumbs/property-4.png';

export const cartItems = [
    {       
        thumb: cartThumb1,
        title: '3 Rooms Downtown Toronto',
        locationIcon: <i className="fas fa-map-marker-alt"></i>,
        location: '123 King Street West, Toronto, ON',
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

import PropertyTableThumb1 from '../../../public/assets/images/thumbs/property-1.png';
import PropertyTableThumb2 from '../../../public/assets/images/thumbs/property-2.png';
import PropertyTableThumb3 from '../../../public/assets/images/thumbs/property-3.png';
import PropertyTableThumb4 from '../../../public/assets/images/thumbs/property-4.png';

export const propertyTables = [ 
    {
        thumb: PropertyTableThumb1,
        title: '3 Rooms Downtown Toronto',
        location: ' 123 King Street West, Toronto, ON ',
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
import projectItemThumb1 from '../../../public/assets/images/thumbs/project-img1.png';
import projectItemThumb2 from '../../../public/assets/images/thumbs/project-img2.png';
import projectItemThumb3 from '../../../public/assets/images/thumbs/project-img3.png';
import projectItemThumb4 from '../../../public/assets/images/thumbs/project-img4.png';
export const projectItems = [
    {
        id: 1,
        thumb: projectItemThumb1,
        title: 'Turning Dreams into Addresses Home State',
        desc: 'Aliquam eros justo, posuere loborti viverra laoreet matti ullamcorper posuere viverra .Aliquam eros justo, posuere lobortis viverra laoreet augue mattis fmentum ullamcorper viverra laoreet Aliquam eros justo, posuere lobor mattis fmentum ullam. Aliquam eros justo, posuere loborti viverra laoreet matti ullamcorper posuere viverra .Aliquam eros justo, posuere lobortis viverra laoreet augue mattis fmentum ullamcorr viverra laoreet Aliquam eros justo, posuere loborti viverra laoreet matti ullamcorper posuere viverra .Aliquam eros justo, posuebortis non, viverraAliquam eros justo, posuere loborti viverra laoreet matti ulamcorper posuere viverra .Aliquam eros justo, posuere lobortis viverra laoreet augue mattis fmentum ullamcorpe',
    },
    {
        id: 2,
        thumb: projectItemThumb2,
        title: 'Your journey homeownership starts here too',
        desc: 'Aliquam eros justo, posuere loborti viverra laoreet matti ullamcorper posuere viverra .Aliquam eros justo, posuere lobortis viverra laoreet augue mattis fmentum ullamcorper viverra laoreet Aliquam eros justo, posuere lobor mattis fmentum ullam. Aliquam eros justo, posuere loborti viverra laoreet matti ullamcorper posuere viverra .Aliquam eros justo, posuere lobortis viverra laoreet augue mattis fmentum ullamcorr viverra laoreet Aliquam eros justo, posuere loborti viverra laoreet matti ullamcorper posuere viverra .Aliquam eros justo, posuebortis non, viverraAliquam eros justo, posuere loborti viverra laoreet matti ulamcorper posuere viverra .Aliquam eros justo, posuere lobortis viverra laoreet augue mattis fmentum ullamcorpe',
    },
    {
        id: 3,
        thumb: projectItemThumb3,
        title: 'Opening Doors to Your Dreams For Living',
        desc: 'Aliquam eros justo, posuere loborti viverra laoreet matti ullamcorper posuere viverra .Aliquam eros justo, posuere lobortis viverra laoreet augue mattis fmentum ullamcorper viverra laoreet Aliquam eros justo, posuere lobor mattis fmentum ullam. Aliquam eros justo, posuere loborti viverra laoreet matti ullamcorper posuere viverra .Aliquam eros justo, posuere lobortis viverra laoreet augue mattis fmentum ullamcorr viverra laoreet Aliquam eros justo, posuere loborti viverra laoreet matti ullamcorper posuere viverra .Aliquam eros justo, posuebortis non, viverraAliquam eros justo, posuere loborti viverra laoreet matti ulamcorper posuere viverra .Aliquam eros justo, posuere lobortis viverra laoreet augue mattis fmentum ullamcorpe',
    },
    {
        id: 4,
        thumb: projectItemThumb4,
        title: 'Home is Where Your Story Begins',
        desc: 'Aliquam eros justo, posuere loborti viverra laoreet matti ullamcorper posuere viverra .Aliquam eros justo, posuere lobortis viverra laoreet augue mattis fmentum ullamcorper viverra laoreet Aliquam eros justo, posuere lobor mattis fmentum ullam. Aliquam eros justo, posuere loborti viverra laoreet matti ullamcorper posuere viverra .Aliquam eros justo, posuere lobortis viverra laoreet augue mattis fmentum ullamcorr viverra laoreet Aliquam eros justo, posuere loborti viverra laoreet matti ullamcorper posuere viverra .Aliquam eros justo, posuebortis non, viverraAliquam eros justo, posuere loborti viverra laoreet matti ulamcorper posuere viverra .Aliquam eros justo, posuere lobortis viverra laoreet augue mattis fmentum ullamcorpe',
    },
    {
        id: 5,
        thumb: projectItemThumb1,
        title: 'Building Trust, One Home at a Tim',
        desc: 'Aliquam eros justo, posuere loborti viverra laoreet matti ullamcorper posuere viverra .Aliquam eros justo, posuere lobortis viverra laoreet augue mattis fmentum ullamcorper viverra laoreet Aliquam eros justo, posuere lobor mattis fmentum ullam. Aliquam eros justo, posuere loborti viverra laoreet matti ullamcorper posuere viverra .Aliquam eros justo, posuere lobortis viverra laoreet augue mattis fmentum ullamcorr viverra laoreet Aliquam eros justo, posuere loborti viverra laoreet matti ullamcorper posuere viverra .Aliquam eros justo, posuebortis non, viverraAliquam eros justo, posuere loborti viverra laoreet matti ulamcorper posuere viverra .Aliquam eros justo, posuere lobortis viverra laoreet augue mattis fmentum ullamcorpe',
    },
    {
        id: 6,
        thumb: projectItemThumb2,
        title: 'Brick by Brick Your Dream Home Awaits',
        desc: 'Aliquam eros justo, posuere loborti viverra laoreet matti ullamcorper posuere viverra .Aliquam eros justo, posuere lobortis viverra laoreet augue mattis fmentum ullamcorper viverra laoreet Aliquam eros justo, posuere lobor mattis fmentum ullam. Aliquam eros justo, posuere loborti viverra laoreet matti ullamcorper posuere viverra .Aliquam eros justo, posuere lobortis viverra laoreet augue mattis fmentum ullamcorr viverra laoreet Aliquam eros justo, posuere loborti viverra laoreet matti ullamcorper posuere viverra .Aliquam eros justo, posuebortis non, viverraAliquam eros justo, posuere loborti viverra laoreet matti ulamcorper posuere viverra .Aliquam eros justo, posuere lobortis viverra laoreet augue mattis fmentum ullamcorpe',
    },
    {
        id: 7,
        thumb: projectItemThumb3,
        title: 'Guiding You Home with Experienc',
        desc: 'Aliquam eros justo, posuere loborti viverra laoreet matti ullamcorper posuere viverra .Aliquam eros justo, posuere lobortis viverra laoreet augue mattis fmentum ullamcorper viverra laoreet Aliquam eros justo, posuere lobor mattis fmentum ullam. Aliquam eros justo, posuere loborti viverra laoreet matti ullamcorper posuere viverra .Aliquam eros justo, posuere lobortis viverra laoreet augue mattis fmentum ullamcorr viverra laoreet Aliquam eros justo, posuere loborti viverra laoreet matti ullamcorper posuere viverra .Aliquam eros justo, posuebortis non, viverraAliquam eros justo, posuere loborti viverra laoreet matti ulamcorper posuere viverra .Aliquam eros justo, posuere lobortis viverra laoreet augue mattis fmentum ullamcorpe',
    },
    {
        id: 8,
        thumb: projectItemThumb4,
        title: 'A Tradition of Trust in Real Estate',
        desc: 'Aliquam eros justo, posuere loborti viverra laoreet matti ullamcorper posuere viverra .Aliquam eros justo, posuere lobortis viverra laoreet augue mattis fmentum ullamcorper viverra laoreet Aliquam eros justo, posuere lobor mattis fmentum ullam. Aliquam eros justo, posuere loborti viverra laoreet matti ullamcorper posuere viverra .Aliquam eros justo, posuere lobortis viverra laoreet augue mattis fmentum ullamcorr viverra laoreet Aliquam eros justo, posuere loborti viverra laoreet matti ullamcorper posuere viverra .Aliquam eros justo, posuebortis non, viverraAliquam eros justo, posuere loborti viverra laoreet matti ulamcorper posuere viverra .Aliquam eros justo, posuere lobortis viverra laoreet augue mattis fmentum ullamcorpe',
    },
]

export const challengeLists = [
    {
        text: 'Unleash the Potential of your Interiors'
    },
    {
        text: 'Aliquam eros justo, pos uere loborre loborti'
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
        icon: <i className="fas fa-paper-plane"></i>,
        title: 'Email',
        textOne: 'info@mantra-group.com',
        textTwo: 'sales@mantra-group.com',
        link: 'mailto:'
    },
    {
        icon: <i className="fas fa-map-marker-alt"></i>,
        title: 'Head Office',
        text: '123 King Street West, Suite 1500, Toronto, ON M5H 3T9',
    },
    {
        icon: <i className="fas fa-phone"></i>,
        title: 'Phone Numbers',
        textOne: '(416) 555-0123',
        textTwo: '(416) 555-0124',
        link: 'tel:'
    },
    {
        icon: <i className="fas fa-clock"></i>,
        title: 'Business Hours',
        text: 'Mon-Fri: 9:00 AM - 6:00 PM, Sat: 10:00 AM - 4:00 PM',
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

