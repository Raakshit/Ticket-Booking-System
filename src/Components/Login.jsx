import React, { useState } from "react";
import "./Login.css";
// import logo from "./images/Logo.png";
// import login from "./images/Login.jpeg";
import { Link,useNavigate } from "react-router-dom";
import PhoneInput from "react-phone-number-input";
import { useUserAuth } from "../Context/UserAuthContext";




function Login() {
  const [number, setNumber] = useState("");
  const [otp, setOtp] = useState("");
  const [error, setError] = useState("");
  const [flag, setFlag] = useState(false);
  const[confirmObj,setConfirmObj]=useState("");
  const { setUpRecaptcha } =useUserAuth();
  const navigate = useNavigate()

  const getOtp = async (e) =>{ 
    
    e.preventDefault();
    setError("");
    if(number==="" || number === undefined  ) return setError("valid phone number");
    try{
        const response = await setUpRecaptcha(number);
        // const response = true;
        console.log(response);
        setConfirmObj(response);
        setFlag(true);

    }catch(err)
    {
        setError(err.message);
    }
    console.log(number);
};

const verifyOtp = async(e) => {
  e.preventDefault();
  console.log(otp)
  if(otp==="" || otp === null) return;
  try {
      setError(""); 
      await confirmObj.confirm(otp);
      navigate("/Booking");


  }catch(err)
  {
      setError(err.message)
  }
};

  return (
    <div class="card">
      <section>
        {error && {error}}
      </section>
      <div class="card-image">
        <h2 class="card-heading">
          Get started
          <small>Sign in to your account</small>
        </h2>
      </div>
      <form class="card-form">
        <div class="input">
          <input type="text" class="input-field" required />
          <label class="input-label">Email</label>
        </div>
        <div class="input">
          <PhoneInput
          defaultCountry="IN"
          value={number}
          onChange={setNumber}
          placeholder="Enter Phone Number"
          />
          {/* <input type="text" class="input-field" required />
          <label class="input-label">Phone Number</label> */}
        </div>
        <div id="recaptcha-container"/>
        <button onClick={getOtp} className="otp_button">
          Send otp
        </button>


        <div class="input">
          <input
          onChange={(e) => setOtp(e.target.value)}
          type="text" class="input-field" required />
          <label class="input-label">Otp</label>
        </div>
        <div class="action">
            <button class="action-button" onClick={verifyOtp}>Get started</button>
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
