import React, { useState } from "react";
import logo from "../assets/logo.png";
import { Link, useNavigate } from "react-router-dom";

const LoginPage: React.FC = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.currentTarget;
    const formData = new FormData(form);
    const username = String(formData.get("username") ?? "").trim();
    const password = String(formData.get("password") ?? "").trim();

    if (!username || !password) {
      alert("Please enter username and password");
      return;
    }

    const storedUser = localStorage.getItem("user");
    if (!storedUser) {
      alert("No registered user found. Please register first.");
      navigate("/register");
      return;
    }

    const parsedUser = JSON.parse(storedUser);

    setLoading(true); // show loader

    setTimeout(() => {
      if (parsedUser.username === username && parsedUser.password === password) {
        localStorage.setItem("isAuthenticated", "true");
        localStorage.setItem("currentUser", JSON.stringify(parsedUser));
        alert("Login Successful!");
        navigate("/home");
      } else {
        alert("Invalid Credentials!!!");
      }
      setLoading(false); // hide loader after processing
    }, 1500); // simulate network delay
  };

  return (
    <div className="main-container">
      <div className="left-container">
        <div className="login-box">
          <img src={logo} className="logo" alt="Logo" />
          <h1>Welcome back!</h1>
          <p className="subtitle">
            Enter to get unlimited access to data & information
          </p>

          <form className="form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label>Username</label>
              <input type="text" name="username" placeholder="Enter username" />
            </div>

            <div className="form-group">
              <label>Password</label>
              <input
                type="password"
                name="password"
                placeholder="Enter password"
              />
            </div>

            <button type="submit" disabled={loading}>
              {loading ? "Logging in..." : "Login"}
            </button>
          </form>

          {loading && (
            <div className="loader"></div> // CSS spinner
          )}

          <p className="register-text">
            Don't have an account? <Link to={"/register"}>Register here</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
