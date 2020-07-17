import React from 'react';
import Product from './Product.js';
import '../App.css';
import Introduction from './Introduction';
import giriama from '../attachments/giriama-pendant-necklace.PNG';
import kumi from '../attachments/kumi-kumi-necklace.PNG';
import tachonyi from '../attachments/tachonyi-set.jpeg';




function Necklaces(){
    return (
        <div className="necklaces" style={{marginTop: '60px'}}>
            <Introduction className="necklaces-intro" name="Necklaces" intro="Hand Made Necklaces" extra="Look different." />
            <Product className="giriama" name ="Giriama Pendant Necklace" description="Brass Pendant Necklace" price="KES 1800" image={giriama} />
            <Product className="kumi" name ="Kumi Kumi Necklace" description="Brass and cowhorn pendant necklace" price="KES 1050" image={kumi} />
            <Product className="tachonyi" name ="Tachonyi Set" description="Brass Studs and Choker" price="KES 1200" image={tachonyi} />
        </div>
    );
}

export default Necklaces;