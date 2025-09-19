import React, { useState, FormEvent, useEffect } from "react";
import { useNavigate } from "react-router-dom";

// Define the Job type
type Job = {
  id: number;
  company: string;
  role: string;
  dateApplied: string;
  status: "Applied" | "Rejected" | "Interviewed";
  details: string;
};

function Home() {
  const [jobs, setJobs] = useState<Job[]>(() => {
    const saved = localStorage.getItem("jobs");
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem("jobs", JSON.stringify(jobs));
  }, [jobs]);

  const [showForm, setShowForm] = useState(false);

  // Form fields
  const [company, setCompany] = useState("");
  const [role, setRole] = useState("");
  const [dateApplied, setDateApplied] = useState("");
  const [status, setStatus] = useState<"Applied" | "Rejected" | "Interviewed">("Applied");
  const [details, setDetails] = useState("");
  const [editingJobId, setEditingJobId] = useState<number | null>(null);

  const navigate = useNavigate();

  // Handle form submit
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    if (editingJobId !== null) {
      // Update existing job
      const updatedJobs = jobs.map((job) =>
        job.id === editingJobId
          ? { ...job, company, role, dateApplied, status, details }
          : job
      );
      setJobs(updatedJobs);
      setEditingJobId(null);
    } else {
      // Add new job
      const newJob: Job = {
        id: Date.now(),
        company,
        role,
        dateApplied,
        status,
        details,
      };
      setJobs([...jobs, newJob]);
    }

    // Reset form
    setCompany("");
    setRole("");
    setDateApplied("");
    setStatus("Applied");
    setDetails("");
    setShowForm(false);
  };

  // Handle Edit
  const handleEdit = (job: Job) => {
    setCompany(job.company);
    setRole(job.role);
    setDateApplied(job.dateApplied);
    setStatus(job.status);
    setDetails(job.details);
    setEditingJobId(job.id);
    setShowForm(true);
  };

  // Handle Delete
  const handleDelete = (id: number) => {
    const filteredJobs = jobs.filter((job) => job.id !== id);
    setJobs(filteredJobs);
  };

  return (
    <div className="home-container">
      <h2 className="title">JobTracker</h2>

      {/* Job Table */}
      <div className="table-wrapper">
        <table className="job-table">
          <thead>
            <tr>
              <th>Company Name</th>
              <th>Role</th>
              <th>Date Applied</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {jobs.map((job) => (
              <tr key={job.id}>
                <td>{job.company}</td>
                <td>{job.role}</td>
                <td>{job.dateApplied}</td>
                <td>
                  <span
                    className={`status ${
                      job.status.toLowerCase() === "applied"
                        ? "applied"
                        : job.status.toLowerCase() === "interviewed"
                        ? "interviewed"
                        : "rejected"
                    }`}
                  >
                    {job.status}
                  </span>
                </td>
                <td className="actions">
                  <button
                    className="view-btn"
                    onClick={() => navigate(`/job/${job.id}`)}
                  >
                    View More
                  </button>
                  <button className="edit-btn" onClick={() => handleEdit(job)}>
                    Edit
                  </button>
                  <button
                    className="delete-btn"
                    onClick={() => handleDelete(job.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Add Job Button */}
      <div className="add-job-container">
        <button className="add-job-btn" onClick={() => setShowForm(true)}>
          + Add Job
        </button>
      </div>

      {/* Modal Form */}
      {showForm && (
        <div className="modal-overlay">
          <div className="modal">
            <h3>{editingJobId !== null ? "Edit Job" : "Add New Job"}</h3>
            <form className="job-form" onSubmit={handleSubmit}>
              <input
                type="text"
                placeholder="Company Name"
                value={company}
                onChange={(e) => setCompany(e.target.value)}
                required
              />
              <input
                type="text"
                placeholder="Role"
                value={role}
                onChange={(e) => setRole(e.target.value)}
                required
              />
              <input
                type="date"
                value={dateApplied}
                onChange={(e) => setDateApplied(e.target.value)}
                required
              />
              <select
                value={status}
                onChange={(e) =>
                  setStatus(e.target.value as "Applied" | "Rejected" | "Interviewed")
                }
              >
                <option value="Applied">Applied</option>
                <option value="Interviewed">Interviewed</option>
                <option value="Rejected">Rejected</option>
              </select>
              <textarea
                placeholder="Extra details..."
                rows={6}
                value={details}
                onChange={(e) => setDetails(e.target.value)}
              ></textarea>
              <div className="form-actions">
                <button
                  type="button"
                  className="cancel-btn"
                  onClick={() => {
                    setShowForm(false);
                    setEditingJobId(null);
                  }}
                >
                  Cancel
                </button>
                <button type="submit" className="save-btn">
                  {editingJobId !== null ? "Update" : "Save"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default Home;
