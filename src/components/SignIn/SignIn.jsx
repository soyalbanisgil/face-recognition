import React, { Component } from "react";
import { Link } from 'react-router-dom';
import './SignIn.styles.css';

import { auth, signInWithGoogle } from '../../firebase/firebase.utils';

class SignIn extends Component {
  constructor(){
    super();
    this.state ={
      email: '',
      password: ''
    }
  }

  handleSubmit = async (e) => {
    e.preventDefault();

    const { email, password } = this.state;

    try{
      await auth.signInWithEmailAndPassword(email, password);
      this.setState({email: '', password: ''});
    } catch (error) {
      console.log(error);
    }

    this.setState({email: '', password: ''})
  }

  handleChange = e => {
    const { value, name } = e.target;
    this.setState({ [name]: value })
  }

  render(){
    return (
      <div className="container sign-in">
          <h1 className="text-white">Sign In</h1>
        <form className="mx-auto w-100" onSubmit={this.handleSubmit}>
          <div className="form-group">
            <input
              type="email"
              className="form-control"
              name="email"
              onChange={this.handleChange}
              placeholder="Your Email"
            />
            <small id="emailHelp" className="form-text text-white">
              We'll never share your email with anyone else.
            </small>
          </div>
          <div className="form-group">
            <input
              type="password"
              className="form-control"
              name="password"
              onChange={this.handleChange}
              placeholder="Your Password"
            />
          </div>
          <button onSubmit={this.handleSubmit} type="submit" className="btn btn-danger btn-lg btn-block">
            Submit
          </button>
          <button onClick={signInWithGoogle} className="btn btn-danger btn-lg btn-block">
            Sign In With Google
          </button>
          <p className="text-white mt-4">Don't have an account? <Link className="text-warning" to="/register">Register</Link></p>
        </form>
      </div>
    );
  }
};

export default SignIn;
