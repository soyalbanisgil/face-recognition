import React, { Component } from "react";
import Particles from "react-particles-js";
import { Switch, Route, Redirect } from "react-router-dom";
import Navigation from "./components/Navigation/Navigation";
import SignIn from './components/SignIn/SignIn';
import Register from './components/Register/Register'
import { auth, createUserProfileDoc } from './firebase/firebase.utils'
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

  constructor(props){
    super(props);
    this.state ={
      signedin: true,
      currentUser: null
    }
  }

  componentDidMount(){

    // const { setCurrentUser } = this.props;

    this.unsusbscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      
      if(userAuth){
        const userRef = await createUserProfileDoc(userAuth);

        userRef.onSnapshot(snapshot => {
          this.setState({
            currentUser: {
              id: snapshot.id,
              ...snapshot.data()
            }
          })
        });
      } else {
        this.setState({currentUser: userAuth});
      }
      
      // createUserProfileDoc(user);

      // this.setState({currentUser: user});

      // console.log(createUserProfileDoc(user));
    })
  }

  componentWillUnmount(){
    this.unsusbscribeFromAuth();
  }

  render(){
    return (
      <div className="App">
        <Particles className="particles"      
        params={particleOptions}
        />
        <Navigation currentUser={this.state.currentUser} />
      <Switch>
      <Route exact path="/" render={() => {
        if(this.state.currentUser === null){
          return <SignIn />
        } else {
          return <Dashboard />
        }
      }} />
        <Route exact path="/signin" render={() => {
          if(this.props.currentUser){
            return <Redirect to="/" />
          } else {
            return <SignIn />
          }
        }} />
        <Route exact path="/register" render={() => {
          if(this.props.currentUser){
            return <Redirect to="/" />
          } else {
            return <Register />
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
