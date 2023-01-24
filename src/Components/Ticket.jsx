import React from "react";
import { useStateValue } from "../Context/StateProvider";
import "./Ticket.css";

const Ticket = () => {
  const printpdf = () => {
    window.print();
  };
  const [{uniqueID}, dispatch] = useStateValue();

  return (
    <div className="ticket_main">
      <div class="ticket">
        <div class="left">
          <div class="image">
            <p class="admit-one">
              <span>ADMIT ONE</span>
              <span>ADMIT ONE</span>
              <span>ADMIT ONE</span>
            </p>
            <div class="ticket-number">
              <p>#20030220</p>
            </div>
          </div>
          <div class="ticket-info">
            <p class="date">
              <span>TUESDAY</span>
              <span class="june-29">JUNE 29TH</span>
              <span>2021</span>
            </p>
            <div class="show-name">
              <h1>
                Rakshit Agawral
              </h1>
              <h1><span style={{color: "red"}}>{uniqueID}</span></h1>
            </div>
            <div class="time">
              <p>
                8:00 PM <span>TO</span> 11:00 PM
              </p>
              <p>
                DOORS <span>@</span> 7:00 PM
              </p>
            </div>
            <p class="location">
              <span>Manipal University</span>
              <span class="separator">
                <i class="far fa-smile"></i>
              </span>
              <span>Jaipur, Rajasthan</span>
            </p>
          </div>
        </div>
        <div class="right">
          <p class="admit-one">
            <span>ADMIT ONE</span>
            <span>ADMIT ONE</span>
            <span>ADMIT ONE</span>
          </p>
          <div class="right-info-container">
            <div class="show-name">
              <h1>SOUR Prom</h1>
            </div>
            <div class="time">
              <p>
                8:00 PM <span>TO</span> 11:00 PM
              </p>
              <p>
                DOORS <span>@</span> 7:00 PM
              </p>
            </div>
            {/* <div class="barcode">
				<img src="https://external-preview.redd.it/cg8k976AV52mDvDb5jDVJABPrSZ3tpi1aXhPjgcDTbw.png?auto=webp&s=1c205ba303c1fa0370b813ea83b9e1bddb7215eb" alt="QR code">
			</div> */}
            <p class="ticket-number">#20030220</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ticket;
