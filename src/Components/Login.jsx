import React, { useState } from 'react';
import './Login.css';
import logo from "./images/Logo.png";
import login from './images/Login.jpeg';
import { Link } from 'react-router-dom';

function Login() {
  // const userid = "demo@muj.manipal.edu";
  // const userotp = 1234;

  const [userId, setuserId] = useState("")
  const [userOTP, setuserOTP] = useState()

  return (
    <div className="main_login">
    <div className="login_img_card">
    <img  src={login} alt=''/>
    </div> 
      <div className = 'sub-main'>
          <img src={logo} alt=''/> 
          <div className="login_heading">
          <h2>EXPERIENCE THEATER LOGIN</h2>
          </div>
          <div className='wrappers'>
          <div className='login'>
             <label>E-mail: </label>
             <input type='email' placeholder='Muj E-mail'onChange={(e) => setuserId(e.target.value)} ></input>
          </div>
          <div>
            <button  className='button' >Send OTP</button>
          </div>
          <div className='login'>
             <label>OTP: </label>
             <input type='password' placeholder='OTP' onChange={(e) => setuserOTP(e.target.value)} ></input>
          </div>
          <div>
            <Link to={"/"}>
              <button className='button1'>Login</button>
            </Link>
            
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
