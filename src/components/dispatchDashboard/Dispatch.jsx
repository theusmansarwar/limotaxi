// DispatchDashboard.jsx
import React, { useState } from 'react';
import './dispatch.css';

const Dispatch = () => {
  const [activeTab, setActiveTab] = useState('assigned');
  
  // Sample data for zone queues
  const zoneQueues = [
    { id: 1, zone: '138 × 24' }
  ];

  // Sample data for dispatch table
  const dispatchData = [
    {
      id: '001',
      load: 'PKG-12345',
      callsign: 'CS-001',
      jobs: 3,
      wait: '5 min',
      free: 'Yes',
      driver: 'John Doe',
      pickup: 'Location A',
      dropoff: 'Location B',
      passenger: 'Jane Smith'
    },
    {
      id: '002',
      load: 'PKG-12346',
      callsign: 'CS-002',
      jobs: 2,
      wait: '10 min',
      free: 'No',
      driver: 'Mike Johnson',
      pickup: 'Location C',
      dropoff: 'Location D',
      passenger: 'Bob Wilson'
    }
  ];

  return (
    <div className="dispatch-dashboard">
      {/* Map Section */}
      <div className="map-container">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3402.176!2d74.3587!3d31.5204!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzHCsDMxJzEzLjQiTiA3NMKwMjEnMzEuMyJF!5e0!3m2!1sen!2s!4v1234567890"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Dispatch Map"
        />
      </div>

      {/* Status Tabs */}
      <div className="status-tabs">
        <button 
          className={`tab-button ${activeTab === 'assigned' ? 'active' : ''}`}
          onClick={() => setActiveTab('assigned')}
        >
          Assigned (09)
        </button>
        <button 
          className={`tab-button ${activeTab === 'unassigned' ? 'active' : ''}`}
          onClick={() => setActiveTab('unassigned')}
        >
          Unassigned (11)
        </button>
        <button 
          className={`tab-button ${activeTab === 'active' ? 'active' : ''}`}
          onClick={() => setActiveTab('active')}
        >
          Active (01)
        </button>
      </div>

      {/* Zone Queues Section */}
      <div className="zone-queues-section">
        <div className="section-header">
          <span className="header-label">ID</span>
          <span className="header-label">Zone Queues</span>
        </div>
        <div className="zone-list">
          {zoneQueues.map((zone) => (
            <div key={zone.id} className="zone-item">
              <span className="zone-badge">{zone.zone}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Dispatch Table */}
      <div className="dispatch-table-container">
        <table className="dispatch-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Load</th>
              <th>Callsign</th>
              <th>Jobs</th>
              <th>Wait</th>
              <th>Free</th>
              <th>Driver</th>
              <th>Pick-up</th>
              <th>Drop-off</th>
              <th>Passenger</th>
            </tr>
          </thead>
          <tbody>
            {dispatchData.map((item) => (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.load}</td>
                <td>{item.callsign}</td>
                <td>{item.jobs}</td>
                <td>{item.wait}</td>
                <td>{item.free}</td>
                <td>{item.driver}</td>
                <td>{item.pickup}</td>
                <td>{item.dropoff}</td>
                <td>{item.passenger}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Dispatch;