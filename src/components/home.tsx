import React, { useState } from "react";


function Home() {
  const [showForm, setShowForm] = useState(false);

  const jobs = [
    { id: 1, company: "Google", role: "Frontend Developer", status: "Applied", dateApplied: "2025-09-10" },
    { id: 2, company: "Amazon", role: "Backend Engineer", status: "Interviewed", dateApplied: "2025-09-15" },
    { id: 3, company: "Microsoft", role: "UI Designer", status: "Rejected", dateApplied: "2025-09-01" },
  ];

  return (
    <div className="home-container">
      {/* Page Title */}
      <h2 className="title">JobTracker</h2>

      {/* Table */}
      <div className="table-wrapper">
        <table className="job-table">
          <thead>
            <tr>
              <th>Company Name</th>
              <th>Role</th>
              <th>Date Applied</th>
              <th>Status</th>
              <th className="actions-col">Actions</th>
            </tr>
          </thead>
          <tbody>
            {jobs.map((job) => (
              <tr key={job.id}>
                <td>{job.company}</td>
                <td>{job.role}</td>
                <td>{job.dateApplied}</td>
                <td>
                  <span className={`status ${job.status.toLowerCase()}`}>{job.status}</span>
                </td>
                <td className="actions">
                  <button className="edit-btn">Edit</button>
                  <button className="delete-btn">Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Add Job Button */}
      <div className="add-job-container">
        <button className="add-job-btn" onClick={() => setShowForm(true)}>+ Add Job</button>
      </div>

      {/* Add Job Modal */}
      {showForm && (
        <div className="modal-overlay">
          <div className="modal">
            <h3>Add New Job</h3>
            <form className="job-form">
              <input type="text" placeholder="Company Name" required />
              <input type="text" placeholder="Role" required />
              <input type="date" required />
              <select>
                <option>Applied</option>
                <option>Interviewed</option>
                <option>Rejected</option>
              </select>
              <textarea placeholder="Extra details..." rows ={6}></textarea>
              <div className="form-actions">
                <button type="button" className="cancel-btn" onClick={() => setShowForm(false)}>Cancel</button>
                <button type="submit" className="save-btn">Save</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default Home;
