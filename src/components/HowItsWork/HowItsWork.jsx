import React from 'react'
import './HowItsWork.css'
const HowItsWork = () => {
  return (
    <div className='InformP'>
    <div className='InfoPage'>
      <p className='InfoAbout'>INFORMATION ABOUT MONTHLY FEES</p>
      <p className='InfoText'>
        To use TaxiCaller's system, you pay a monthly fee for every vehicle you use during the month. You can find the price for each vehicle activation in the  <a href="over">Overview tab.  </a>A vehicle activation occurs when a driver logs in and starts a shift with a vehicle that has not yet been activated for the current calendar month.
      </p>

      <p className='InfoAbout'>
        BILLING PERIODS
      </p>

      <div className='BillList'>
        <ul>
            <li>TaxiCaller monthly billing periods mean you pay for the full month, regardless of when you activate vehicles or how much you use them.</li>
            <li>The monthly fee level already considers this billing structure.</li>
            <li>A new billing month starts at 00:00 GMT on the first day of each month and ends at the same time the next month.</li>
            <li>GMT is used because Google Maps license fees follow the same billing periods.</li>
            <li>If you are west of Europe, your billing period starts in the afternoon/evening local time on the last day of the month.</li>
            <li>If you are east of Europe, your billing period starts in the morning local time on the first day of the month.</li>
            <li>In the Admin Panel billing section, you can see your local time for when the current billing period ends and the next one begins.</li>
        </ul>
      </div>

      <div className='MonthFees'>
           <p className='InfoAbout'>PRORATED MONTHLY FEES</p>
            <div className='BillList'>
        <ul>
            <li>If you are at your vehicle all-time high (ATH) and activate one more vehicle to set a new ATH,the price for that vehicle in that billing period will be prorated.</li>
            <li>Example: If your highest activated vehicles in a billing period is 51, then your vehicle ATH is 51.</li>
            <li>If you activate 52 vehicles, the activation fee for the 52nd vehicle will be prorated for that month.</li>
            <li>All other vehicle activations will be charged full price, no matter when they are activated</li>
            <li>If you are west of Europe, your billing period starts in the afternoon/evening local time on the last day of the month.</li>
            <li>Only those activations that create a new vehicle ATH get prorated.</li>
            <li>In the billing section of the Admin Panel, you can always see the next vehicle activation price and billing period end date.</li>
        </ul>
      </div>

       <p className='InfoAbout'>PAYMENT IN ADVANCE</p>

        <div className='BillList'>
        <ul>
            <li>To activate vehicles, you must have enough funds in your TaxiCaller account.</li>
            <li>Payments need to be made in advance.</li>
            <li>Make sure your TaxiCaller account has sufficient funds before the start of each month to keep your vehicles activated.</li>
        </ul>
      </div>

     <p className='InfoAbout'>DISABLE VEHICLES BEFORE THE START OF THE MONTH</p>
     <div className='BillList'>
        <ul>
            <li>To avoid paying for vehicles that shouldn’t be used, disable all unused vehicles before the start of the month.</li>
            <li>Disabling prevents drivers from accidentally logging into those vehicles.</li>
            <li>Vehicles can be enabled or disabled from the vehicle section in the Admin Panel.</li>
        </ul>
      </div>
      </div>

      <div className='DiscountB'>
        <div className='DiscountBox'>
        <p className='DisHead'>
            DISCOUNTED PACKAGES
        </p>
        <p className='DisText'>
            Do you have 20 vehicles or more? Contact <a href="support">support@taxicaller.com</a> and ask for our volume discounted price packages.
        </p>
      </div>
      </div>
    </div>
    </div>
  )
}

export default HowItsWork