import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/landing.css";

export default function Landing() {
  const navigate = useNavigate();

  return (
    <div className="landing">
      <nav className="navbar">
        <div className="logo">JobTracker</div>
        <div>
          <ul>
            <li>Home</li>
            <li>Contact</li>
            <li>About Us</li>
          </ul>
        </div>
      </nav>

      <div className="hero">
        <div className="hero-text">
          <h1>Find a Job With Your Interests and Abilities</h1>
          <p>
            Track applications, stay organized, and land your next opportunity
            with ease.
          </p>
          <button className="btn get-started" onClick={() => navigate("/login")}>
            Get Started
          </button>
        </div>

        <div className="hero-image">
          <img 
            src="https://assets.softr-files.com/applications/93f39c10-c73a-440c-a51a-a5ef6b92f678/assets/1dcd4024-07fd-448b-9b6b-c0d64741f794.svg" 
            alt="Job Tracker Illustration" 
          />
        </div>
      </div>
    </div>
  );
}
