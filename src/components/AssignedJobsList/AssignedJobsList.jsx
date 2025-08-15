import { useState } from "react";
export default function AssignedJobsList() {
  const jobs = [
    { user: "William Sample", subtitle: "Recruit CRM", title: "Senior Product Manager", date: "Jul 10, 2023", status: "Assigned" },
    { user: "William Sample", subtitle: "Recruit Test", title: "Senior Product Manager", date: "Jul 10, 2023", status: "Assigned" },
    { user: "William Sample", subtitle: "Recruit Demo", title: "Senior Product Manager", date: "Jul 10, 2023", status: "Assigned" },
  ];

  const [toggles, setToggles] = useState(Array(jobs.length).fill(true));

  const handleToggle = (index) => {
    const updated = [...toggles];
    updated[index] = !updated[index];
    setToggles(updated);
  };


  return (
    <div className="assigned-jobs">
      <div className="header">
        <p>Assigned Job to William Sample</p>
        <div className="assigned-job-actions">
          <button type="button" className="primary-btn">Assign To Job</button>
          <button type="button" className="secondary-btn">View All Assigned Jobs</button>
        </div>
      </div>

      {jobs.map((job, index) => (
        <div className="job-list" key={index}>
          <div className="job-card">
            <div className="job-inner job-inner-first">
              <div className="avatar">{job.title.charAt(0)}</div>
              <div className="job-info-title">
                <div className="job-title">{job.title}</div>
                <div className="job-subtitle">{job.subtitle}</div>
              </div>
            </div>
            <div className="job-inner job-inner-second">
              <span><i className="bx bx-user"></i> {job.user}</span>
              <span><i className="bx bx-calendar"></i> {job.date}</span>
            </div>
            <div className="job-inner">
              <p className="status">{job.status}</p>
            </div>
            <div className="job-inner">
              <button className="secondary-btn secondary-btnmobile">View Files</button>
            </div>
            <div className="job-inner">
              <div
                className={`toggle-btn ${toggles[index] ? "active" : ""}`}
                onClick={() => handleToggle(index)}
              ></div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
