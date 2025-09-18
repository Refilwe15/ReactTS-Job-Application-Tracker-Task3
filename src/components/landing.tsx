import React from "react";
import { useNavigate } from "react-router-dom";
import rocket from "../assets/rocket.png";


export default function Landing() {
  const navigate = useNavigate();

  return (
    <div className="landing">
      {/* Navbar */}
      <nav className="navbar">
        <div className="logo">JobTracker</div>

        <div>
            <ul>
                <li>
                    Home
                </li>
                <li>
                    Contact
                </li>
                <li>
                    About Us
                </li>
            </ul>
        </div>

      </nav>

      {/* Hero Section */}
      <div className="hero">
        <div className="hero-text">
          <h1>Map Your Way to the Dream Job </h1>
          <p>
            Track applications, stay organized, and land your next opportunity
            with ease.
          </p>
        <div className="buttons">
          <button className="btn sign-in" onClick={() => navigate("/login")}>
            Sign In
          </button>
          <button className="btn sign-up" onClick={() => navigate("/register")}>
            Sign Up
          </button>
        </div>
        </div>

        <div className="hero-image">
          <img src={rocket} alt="Rocket Girl" />
        </div>
      </div>
    </div>
  );
}
