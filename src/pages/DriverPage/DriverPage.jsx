import React from 'react'
import './DriverPage.css'
const DriverPage = () => {
  return (
    <div className='DriverPage'>
       <div className='DreverHead'>
        <p className='DriveH'>
            AUTOMATIC ACCOUNTING FOR COMPANY INTERNAL TRANSACTIONS
        </p>
        <p className='DriverText'>
            With automatic accounting for drivers you can set up automatic tracking of your drivers balance. When you receive payments from your drivers, you can add funds to their accounts. The balance of their accounts can then be automatically updated based on events, for example a fixed fee for each accepted job, or a percentage of a completed job.
        </p>
        </div>

        <div className='WarningBox'>
            <p className='Warn'>Warning!</p>
            <p className='WarnT'>Warning!
        Please be aware, this setup can only be done once. Account names and currency cannot be changed after this step.</p>
        </div>

<div className='filedBox'>
    <div className="fieldRow">
  <div className="inputBox">
    <div className="innerRow">
      <label>Deposit account name</label>
      <input type="text" placeholder="Placeholder" />
    </div>
    <p className="InputText">
      This account is used to track the combined value of all driver deposits and payments.
    </p>
  </div>

  <div className="inputBox">
    <div className="innerRow">
      <label>Target account name</label>
      <input type="text" placeholder="Placeholder" />
    </div>
    <p className="InputText">
      This account is used to track the combined usage of all deposited funds.
    </p>
  </div>
</div>

<div className="fieldRow">
  <div className="inputBox">
    <div className="innerRow">
      <label>Group name</label>
      <input type="text" placeholder="Placeholder" />
    </div>
    <p className="InputText">
      Your drivers virtual bank accounts are created under a group with this name.
    </p>
  </div>

  <div className="inputBox">
    <div className="innerRow">
      <label>Currency</label>
      <select>
        <option>Placeholder</option>
      </select>
    </div>
    <p className="InputText">
     The currency to use for transactions, choose either your local currency or points.
    </p>
  </div>
</div>

<div className="centerButton">
  <button className="createBtn">+ Create</button>
</div>
</div>

    
    </div>
  )
}

export default DriverPage