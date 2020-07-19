import React from 'react';
import '../App.css';

function Introduction ({type, name, intro}){
    let overlay;
    if (type !== "home-intro"){
        overlay = "overlays";
    }
    return(
        <div type={type}>
            <div className={overlay} style={{paddingTop: "60px"}}/>
            <p className="header">
                {name}
            </p>
            <p className="intro">
                {intro}
            </p>
        </div>
    );
}

export default Introduction;