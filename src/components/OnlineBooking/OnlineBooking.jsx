import { React, useState } from "react";
import "./OnlineBooking.css";
import { IoMdArrowDropdown } from "react-icons/io";
 import BookingApp from "../BookingApp/BookingApp";
 import TaxiCallerEmbed from "../TaxiCaller/TaxiCallerEmbed";
// import Billing from "./Billing/Billing";
// import Work from "./HowWorks/HowWorks";


const OnlineBooking = () => {
  const [activeTab, setActiveTab] = useState("bookingApp");

  return (
    <div className="AccountsDashboard">
      <div className="links">
        <button
          className={activeTab === "bookingApp" ? "active" : ""}
          onClick={() => setActiveTab("bookingApp")}
        >
          Settings
        </button>

        <button
          className={activeTab === "taxiCallerEmbed" ? "active" : ""}
          onClick={() => setActiveTab("taxiCallerEmbed")}
        >
          Embed web form 
        </button>

      </div>

      <div className="tabContent">
        {activeTab === "bookingApp" && <BookingApp />}
        {activeTab === "taxiCallerEmbed" && <TaxiCallerEmbed />} 
      </div>
    </div>
  );
};
export default OnlineBooking;
