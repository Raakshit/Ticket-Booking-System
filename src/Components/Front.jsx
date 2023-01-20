import React from 'react'
import "./Front.css"
import login from './images/Login.jpeg';
import logo from "./images/Logo.png";


const Front = () => {
  return (
    <div className='Front'>
        <section className='front_left'>
            <img src={login} alt="login_img" />
        </section>
        <section className='front_right'>
            <div className="front_logo_card">
                <img src={logo} alt="" />
            </div>
            <div className="formField">
                <form action="">
                    <label htmlFor="email">E-mail Address</label>
                    <input
                    placeholder='Enter Your Email Address'
                    type="email" />
                </form>
            </div>
        </section>
      
    </div>
  )
}

export default Front
