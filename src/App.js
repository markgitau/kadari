import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import Necklaces from './pages/Necklaces.js';
import Bracelets from './pages/Bracelets.js';
import Earrings from './pages/Earrings.js';
import Rings from './pages/Rings.js';
import SignetRings from './pages/SignetRings.js';
import PersonalizedBracelets from './pages/PersonalizedBracelets.js';
import Navigation from './pages/Navigation';
import Home from './pages/Home';
import SideDrawer from './pages/SideDrawer';
import Backdrop from './pages/Backdrop';



class App extends Component {

  state = {
    sideDrawerOpen: false,
  };


  drawerToggleClickHandler = () => {
    this.setState((prevState) => {
        return {sideDrawerOpen: !prevState.sideDrawerOpen};
    });
  };

  backdropClickHandler = () => {
    this.setState({sideDrawerOpen: false});
  };

 
  render(){


    return (

      <Router>
      <div className="app" style={{height: "100%"}}>
        
        <Navigation drawerClickHandler={this.drawerToggleClickHandler} show={this.state.sideDrawerOpen}/>
        <SideDrawer show={this.state.sideDrawerOpen} click={this.backdropClickHandler}/>
        <Backdrop click={this.backdropClickHandler} show={this.state.sideDrawerOpen}/>
            <Switch>
              <Route exact path="/kadari">
                <Redirect to="/" />
              </Route>
              <Route path="/" exact component={Home}/>
              <Route path="/earrings" exact component={Earrings}/>
              <Route path="/necklaces" exact component={Necklaces}/>
              <Route path="/bracelets" exact component={Bracelets}/>
              <Route path="/rings" exact component={Rings}/>
              <Route path="/signetrings" exact component={SignetRings}/>
              <Route path="/personalized" exact component={PersonalizedBracelets}/>
            </Switch>
      </div>
      </Router>
    );
  }
  
}

export default App;
