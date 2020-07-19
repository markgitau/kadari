import React from 'react';
import Product from './Product.js';
import '../App.css';
import Introduction from './Introduction';
import amani from '../attachments/amani-ring.PNG';
import nafula from '../attachments/nafula-ring.PNG';

function Rings (){
    return(
        <div>
            <Introduction type="rings-intro" name="Rings" intro="Style with precious simplicity." />
            <Product className="amani" name ="Amani Ring" description="Brass Ring" price="KES 500" image={amani} />
            <Product className="nafula" name ="Nafula Ring" description="Brass ring with textured finish" price="KES 600" image={nafula} />
        </div>
    );
}
export default Rings;