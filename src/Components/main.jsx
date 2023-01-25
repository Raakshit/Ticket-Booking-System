import React from "react";
import "./main.css";
import Login from "./Login";
import therater from "./images/therater.jpg";
import MUJDome from "./images/MUJDome.png";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import ET1 from "./images/ET1.JPG";
import ET2 from "./images/ET2.JPG";
import ET3 from "./images/ET3.JPG";
import ET5 from "./images/ET5.JPG";
import ET6 from "./images/ET6.JPG";
import ET7 from "./images/ET7.JPG";
import ET8 from "./images/ET8.JPG";
import ETGate from "./images/ETGate.JPG";
import { useStateValue } from "../Context/StateProvider";
import { actionType } from "../Context/reducer";

const Main = () => {
  const [{ showlogin }, dispatch] = useStateValue();

  const loginshow = () => {
    dispatch({
      type: actionType.SET_SHOW_LOGIN,
      showlogin: !showlogin,
    });
  };

  return (
    <div className="main">
      <div className={`${showlogin ? "main_blur" : ""}`}>
      <section className="main_banner_card">
        <div className="banner_card">
          <img src={ETGate} alt="" />
        </div>
      </section>
      <section className="main_info">
        <div className="main_info_upper">
          <div className="image_card">
            <img src={MUJDome} alt="" />
          </div>
          <div className="details_card">
            <h1>Detination Manipal University</h1>
            <div>
              <button onClick={loginshow}>BOOK TICKETS</button>
            </div>
          </div>
        </div>

        <div className="main_about_lower">
          <div className="gallery_section">
            <h1>PHOTOS</h1>
            <Splide
              options={{
                perPage: 3,
                gap: "0.2rem",
                arrows: false,
                pagination: false,
                drag: "free",
              }}
            >
              <SplideSlide>
                <div className="gallery_card">
                  <img src={ET1} alt="" />
                </div>
              </SplideSlide>
              <SplideSlide>
                <div className="gallery_card">
                  <img src={ET2} alt="" />
                </div>
              </SplideSlide>
              <SplideSlide>
                <div className="gallery_card">
                  <img src={ET3} alt="" />
                </div>
              </SplideSlide>
              <SplideSlide>
                <div className="gallery_card">
                  <img src={ET5} alt="" />
                </div>
              </SplideSlide>
              <SplideSlide>
                <div className="gallery_card">
                  <img src={ET6} alt="" />
                </div>
              </SplideSlide>
              <SplideSlide>
                <div className="gallery_card">
                  <img src={ET7} alt="" />
                </div>
              </SplideSlide>
              <SplideSlide>
                <div className="gallery_card">
                  <img src={ET1} alt="" />
                </div>
              </SplideSlide>
            </Splide>
          </div>

          <div className="about_section">
            <h1>Why Manipal University ?</h1>
            <p>
            Did you only hear the excellence of Manipal University Jaipur? At the Experience Theatre, lets visually experience it.
Experience Theater is a result of world-class infrastructure and immersion center where you can see the history, achievements,
activities and all about Manipal University Jaipur in one place.

Are you excited? Just book your ticket for this small show for free and enjoy the amazing Visual experience at the 
Experience Theatre.
            </p>
          </div>
        </div>
      </section>
      </div>
      {showlogin && (
        <div className="loginshow_card">
          <Login/>
        </div>
      )}
    </div>
  );
};

export default Main;
