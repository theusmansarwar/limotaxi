import React, { useState } from 'react';
import './Reports.css';

const Reports = () => {
  const [selectedReport, setSelectedReport] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const rowsPerPage = 50;
  
  // Static data
  const staticData = [
    { id: 1, driverId: 'DRV001', jobId: 'JOB1001', date: '2025-11-09', start: '08:30 AM' },
    { id: 2, driverId: 'DRV002', jobId: 'JOB1002', date: '2025-11-09', start: '09:15 AM' },
    { id: 3, driverId: 'DRV003', jobId: 'JOB1003', date: '2025-11-09', start: '10:00 AM' },
    { id: 4, driverId: 'DRV004', jobId: 'JOB1004', date: '2025-11-09', start: '11:45 AM' },
    { id: 5, driverId: 'DRV005', jobId: 'JOB1005', date: '2025-11-09', start: '01:20 PM' },
  ];
  
  const totalRows = staticData.length;

  const handleReportChange = (e) => {
    setSelectedReport(e.target.value);
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    const totalPages = Math.ceil(totalRows / rowsPerPage);
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  return (
    <div className="reports-container">
      <div className="reports-header">
        <h2>Reports</h2>
        <p className="reports-description">
          Create and customize reports according to the data available to your organization. 
          You can set up reports with your choice of columns, sorting and filters.
        </p>
      </div>

      <div className="report-controls">
        <div className="report-select-group">
          <label htmlFor="report-select">Select Report</label>
          <select 
            id="report-select"
            value={selectedReport}
            onChange={handleReportChange}
            className="report-dropdown"
          >
            <option value="">Driver</option>
            <option value="driver">Driver</option>
            <option value="trips">Trips</option>
            <option value="revenue">Revenue</option>
          </select>
        </div>
        <a href="#" className="create-new-report">
          Or create a completely new report
        </a>
      </div>

      <div className="table-controls">
        <div className="rows-control">
          <span>Show rows</span>
          <select className="rows-dropdown">
            <option value="50">50</option>
            <option value="100">100</option>
            <option value="200">200</option>
          </select>
          <span>1 - {Math.min(rowsPerPage, totalRows)} of {totalRows}</span>
          <button 
            className="pagination-btn" 
            onClick={handlePreviousPage}
            disabled={currentPage === 1}
          >
            &lt;
          </button>
          <button 
            className="pagination-btn"
            onClick={handleNextPage}
            disabled={currentPage >= Math.ceil(totalRows / rowsPerPage)}
          >
            &gt;
          </button>
        </div>
      </div>

      <div className="report-table">
        <table>
          <thead>
            <tr>
              <th>
                <input type="checkbox" className="table-checkbox" />
              </th>
              <th>Driver Id</th>
              <th>Job Id</th>
              <th>Date</th>
              <th>Start</th>
            </tr>
          </thead>
          <tbody>
            {staticData.map((row) => (
              <tr key={row.id}>
                <td>
                  <input type="checkbox" className="table-checkbox" />
                </td>
                <td>{row.driverId}</td>
                <td>{row.jobId}</td>
                <td>{row.date}</td>
                <td>{row.start}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="table-footer-controls">
        <div className="rows-control">
          <span>Show rows</span>
          <select className="rows-dropdown">
            <option value="50">50</option>
            <option value="100">100</option>
            <option value="200">200</option>
          </select>
          <span>1 - {Math.min(rowsPerPage, totalRows)} of {totalRows}</span>
          <button 
            className="pagination-btn"
            onClick={handlePreviousPage}
            disabled={currentPage === 1}
          >
            &lt;
          </button>
          <button 
            className="pagination-btn"
            onClick={handleNextPage}
            disabled={currentPage >= Math.ceil(totalRows / rowsPerPage)}
          >
            &gt;
          </button>
        </div>
      </div>
    </div>
  );
};

export default Reports;