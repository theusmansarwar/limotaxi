import React from "react";
import "./SubSidebar.css";
import {
  LayoutDashboard,
  Briefcase,
  Clock,
  Truck,
  FileText,
  Ban,
  Search,
  FolderClosed,
  Users,
  Bell,
  AlertTriangle,
  Slash,
  Banknote,
  Settings,
  LogOut
} from "lucide-react";

const SubSidebar = () => {
  return (
    <div className="sub-sidebar">
       

      <ul className="sub-sidebar-menu">
        <li className="active">
          <LayoutDashboard size={18} />
          <span>Dashboard</span>
        </li>
        <li>
          <Briefcase size={18} />
          <span>Jobs Overview</span>
        </li>
        <li>
          <Clock size={18} />
          <span>Timeline</span>
        </li>
        <li>
          <Truck size={18} />
          <span>Vehicles</span>
        </li>
        <li>
          <FileText size={18} />
          <span>Permits</span>
        </li>
        <li>
          <Ban size={18} />
          <span>Blacklist</span>
        </li>
        <li>
          <Search size={18} />
          <span>Search Jobs</span>
        </li>
        <li>
          <FolderClosed size={18} />
          <span>Closed Jobs</span>
        </li>
        <li>
          <Users size={18} />
          <span>Customers</span>
        </li>
        <li>
          <Bell size={18} />
          <span>Alarms</span>
        </li>
        <li>
          <AlertTriangle size={18} />
          <span>Alerts</span>
        </li>
        <li>
          <Slash size={18} />
          <span>Suspensions</span>
        </li>
        <li>
          <Banknote size={18} />
          <span>Banking</span>
        </li>
        <li>
          <Settings size={18} />
          <span>Preferences</span>
        </li>
      </ul>

      {/* <div className="sub-sidebar-footer">
        <button className="logout-btn">
          <LogOut size={18} />
          <span>Logout</span>
        </button>
      </div> */}
    </div>
  );
};

export default SubSidebar;
