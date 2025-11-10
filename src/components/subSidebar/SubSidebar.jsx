 
import React, { useState } from "react";
import {
   
  LogOut,
  ChevronDown,
  ChevronUp,
  
} from "lucide-react";
import './SubSidebar.css'

// Reusable SubSidebar Component
const SubSidebar = ({ menuItems, title }) => {
  const [openDropdowns, setOpenDropdowns] = useState({});

  const toggleDropdown = (id) => {
    setOpenDropdowns(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const renderMenuItem = (item) => {
    const Icon = item.icon;
    const hasDropdown = item.children && item.children.length > 0;
    const isOpen = openDropdowns[item.id];

    return (
      <li key={item.id} className={item.active ? "active" : ""}>
        <div 
          className={`menu-items ${hasDropdown ? "has-dropdown" : ""}`}
          onClick={() => hasDropdown && toggleDropdown(item.id)}
        >
          <div className="menu-item-contents">
            <Icon size={18} />
            <span>{item.label}</span>
          </div>
          {hasDropdown && (
            <div className="dropdown-arrows">
              {isOpen ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
            </div>
          )}
        </div>
        
        {hasDropdown && isOpen && (
          <ul className="submenu">
            {item.children.map(child => {
              const ChildIcon = child.icon;
              return (
                <li key={child.id} className={child.active ? "active" : ""}>
                  <div className="menu-items">
                    <div className="menu-item-contents">
                      <ChildIcon size={16} />
                      <span>{child.label}</span>
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>
        )}
      </li>
    );
  };

  return (
    <div className="sub-sidebar">
      <ul className="sub-sidebar-menu">
        {menuItems.map(item => renderMenuItem(item))}
      </ul>
    </div>
  );
};

 

// Demo Component
 export default SubSidebar;