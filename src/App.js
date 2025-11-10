import './App.css';
import Sidebar from './components/sidebar/Sidebar';
import Header from './components/Header/Header';
import BookingForm from './components/BookingForm/BookingForm';
import SubSidebar from './components/subSidebar/SubSidebar';
import Dispatch from './components/dispatchDashboard/Dispatch';
import { dispatchMenuItems, adminMenuItems } from './menuItems';
import DriverDashboard from './components/DriverDashboard/DriverDash';
import { useState } from "react";
import EducationalSection from './components/EducationalDash/EduDash';
import Reports from './components/Reports/Reports';

function App() {
  const [activeSidebar, setActiveSidebar] = useState("dispatch");

  return (
    <div className="app-container">
      
      {/* HEADER - Top */}
      <Header />

      {/* MAIN CONTENT AREA */}
      <div className="app-layouts">
        
        {/* LEFT SIDE: Sidebar + SubSidebar */}
        <div className="left-sides">
          <Sidebar 
            setActiveSidebar={setActiveSidebar} 
            activeSidebar={activeSidebar} 
          />

          {activeSidebar === "dispatch" && (
            <SubSidebar menuItems={dispatchMenuItems} title="Dispatch Panel" />
          )}

          {activeSidebar === "admin" && (
            <SubSidebar menuItems={adminMenuItems} title="Admin Panel" />
          )}
        </div>

        {/* RIGHT SIDE: Dashboard Content */}
        <div className="right-sides">
          <div className="dispatch-dashboard-main">
            {/* <DriverDashboard />
            <EducationalSection /> */}
            {/* <BookingForm />
            <Dispatch /> */}
            <Reports />
          </div>
        </div>

      </div>

    </div>
  );
}

export default App;