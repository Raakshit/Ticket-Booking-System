import React, { useState } from "react";
import "./Booking.css";
import { GoAlert } from "react-icons/go";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import Morning from "./images/Morning.jpeg";
import Evening from "./images/evening.jpeg";
import { useStateValue } from "../Context/StateProvider";
import { actionType } from "../Context/reducer";
import Bookingdetails from "./Bookingdetails";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Booking = () => {

const [{showform,morningSeats,eveningSeats,morningShow,eveningShow,bookDate} , dispatch] = useStateValue();

  const [mornigTime, setmornigTime] = useState(false);
  const [eveningTime, seteveningTime] = useState(false);
  const [bottomCard, setbottomCard] = useState(false);
  const [date, setdate] = useState(new Date());


  // ******************* ALL REACT CALENDER FUNTIONALITY********************************
  const todayDate = new Date();
  const maxDate = new Date();
  maxDate.setDate(maxDate.getDate() + 40);





// FUNCTION FOR CHECKING IS SELECTED DATE IS TODAYS OR NOT
  const isdatetoday = (date) => {
    const otherDate = new Date(date);
    if (
      otherDate.getDate() === todayDate.getDate() &&
      otherDate.getMonth() === todayDate.getMonth() &&
      otherDate.getYear() === todayDate.getYear()
    ) {
      return true;
    } else {
      return false;
    }
  };




// FUNCTION FOR BOOKIGN SHOW ***************************************************
  const book_morning = () => {
    const today = new Date().getHours();

    if (today >= 9 && isdatetoday(date) === true) {
      setmornigTime(true);
      // window.alert("");
      toast.error('Todays Morning show should be booked before 9:00 am only', {
        position: "top-center",
        autoClose: 4500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        });
    } else {
      
      const response = window.confirm("Do you want to book a ticket?");
      if (response) {
        dispatch({
          type: actionType.SET_MORNING_SHOW,
          morningShow: !morningShow,
        });
        dispatch({
          type: actionType.SET_BOOKING_DATE,
          bookDate: date,
        });
        formshow(response);
        
      } 
    }
  };

  const book_evening = () => {
    const today = new Date().getHours();

    if (today >= 13 && isdatetoday(date) === true) {
      seteveningTime(true);
       // window.alert("");
       toast.error('Todays Evening show can be booked before 1:00 pm only', {
        position: "top-center",
        autoClose: 4500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        });
    } else {
      
      const response = window.confirm("Do you want to book a ticket?");
      if (response) {
        dispatch({
          type: actionType.SET_EVENING_SHOW,
          eveningShow: !eveningShow,
        });
        dispatch({
          type: actionType.SET_BOOKING_DATE,
          bookDate: date,
        });
        formshow(response);
        
      }
    }
  };



  // ***********************  form details function *******************************
    const formshow = (res) => {
        setbottomCard(false)
        if(res === true){
            dispatch({
                type: actionType.SET_SHOW_FORM,
                showform: !showform,
            });
        }
    }


  return (
    <div className="booking_container">
      {/* SECTION CALENDER */}
      <section className="upper">
        <Calendar
          direction="vertical"
          minDate={todayDate}
          maxDate={maxDate}
          onChange={setdate}
          value={date}
          className="custom-calendar"
        />
      </section>

      <div className="check_button">
        <button onClick={() => setbottomCard(true)} className="button_check">Check Avability</button>
      </div>

      {/* SECTION TWO */}
      {bottomCard ? (
        <section className="lower">
        {/* ******************************************************************************************* */}

        {/*                       MORNING CARD                  */}
        {morningSeats === 0 ? (
          <div className="alert_card">
            <h1>
              <GoAlert />
              SHOW ALREADY FULL
            </h1>
          </div>
        ) : (
          <>
            <div className="time_card">
              <div className="image_booking_card">
                <img src={Morning} alt="" />
              </div>
              <div className="card_info">
                <h3>Events Details</h3>
                <p className="info_heading">Timings:-</p>
                <p className="information">11:00am - 12Noon</p>
                <p className="info_heading">Seats Left:-</p>
                <p className="information">{morningSeats}</p>
              </div>
              <div className="button_booking_card" onClick={book_morning}>
              <ToastContainer
position="top-center"
autoClose={5000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="light"
/>
                <button
                  disabled={
                    morningSeats === 0 && mornigTime === true ? true : false
                  }
                  className="booking_button"
                >
                  BOOK NOW
                </button>
              </div>
            </div>
          </>
        )}

        {/* ************************************************************************ */}

        {/*                                EVENING CARD                    */}
        {eveningSeats === 0 ? (
          <div className="alert_card">
            <h1>
              <GoAlert />
              SHOW ALREADY FULL
            </h1>
          </div>
        ) : (
          <>
            <div className="time_card">
              <div className="image_booking_card">
                <img src={Evening} alt="" />
              </div>
              <div className="card_info">
                <h3>Events Details</h3>
                <p className="info_heading">Timings:-</p>
                <p className="information">3:00pm - 4:00pm</p>
                <p className="info_heading">Seats Left:-</p>
                <p className="information">{eveningSeats}</p>
              </div>
              <div className="button_booking_card" onClick={book_evening}>
                <button
                  disabled={
                    eveningSeats === 0 && eveningTime === true ? true : false
                  }
                  className="booking_button"
                >
                  BOOK NOW
                </button>
              </div>
            </div>
          </>
        )}
      </section>
      ) : (
        <></>
      ) }
      {showform && (
        <div className="details_form">
        <Bookingdetails/>
      </div>
      )}
      
      
    </div>
  );
};

export default Booking;
