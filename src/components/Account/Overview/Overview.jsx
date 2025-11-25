import React from 'react'
import './Overview.css'

const Overview = () => {
  return (
    <div> 
        <div className='leftArea'> 
         <section className="billing-section">
        <div className="billing-content">
          {/* LEFT SIDE */}
          <div className="billing-left">
            <h3 className="billing-label">Billing</h3>
            <div className="billing-amount">USD 0.00</div>
            <p className="account-balance">(non-refundable)</p>
            <p className="next-billing">
              Next billing period starts on 11/30/2025 6:00 pm
            </p>
            <p className="payment">MAKE A PAYMENT</p>
            <p className="payment-text">
              <p className="text1">Refill your balance with a one-time payment.</p>
              <p className="text2">To add funds to your account, you must be logged in as the owner.</p>
            </p>
          </div>

          {/* RIGHT SIDE */}
          <div className="billing-right">
            <div className="activated-vehicles">
              <span className="vehicles-label">Activated Vehicles:</span>
              <span className="vehicles-count">0</span>
            </div>
            <div className="period">(this period)</div>
            <button className="billing-btn">+ Add funds</button>
          </div>
        </div>
      </section>

       <div className="registered">
        <p className="reg">Your registered cards</p>
        <button className="billing-btn">+ Add</button>
      </div>

       <div className="trans-box">

      {/* Header */}
      <div className="trans-head">
        <p className="transH">TRANSACTION HISTORY</p>

        <p className="filter">Filter</p>
        <select className="trans-filter">
          <option>All</option>
        </select>
      </div>

      {/* Table */}
      <table className="trans-table">
        <thead>
          <tr>
            <th>Date</th>
            <th>Description</th>
            <th>Ref</th>
            <th>Amount</th>
            <th>Balance</th>
          </tr>
        </thead>

        {/* <tbody>
          <tr>
            <td colSpan="5" className="empty-data">No data available</td>
          </tr>
        </tbody> */}
      </table>

      {/* Pagination */}
      <div className="trans-pagination">
        <span>Show rows</span>

        <select className="rows-select">
          <option>50</option>
          <option>100</option>
        </select>

        <span className="page-info">1 - 50 of 0</span>

        <button className="btn-page">{"<"}</button>
        <button className="btn-page">{">"}</button>
      </div>
    </div>
    </div>

       <div className="rightArea">
        <div className="rateSec">
            <p className="Rate">YOUR RATE</p>
            <p className="Dollar">USD 14.00*</p>
            <p className="rightText">for next vehicle activation this month (valid until 11/30 6:00 pm)
              *Prorated at 50%</p>
          </div>

          <div className="monthSec">
            <p className="month">Monthly vehicle activation prices</p>
            <ul>
              <li>
                Vehicle 1-24         USD 28.00 per vehicle
              </li>

              <li>
                Vehicle 25-49     USD 24.00 per vehicle
              </li>

              <li>
                Vehicle 50+         USD 21.00 per vehicle
              </li>
            </ul>

            <p className="monthText">
              Have you increased your number of cars and want to sign up for a discounted package price or change your current package? Contact your account manager or send an e-mail to support@taxicaller.com. Please note that changes should be requested at least three days before a new billing period starts.
            </p>
          </div>

     <div className="usage-box">

      {/* Header */}
      <div className="usage-head">
        <h3>Usage</h3>

          <div className="timeP">
        <p className="time">Time Period</p>
        <input type="Date" />
        </div>
      </div>

      {/* Table */}
      <table className="usage-table">
        <thead>
          <tr>
            <th>Date</th>
            <th>Description</th>
            <th>Ref</th>
            <th>Amount</th>
            <th>Balance</th>
          </tr>
        </thead>

        {/* <tbody>
          <tr>
            <td colSpan="5" className="empty-data">No data available</td>
          </tr>
        </tbody> */}
      </table>

      {/* Pagination */}
      <div className="usage-pagination">
        <span>Show rows</span>

        <select className="rows-select">
          <option>50</option>
          <option>100</option>
        </select>

        <span className="page-info">1 - 50 of 0</span>

        <button className="btn-page">{"<"}</button>
        <button className="btn-page">{">"}</button>
      </div>
    </div>
  </div>
    </div>
  )
}

export default Overview