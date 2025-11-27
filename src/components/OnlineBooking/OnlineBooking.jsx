import React from "react";
import Tabs from "../Tabs/Tabs"; 
import BookingApp from "../BookingApp/BookingApp";
import TaxiCallerEmbed from "../TaxiCaller/TaxiCallerEmbed";
import "./OnlineBooking.css" 

const OnlineBooking = () => {
  const onlineBookingTabs = [
    {
      id: "bookingApp",
      label: "Settings",
      component: <BookingApp />,
    },
    {
      id: "taxiCallerEmbed",
      label: "Embed web form",
      component: <TaxiCallerEmbed />,
    },
  ];

  return (
    <div className="AccountsDashboard">
      <Tabs tabs={onlineBookingTabs} />
    </div>
  );
};

export default OnlineBooking;
