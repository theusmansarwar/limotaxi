 import React, { useState } from "react";
import "./Account.css";
import { IoMdArrowDropdown } from "react-icons/io";

// import your components
import Overview from "./Overview/Overview";
import Billing from "./Billing/Billing";
import Work from "./HowWorks/HowWorks";

const Account = () => {
  const [activeTab, setActiveTab] = useState("overview");

  return (
    <div className="AccountsDashboard">
      <div className="links">
        <button
          className={activeTab === "overview" ? "active" : ""}
          onClick={() => setActiveTab("overview")}
        >
          Overview
        </button>

        <button
          className={activeTab === "billing" ? "active" : ""}
          onClick={() => setActiveTab("billing")}
        >
          Your Billing Information
        </button>

        <button
          className={activeTab === "work" ? "active" : ""}
          onClick={() => setActiveTab("work")}
        >
          How it Works
        </button>
      </div>

      {/* Show Components Dynamically */}
      <div className="tabContent">
        {activeTab === "overview" && <Overview />}
        {activeTab === "billing" && <Billing />}
        {activeTab === "work" && <Work />}
      </div>
    </div>
  );
};

export default Account;
