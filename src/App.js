import './App.css';
import Main from "./Components/main";
import Navbar from './Components/Navbar';
import Booking from './Components/Booking';
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Navbar/>
            <Routes>
              <Route path='/*' element={<Main/>} />
              <Route path='booking' element={<Booking/>} />
              {/* <Route path='login' element={<Login/>} /> */}
            </Routes>
    </div>
  );
}

export default App;
