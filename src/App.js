import React, { Component, Suspense, lazy } from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
const Necklaces = lazy(() => import('./pages/Necklaces.js'));
const Bracelets = lazy(() => import('./pages/Bracelets.js'));
const Earrings = lazy(() => import('./pages/Earrings.js'));
const Rings = lazy(() => import('./pages/Rings.js'));
const SignetRings = lazy(() => import('./pages/SignetRings.js'));
const PersonalizedBracelets = lazy(() => import('./pages/PersonalizedBracelets.js'));
const Navigation = lazy(() => import('./pages/Navigation'));
const Home = lazy(() => import('./pages/Home'));
const SideDrawer = lazy(() => import('./pages/SideDrawer'));
const Backdrop = lazy(() => import('./pages/Backdrop'));




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
        <Suspense fallback={<div className="loading">Loading...</div>}>
        <Navigation drawerClickHandler={this.drawerToggleClickHandler} show={this.state.sideDrawerOpen}/>
        <SideDrawer show={this.state.sideDrawerOpen} click={this.backdropClickHandler}/>
        <Backdrop click={this.backdropClickHandler} show={this.state.sideDrawerOpen}/>
            <Switch>
              <Route path="/" exact component={Home}/>
              <Route path="/earrings" exact component={Earrings}/>
              <Route path="/necklaces" exact component={Necklaces}/>
              <Route path="/bracelets" exact component={Bracelets}/>
              <Route path="/rings" exact component={Rings}/>
              <Route path="/signetrings" exact component={SignetRings}/>
              <Route path="/personalized" exact component={PersonalizedBracelets}/>
            </Switch>
            </Suspense>
      </div>
      </Router>
    );
  }
  
}

export default App;
