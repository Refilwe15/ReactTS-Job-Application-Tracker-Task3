import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faClipboardList,
  faEdit,
  faSearch,
  faMobileAlt,
} from "@fortawesome/free-solid-svg-icons";
import profile from "../assets/profile.png";

function Home() {
  return (
    <div className="landing">
      {/* Navbar */}
      <nav className="navbar">
        <div className="logo">JobTracker</div>

        <div className="profile">
          <img src={profile} alt="Profile" />
        </div>
      </nav>

      {/* Job Card Example */}
      <div className="job-container">
        <p className="company">Company: ABSA</p>
        {/* Replace with company logo if available */}
        <img
          src="https://via.placeholder.com/80"
          alt="Company Logo"
          className="company-logo"
        />
        <p>Date: 2025-09-18</p>
        <p>Role: Software Developer</p>
        <p>Status: Interview Scheduled</p>

        <div className="job-actions">
          <button>
            <FontAwesomeIcon icon={faClipboardList} /> Details
          </button>
          <button>
            <FontAwesomeIcon icon={faEdit} /> Edit
          </button>
          <button>
            <FontAwesomeIcon icon={faSearch} /> View
          </button>
          <button>
            <FontAwesomeIcon icon={faMobileAlt} /> Contact
          </button>
        </div>
      </div>
    </div>
  );
}

export default Home;
