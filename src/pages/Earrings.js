import React from 'react';
import Product from './Product.js';
import '../App.css';
import pendo from '../attachments/pendo stud earrings.PNG';

function Earrings (){
    return(
        <div>
            <Product name ="Pendo Stud Earrings" description="Cowhorn and brass stud earrings" price="KES 650" image={pendo} />
        </div>
    );
}
export default Earrings;