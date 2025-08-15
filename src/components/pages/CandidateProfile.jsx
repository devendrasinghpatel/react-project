import AssignedJobsList from "../AssignedJobsList/AssignedJobsList";
import CandidateDetails from "../CandidateDetails/CandidateDetails";
import HeaderBar from "../HeaderBar/HeaderBar";
import LeftSidebar from "../LeftSideBar/LeftSideBar";
import RightPanel from "../RightPanel/RightPanel";
import TabsNavigation from "../TabsNavigation/TabsNavigation";

export default function CandidateProfile() {
    return (
      <div className="candidate-profile">
        <LeftSidebar />
        <HeaderBar />
        <div className="main-content">
          <div className="content-body">
            <CandidateDetails />
            <TabsNavigation />
            <AssignedJobsList />
          </div>
          <RightPanel />
        </div>
      </div>
    );
  }