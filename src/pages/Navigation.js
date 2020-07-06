import React from 'react';
import '../App.css';
import {Link} from 'react-router-dom';

function Navigation () {
    return (
    <nav>
    <div className="logo">
        
    </div>
    <ul className="nav-links">
        <Link to="/earrings">
            <li>Earrings</li>
        </Link>
        <Link to="/necklaces">
            <li>Necklaces</li>
        </Link>
        <Link to="/bracelets">
            <li>Bracelets</li>
        </Link>
        <Link to="/rings">
            <li>Rings</li>
        </Link>
        <Link to="/signetrings">
            <li>Signet Rings</li>
        </Link>
        <Link to="/personalizedbracelets">
            <li>Personalized Bracelets</li>
        </Link>
        
    </ul>
    </nav>
    );
}

export default Navigation;
