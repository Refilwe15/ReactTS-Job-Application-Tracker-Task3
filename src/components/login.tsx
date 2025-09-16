import React from "react";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";

const LoginPage: React.FC = () => {
  return (
    <>
      <div className="main-container">
        {/* Left Container */}
        <div className="left-container">
          <div className="login-box">
            <img src={logo} className="logo" alt="Logo" />
            <h1>Welcome back!</h1>
            <p className="subtitle">
              Enter to get unlimited access to data & information
            </p>

            <form className="form">
              <div className="form-group">
                <label>Username</label>
                <input type="text" placeholder="Enter username" />
              </div>

              <div className="form-group">
                <label>Password</label>
                <input type="password" placeholder="Enter password" />
              </div>

              <button type="submit" >Login</button>
            </form>

            <p className="register-text">
              Don't have an account? <Link to={"register"}>Register here</Link>
            </p>
          </div>
        </div>


      </div>
    </>
  );
};

export default LoginPage;
