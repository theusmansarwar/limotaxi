import { React, useState } from "react";
import "./Account.css";
import { IoMdArrowDropdown } from "react-icons/io";
import Overview from "./Overview/Overview";
import Billing from "./Billing/Billing";
import HowWorks from "./HowWorks/HowWorks";


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
          Your billing information
        </button>

        <button
          className={activeTab === "work" ? "active" : ""}
          onClick={() => setActiveTab("work")}
        >
          How it works
        </button>
      </div>

      <div className="tabContent">
        {activeTab === "overview" && <Overview />}
        {activeTab === "billing" && <Billing />}
        {activeTab === "work" && <HowWorks />}
      </div>
    </div>
  );
};
export default Account;
