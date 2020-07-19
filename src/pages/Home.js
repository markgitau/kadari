import React from 'react';
import '../App.css';
import Introduction from './Introduction';
import SocialMenu from './SocialMenu.js';

function Home (){
    return (
        <main className="home">
            <div className="overlay"/>
            <Introduction type="home-intro" name="Bling it on!" intro="Ethically inspired, hand-made, timeless, and tasteful jewelry." />
            <div className="space" />
            <SocialMenu />

        </main>
        
    );
}

export default Home;