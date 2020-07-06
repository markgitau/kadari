import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Necklaces from './pages/Necklaces.js';
import Bracelets from './pages/Bracelets.js';
import Earrings from './pages/Earrings.js';
import Rings from './pages/Rings.js';
import SignetRings from './pages/SignetRings.js';
import PersonalizedBracelets from './pages/PersonalizedBracelets.js';
import Navigation from './pages/Navigation';



function App() {
  return (

    <Router>
    <div className="app">
      
      <Navigation />
      <Switch>
      <Route path="/earrings" exact component={Earrings}/>
      <Route path="/necklaces" exact component={Necklaces}/>
      <Route path="/bracelets" exact component={Bracelets}/>
      <Route path="/rings" exact component={Rings}/>
      <Route path="/signetrings" exact component={SignetRings}/>
      <Route path="/personalizedbracelets" exact component={PersonalizedBracelets}/>
      </Switch>
    </div>
    </Router>
  );
}

export default App;
