import React, { useState } from "react";
import "./DriverCreate.css";
import { FaCaretDown } from "react-icons/fa";
import { BsPencilSquare } from "react-icons/bs";
import { RxCross2 } from "react-icons/rx";

const DriverCreate = () => {

  const [showPopup, setShowPopup] = useState(false);

  const [formData, setFormData] = useState({
    chargeOn: "",
    transferTo: "",
    amount: "",
    chargeType: "",
    description: ""
  });

  const [errors, setErrors] = useState({});

  const [rules, setRules] = useState([
    {
      chargeOn: "Start",
      transferTo: "Broadium",
      amount: "$100",
      chargeType: "Fixed",
      description: "Anything Here."
    },
  ]);

  // SAVE FUNCTION
  const handleSave = () => {
    const newErrors = {
      chargeOn: !formData.chargeOn,
      transferTo: !formData.transferTo,
      amount: !formData.amount,
      chargeType: !formData.chargeType,
      description: !formData.description
    };

    // If any field empty, highlight red input
    if (Object.values(newErrors).includes(true)) {
      setErrors(newErrors);
      return;
    }

    setRules([...rules, formData]);

    setFormData({
      chargeOn: "",
      transferTo: "",
      amount: "",
      chargeType: "",
      description: ""
    });

    setErrors({});
    setShowPopup(false);
  };

  return (
    <div className="driver-main">

      <p className="Dhead">AUTOMATIC ACCOUNTING FOR COMPANY INTERNAL TRANSACTIONS</p>

      <div className="top-controls">
        <label><input type="checkbox" defaultChecked /> Enabled</label>
        <label><input type="checkbox" /> Enforce Funds</label>

        <div className="MinFunds">
          <label>Minimum Funds</label>
          <div className="minFunds-row">
            <span>USD</span>
            <input type="number" placeholder="0.00" />
          </div>
        </div>

        <div className="form-row">
          <div className="SourceForm">
            <label>Source Form</label>
            <div className="input-wrapper">
              <input type="text" placeholder="placeholder" />
              <FaCaretDown className="icon0" />
            </div>
          </div>

          <div className="TraseferTo">
            <label>Trasefer To</label>
            <div className="input-wrapper">
              <input type="text" placeholder="placeholder" />
              <FaCaretDown className="icon0" />
            </div>
          </div>
        </div>
      </div>

      <div className="charge-header">
        <span>CHARGE RULES</span>
        <button className="create-btn" onClick={() => setShowPopup(true)}>+ Create</button>

        {showPopup && (
          <div className="popup-overlay">
            <div className="popup-box">

              <div className="popup-top">
                <span>CHARGE RULES</span>
                <RxCross2 className="popup-close" onClick={() => setShowPopup(false)} />
              </div>

              <div className="popup-body">

                {/* Row 1 */}
                <div className="popup-row">
                  <div className="popup-field">
                    <label>Charge on</label>
                    <div className="dropdown-box">
                      <input
                        type="text"
                        placeholder="Placeholder"
                        value={formData.chargeOn}
                        className={errors.chargeOn ? "error-input" : ""}
                        onChange={(e) => {
                          setFormData({ ...formData, chargeOn: e.target.value });
                          setErrors({ ...errors, chargeOn: false });
                        }}
                      />
                      <FaCaretDown className="popup-icon" />
                    </div>
                  </div>

                  <div className="popup-field">
                    <label>Transfer to</label>
                    <div className="dropdown-box">
                      <input
                        type="text"
                        placeholder="Placeholder"
                        value={formData.transferTo}
                        className={errors.transferTo ? "error-input" : ""}
                        onChange={(e) => {
                          setFormData({ ...formData, transferTo: e.target.value });
                          setErrors({ ...errors, transferTo: false });
                        }}
                      />
                      <FaCaretDown className="popup-icon" />
                    </div>
                  </div>
                </div>

                {/* Row 2 */}
                <div className="popup-row">
                  <div className="popup-field">
                    <label>Amount</label>
                    <div className="amount-box">
                      <span>USD</span>
                      <input
                        type="number"
                        placeholder="0.00"
                        value={formData.amount}
                        className={errors.amount ? "error-input" : ""}
                        onChange={(e) => {
                          setFormData({ ...formData, amount: e.target.value });
                          setErrors({ ...errors, amount: false });
                        }}
                      />
                    </div>
                  </div>

                  <div className="popup-field">
                    <label>Charge type</label>
                    <div className="dropdown-box">
                      <input
                        type="text"
                        placeholder="Placeholder"
                        value={formData.chargeType}
                        className={errors.chargeType ? "error-input" : ""}
                        onChange={(e) => {
                          setFormData({ ...formData, chargeType: e.target.value });
                          setErrors({ ...errors, chargeType: false });
                        }}
                      />
                      <FaCaretDown className="popup-icon" />
                    </div>
                  </div>
                </div>

                {/* Description */}
                <div className="popup-field">
                  <label>Description</label>
                  <input
                    type="text"
                    placeholder="Placeholder"
                    className={`desc-input ${errors.description ? "error-input" : ""}`}
                    value={formData.description}
                    onChange={(e) => {
                      setFormData({ ...formData, description: e.target.value });
                      setErrors({ ...errors, description: false });
                    }}
                  />
                </div>

                {/* Buttons */}
                <div className="popup-buttons">
                  <button className="cancel-btn" onClick={() => setShowPopup(false)}>Cancel</button>
                  <button className="save-btn" onClick={handleSave}>Save</button>
                </div>

              </div>
            </div>
          </div>
        )}

      </div>

      <div className="rules-grid">
        {rules.map((r, i) => (
          <div className="rule-card" key={i}>
            <div className="card-top">
              <span className="edit"><BsPencilSquare /></span>
              <span className="delete"><RxCross2 /></span>
            </div>

            <table>
              <tbody>
                <tr><th>Charge on</th><td>{r.chargeOn}</td></tr>
                <tr><th>Transfer to</th><td>{r.transferTo}</td></tr>
                <tr><th>Amount</th><td>{r.amount}</td></tr>
                <tr><th>Charge type</th><td>{r.chargeType}</td></tr>
                <tr><th>Description</th><td>{r.description}</td></tr>
              </tbody>
            </table>
          </div>
        ))}
      </div>

    </div>
  );
};

export default DriverCreate;
    