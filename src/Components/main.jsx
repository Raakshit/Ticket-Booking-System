import React from "react";
import "./main.css";
import Login from "./Login";
import therater from "./images/therater.jpg";
import Dome from "./images/Dome.jpg";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import { Link } from "react-router-dom";
import G1 from "./images/G1.jpg";
import G2 from "./images/G2.jpg";
import G3 from "./images/G3.jpg";
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
      <section className="main_banner_card">
        <div className="banner_card">
          <img src={therater} alt="" />
        </div>
      </section>
      <section className="main_info">
        <div className="main_info_upper">
          <div className="image_card">
            <img src={Dome} alt="" />
          </div>
          <div className="details_card">
            <h1>Detination Manipal University</h1>
            <div>
              <Link to={"/booking"}>
              <button onClick={loginshow}>BOOK TICKETS</button>
              </Link>
            </div>
          </div>
        </div>

        <div className="main_about_lower">
          <div className="gallery_section">
            <h1>EVENT PHOTOS</h1>
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
                  <img src={G1} alt="" />
                </div>
              </SplideSlide>
              <SplideSlide>
                <div className="gallery_card">
                  <img src={G2} alt="" />
                </div>
              </SplideSlide>
              <SplideSlide>
                <div className="gallery_card">
                  <img src={G3} alt="" />
                </div>
              </SplideSlide>
              <SplideSlide>
                <div className="gallery_card">
                  <img src={G1} alt="" />
                </div>
              </SplideSlide>
              <SplideSlide>
                <div className="gallery_card">
                  <img src={G2} alt="" />
                </div>
              </SplideSlide>
              <SplideSlide>
                <div className="gallery_card">
                  <img src={G3} alt="" />
                </div>
              </SplideSlide>
              <SplideSlide>
                <div className="gallery_card">
                  <img src={G1} alt="" />
                </div>
              </SplideSlide>
            </Splide>
          </div>

          <div className="about_section">
            <h1>Why Manipal University ?</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Reprehenderit eaque vero reiciendis placeat qui minima aut
              quaerat, distinctio consequuntur ex dicta ipsum aspernatur odit
              enim ad. Ex nam, ea cum natus quidem modi incidunt id dolorum,
              rerum molestiae ut? Culpa magni pariatur reprehenderit ut iste
              repudiandae, nisi ipsa. Fugiat, nam.
            </p>
          </div>
        </div>
      </section>
      {showlogin && (
        <Login/>
      )}
    </div>
  );
};

export default Main;
