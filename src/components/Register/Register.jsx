import React from "react";
import './Register.styles.css';

const Register = () => {
  return (
    <div className="container register">
        <h1 className="text-white">Register</h1>
      <form className="mx-auto w-100">
      <div className="form-group">
          <input
            type="text"
            className="form-control"
            placeholder="Your Name"
          />
        </div>
        <div className="form-group">
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Your Email"
          />
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
        <small id="emailHelp" className="form-text text-white">
            We'll never share your email with anyone else.
          </small>
        <p className="text-white mt-4">Already have an account? <a className="text-warning" href="/">Sign In</a></p>
      </form>
    </div>
  );
};

export default Register;