import React, { Component } from "react";
import Particles from "react-particles-js";
import { Switch, Route, Redirect } from "react-router-dom";
import Navigation from "./components/Navigation/Navigation";
import SignIn from './components/SignIn/SignIn';
import Register from './components/Register/Register'
import Dashboard from './components/Dashboard/Dashboard';
import './App.css';

const particleOptions = {
  particles: {
    line_linked: {
      shadow: {
        enable: true,
        color: "#3CA9D1",
        blur: 5
      }
    }
  }
};

class App extends Component {

  constructor(){
    super();
    this.state ={
      signedin: true
    }
  }

  render(){
    return (
      <div className="App">
        <Particles className="particles"      
        params={particleOptions}
        />
        <Navigation />
      <Switch>
        <Route exact path="/" render={() => {
          if(this.state.signedin === true){
            return <Dashboard />
          } else {
            return <Redirect to="/signin" />
          }
        }} />
        <Route path="/signin" component={SignIn} />
        <Route path="/register" component={Register} />
      </Switch>
      </div>
    );
  }
}

export default App;
