import React from 'react';
import Product from './Product.js';
import '../App.css';
import Introduction from './Introduction';
import pendo from '../attachments/pendo-stud-earrings.PNG';
import duara from '../attachments/duara-earrings.jpeg';
import fahari from '../attachments/fahari-earrings.PNG';
import kadee from '../attachments/kadee-earrings.PNG';
import lazi from '../attachments/lazi-earrings.PNG';
import libra from '../attachments/libra-earrings.PNG';
import matatu from '../attachments/matatu-earrings.PNG';
import nami from '../attachments/nami-earrings.jpeg';
import njoki from '../attachments/njoki-studs.png';
import sifa from '../attachments/sifa-earrings.PNG';
import simba from '../attachments/simba-earrings.PNG';
import tawi from '../attachments/tawi-earrings.png';
import tumaini from '../attachments/tumaini-earrings.PNG';

function Earrings (){
    return(
        <div>
            <Introduction type="earrings-intro" name="Earrings" intro="Hand Made Earrings" extra="Find your perfect pair." />
            <Product className="pendo" name ="Pendo Stud Earrings" description="Cowhorn and brass stud earrings" price="KES 650" image={pendo} />
            <Product className="duara" name ="Duara Earrings" description="Brass earrings" price="KES 650" image={duara} />
            <Product className="fahari" name ="Fahari Earrings" description="Brass earrings" price="KES 800" image={fahari} />
            <Product className="kadee" name ="Kadee Earrings" description="Brass earrings" price="KES 800" image={kadee} />
            <Product className="lazi" name ="Lazi Earrings" description="Brass earrings" price="KES 500" image={lazi} />
            <Product className="libra" name ="Libra Earrings" description="Cowhorn and Textured Brass earrings" price="KES 700" image={libra} />
            <Product className="matatu" name ="Matatu Earrings" description="Brass earrings" price="KES 650" image={matatu} />
            <Product className="nami" name ="Nami Earrings" description="Brass earrings" price="KES 650" image={nami} />
            <Product className="njoki" name ="Njoki Studs" description="Brass studs" price="KES 500" image={njoki} />
            <Product className="sifa" name ="Sifa Earrings" description="Brass earrings" price="KES 650" image={sifa} />
            <Product className="simba" name ="Simba Earrings" description="Brass earrings" price="KES 800" image={simba} />
            <Product className="tawi" name ="Tawi Earrings" description="Brass earrings" price="KES 650" image={tawi} />
            <Product className="tumaini" name ="Tumainini Earrings" description="Black cowhorn and Brass earrings" price="KES 650" image={tumaini} />
        </div>
    );
}
export default Earrings;