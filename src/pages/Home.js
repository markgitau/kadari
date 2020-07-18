import React from 'react';
import '../App.css';
import Introduction from './Introduction';
import SocialMenu from './SocialMenu.js';

function Home (){
    return (
        <main className="home">
            <Introduction className="home-intro" name="Kadari Jewelry" intro="Bling it on!" extra="Hand made timeless and tasteful jewelry." />
            <div className="space" />
            <SocialMenu />

        </main>
        
    );
}

export default Home;