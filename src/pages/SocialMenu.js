import React from 'react';
import '../App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, } from '@fortawesome/free-brands-svg-icons';

function SocialMenu (){
    return (
        <div className="social-menu">
            <a href="https://www.instagram.com/cindykadari/" className="instagram-link">
                <FontAwesomeIcon icon={faInstagram} size="2x" />
            </a>
        </div>
    );
}

export default SocialMenu;