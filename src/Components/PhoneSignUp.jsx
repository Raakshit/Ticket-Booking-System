import React, { useState } from 'react';
import { Link  , useNavigate} from "react-router-dom";
import 'react-phone-number-input/style.css';
import PhoneInput from "react-phone-number-input";
import { useUserAuth } from '../Context/UserAuthContext';


const PhoneSignUp = () => {
    const [number, setNumber] = useState("");
    const [otp, setOtp] = useState("");
    const [error, setError] = useState("");
    const [flag, setFlag] = useState(false);
    const[confirmObj,setConfirmObj]=useState("");
    const { setUpRecaptcha } =useUserAuth();
    const navigate = useNavigate();

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
    <div>
        <section>
            <h2>Firebase Phone Auth</h2>
            {error && {error}}
        </section>
        <section>
            <form onSubmit={getOtp}>
                <PhoneInput
                defaultCountry='IN'
                value={number}
                onChange={setNumber}
                placeholder="Enter Phone Number"
                />
                <div id="recaptcha-container"/>

                <button type="submit">Send OTP</button>
                
            </form>

            <form onSubmit={verifyOtp}>
                <input
                placeholder='Enter OTP'
                onChange={(e) => setOtp(e.target.value)}
                type="text" />
                <button type='submit'>Verify OTP</button>
            </form>
        </section>
    </div>
  );
};

export default PhoneSignUp