import React from 'react';
import { Bell, Settings, Menu } from 'lucide-react';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="header-left">
        <h2>Taxi Limo</h2>
        <div className="date-badge">Apr 1, 2025</div>
        <div className="time-badge">9:41 AM</div>
      </div>
      <div className="header-right">
        <div className="search-container">
          <input type="search" placeholder="Search..." className="search-input" />
          <button className="search-icon-btn">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <circle cx="7" cy="7" r="6" stroke="currentColor" strokeWidth="2"/>
              <path d="M11 11L15 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
            </svg>
          </button>
        </div>
        <button className="icon-btn notification-btn">
          <Bell size={20} />
          <span className="notification-badge">9+</span>
        </button>
        <button className="icon-btn menu-btn">
          <Menu size={20} />
        </button>
        <button className="icon-btn settings-btn">
          <Settings size={20} />
        </button>
        <div className="user-section">
          <img src="https://ui-avatars.com/api/?name=B&background=c41e3a&color=fff" alt="User" className="user-avatar" />
          <div className="user-info">
            <div className="user-name">Broadium</div>
            <div className="user-role">Admin account</div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;