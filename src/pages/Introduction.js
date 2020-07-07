import React from 'react';
import '../App.css';

function Introduction ({name, intro, extra}){
    return(
        <div className="introduction">
            <h2>
                {name}
            </h2>
            <p className="intro">
                {intro}
            </p>
            <p className="extra">
                {extra}
            </p>
        </div>
    );
}

export default Introduction;