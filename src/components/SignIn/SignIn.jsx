import React from "react";
import './SignIn.styles.css';

const SignIn = () => {
  return (
    <div className="container sign-in">
        <h1 className="text-white">Sign In</h1>
      <form className="mx-auto w-100">
        <div className="form-group">
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
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
            id="exampleInputPassword1"
            placeholder="Your Password"
          />
        </div>
        <button type="submit" className="btn btn-danger btn-lg btn-block">
          Submit
        </button>
        <p className="text-white mt-4">Don't have an account? <a className="text-warning" href="/">Register</a></p>
      </form>
    </div>
  );
};

export default SignIn;
