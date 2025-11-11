import React from 'react'
import BookingForm from "../../components/BookingForm/BookingForm";
import Dispatch from "../../components/dispatchDashboard/Dispatch";
import './DispatchDashboard.css';

const DispatchDashboard = () => {
  return (
    <div className="dispatch-page-wrapper">
      <div className="booking-column">
        <BookingForm />
      </div>
      <div className="dispatch-column">
        <Dispatch />
      </div>
    </div>
  )
}

export default DispatchDashboard;