import { createContext, useContext, useReducer } from "react";

const CandidateContext = createContext();

const initialState = {
  email: "dev@gmail.com",
  phone: "7217620199",
  contactPerson: "Devendra",
  lastContact: "Jul 14, 2025, 4:03 pm",

  currentOrganization: "World Bank Group",
  summary: "Current Organization",
  skills: "HTML, CSS, JavaScript",
  employmentStatus: "Employed",
  availableFrom: "Jul 14, 2023",
  dob: "15 June 1993",
  currentSalary: "$60,000",
  relevantExperience: "7 Year",
  noticePeriod: "90 Days",
  salaryExpectation: "$90,000",
  address: "123, Aston Road, Delhi 28885201",
  status: "Submitted to Client",
  resume: "Resume",
  salaryType: "Annual",
  totalExperience: "5 Years",
  languageSkill: "English(Elementary proficiency)",
};

function reducer(state, action) {
  switch (action.type) {
    case "UPDATE_FIELDS":
      return { ...state, ...action.payload };
    default:
      return state;
  }
}

export function CandidateProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <CandidateContext.Provider value={{ state, dispatch }}>
      {children}
    </CandidateContext.Provider>
  );
}

export function useCandidate() {
  const ctx = useContext(CandidateContext);
  if (!ctx) {
    throw new Error("useCandidate must be used inside <CandidateProvider>");
  }
  return ctx;
}
