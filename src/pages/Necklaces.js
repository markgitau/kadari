import React, { lazy } from 'react';
import '../App.css';
import Introduction from './Introduction';
import giriama from '../attachments/giriama-pendant-necklace.PNG';
import kumi from '../attachments/kumi-kumi-necklace.PNG';
import tachonyi from '../attachments/tachonyi-set.jpeg';
const Product = lazy(() => import('./Product.js'));




function Necklaces(){
    return (
        <div className="necklaces">
            <Introduction type="necklaces-intro" name="Necklaces" intro="Look different." />
            <div className="necklaces">
                <Product className="giriama-necklaces" name ="Giriama Pendant Necklace" description="Brass Pendant Necklace" price="KES 1800" image={giriama} />
                <Product className="kumi-necklaces" name ="Kumi Kumi Necklace" description="Brass and cowhorn pendant necklace" price="KES 1050" image={kumi} />
                <Product className="tachonyi-necklaces" name ="Tachonyi Set" description="Brass Studs and Choker" price="KES 1200" image={tachonyi} />
            </div>
        </div>
    );
}

export default Necklaces;