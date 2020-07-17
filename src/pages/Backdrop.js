import React from 'react';
import '../App.css';


const Backdrop = props => {
    let drawerClasses = 'backdrop';
    if (props.show){
        drawerClasses = 'backdrop open';
    }
    return (
        <div className={drawerClasses} onClick={props.click}/>
    );
};

export default Backdrop;