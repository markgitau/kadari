import React from 'react';
import '../App.css';

function Introduction ({type, name, intro, extra}){
    return(
        <div type={type}>
            <p className="header" style={{paddingTop: '60px'}}>
                {name}
            </p>
            <p className="intro">
                {intro}
            </p>
        </div>
    );
}

export default Introduction;