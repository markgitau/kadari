import React from 'react';
import '../App.css';
import {Link} from 'react-router-dom';
import Button from './Button';


const Navigation = props => (

    
    <header className="toolbar">
        <div className="mobile">      
            <div className="space"></div>
            <div className="logo">
                <Link to="/" >
                    <p className="mobile-header">KADARI</p>
                </Link>
            </div>
            <div className="space"></div>
            <Button click={props.drawerClickHandler} show={props.show}/>
        </div>
        <nav>
            <ul className="nav-links">
                <Link to="/" >
                    <li>Home</li>
                </Link>
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
                <Link to="/personalized">
                    <li>Personalized</li>
                </Link>
                
            </ul>
        </nav>
    </header>
    
)

export default Navigation;
