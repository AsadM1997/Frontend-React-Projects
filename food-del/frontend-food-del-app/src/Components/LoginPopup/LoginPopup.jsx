import React, { useState } from 'react'
import './LoginPopup.css'
import { assets } from '../../assets/assets'


const LoginPopup = ({setShowLogin}) => {

  const [currState,setCurrState]=useState("Sign up")

  return (
    <div className='login-popup'>
      <form className='login-popup-container'>
        <div className='login-popup-title'>
          <h2>{currState}</h2>
          <img onClick={()=>setShowLogin(false)} src={assets.cross_icon} alt=''/>
        </div>
        <div className='login-popup-inputs'>
          {currState==="Login"?<></>:  <input type="text" placeholder="Your name" required/>}
          <input type="text" placeholder="Your email" required/>
          <input type="text" placeholder="password" required/>
        </div>
        <div className="Login-popup-container">
          <input type="checkbox" required/>
          <p>By continuing, i agree to the terms  of use & privacy policy.</p>
        </div>
      </form>
      <button>{currState==="Sign Up"?"Creat account":"Login"}</button>
    </div>

  )
}

export default LoginPopup