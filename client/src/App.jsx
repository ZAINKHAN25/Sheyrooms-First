import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Homescreen from "./screens/Homescreen.jsx";

import Navbar from "./components/Navbar.jsx";
import BookingScreen from './screens/BookingScreen.jsx';

function App() {
  return (
    <div className="App">
      <Navbar />
      {/* <Homescreen /> */}
      <BrowserRouter>
        <Routes>
          <Route path="/home" exact Component={Homescreen} />
          <Route path="/book/:roomid" exact Component={BookingScreen} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;