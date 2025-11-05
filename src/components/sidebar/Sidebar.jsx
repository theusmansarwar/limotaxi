import React from "react";
import "./sidebar.css";
import { ReactComponent as Logo } from "../../assets/Vector.svg";
import { ReactComponent as DispatchIcon } from "../../assets/Dispatch.svg";
import { ReactComponent as AdminIcon } from "../../assets/Admin.svg";
import { ReactComponent as ProfileIcon } from "../../assets/Profile.svg";
import { ReactComponent as LogoutIcon } from "../../assets/logout.svg";
import {LogOut} from 'lucide-react'


const Sidebar = () => {
  return (
    <div className="sidebar">
     
      <div className="sidebar-logo">
        <Logo className="logo-img" />
      </div>

     
      <nav className="sidebar-nav">
        <a href="#dispatch" className="nav-item active">
          <div className="nav-icon">
            <DispatchIcon className="icon-svg" />
          </div>
          <span className="nav-label">Dispatch</span>
        </a>

        <a href="#admin" className="nav-item">
          <div className="nav-icon">
            <AdminIcon className="icon-svg" />
          </div>
          <span className="nav-label">Admin</span>
        </a>

        <a href="#profile" className="nav-item">
          <div className="nav-icon">
            <ProfileIcon className="icon-svg" />
          </div>
          <span className="nav-label">Profile</span>
        </a>
      </nav>

      
      {/* <div className="sidebar-footer">
        <button className="logout-btn">
          <div className="nav-icon">
            <LogoutIcon className="logout-icon" />
          </div>
          <span className="logout-text"> 
          Logout
          </span>
        </button>

        <div className="footer-info">
          <span className="copyright">© 2025</span>
          <span className="company">ZAMALT ERP</span>
        </div>
      </div> */}
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
