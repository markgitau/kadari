import React from 'react';
import Product from './Product.js';
import '../App.css';
import kumi from '../attachments/kumi kumi necklace.PNG';

function Rings (){
    return(
        <div>
            <Product category="necklace" name ="Kumi Kumi Necklace rings" 
            description="Brass and cowhorn pendant necklace" price="KES 800" image={kumi} />
        </div>
    );
}
export default Rings;