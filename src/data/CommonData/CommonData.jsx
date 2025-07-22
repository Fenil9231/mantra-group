import React from 'react'; 


// Top header Info
export const offCanvasInfos = [
    {
        icon: <i className="fas fa-map-marker-alt"></i>,
        text: import.meta.env.VITE_BUSINESS_ADDRESS || '4040 Steeles Ave W, Woodbridge, ON L4L 4Y5',
        link: ''
    },
    {
        icon: <i className="fas fa-phone"></i>,
        text: [import.meta.env.VITE_CONTACT_PHONE || '+1 647-560-0736', import.meta.env.VITE_CONTACT_PHONE || '+1 647-560-0736'],
        link: ['tel:', 'tel:']
    },
    {
        icon: <i className="fas fa-envelope"></i>,
        text: [import.meta.env.VITE_CONTACT_EMAIL || 'info@mantragroup.ca', import.meta.env.VITE_CONTACT_EMAIL || 'info@mantragroup.ca'],
        link: ['mailto:', 'mailto:']
    }
];


// Social List
export const socialLists = [
    {
        link: import.meta.env.VITE_FACEBOOK_URL || 'https://facebook.com/mantragroup',
        icon: <i className="fab fa-facebook-f"></i>
    },
    {
        link: import.meta.env.VITE_TWITTER_URL || 'https://twitter.com/mantragroup',
        icon: <i className="fab fa-twitter"></i>
    },
    {
        link: import.meta.env.VITE_LINKEDIN_URL || 'https://linkedin.com/company/mantragroup',
        icon: <i className="fab fa-linkedin-in"></i>
    },
    {
        link: import.meta.env.VITE_INSTAGRAM_URL || 'https://instagram.com/mantragroup',
        icon: <i className="fab fa-instagram"></i>
    },
]

// Star Rating
export const starRatings = [
    {
        icon: <i className="fas fa-star"></i>
    },
    {
        icon: <i className="fas fa-star"></i>
    },
    {
        icon: <i className="fas fa-star"></i>
    },
    {
        icon: <i className="fas fa-star"></i>
    },
    {
        icon: <i className="fas fa-star"></i>
    },
]


// Top header Info
export const topHeaderInfos = [
    {
        icon: <i className="fas fa-phone"></i>,
        text: import.meta.env.VITE_BUSINESS_PHONE || '+1 647-560-0736',
        link: 'tel:'
    },
    {
        icon: <i className="fas fa-envelope"></i>,
        text: import.meta.env.VITE_BUSINESS_EMAIL || 'info@mantragroup.ca',
        link: 'mailto:'
    },
    {
        icon: <i className="fas fa-map-marker-alt"></i>,
        text: import.meta.env.VITE_BUSINESS_ADDRESS || '4040 Steeles Ave W, Woodbridge, ON L4L 4Y5',
        link: ''
    }
]


// Header Nav Menu
export const navMenus = [
    {
      text: "Home",
      path: "/",
    },
     {
      text: "Services",
      path: "/services",
    },
    {
      text: "Project",
      path: "/project",
    },
    {
      text: "Blog",
      path: "/blog"
    },
    {
      text: "About Us",
      path: "/about-us",
    },
    {
      text: "Contact",
      path: "/contact",
    },
]



// Footer Content
export const footerInfos = [ 
    {
        icon: <i className="fas fa-map-marker-alt"></i>,
        text: 'Address',
        address: import.meta.env.VITE_BUSINESS_ADDRESS || '4040 Steeles Ave W, Woodbridge, ON L4L 4Y5'
    },
    {
        icon: <i className="fas fa-phone"></i>,
        text: 'Phone Number',
        address: import.meta.env.VITE_BUSINESS_PHONE || '+1 647-560-0736'
    }
]

export const footerContactLinks = [ 
    {
        text: 'Contact Us',
        link: '/contact'
    },
    {
        text: 'About Us',
        link: '/about-us'
    },
    {
        text: 'Terms & Conditions',
        link: '/terms-and-conditions'
    },
    {
        text: 'Privacy Policy',
        link: '/privacy-policy'
    },
    {
        text: 'FAQ',
        link: '/faq'
    },
]

export const footerUsefulLinks = [ 
     {
        text: 'Services',
        link: '/services'
    },
    {
        text: 'Blog',
        link: '/blog'
    },
    {
        text: 'Property',
        link: '/property'
    },
]

import FooterGallery1 from '../../../public/assets/images/thumbs/gallery1.png'; 
import FooterGallery2 from '../../../public/assets/images/thumbs/gallery2.png'; 
import FooterGallery3 from '../../../public/assets/images/thumbs/gallery3.png'; 
import FooterGallery4 from '../../../public/assets/images/thumbs/gallery4.png'; 
import FooterGallery5 from '../../../public/assets/images/thumbs/gallery5.png'; 
import FooterGallery6 from '../../../public/assets/images/thumbs/gallery6.png'; 
export const footerGallery = [ 
    {
        img: FooterGallery1,
        link: import.meta.env.VITE_INSTAGRAM_URL || 'https://instagram.com/mantragroup',
        icon: <i className="fab fa-instagram"></i>
    },
    {
        img: FooterGallery2,
        link: import.meta.env.VITE_INSTAGRAM_URL || 'https://instagram.com/mantragroup',
        icon: <i className="fab fa-instagram"></i>
    },
    {
        img: FooterGallery3,
        link: import.meta.env.VITE_INSTAGRAM_URL || 'https://instagram.com/mantragroup',
        icon: <i className="fab fa-instagram"></i>
    },
    {
        img: FooterGallery4,
        link: import.meta.env.VITE_INSTAGRAM_URL || 'https://instagram.com/mantragroup',
        icon: <i className="fab fa-instagram"></i>
    },
    {
        img: FooterGallery5,
        link: import.meta.env.VITE_INSTAGRAM_URL || 'https://instagram.com/mantragroup',
        icon: <i className="fab fa-instagram"></i>
    },
    {
        img: FooterGallery6,
        link: import.meta.env.VITE_INSTAGRAM_URL || 'https://instagram.com/mantragroup',
        icon: <i className="fab fa-instagram"></i>
    },
]

export const BottomFooterLink = [
    {
        text: 'Terms & Condition',
        link: '/terms-and-conditions'
    },
    {
        text: 'Privacy Policy',
        link: '/privacy-policy'
    },
    {
        text: 'Contact Us',
        link: '/contact'
    },
]


