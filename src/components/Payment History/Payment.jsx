import React, { useState } from "react";
import "./Payment.css";

const Payment = () => {
  const [selectedReport, setSelectedReport] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const rowsPerPage = 50;

  const staticData = [
    { id: 1, License_plate: "0", number: "0", callsign: "0", resourceId: "665c2ba00013d16f", color: "yellow", seats: 4, wheelchairs: 0, bags: 4 },
    { id: 2, License_plate: "0", number: "0", callsign: "0", resourceId: "665c2ba00012fcf6", color: "yellow", seats: 4, wheelchairs: 0, bags: 4 },
    { id: 3, License_plate: "0", number: "0", callsign: "0", resourceId: "665c2ba00012dfd", color: "yellow", seats: 4, wheelchairs: 0, bags: 4 },
    { id: 4, License_plate: "0", number: "0", callsign: "0", resourceId: "665c2ba00013c231", color: "yellow", seats: 4, wheelchairs: 0, bags: 4 },
    { id: 5, License_plate: "0", number: "0", callsign: "0", resourceId: "665c2ba000139742", color: "yellow", seats: 4, wheelchairs: 0, bags: 4 },
    { id: 6, License_plate: "0", number: "0", callsign: "0", resourceId: "665c2ba00015553f", color: "yellow", seats: 4, wheelchairs: 0, bags: 4 },
    { id: 7, License_plate: "0", number: "0", callsign: "0", resourceId: "665c2ba00013c45d", color: "yellow", seats: 4, wheelchairs: 0, bags: 4 },
    { id: 8, License_plate: "1", number: "0", callsign: "Test-car", resourceId: "66192e110c014c28", color: "yellow", seats: 4, wheelchairs: 0, bags: 4 },
    { id: 9, License_plate: "0", number: "0", callsign: "0", resourceId: "665c2ba00013c0ae", color: "yellow", seats: 4, wheelchairs: 0, bags: 4 }
  ];

  const totalRows = staticData.length;

  const handlePreviousPage = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  const handleNextPage = () => {
    const totalPages = Math.ceil(totalRows / rowsPerPage);
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  const handleReportChange = (e) => {
    setSelectedReport(e.target.value);
  };

  return (
    <div className="payment-new-container">
      {/* TOP CONTROLS */}
      <div className="payment-controls">
        <div className="payment-select-group">
         
          <select
            id="payment-select"
            value={selectedReport}
            onChange={handleReportChange}
            className="payment-dropdown"
          >
            <option value="">Select a Report</option>
        </select>
        </div>

        <a href="#" className="create-new-payment">
          Or create a completely new report
        </a>
      </div>

      {/* FILTER LINE */}
      <div className="payment-filter-line">
        <span>FILTER</span>
      </div>

      {/* TOP TABLE CONTROLS */}
      <div className="payment-table-controls">
        <div className="payment-rows-control">
          <span>Show rows</span>

          <select className="payment-rows-dropdown">
            <option value="50">50</option>
            <option value="100">100</option>
            <option value="200">200</option>
          </select>

          <span>
            1 - {Math.min(rowsPerPage, totalRows)} of {totalRows}
          </span>

          <button
            className="payment-pagination-btn"
            onClick={handlePreviousPage}
            disabled={currentPage === 1}
          >
            &lt;
          </button>

          <button
            className="payment-pagination-btn"
            onClick={handleNextPage}
            disabled={currentPage >= Math.ceil(totalRows / rowsPerPage)}
          >
            &gt;
          </button>
        </div>
      </div>

      {/* TABLE */}
      <div className="payment-report-table">
        <table className="payment-clean-table">
          <thead>
            <tr>
              <th><input type="checkbox" /></th>
              <th>License-Plate</th>
              <th>Number</th>
              <th>Callsign</th>
              <th>Resource ID</th>
              <th>Color-Name</th>
              <th>Seats</th>
              <th>Wheelchairs</th>
              <th>Bags</th>
            </tr>
          </thead>

          <tbody>
            {staticData.map((row) => (
              <tr key={row.id}>
                <td><input type="checkbox" /></td>
                <td>{row.License_plate}</td>
                <td>{row.number}</td>
                <td>{row.callsign}</td>
                <td>{row.resourceId}</td>
                <td>{row.color}</td>
                <td>{row.seats}</td>
                <td>{row.wheelchairs}</td>
                <td>{row.bags}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* FOOTER CONTROLS */}
      <div className="payment-table-footer-controls">
        <div className="payment-rows-control">
          <span>Show rows</span>

          <select className="payment-rows-dropdown">
            <option value="50">50</option>
            <option value="100">100</option>
            <option value="200">200</option>
          </select>

          <span>
            1 - {Math.min(rowsPerPage, totalRows)} of {totalRows}
          </span>

          <button
            className="payment-pagination-btn"
            onClick={handlePreviousPage}
            disabled={currentPage === 1}
          >
            &lt;
          </button>

          <button
            className="payment-pagination-btn"
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

export default Payment;
