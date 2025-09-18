import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

//Add State

const Register: React.FC = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  //Handle Form Submission

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault()
 //Save to localStorage
  const newUser = { username, email, password };

  localStorage.setItem("user", JSON.stringify(newUser));
  setUsername("")
  setEmail("")
  setPassword("")
  alert("Registration Successful");

  }

 
  return (
    <div className="main-container">
      <div className="left-container">
        <div className="login-box">
          <img src={logo} className="logo" alt="Logo" />
          <h1>Create an account</h1>
          <p className="subtitle">
            Join us today and get unlimited access to data & information
          </p>

          <form className="form" onSubmit={handleRegister}>
            <div className="form-group">
              <label>Username</label>
              <input
                type="text"
                placeholder="Enter username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>

            <div className="form-group">
              <label>Email</label>
              <input
                type="email"
                placeholder="Enter email"
                value = {email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className="form-group">
              <label>Password</label>
              <input
                type="password"
                placeholder="Enter password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
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
