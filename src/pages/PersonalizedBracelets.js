import React, { lazy } from 'react';
import '../App.css';
import Introduction from './Introduction';
import ukariri from '../attachments/ukariri-mantra-bracelet.jpg';
const Product = lazy(() => import('./Product.js'));




function PersonalizedBracelets (){
    return(
        <div>
            <Introduction type="personalized-intro" name="Personalized" intro="Made just for you." />
            <div className="personalized">
                <Suspense>
                    <Product classname="ukariri" name ="Ukariri Mantra Bracelet" description="Brass cuff bracelet engraved with your favorite mantra" price="KES 1200" image={ukariri} />
                </Suspense>
            </div>
        </div>
    );
}

export default PersonalizedBracelets;