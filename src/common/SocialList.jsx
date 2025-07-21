import React from 'react';
import { socialLists } from '../data/CommonData/CommonData';

const SocialList = () => {
    return (
        <ul className="social-list">
            {
                socialLists.map((socialList, index) => {
                    return (
                        <li className="social-list__item" key={index}>
                            <a href={socialList.link} className="social-list__link flx-center" target="_blank" rel="noopener noreferrer">{socialList.icon}</a>
                        </li>
                    )
                })
            }
        </ul>
    );
};

export default SocialList;