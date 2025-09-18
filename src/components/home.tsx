import React from "react";

import profile from "../assets/profile.png";

// Example job data (replace with real data later)
const jobs = [
  {
    company: "ABSA",
    logo: "https://via.placeholder.com/80",
    date: "2025-09-18",
    role: "Software Developer",
    status: "In Progress",
  },
  {
    company: "Nedbank",
    logo: "https://via.placeholder.com/80",
    date: "2025-09-12",
    role: "Data Analyst",
    status: "Rejected",
  },
  {
    company: "FNB",
    logo: "https://via.placeholder.com/80",
    date: "2025-09-10",
    role: "UI/UX Designer",
    status: "In Progress",
  },
];

function Home() {
  return (
    <div className="landing">
      {/* Navbar */}
              <div className="logo">JobTracker</div>

        <div className="profile">                
          <img src={profile} alt="Profile" />
        </div>
      </nav>

      {/* Job Cards */}
      {jobs.map((job, index) => (
        <div className="job-container" key={index}>
          <p className="company">Company: {job.company}</p>

          <img
            src={job.logo}
            alt={`${job.company} Logo`}
            className="company-logo"
          />

          <p>Date: {job.date}</p>
          <p>Role: {job.role}</p>
          <p className={`status ${job.status.replace(/\s+/g, "-").toLowerCase()}`}>
            Status: {job.status}
          </p>

          <div className="job-actions">

            <button>
              Edit
            </button>
            <button>
               View
            </button>

            <button>
               Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Home;
