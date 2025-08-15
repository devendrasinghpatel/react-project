import { useState } from "react";
import EditCandidateModal from "../EditCandidateModal/EditCandidateModal";
import { useCandidate } from "../context/CandidateContext";

export default function CandidateDetails() {
  // This header data (name/role) remains display-only
  const headerName = "William Sample";
  const headerRole = "Senior Product Manager • Dallas, USA";

  const { state } = useCandidate();
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <div className="candidate-details">
        <div className="profile">
          <div className="user-profile-left">
            <i className="bx bxs-user-circle"></i>
            <div>
              <div className="user-headings">
                <p>{headerName}</p>
                <div className="user-profile-icon">
                  <i className="bx bxl-facebook bg-fb"></i>
                  <i className="bx bxl-twitter bg-twitter"></i>
                  <i className="bx bxl-linkedin bg-linkedin"></i>
                  <i className="bx bxl-github bg-github"></i>
                  <i className="bx bxl-xing bg-xing"></i>
                </div>
              </div>
              <p className="role">{headerRole}</p>
            </div>
          </div>

          {/* Keep ALL original buttons intact */}
          <div className="profile-actions">
            <button type="button" className="red-btn">Contact Linked</button>
            <button type="button" className="secondary-btn">
              <i className="bx bx-star"></i>
            </button>
            <button type="button" className="secondary-btn">
              <i className="bx bx-yen"></i>
            </button>
            <button
              type="button"
              className="secondary-btn"
              onClick={() => setShowModal(true)}
            >
              <i className="bx bx-pencil"></i>
            </button>
            <button type="button" className="secondary-btn">
              <i className="bx bx-dots-vertical-rounded"></i>
            </button>
          </div>
        </div>

        {/* CONTACT BAR (reads from context) */}
        <div className="contact-bar">
          <div className="contact-bar-group contact-bar-group-left">
            <div className="contact-bar-item">
              <a href={`mailto:${state.email}`} className="contact-bar-item">
                <i className="bx bx-envelope contact-bar-icon"></i>
                <span className="contact-bar-text">{state.email}</span>
              </a>
            </div>
            <div className="contact-bar-divider" />
            <div className="contact-bar-item">
              <a href={`tel:${state.phone}`} className="contact-bar-item">
                <i className="bx bx-phone contact-bar-icon"></i>
                <span className="contact-bar-text">{state.phone}</span>
              </a>
            </div>
          </div>

          <div className="contact-bar-group">
            <div className="contact-bar-item">
              <i className="bx bx-user contact-bar-icon"></i>
              <span className="contact-bar-text">{state.contactPerson}</span>
            </div>
            <div className="contact-bar-divider" />
            <div className="contact-bar-item">
              <i className="bx bx-time-five contact-bar-icon"></i>
              <span className="contact-bar-text">{state.lastContact}</span>
            </div>
          </div>
        </div>

        {/* INFO GRID (reads from context) */}
        <div className="info-grid">
          <div className="info-item">
            <strong>Current Organization</strong>
            <p>{state.currentOrganization}</p>
          </div>
          <div className="info-item">
            <strong>Summary</strong>
            <p>{state.summary}</p>
          </div>
          <div className="info-item">
            <strong>Skills</strong>
            <p>{state.skills}</p>
          </div>
          <div className="info-item">
            <strong>Current Employment Status</strong>
            <p>{state.employmentStatus}</p>
          </div>

          <div className="info-item">
            <strong>Available From</strong>
            <p>{state.availableFrom}</p>
          </div>
          <div className="info-item">
            <strong>Date of Birth</strong>
            <p>{state.dob}</p>
          </div>

          <div className="info-item">
            <strong>Current Salary</strong>
            <p>{state.currentSalary}</p>
          </div>
          <div className="info-item">
            <strong>Relevent Experience</strong>
            <p>{state.relevantExperience}</p>
          </div>
          <div className="info-item">
            <strong>Notice Period</strong>
            <p>{state.noticePeriod}</p>
          </div>
          <div className="info-item">
            <strong>Salary Expectation</strong>
            <p>{state.salaryExpectation}</p>
          </div>
          <div className="info-item">
            <strong>Full Address</strong>
            <p>{state.address}</p>
          </div>
          <div className="info-item">
            <strong>Status</strong>
            <p>{state.status}</p>
          </div>
          <div className="info-item">
            <strong>Resume</strong>
            <p>{state.resume}</p>
          </div>
          <div className="info-item">
            <strong>Salary Type</strong>
            <p>{state.salaryType}</p>
          </div>
          <div className="info-item">
            <strong>Total Experience</strong>
            <p>{state.totalExperience}</p>
          </div>
          <div className="info-item">
            <strong>Language Skill</strong>
            <p>{state.languageSkill}</p>
          </div>
        </div>
      </div>

      {/* MODAL */}
      {showModal && (
        <EditCandidateModal onClose={() => setShowModal(false)} />
      )}
    </>
  );
}
