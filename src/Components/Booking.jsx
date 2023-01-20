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

const Booking = () => {

const [{showform} , dispatch] = useStateValue();

  const [morningCount, setmorningCount] = useState(2);
  const [eveningCount, seteveningCount] = useState(2);
  const [mornigTime, setmornigTime] = useState(false);
  const [eveningTime, seteveningTime] = useState(false);
  const [bottomCard, setbottomCard] = useState(false);
  const [date, setdate] = useState(new Date());
//   const [formFlag, setformFlag] = useState(false)

  // useEffect(() => {
  //     setbottomCard(false);
  //   });

  const isdatetoday = (date) => {
    const otherDate = new Date(date);
    const todayDate = new Date();

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

  const book_morning = () => {
    const today = new Date().getHours();

    if (today >= 9 && isdatetoday(date) === true) {
      setmornigTime(true);
      window.alert("Morning show can be booked before 9:00 am only");
    } else {
      if (morningCount === 0) {
        setmorningCount(0);
      }
      const response = window.confirm("Do you want to book a ticket?");
      if (response) {
        formshow(response);
        setmorningCount(morningCount - 1);
      } else setmorningCount(morningCount);
    }
  };

  const book_evening = () => {
    const today = new Date().getHours();

    if (today >= 13 && isdatetoday(date) === true) {
      seteveningTime(true);
      window.alert("Evening show can be booked before 1:00 pm only");
    } else {
      if (eveningCount === 0) {
        seteveningCount(0);
      }
      const response = window.confirm("Do you want to book a ticket?");
      if (response) {
        formshow(response);
        seteveningCount(eveningCount - 1);
      } else seteveningCount(eveningCount);
    }
  };


    const formshow = (res) => {
        setbottomCard(false)
        if(res === true){
            dispatch({
                type: actionType.SET_SHOW_FORM,
                showform: !showform,
            });
        }
    }

//   if(formFlag === true ) {

//   };

  return (
    <div className="booking_container">
      {/* SECTION CALENDER */}
      <section className="upper">
        <Calendar
          direction="vertical"
          minDate={new Date()}
          onChange={setdate}
          value={date}
          className="calendar-custom-class"
        />
      </section>

      <div className="check_button">
        <button onClick={() => setbottomCard(true)}>Check Avability</button>
      </div>

      {/* SECTION TWO */}
      {bottomCard ? (
        <section className="lower">
        {/* ******************************************************************************************* */}

        {/*                       MORNING CARD                  */}
        {morningCount === 0 ? (
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
                <p className="information">{morningCount}</p>
              </div>
              <div className="button_booking_card" onClick={book_morning}>
                <button
                  disabled={
                    morningCount === 0 && mornigTime === true ? true : false
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
        {eveningCount === 0 ? (
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
                <p className="information">{eveningCount}</p>
              </div>
              <div className="button_booking_card" onClick={book_evening}>
                <button
                  disabled={
                    eveningCount === 0 && eveningTime === true ? true : false
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
