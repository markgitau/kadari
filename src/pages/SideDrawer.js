import React from 'react';
import '../App.css';
import {Link} from 'react-router-dom';


const SideDrawer = props => {
    let drawerClasses = 'drawer-links';
    if (props.show){
        drawerClasses = 'drawer-links open';
    }
    return (
        <nav>
            <ul className={drawerClasses} onClick={props.click}>
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
    );
};

export default SideDrawer;
