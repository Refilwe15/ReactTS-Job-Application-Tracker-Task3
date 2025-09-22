import React, { useState } from "react";
import logo from "../assets/logo.png";
import { Link, useNavigate } from "react-router-dom";
import "../styles/login.css"; // Import the CSS file for styling

const LoginPage: React.FC = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState(""); // For custom messages
  const [messageType, setMessageType] = useState<"success" | "error">("error");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.currentTarget;
    const formData = new FormData(form);
    const username = String(formData.get("username") ?? "").trim();
    const password = String(formData.get("password") ?? "").trim();

    if (!username || !password) {
      setMessage("Please enter username and password");
      setMessageType("error");
      return;
    }

    const storedUser = localStorage.getItem("user");
    if (!storedUser) {
      setMessage("No registered user found. Please register first.");
      setMessageType("error");
      navigate("/register");
      return;
    }

    const parsedUser = JSON.parse(storedUser);

    setLoading(true);

    setTimeout(() => {
      if (parsedUser.username === username && parsedUser.password === password) {
        localStorage.setItem("isAuthenticated", "true");
        localStorage.setItem("currentUser", JSON.stringify(parsedUser));
        setMessage("Login Successful!");
        setMessageType("success");

        setTimeout(() => {
          navigate("/home");
        }, 1000); // small delay before navigation
      } else {
        setMessage("Invalid Credentials!!!");
        setMessageType("error");
      }
      setLoading(false);
    }, 1500);
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

          {/* Custom message */}
          {message && (
            <div className={`message ${messageType}`}>
              {message}
            </div>
          )}

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

          {loading && <div className="loader"></div>}

          <p className="register-text">
            Don't have an account? <Link to={"/register"}>Register here</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
