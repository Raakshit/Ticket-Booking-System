import React,{useRef} from "react";
import QRCode from "qrcode.react";
import jsPDF from "jspdf";
import Loginback from "./images/Loginback.JPG"
import { useStateValue } from "../Context/StateProvider";
import "./Ticket.css";

const Ticket = () => {
  const [{uniqueID,morningShow,eveningShow,username,bookDate}, dispatch] = useStateValue();
  // const [Month, setMonth] = useState("");

  const printableAreaRef = useRef(null);

  

  const dayarr = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const montharr = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUNE', 'JULY', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'];

  const date = bookDate.getDate();
  const month = bookDate.getMonth();
  const day = bookDate.getDay();

  const handlePrintClick = () => {
    printableAreaRef.current.style.display = "block";
    window.print();
    printableAreaRef.current.style.display = "none";
  };

  const htmlString1 = `<Name>${username} </Name>`;
  const htmlString2 = `<EmpId>${uniqueID} </EmpId>`;
  const htmlString3 = `<Date>${date} </Date>`;
  const htmlString4 = htmlString1 + "\n" + htmlString2 + "\n" +htmlString3 ;


  return (
    <div>
      
      {morningShow === true ?
      <>
      <div className="ticket_main"  id="printable-area" ref={printableAreaRef}>
      <div class="ticket">
        <div class="left">
          <div class="image">
            <p class="admit-one">
              <span>ADMIT ONE</span>
              <span>ADMIT ONE</span>
              <span>ADMIT ONE</span>
            </p>
            
            <img src={Loginback} alt="" />
            <div class="ticket-number">
              {/* <p>#20030220</p> */}
              
            </div>
          </div>
          <div class="ticket-info">
            <p class="date">
              <span>{dayarr[day]}</span>
              <span class="june-29">{date} {montharr[month]}</span>
              <span>2023</span>
            </p>
            <div class="show-name">
              <h1>
                {username}
              </h1>
              <h1><span style={{color: "red"}}>#{uniqueID}</span></h1>
            </div>
            <div class="time">
              <p>
                11:00 AM <span>TO</span> 12:00 NOON
              </p>
              <p>
                REACH <span>@</span> 10:50 AM
              </p>
            </div>
            <p class="location">
              <span>Manipal University Jaipur</span>
              <span class="separator">
                <i class="far fa-smile"></i>
              </span>
              <span></span>
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
              <h1>{username}</h1>
            </div>
            <div class="time">
            <p>
                11:00 AM <span>TO</span> 12:00 NOON
              </p>
              <p>
                REACH <span>@</span> 10:50 AM
              </p>
            </div>
            <div class="barcode">
            <QRCode value={htmlString4} />
			</div>
            <p class="ticket-number"></p>
          </div>
        </div>
      </div>
    </div>

      </> :
      <>

      </>}
      {eveningShow === true ? 
      <>
              <div className="ticket_main">
      <div class="ticket">
        <div class="left">
          <div class="image">
            <p class="admit-one">
              <span>ADMIT ONE</span>
              <span>ADMIT ONE</span>
              <span>ADMIT ONE</span>
            </p>
            <img src={Loginback} alt="" />
            <div class="ticket-number">
              {/* <p>#20030220</p> */}
            </div>
          </div>
          <div class="ticket-info">
            <p class="date">
              <span>{dayarr[day]}</span>
              <span class="june-29">{date} {montharr[month]}</span>
              <span>2023</span>
            </p>
            <div class="show-name">
              <h1>
                {username}
              </h1>
              <h1><span style={{color: "red"}}>{uniqueID}</span></h1>
            </div>
            <div class="time">
              <p>
                3:00 PM <span>TO</span> 4:00 PM
              </p>
              <p>
                REACH <span>@</span> 2:50 PM
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
                3:00 PM <span>TO</span> 4:00 PM
              </p>
              <p>
                REACH <span>@</span> 2:50 PM
              </p>
            </div>
            <div class="barcode">
            <QRCode value={htmlString4} />
			</div>
            <p class="ticket-number">#20030220</p>
          </div>
        </div>
      </div>
    </div>
      </> :
      <></>}
      <div className="download_button">
      <button onClick={handlePrintClick} className="button_download">Print</button>
      </div>
      
    </div>
    
  );
};

export default Ticket;