import './App.css';
import Sidebar from './components/sidebar/Sidebar';
import Header from './components/Header/Header';
import BookingForm from './components/BookingForm/BookingForm';
import SubSidebar from './components/subSidebar/SubSidebar';
import Dispatch from './components/dispatchDashboard/Dispatch';
import { dispatchMenuItems, adminMenuItems } from './menuItems';
import { useState } from "react";
import DispatchDashboard from './pages/dispatchsDashboard/DispatchDashboard';

function App() {
  const [activeSidebar, setActiveSidebar] = useState("dispatch");

  return (
    <div className="app-container">
      {/* HEADER */}
      <Header />

      {/* MAIN BODY */}
      <div className="app-layouts">

        {/* LEFT SIDEBAR */}
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

        {/* RIGHT CONTENT */}
        <div className="right-sides">
          {/* BOOKING + DISPATCH side-by-side */}
          <div className="booking-dispatch-container">
            <div className="booking-section">
              <BookingForm />
            </div>
            <div className="dispatch-section">
              <Dispatch />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
