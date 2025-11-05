import React, { useState } from "react";
import "./BookingForm.css";
import { FaUser, FaTaxi, FaPlus } from "react-icons/fa";

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
              <div className="arrows">
                <span>↑</span>
                <span>↓</span>
              </div>
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
    </div>
  );
};

export default BookingForm;
