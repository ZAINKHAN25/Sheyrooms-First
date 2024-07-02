import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Homescreen from "./screens/Homescreen.jsx";

import Navbar from "./components/Navbar.jsx";

function App() {
  return (
    <div className="App">
      <Navbar />
      {/* <Homescreen /> */}
      <BrowserRouter>
        <Routes>
          <Route path="/home" exact Component={Homescreen} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;