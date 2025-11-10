import React, { useState } from 'react';
import './Dash.css';

const Dashboard = () => {
  const [selectedCompany, setSelectedCompany] = useState('All');
  const [selectedSource, setSelectedSource] = useState('All');
  const [selectedPeriod, setSelectedPeriod] = useState('Day');

  return (
    <div className="dashboard">
      {/* Billing Section */}
      <section className="billing-section">
        <div className="billing-content">
          <div className="billing-left">
            <h3 className="billing-label">Billing</h3>
            <div className="billing-amount">USD 0.00</div>
            <p className="account-balance">(Account Balance)</p>
            <p className="next-billing">Next billing period starts on 11/30/2025 6:00 pm</p>
          </div>
          <div className="billing-right">
            <div className="activated-vehicles">
              <span className="vehicles-label">Activated Vehicles: </span>
              <span className="vehicles-count">0</span>
            </div>
            <button className="billing-btn">Go To Billing Overview</button>
            <div className="notice-box">
              <p className="notice-label">Notice</p>
              <p className="notice-text">
                Not enough funds to activate next vehicle. You need to add USD 25.00
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Your Companies Section */}
      <section className="companies-section">
        <div className='companies-right'>
            <h3 className="section-title">Your Companies</h3>
            <p className="companies-text">
          Your companies has moved. Go to our new companies page under{' '}
          <span className="link-text">General › Companies</span> to edit and create new companies.
        </p>
        </div>
        <div className='companies-left'>
             <button className="manage-btn">Manage Your Companies</button>
        </div>
      </section>

     {/* Jobs Section */}
<section className="jobs-section">
  <h3 className="section-title">Jobs</h3>
  
  <div className="jobs-outer-container">
    <div className="jobs-left-section">
      <div className="filter-group">
        <label>Company</label>
        <select 
          value={selectedCompany} 
          onChange={(e) => setSelectedCompany(e.target.value)}
        >
          <option>All</option>
        </select>
      </div>

      <div className="filter-group">
        <label>Source</label>
        <select 
          value={selectedSource} 
          onChange={(e) => setSelectedSource(e.target.value)}
        >
          <option>All</option>
        </select>
      </div>

      <div className="filter-group">
        <label>Time Period</label>
        <select 
          value={selectedPeriod} 
          onChange={(e) => setSelectedPeriod(e.target.value)}
        >
          <option>Day</option>
          <option>Week</option>
          <option>Month</option>
        </select>
      </div>
    </div>

    <div className="jobs-right-section">
      <div className="chart-container">
        <div className="chart-area">
          {/* Chart yahan render hoga */}
        </div>
        <div className="chart-x-axis">
          <span>Mon</span>
          <span>Tue</span>
          <span>Wed</span>
          <span>Thu</span>
          <span>Fri</span>
          <span>Sat</span>
          <span>Sun</span>
        </div>
      </div>

      <div className="chart-legend">
        <div className="legend-item">
          <span className="legend-dot cancelled-red"></span>
          <span>Cancelled</span>
        </div>
        <div className="legend-item">
          <span className="legend-dot cancelled-yellow"></span>
          <span>Pending</span>
        </div>
        <div className="legend-item">
          <span className="legend-dot completed"></span>
          <span>Completed</span>
        </div>
      </div>
    </div>
  </div>
</section>

      {/* Log In Section */}
      <section className="login-section">
        <h3 className="section-title">Log In</h3>
        
        <div className="login-info">
          <p>
            <strong>Company ID:</strong> <span className="highlight">Bracol</span>
          </p>
          <p>
            Download The Driver App From <span className="highlight">Google Play</span> Or{' '}
            <span className="highlight">App Store</span>
          </p>
          <p>
            <strong>Driver Username:</strong> <span className="highlight">Driver1</span>{' '}
            <strong>Password:</strong> <span className="highlight">DAD51</span>
          </p>
          <p>
            <strong>Dispatch Username:</strong> <span className="highlight">Dispatch1</span>{' '}
            <strong>Password:</strong> <span className="highlight">DA061</span>
          </p>
          <p className="password-note">
            (Only Automatically Generated Passwords Are Shown. After You Set A New Password It Will No Longer Be Visible.)
          </p>
        </div>
      </section>
    </div>
  );
};

export default Dashboard;