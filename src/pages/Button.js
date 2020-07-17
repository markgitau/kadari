import React from 'react';
import '../App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

const Button = props => {
    let drawerClasses = 'burger';
    if (props.show){
        drawerClasses = 'burger open';
    }
    return (
        <div className="drawer-button" onClick={props.click} >
            <FontAwesomeIcon className={drawerClasses} icon={faBars} size="2x"/>
        </div>
    );
};

export default Button;