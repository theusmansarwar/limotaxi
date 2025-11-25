import './App.css';
import Sidebar from './components/sidebar/Sidebar';
import Header from './components/Header/Header';
 
import SubSidebar from './components/subSidebar/SubSidebar';
 
import { dispatchMenuItems, adminMenuItems } from './menuItems';
import DriverDashboard from './components/DriverDashboard/DriverDash';
import Reports from './components/Reports/Reports';
import Payment from './components/Payment History/Payment'
import { useState } from "react";
import { Route, Routes, Navigate } from 'react-router-dom';
import DispatchDashboard from './pages/dispatchsDashboard/DispatchDashboard';
import AdminDashboard from './pages/adminDashboard/AdminDashboard';
import Account from './components/Account/Account';
import OnlineBooking from './components/OnlineBooking/OnlineBooking';

function App() {
  const [activeSidebar, setActiveSidebar] = useState("dispatch");

  return (
    <div className="app-container">
      <Header />

      <div className="app-layouts">

        <div className="left-sides">
          <Sidebar  className="main-sidebar-area "
            setActiveSidebar={setActiveSidebar} 
            activeSidebar={activeSidebar} 
          />
          {activeSidebar === "dispatch" && (
            <SubSidebar className="sub-sidebar-area "
              menuItems={dispatchMenuItems} 
              title="Dispatch Panel" 
            />
          )}
          {activeSidebar === "admin" && (
            <SubSidebar className="sub-sidebar-area "
              menuItems={adminMenuItems} 
              title="Admin Panel" 
            />
          )}
        </div>

        <div className='right-sides'>
          <Routes>
            <Route path="/" element={<Navigate to="/dispatch/dashboard" replace />} />

            <Route path="/dispatch/dashboard" element={<DispatchDashboard />} />
            <Route path="/dispatch/jobs" element={<div className="page-content"><h1>Jobs Overview</h1></div>} />
            <Route path="/dispatch/timeline" element={<div className="page-content"><h1>Timeline</h1></div>} />
            <Route path="/dispatch/vehicles" element={<div className="page-content"><h1>Vehicles</h1></div>} />
            <Route path="/dispatch/permits" element={<div className="page-content"><h1>Permits</h1></div>} />
            <Route path="/dispatch/blacklist" element={<div className="page-content"><h1>Blacklist</h1></div>} />
            <Route path="/dispatch/search" element={<div className="page-content"><h1>Search Jobs</h1></div>} />
            <Route path="/dispatch/closed" element={<div className="page-content"><h1>Closed Jobs</h1></div>} />
            <Route path="/dispatch/customers" element={<div className="page-content"><h1>Customers</h1></div>} />
            <Route path="/dispatch/alarms" element={<div className="page-content"><h1>Alarms</h1></div>} />
            <Route path="/dispatch/alerts" element={<div className="page-content"><h1>Alerts</h1></div>} />
            <Route path="/dispatch/suspensions" element={<div className="page-content"><h1>Suspensions</h1></div>} />
            <Route path="/dispatch/banking" element={<div className="page-content"><h1>Banking</h1></div>} />
            <Route path="/dispatch/preferences" element={<div className="page-content"><h1>Preferences</h1></div>} />

           
            <Route path="/admin/general" element={<AdminDashboard/>} />
            <Route path="/admin/users" element={<div className="page-content"><h1>Users Management</h1></div>} />
            <Route path="/admin/vehicles" element={<div className="page-content"><h1>Vehicles Management</h1></div>} />
            <Route path="/admin/zone" element={<div className="page-content"><h1>Zone Management</h1></div>} />
            <Route path="/admin/tariff" element={<div className="page-content"><h1>Tariff Management</h1></div>} />
            <Route path="/admin/pois" element={<div className="page-content"><h1>POIs Management</h1></div>} />
            <Route path="/admin/driver-app" element={<DriverDashboard />} />
            <Route path="/admin/notifications" element={<div className="page-content"><h1>Notifications</h1></div>} />
            <Route path="/admin/planning" element={<div className="page-content"><h1>Planning</h1></div>} />
            
           
            <Route path="/admin/booking-history" element={<Reports />} />
            <Route path="/admin/payment-history" element={ <Payment />}/>
            <Route path="/admin/billing" element={ <Account />}/>
         
            <Route path="/admin/profile" element={<div className="page-content"><h1>Profile</h1></div>} />
            <Route path="/admin/settings" element={<div className="page-content"><h1>Settings</h1></div>} />
            
         
            <Route path="/admin/online-booking" element={<div className="page-content"><OnlineBooking/></div>} />
            <Route path="/admin/completed-bookings" element={<div className="page-content"><h1>Completed Bookings</h1></div>} />

         
            <Route path='/reports' element={<Reports />} />

        
            <Route path="*" element={<div className="page-content"><h1>404 - Page Not Found</h1></div>} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
