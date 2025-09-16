import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClipboardList, faEdit, faSearch, faMobileAlt } from "@fortawesome/free-solid-svg-icons";


function Home() {
  return (
    <>
      <h2 style={{ textAlign: "center", fontSize: "30px" }}>JobTracker</h2>
      <p style={{ textAlign: "center", fontSize: "20px" }}>
        Map your way to the Dream Job.
      </p>

      <div className="main">
        <div className="card">
          <FontAwesomeIcon icon={faClipboardList} size="2x" />
          <h3>Track Applications</h3>
          <p>Monitor applications by status: Applied, Interviewed, Rejected.</p>
        </div>

        <div className="card">
          <FontAwesomeIcon icon={faEdit} size="2x" />
          <h3>Add & Edit Jobs</h3>
          <p>Add, edit, or delete job entries easily as you progress.</p>
        </div>

        <div className="card">
          <FontAwesomeIcon icon={faSearch} size="2x" />
          <h3>Search & Filter</h3>
          <p>Search by company or role, and filter by date or status.</p>
        </div>

        <div className="card">
          <FontAwesomeIcon icon={faMobileAlt} size="2x" />
          <h3>Responsive Design</h3>
          <p>Access the app on any device for your convenience.</p>
        </div>
      </div>
    </>
  );
}

export default Home;
