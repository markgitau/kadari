import React from 'react';
import Product from './Product.js';
import '../App.css';
import Introduction from './Introduction';
import ukariri from '../attachments/ukariri-mantra-bracelet.jpg';




function PersonalizedBracelets (){
    return(
        <div>
            <Introduction type="personalized-intro" name="Personalized" intro="Custom jewelry" extra="Made just for you." />
            <Product classname="ukariri" name ="Ukariri Mantra Bracelet" description="Brass cuff bracelet engraved with your favorite mantra" price="KES 1200" image={ukariri} />
        </div>
    );
}

export default PersonalizedBracelets;