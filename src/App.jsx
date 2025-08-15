import { CandidateProvider } from './components/context/CandidateContext';
import CandidateProfile from './components/pages/CandidateProfile';
import './style.scss';

function App() {

  return (
    <>
      <CandidateProvider>
        <CandidateProfile />
      </CandidateProvider>
    </>
  )
}

export default App