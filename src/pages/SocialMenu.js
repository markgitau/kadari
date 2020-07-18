import React from 'react';
import '../App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import {faEnvelope } from '@fortawesome/free-solid-svg-icons';
import {faPhone } from '@fortawesome/free-solid-svg-icons';

function SocialMenu (){
    return (
        <div className="social-menu">
            <a href="https://www.instagram.com/cindykadari/" className="instagram-link" target="_blank" rel='noreferrer noopener'>
                <FontAwesomeIcon icon={faInstagram} size="2x"/>
            </a>
            <a href="mailto:cindykadari@gmail.com" className="email" target="_blank" rel='noreferrer noopener'>
                <FontAwesomeIcon icon={faEnvelope} size="2x"/>
            </a>
            <a href="tel:+254707830542" className="tel" target="_blank" rel='noreferrer noopener'>
                <FontAwesomeIcon icon={faPhone} size="2x"/>
            </a>

        </div>
    );
}

export default SocialMenu;