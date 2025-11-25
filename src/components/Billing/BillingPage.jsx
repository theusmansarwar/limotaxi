import React from "react";
import "./BillingPage.css";

const BillingPage = () => {
  return (
    <div className="BillingPage">

      {/* Top Links */}
      <div className="link">
        <a href="overL" className="overL">Overview</a>
        <a href="billL" className="billL">Your Billing Information</a>
        <a href="workL" className="workL">How it works</a>
      </div>

      {/* Billing Info Headings */}
      <div className="BillingInfo">
        <p className="BillInfo">BILLING INFORMATION</p>
        <p className="BillText">
        The information you enter below is the information that will be visible on the automatically generated receipts when you add funds for your monthly vehicle activation fees. The receipts are automatically sent to the email address entered below.
        </p>
      </div>

      <div className="form-wrapper">

        {/* BILLING ADDRESS */}
        <h2 className="section-title">BILLING ADDRESS</h2>

        {/* Row 1 */}
        <div className="grid-row">
          <div className="field-horizontal">
            <label>Company Name</label>
            <input type="text" placeholder="Enter Company Name" />
          </div>
          <div className="field-horizontal">
            <label>Registration Number</label>
            <input type="text" placeholder="Enter Registration Number" />
          </div>
        </div>

        {/* Row 2 */}
        <div className="grid-row">
          <div className="field-horizontal">
            <div className="add2">
            <label>Address Line 1</label>
             <span className="helper-text">Street address, P.O box</span>
            </div>
            <input type="text" placeholder="Enter Address Line 1" />
           
          </div>
          <div className="field-horizontal">
            <div className="add2">
            <label>Address Line 2</label>
             <span className="helper-text">Apartment, suite, unit, building, floor, etc.</span>
             </div>
            <input type="text" placeholder="Enter Address Line 2" />
          
          </div>
        </div>

        {/* Row 3 */}
        <div className="grid-row">
          <div className="field-horizontal">
            <label>City / Town</label>
            <input type="text" placeholder="Enter City" />
          </div>
          <div className="field-horizontal">
            <label>State / Province / Region</label>
            <input type="text" placeholder="Enter Province" />
          </div>
        </div>

        {/* Row 4 */}
        <div className="grid-row">
          <div className="field-horizontal">
            <label>Zip / Postal Code</label>
            <input type="text" placeholder="Enter Postal Code" />
          </div>
          <div className="field-horizontal">
            <label>Country</label>
            <select>
              <option>Placeholder</option>
            </select>
          </div>
        </div>

        {/* Row 5 */}
        <div className="grid-row">
          <div className="field-horizontal">
            <label>VAT Number (optional)</label>
            <input type="text" placeholder="Enter VAT Number" />
          </div>
        </div>

        {/* CONTACT */}
        <h2 className="section-title">Contact</h2>

        <div className="grid-row">
          <div className="field-horizontal">
            <label>First Name</label>
            <input type="text" placeholder="Enter First Name" />
          </div>
          <div className="field-horizontal">
            <label>Last Name</label>
            <input type="text" placeholder="Enter Last Name" />
          </div>
        </div>

        <div className="grid-row">
          <div className="field-horizontal">
            <label>Email Address</label>
            <input type="text" placeholder="Enter Email Address" />
          </div>
          <div className="field-horizontal">
            <label>Phone Number</label>
            <input type="text" placeholder="Enter Phone Number" />
          </div>
        </div>

        <div className="btn-wrap">
          <button className="save-btn">Save</button>
        </div>

      </div>
    </div>
  );
};

export default BillingPage;
