import React from 'react';
import '../App.css';


function Product({className, name, description, price, image}) {
    return (
    <div className={className} style={{paddingTop: "20px"}}>

        <h3 type="name">
            {name}
        </h3>

        <p type="description">
            {description}
        </p>
        
        <img src={image} alt={name}/>

        <p type="price">
            {price}
        </p>

    </div>
    );
}


export default Product;
