
export default function TabsNavigation() {
  const tabs = [
    "All Details",
    "Assigned Jobs",
    "Related Emails",
    "Candidate Questions",
    "Hotlist",
    "Related Deals",
    "Contact(s) Pitched",
  ];

  return (
    <div className="tabs">
      {tabs.map((tab, index) => (
        <button
          key={index}
          className={`tab ${index === 1 ? "active" : ""}`}
        >
          {tab}
        </button>
      ))}
    </div>
  );
}