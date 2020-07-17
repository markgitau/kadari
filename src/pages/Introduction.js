import React from 'react';
import '../App.css';

function Introduction ({className, name, intro, extra}){
    return(
        <div className={className}>
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