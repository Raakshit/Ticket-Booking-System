import "./App.css";
import Main from "./Components/main";
import Navbar from "./Components/Navbar";
import Booking from "./Components/Booking";
import PhoneSignUp from "./Components/PhoneSignUp";
import { Route, Routes } from "react-router-dom";
import ProtectedRoute from "./Components/ProtectedRoute";
import Ticket from "./Components/Ticket";
import { UserAuthContextProvider } from "./Context/UserAuthContext";

function App() {
  return (
    <div className="App">
      <Navbar />
      <UserAuthContextProvider>
        <Routes>
          <Route path="/*" element={<Main />} />
          <Route path="booking" element={<ProtectedRoute>
            <Booking />
          </ProtectedRoute>} />
          <Route path="/phonesignup" element={<PhoneSignUp />} />
          <Route path="/ticket" element={<Ticket/>}/>
        </Routes>
      </UserAuthContextProvider>
    </div>
  );
}

export default App;