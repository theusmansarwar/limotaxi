import React from 'react'
import './BookingApp.css'
import { FaCaretDown } from "react-icons/fa";

const BookingApp = () => {
  return (
    <div className='sec1'>


      {/* EXACT SAME BOX */}
      <div className="top-box">

        {/* LEFT */}
        <div className="left-sec">
          <h4>APP CODE</h4>
          <p>Share this code with passengers if you want them to make bookings in the TaxiCaller for passengers app.</p>

          <div className="code-boxes">
            <span>0</span>
            <span>4</span>
            <span>5</span>
            <span>7</span>
            <span>8</span>
            <span>9</span>
          </div>
        </div>

        {/* MIDDLE VERTICAL LINE */}
        <div className="divider"></div>

        {/* RIGHT */}
        <div className="right-sec">
          <h4>TO ACTIVATE ONLINE BOOKINGS, WE NEED TO VERIFY YOUR LICENSE.</h4>
          <p>Please send a copy of the operations license of your company to 
            <a href="mailto:legal@taxicaller.com"> legal@taxicaller.com</a>.
          </p>

          {/* EXACT SAME COMPANY + STATUS SINGLE BOX */}
          <div className="companyStatusBox">

            <div className="leftPart">
              <span className="label0">COMPANY:</span>
              <span className="value">BROADIUM</span>
            </div>

            <div className="rightPart">
              <span className="label0">STATUS:</span>
              <span className="pendingTag">PENDING</span>
            </div>

          </div>

        </div>

      </div>


    <div className='OnlineBooking'>
        <p className='OnlineB'>ONLINE BOOKING SETTINGS</p>
        <p className='OnlineT'>Choose your settings for bookings made in the Passenger App and through the web form. To place the booking form on your website, go to the Embed form tab and follow the steps.</p>
    </div>
<div className='ActiveOnlineBox'>
<div className="onlineBox">

  {/* LEFT SIDE */}
  <div className="leftSide">
    <label className="redCheckBox">
      <input type="checkbox" /><p className='ActiveOnline'>Activate Online Booking</p> 
    </label>

    <label className="redCheckBox">
      <input type="checkbox" /> Verify direct bookings from passengers before assignment
    </label>

      <div className='DisplayT'>
    <div className="fieldGroup">
      <label>Display Name</label>
      <select className="selectBox">
        <option>Placeholder <FaCaretDown /></option>
      </select>
    </div>
     <p className='Display'>
        If you have more than one company profile, you can select which one will appear as the main name for bookings.
    </p>
</div>


    <div className='DisplayT'>
    <div className="fieldGroup">
      <label>Phone Verification</label>
      <select className="selectBox">
        <option>Placeholder <FaCaretDown/></option>
      </select>
    </div>
    <p className='Display'>
        If you have more than one company profile, you can select which one will appear as the main name for bookings.
    </p>
    </div>

    <label className="redCheckBox checkedRed">
      <input type="checkbox" /> Limit online pre-bookings and app pre-bookings
    </label>

    <div className="sliderRow">
      <p>Reject online bookings when the fleet is busy at</p>
      <div className="range-area">
        <span>50%</span>
    <input type="range" />
      
      </div>
  
    </div>

    <label className="redCheckBox">
        
      <input type="checkbox" /> Limit API bookings
    </label>
  </div>

  {/* MIDDLE VERTICAL LINE */}
  <div className="divider2"></div>

  {/* RIGHT SIDE */}
  <div className="rightSide">

    <h4>Requirements for online bookings</h4>

    <div className="sliderRow">
      <p>Minimum notice allowed for a pre-booked job</p>
      <div className='range-area'>
       <span>0 hours 20 min</span>
      <input type="range" />
    </div>
    </div>

    <div className="sliderRow">
      <p>Maximum notice allowed for a prebooked job</p>
      <div className='range-area'>
    <span>7 days 0 hours</span>
      <input type="range" />
    </div>
    </div>

    <div className="sliderRow">
      <p>Minimum ride length</p>
     <div className='range-area'>
      <span>0 km</span>
       <input type="range" />
    </div>
    </div>

    <div className="sliderRow">
      <p>Maximum ride length</p>
       <div className='range-area'>
        <span>14 miles</span>
      <input type="range" />
     </div>
    </div>

    <h4>Information visible to passenger</h4>

    {/* Driver names */}
  <div className="infoRow">
    <span className="labelData">Driver names:</span>

    <label><input type="checkbox" /> First name</label>
    <label><input type="checkbox" /> Last name</label>
    <label><input type="checkbox" /> Last name initial</label>
  </div>

  {/* Vehicle info */}
  <div className="infoRow">
    <span className="labelData">Vehicle info:</span>
    <label><input type="checkbox" /> License plate</label>
  </div>

  {/* Phone number */}
  <div className="infoRow">
    <span className="labelData">Phone number:</span>
    <label><input type="checkbox" /> Driver phone number</label>
    <label><input type="checkbox" /> Vehicle phone number</label>
    <label><input type="checkbox" /> None</label>
  </div>

  {/* Invisible vehicles */}
  <div className="infoRow">
    <label> Make vehicles invisible on map <input type="checkbox" /></label>
  </div>

</div>

</div>

<div className="saveArea">
  <button className="saveBtnRed">Save</button>
</div>
</div>

    </div>
  )
}

export default BookingApp;
