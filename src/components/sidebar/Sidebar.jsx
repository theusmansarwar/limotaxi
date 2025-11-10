import "./sidebar.css";
import { ReactComponent as Logo } from "../../assets/Vector.svg";
import { ReactComponent as DispatchIcon } from "../../assets/Dispatch.svg";
import { ReactComponent as AdminIcon } from "../../assets/Admin.svg";
import { ReactComponent as ProfileIcon } from "../../assets/Profile.svg";
import { LogOut } from 'lucide-react';
import React from "react";
import { useNavigate } from "react-router-dom";

const Sidebar = ({ setActiveSidebar, activeSidebar }) => {
  const navigate = useNavigate();

  const handleDispatchClick = () => {
    setActiveSidebar("dispatch");
    navigate("/dispatch/dashboard"); // Navigate to default dispatch page
  };

  const handleAdminClick = () => {
    setActiveSidebar("admin");
    navigate("/admin/general"); // Navigate to default admin page
  };

  const handleProfileClick = () => {
    navigate("/profile"); // Or wherever profile should go
  };

  const handleLogout = () => {
    // Add your logout logic here
    console.log("Logging out...");
    navigate("/login"); // Navigate to login page
  };

  return (
    <div className="sidebar">
      {/* Logo */}
      <div className="sidebar-logo">
        <Logo className="logo-img" />
      </div>

      {/* Navigation Items */}
      <nav className="sidebar-nav">
        <div 
          className={`nav-item ${activeSidebar === "dispatch" ? "active" : ""}`}
          onClick={handleDispatchClick}
        >
          <DispatchIcon className="icon-svg" />
          <span className="nav-label">Dispatch</span>
        </div>

        <div 
          className={`nav-item ${activeSidebar === "admin" ? "active" : ""}`}
          onClick={handleAdminClick}
        >
          <AdminIcon className="icon-svg" />
          <span className="nav-label">Admin</span>
        </div>

        <div 
          className="nav-item"
          onClick={handleProfileClick}
        >
          <ProfileIcon className="icon-svg" />
          <span className="nav-label">Profile</span>
        </div>
      </nav>

      {/* Footer */}
      <div className="sidebar-footer">
        <button className="logout-btn" onClick={handleLogout}>
          <LogOut size={16} />
          <span>Logout</span>
        </button>
        <div className="copyright">
          © 2025<br />
          ZEMALT ERP
        </div>
      </div>
    </div>
  );
};

export default Sidebar;