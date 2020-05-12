import React, { Component } from "react";
import { auth, createUserProfileDoc } from '../../firebase/firebase.utils';
import './Register.styles.css';

class Register extends Component {
  constructor(){
    super();
    this.state = {
      displayName: '',
      email: '',
      password: '',
      confirmPassword: ''
    }
  }

  handleSubmit = async e => {
    e.preventDefault();

    const { displayName, email, password, confirmPassword } = this.state;

    if(password !== confirmPassword){
      alert('Password does not match');
      return;
    }

    try {
      const { user } = await auth.createUserWithEmailAndPassword(email, password);

      await createUserProfileDoc(user, {displayName});

      this.setState({
        displayName: displayName,
        email: '',
        password: '',
        confirmPassword: ''
      });

      alert('Succesfully Register');

    } catch (error) {
      console.error(error)
    }

  };

  handleChange = e => {
    const {name, value} = e.target;

    this.setState({[name]: value})
  }

  render(){
    const { displayName, email, password, confirmPassword } = this.state;
    return (
      <div className="container register">
          <h1 className="text-white">Register</h1>
        <form className="mx-auto w-100" onSubmit={this.handleSubmit}>
        <div className="form-group">
            <input
              type="text"
              className="form-control"
              placeholder="Your Name"
              name='displayName'
              value={displayName}
              onChange={this.handleChange}
              required
            />
          </div>
          <div className="form-group">
            <input
              type="email"
              className="form-control"
              placeholder="Your Email"
              name='email'
              value={email}
              onChange={this.handleChange}
              required
            />
          </div>
          <div className="form-group">
            <input
              type="password"
              className="form-control"
              placeholder="Your Password"
              name='password'
              value={password}
              onChange={this.handleChange}
              required
            />
          </div>
          <div className="form-group">
            <input
              type="password"
              className="form-control"
              placeholder="Confirm Password"
              name='confirmPassword'
              value={confirmPassword}
              onChange={this.handleChange}
              required
            />
          </div>
          <button type="submit" className="btn btn-danger btn-lg btn-block">
            Submit
          </button>
          <small id="emailHelp" className="form-text text-white">
              We'll never share your email with anyone else.
            </small>
          <p className="text-white mt-4">Already have an account? <a className="text-warning" href="/">Sign In</a></p>
        </form>
      </div>
    );
  }
};

export default Register;