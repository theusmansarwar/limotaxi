
import './Auth.css'
import { MdOutlineEmail } from "react-icons/md";
import { TbLockPassword } from "react-icons/tb";
import { MdManageAccounts } from "react-icons/md";
const Password = () => {

  return (
    <div className='AuthPage'>


        <div className='AuthPage-Left'>
        <p className='AuthPage-Left-H'>Create New Password</p>

         <div className='inputs-area'>
                <TbLockPassword   />
            <input type="text" placeholder="New Password" />
        </div>

           <div className='inputs-area'>
                <TbLockPassword   />
            <input type="text" placeholder="Confirm Password" />
        </div>

           <div className='inputs-area'>
       <MdManageAccounts /><input type="text"  placeholder='OTP'/>
        </div>

         <div className='AuthPage-Submit-button'>Create Password</div>
       
        </div>
  
       <div className='AuthPage-Right'>
            <p >Hello, Friends</p>
            <p >Enter your personal details</p>
            <p >and strat journy with us.</p>
            <div className='AuthPage-Right-btn'>Return To HomePage</div>
        </div>
       
    </div>
  )
}

export default Password
