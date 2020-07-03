import React from 'react';
import '../App.css';


function Product({name, description, price, image}) {
    return (
    <div className="product">
        <h3>{name}</h3>
        <h6>
            {description}
        </h6>
        <img src={image} alt={name}/>
        <p>
            {price}
        </p>

    </div>
    );
}

export default Product;