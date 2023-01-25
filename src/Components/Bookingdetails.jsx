import React from "react";
import { useNavigate } from "react-router-dom";
import { actionType } from "../Context/reducer";
import { useStateValue } from "../Context/StateProvider";
import "./Bookingdetail.css";
import { IoIosClose } from "react-icons/io";
import { Link } from "react-router-dom";
import { useState } from "react";

const Bookingdetails = () => {
  const [{ showform,morningSeats,eveningSeats,username,morningShow,eveningShow }, dispatch] = useStateValue();
  const navigate = useNavigate();
 const[name,setName]=useState('');
 const[email, setEmail]=useState('');
 const[empId, setEmpId]=useState(null);
  
 const formshow = () => {
    dispatch({
      type: actionType.SET_SHOW_FORM,
      showform: !showform,
    });
};


  const verifyDetails =(event) =>{
    event.preventDefault();
    if(morningShow === true){
      dispatch({
        type: actionType.SET_MORNING_SEATS,
        morningSeats: morningSeats-1,
      });
      dispatch({
        type: actionType.SET_UNIQUE_ID,
        uniqueID: empId,
      });
      dispatch({
        type: actionType.SET_USER_NAME,
        username: name,
      });
      navigate("/ticket");
      
    }else if(eveningShow === true){
      dispatch({
        type: actionType.SET_EVENING_SEATS,
        eveningSeats: eveningSeats-1,
      });
      dispatch({
        type: actionType.SET_UNIQUE_ID,
        uniqueID: empId,
      });
      dispatch({
        type: actionType.SET_USER_NAME,
        username: name,
      });
      navigate("/ticket");
    }
  }


  return (
    <div className="bookdetails">
      <section className="form_header">
        <div className="close_icon">
          <IoIosClose onClick={formshow} />
        </div>
      </section>
      <section className="booking_form">
        <form onSubmit={verifyDetails} class="card-form">
          <div class="input">
            <input 
            // value={name}
            onChange={(e)=>setName(e.target.value)}
            type="text" class="input-field" required />
            <label class="input-label">Full name</label>
          </div>
          <div class="input">
            <input
            // value={email}
            onChange={(e)=>setEmail(e.target.value)}
            type="email" class="input-field"  required />
            <label class="input-label">Email</label>
          </div>
          <div class="input">
            <input
            // value={empId}
            onChange={(e)=>setEmpId(e.target.value)}
            type="text" class="input-field" required />
            <label class="input-label">Employee Id / Registration No.</label>
          </div>
          <div class="action">
            <button type="submit" class="action-button">Submit</button>
          </div>
        </form>
      </section>
    </div>
  );
};

export default Bookingdetails;
