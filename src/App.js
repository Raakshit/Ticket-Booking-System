import "./App.css";
import Main from "./Components/main";
import Navbar from "./Components/Navbar";
import Booking from "./Components/Booking";
import PhoneSignUp from "./Components/PhoneSignUp";
import { Route, Routes } from "react-router-dom";
import Ticket from "./Components/Ticket";
// import { UserAuthContextProvider } from "./Context/UserAuthContext";

function App() {
  return (
    <div className="App">
      <Navbar />
        <Routes>
          <Route path="/*" element={<Main />} />
          <Route path="booking" element={<Booking />} />
          <Route path="/phonesignup" element={<PhoneSignUp />} />
          <Route path="/ticket" element={<Ticket/>}/>
        </Routes>
    </div>
  );
}

export default App;