import React, { useState } from "react";
import "./Login.css";
// import logo from "./images/Logo.png";
// import login from "./images/Login.jpeg";
import { Link } from "react-router-dom";

function Login() {
  return (
      <div class="card">
        <div class="card-image">
          <h2 class="card-heading">
            Get started
            <small>Let us create your account</small>
          </h2>
        </div>
        <form class="card-form">
          <div class="input">
            <input
              type="text"
              class="input-field"
              required
            />
            <label class="input-label">Full name</label>
          </div>
          <div class="input">
            <input
              type="text"
              class="input-field"
              required
            />
            <label class="input-label">Email</label>
          </div>
          <div class="input">
            <input type="password" class="input-field" required />
            <label class="input-label">Password</label>
          </div>
          <div class="action">
            <Link to={"/Booking"}>
            <button class="action-button">Get started</button>
            </Link>
          </div>
        </form>
        {/* <div class="card-info">
          <p>
            By signing up you are agreeing to our{" "}
            <a href="#">Terms and Conditions</a>
          </p>
        </div> */}
      </div>
  );
}

export default Login;
