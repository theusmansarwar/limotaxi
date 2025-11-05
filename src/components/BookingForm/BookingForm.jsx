import React, { useState } from "react";
import "./BookingForm.css";
import { FaUser, FaTaxi, FaPlus } from "react-icons/fa";
import { FaCheck, FaBook, FaUndo, FaTimes } from "react-icons/fa";

const BookingForm = () => {
  const [dispatch, setDispatch] = useState("later");

  return (
    <div className="booking-container">
      {/* Status Boxes */}
      <div className="status-row">
        <div className="status-box all"><h2>12</h2><p>All</p></div>
        <div className="status-box free"><h2>02</h2><p>Free</p></div>
        <div className="status-box busy"><h2>09</h2><p>Busy</p></div>
        <div className="status-box away"><h2>01</h2><p>Away</p></div>
      </div>

      {/* Location + Dispatch */}
      <div className="location-dispatch">
        {/* Location Section */}
        <div className="location-section">
          <h3>Location</h3>

          <div className="address-wrapper">
            <div className="input-with-icon">
              <input type="text" placeholder="Pick-Up Address" />
              <FaUser className="icon" />
            </div>

            <div className="mid-icons">
              {/* <div className="arrows">
                <span>↑</span>
                <span>↓</span>
              </div> */}
              <button className="add-btn">
                <FaPlus />
              </button>
            </div>

            <div className="input-with-icon">
              <input type="text" placeholder="Drop-Off Address" />
              <FaTaxi className="icon" />
            </div>
          </div>
        </div>

        {/* Dispatch Section */}
        <div className="dispatch-section">
          <h3>Dispatch</h3>

          <div className="radio-group">
            <label>
              <input type="radio" name="dispatch" /> Now
            </label>
          </div>
          <div className="radio-group">
            <label>
              <input type="radio" name="dispatch" defaultChecked /> Later
            </label>
          </div>

          <div className="dispatch-fields">
            <p className="label">Select Time</p>

            <div className="time-fields">
              <input type="text" value="01" readOnly />
              <span>:</span>
              <input type="text" value="30" readOnly />
              <select>
                <option>pm</option>
                <option>am</option>
              </select>
            </div>

            <input
              type="text"
              value="01 / 08 / 2025"
              className="date-input"
              readOnly
            />
          </div>
        </div>
      </div>

      {/* Passengers + Payment Section */}
      <div className="section passengers-payment">
        <div className="passengers">
          <h3>Passengers</h3>
          <input type="text" placeholder="Name" />
          <input type="text" placeholder="Phone" />
          <input type="email" placeholder="E mail" />
          <input type="text" placeholder="Account ID" />
        </div>

        <div className="payment">
          <h3>Payment</h3>
          <div className="payment-option">
            <label className="tick-label">E Ticket</label>
            <input type="text" placeholder="E Ticket Number" />
          </div>

          <div className="divider">OR</div>

          <div className="payment-option">
            <label>Pre Paid</label>
            <div className="payment-inputs">
              <input type="text" placeholder="Amount" />
              <select className="cash-select">
                <option>Cash</option>
              </select>
            </div>
          </div>
        </div>
      </div>
      {/* Job Info */}
<div className="section job-info">
  <div className="job">
    <h3>Job Info</h3>
    <input type="text" placeholder="Vehicle type" />
    <input type="text" placeholder="Vehicle class" />
    <input type="text" placeholder="Info (All)" />
    <input type="text" placeholder="Info (Driver)" />
  </div>
  <div className="job">
    <h3>Job Info</h3>
    <select><option>Persons</option></select>
    <select><option>Bags</option></select>
    <select><option>Wheel Chair</option></select>
    <select><option>Vehicle</option></select>
  </div>
</div>
{/* Extras */}
<div className="section extras">
  <h3>Extras</h3>
  <div className="extras-grid">
    <div className="extras-row">
      <label>Assign To:</label>
      <select><option>Automatic</option></select>
    </div>
    <div className="extras-row">
      <label>Company:</label>
      <select><option>Automatic</option></select>
    </div>
    <div className="extras-row">
      <label>Tariff:</label>
      <select><option>Automatic</option></select>
    </div>
    <div className="extras-row">
      <label>Duration:</label>
      <select><option>From Route</option></select>
    </div>
    <div className="extras-row">
      <label>Priority:</label>
      <select><option>Automatic</option></select>
    </div>
    <div className="extras-bottom-row">
      <select><option>Gender</option></select>
      <input type="text" placeholder="Flight#" />
      <input type="text" placeholder="Flat#" />
    </div>
  </div>
</div>
<div className="action-buttons-container">
  <div className="action-buttons">
    <button className="btn-check">
      <FaCheck />
      Check
    </button>
    <button className="btn-book">
      <FaBook />
      Book
    </button>
    <button className="btn-return">
      <FaUndo />
      Return
    </button>
    <button className="btn-clear">
      <FaTimes />
      Clear
    </button>
  </div>
</div>

    </div>
  );
};

export default BookingForm;
