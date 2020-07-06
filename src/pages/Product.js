import React from 'react';
import '../App.css';


function Product({category, name, description, price, image}) {
    return (
    <div className="product" category={category}>

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
