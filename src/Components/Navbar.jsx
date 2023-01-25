import React from 'react'
import "./Navbar.css"
import { Link } from 'react-router-dom';
import Logo from "./images/Logo.png";

const Navbar = () => {
  return (
    <div className="navbar_main">
        <Link to={"/"}>
        <div className="logo_card">
        <img src={Logo} alt="logo" />
        </div>
        </Link>
        <h2><span># EXPERIENCE</span> THEATRE</h2>
    </div>
  )
}


export default Navbar