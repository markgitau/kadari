import React from 'react';
import Product from './Product.js';
import '../App.css';
import Introduction from './Introduction';
import kambe from '../attachments/kambe-bracelet.PNG';
import kasandi from '../attachments/kasandi-bracelet.PNG';
import mueni from '../attachments/mueni-bracelet.PNG';
import wanja from '../attachments/wanja-bracelet.PNG';
import zuri from '../attachments/zuri-bracelet.jpeg';


function Bracelets (){
    return(
        <div style={{marginTop: '60px'}}>
            <Introduction className="bracelets-intro" name="Bracelets" intro="Hand Made Bracelets" extra="Giving you a new style." />
            <Product className="kambe" name ="Kambe Bracelet" description="Men's brass bracelet" price="KES 1000" image={kambe} />
            <Product className="kasandi" name ="Kasandi Bracelet" description="Asymmetrical textured brass bracelet" price="KES 700" image={kasandi} />
            <Product className="mueni" name ="Mueni Bracelet" description="Brass bracelet with aluminium wire detail" price="KES 800" image={mueni} />
            <Product className="wanja" name ="Wanja Bracelet" description="Brass bracelet with wire detail" price="KES 800" image={wanja} />
            <Product className="zuri" name ="Zuri Bracelet" description="Textured Brass bracelet with little wire detail" price="KES 800" image={zuri} />
        </div>
    );
}

export default Bracelets;