 
import "./sidebar.css";
import { ReactComponent as Logo } from "../../assets/Vector.svg";
import { ReactComponent as DispatchIcon } from "../../assets/Dispatch.svg";
import { ReactComponent as AdminIcon } from "../../assets/Admin.svg";
import { ReactComponent as ProfileIcon } from "../../assets/Profile.svg";
import { ReactComponent as LogoutIcon } from "../../assets/logout.svg";
import {LogOut} from 'lucide-react'
import React, { useState } from "react";



const Sidebar = ({ setActiveSidebar, activeSidebar }) => {
  return (
    <div className="sidebar">
     
      <div className="sidebar-logo">
        <Logo className="logo-img" />
      </div>


            <nav className="sidebar-nav">

        <div 
          className={`nav-item ${activeSidebar === "dispatch" ? "active" : ""}`}
          onClick={() => setActiveSidebar("dispatch")}
        >
          <DispatchIcon className="icon-svg" />
          <span className="nav-label">Dispatch</span>
        </div>

        <div 
          className={`nav-item ${activeSidebar === "admin" ? "active" : ""}`}
          onClick={() => setActiveSidebar("admin")}
        >
          <AdminIcon className="icon-svg" />
          <span className="nav-label">Admin</span>
        </div>

        <div className="nav-item">
          <ProfileIcon className="icon-svg" />
          <span className="nav-label">Profile</span>
        </div>

      </nav>


      
      <div className="sidebar-footer">
        <button className="logout-btn">
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
