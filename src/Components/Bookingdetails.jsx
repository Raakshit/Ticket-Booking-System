import React from "react";
import { useNavigate } from "react-router-dom";
import { actionType } from "../Context/reducer";
import { useStateValue } from "../Context/StateProvider";
import "./Bookingdetail.css";
import { IoIosClose } from "react-icons/io";
import { Link } from "react-router-dom";
import { useState } from "react";

const Bookingdetails = ({morningFlag , eveningFlag}) => {
  const [userName, setuserName] = useState("");
  const [userID, setuserID] = useState();
  const [{ showform,morningSeats,eveningSeats,uniqueID }, dispatch] = useStateValue();
  const navigate = useNavigate();

  const formshow = () => {
    dispatch({
      type: actionType.SET_SHOW_FORM,
      showform: !showform,
    });
  };

  const verifyDetails =() =>{
    if(morningFlag === true){
      dispatch({
        type: actionType.SET_MORNING_SEATS,
        morningSeats: morningSeats-1,
      });
      dispatch({
        type: actionType.SET_UNIQUE_ID,
        uniqueID: userID,
      });
      navigate("/ticket");
      
    }else if(eveningFlag === true){
      dispatch({
        type: actionType.SET_EVENING_SEATS,
        eveningSeats: eveningSeats-1,
      });
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
            
            onChange={(e) => setuserName(e.target.value)}
            type="text" class="input-field" required />
            <label class="input-label">Full name</label>
          </div>
          <div class="input">
            <input type="email" class="input-field"  required />
            <label class="input-label">Email</label>
          </div>
          <div class="input">
            <input
            onChange={(e) => setuserID(e.target.value)}
            type="password" class="input-field" required />
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
