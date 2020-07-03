import React from 'react';
import Product from './pages/Product';
import './App.css';
import kumi from './attachments/kumi kumi necklace.PNG';
import pendo from './attachments/pendo stud earrings.PNG';

function App() {
  return (
    <div className="app">
      <Product name ="Kumi Kumi Necklace" description="Brass and cowhorn pendant necklace" price="KES 800" image={kumi} />
      <Product name ="Pendo Stud Earrings" description="Cowhorn and brass stud earrings" price="KES 650" image={pendo} />
    </div>
  );
}

export default App;
