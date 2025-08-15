import { useState } from "react";
import { useCandidate } from "../context/CandidateContext";

export default function EditCandidateModal({ onClose }) {
  const { state, dispatch } = useCandidate();
  const [formData, setFormData] = useState({ ...state });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSave = () => {
    dispatch({ type: "UPDATE_CANDIDATE", payload: formData });
    onClose();
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content animate-slide-up">
        <h2>Edit Candidate</h2>
        <div className="form-grid">
          {Object.keys(formData).map((key) => (
            <label key={key}>
              {key.charAt(0).toUpperCase() + key.slice(1)}
              <input
                type="text"
                name={key}
                value={formData[key]}
                onChange={handleChange}
              />
            </label>
          ))}
        </div>
        <div className="modal-actions">
          <button className="secondary-btn" onClick={onClose}>Cancel</button>
          <button className="red-btn" onClick={handleSave}>Save</button>
        </div>
      </div>
    </div>
  );
}
