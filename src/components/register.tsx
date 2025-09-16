import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

const Register: React.FC = () => {
  return (
    <div className="main-container">
      <div className="left-container">
        <div className="login-box">
          <img src={logo} className="logo" alt="Logo" />
          <h1>Create an account</h1>
          <p className="subtitle">
            Join us today and get unlimited access to data & information
          </p>

          <form className="form">
            <div className="form-group">
              <label>Username</label>
              <input type="text" placeholder="Enter username" />
            </div>

            <div className="form-group">
              <label>Email</label>
              <input type="email" placeholder="Enter email" />
            </div>

            <div className="form-group">
              <label>Password</label>
              <input type="password" placeholder="Enter password" />
            </div>

            <button type="submit">Register</button>
          </form>

          <p className="register-text">
            Already have an account? <Link to="/">Login here</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
