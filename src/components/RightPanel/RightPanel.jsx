import { useState } from "react";

export default function RightPanel() {
  const tabsnew = ["All", "Notes & Calls", "Tasks", "Meeting", "Files"];
  const [activeTab, setActiveTab] = useState("All");

  const notes = [
    { type: "Notes & Calls", tag: "To Do", text: "Lorem dolore sit et aute cupidatat eu Lorem tempor proident consequat.", associations: 1, user: "John Doe", date: "Jul 12, 2023, 11:54 am" },
    { type: "Tasks", tag: "To Do", text: "Finish preparing presentation for client meeting.", associations: 2, user: "Jane Smith", date: "Jul 13, 2023, 09:22 am" },
    { type: "Meeting", tag: "To Do", text: "Team sync-up meeting scheduled for tomorrow.", associations: 3, user: "David Lee", date: "Jul 14, 2023, 03:15 pm" },
  ];

  const filteredNotes = activeTab === "All" ? notes : notes.filter(n => n.type === activeTab);

  return (
    <aside className="right-panel">
      <div className="icon-menu">
        <i className="bx bx-note"></i>
        <i className="bx bx-phone"></i>
        <i className="bx bx-check-circle"></i>
        <i className="bx bx-calendar-alt"></i>
      </div>

      <div className="tabs-right">
        {tabsnew.map(tab => (
          <span
            key={tab}
            className={`${tab} ${activeTab === tab ? "active" : ""}`}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </span>
        ))}
      </div>

      <div className="notes-list">
        {filteredNotes.map((note, i) => (
          <div className="note-card" key={i}>
            <div className="note-tags">
              <span className="tag note-type"><i className="bx bx-note"></i> {note.type}</span>
              <span className="tag todo">{note.tag}</span>
            </div>
            <p className="note-text">{note.text}</p>
            <a href="#" className="association-link">{note.associations} Association(s)</a>
            <div className="note-footer">
              <span className="user"><i className="bx bx-user"></i> {note.user}</span>
              <span className="date"><i className="bx bx-time"></i> {note.date}</span>
            </div>
          </div>
        ))}
      </div>
    </aside>
  );
}
