import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

// Job type
type Job = {
  id: number;
  company: string;
  role: string;
  dateApplied: string;
  status: "Applied" | "Rejected" | "Interviewed";
  details: string;
};

function JobPage() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [job, setJob] = useState<Job | null>(null);

  useEffect(() => {
    const saved = localStorage.getItem("jobs");
    if (saved) {
      const jobs: Job[] = JSON.parse(saved);
      const found = jobs.find((j) => j.id === Number(id));
      setJob(found || null);
    }
  }, [id]);

  if (!job) return <h2>Job not found</h2>;

  return (
    <div className="job-page">
      <h2>{job.role} at {job.company}</h2>
      <p><b>Date Applied:</b> {job.dateApplied}</p>
      <p><b>Status:</b> {job.status}</p>
      <p><b>Details:</b> {job.details || "No extra details provided."}</p>

      <div className="actions">
        <button onClick={() => navigate("/")}>Back</button>
      </div>
    </div>
  );
}

export default JobPage;
