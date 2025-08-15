import { useEffect, useRef, useState } from "react";
import { useCandidate } from "../context/CandidateContext";

export default function EditCandidateModal({ onClose }) {
  const { state, dispatch } = useCandidate();
  const [formData, setFormData] = useState(state);
  const contentRef = useRef(null);

  // Close on ESC
  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose]);

  // Prevent overlay click from closing when clicking inside the card
  const stop = (e) => e.stopPropagation();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((p) => ({ ...p, [name]: value }));
  };

  const handleSave = () => {
    dispatch({ type: "UPDATE_FIELDS", payload: formData });
    onClose();
  };

  // Fields you requested (contact-bar + info-grid) in nice groups
  const contactFields = [
    { name: "email", label: "Email", type: "email" },
    { name: "phone", label: "Phone", type: "text" },
    { name: "contactPerson", label: "User Name", type: "text" },
    { name: "lastContact", label: "Last Contact", type: "text" },
  ];

  const infoFields = [
    { name: "currentOrganization", label: "Current Organization" },
    { name: "summary", label: "Summary", textarea: true },
    { name: "skills", label: "Skills" },
    { name: "employmentStatus", label: "Current Employment Status" },
    { name: "availableFrom", label: "Available From" },
    { name: "dob", label: "Date of Birth" },
    { name: "currentSalary", label: "Current Salary" },
    { name: "relevantExperience", label: "Relevent Experience" },
    { name: "noticePeriod", label: "Notice Period" },
    { name: "salaryExpectation", label: "Salary Expectation" },
    { name: "address", label: "Full Address", textarea: true },
    { name: "status", label: "Status" },
    { name: "resume", label: "Resume" },
    { name: "salaryType", label: "Salary Type" },
    { name: "totalExperience", label: "Total Experience" },
    { name: "languageSkill", label: "Language Skill" },
  ];

  return (
    <div className="modal-overlay" onClick={onClose} aria-modal="true" role="dialog">
      <div className="modal-content animate-slide-up" onClick={stop} ref={contentRef}>
        <div className="modal-header">
          <h2>Edit Candidate</h2>
          <button className="icon-btn" onClick={onClose} aria-label="Close">
            <i className="bx bx-x"></i>
          </button>
        </div>

        <div className="modal-body">
          <h4 className="section-title">Contact</h4>
          <div className="form-grid">
            {contactFields.map((f) => (
              <label key={f.name} className="form-field">
                <span>{f.label}</span>
                <input
                  type={f.type || "text"}
                  name={f.name}
                  value={formData[f.name] ?? ""}
                  onChange={handleChange}
                />
              </label>
            ))}
          </div>

          <h4 className="section-title">Details</h4>
          <div className="form-grid">
            {infoFields.map((f) => (
              <label key={f.name} className="form-field">
                <span>{f.label}</span>
                {f.textarea ? (
                  <textarea
                    name={f.name}
                    value={formData[f.name] ?? ""}
                    onChange={handleChange}
                    rows={1}
                  />
                ) : (
                  <input
                    type="text"
                    name={f.name}
                    value={formData[f.name] ?? ""}
                    onChange={handleChange}
                  />
                )}
              </label>
            ))}
          </div>
        </div>

        <div className="modal-actions">
          <button className="secondary-btn" onClick={onClose}>Cancel</button>
          <button className="red-btn" onClick={handleSave}>Save</button>
        </div>
      </div>
    </div>
  );
}
