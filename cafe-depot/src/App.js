import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Landing from "./components/landing/Landing";
import Utensils from "./components/shop/Utensils";
import SignUp from "./components/user/SignUp";
import LogIn from "./components/user/LogIn";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Landing />} />
          <Route exact path="/shop/utensils" element={<Utensils />} />
          <Route exact path="/sign-up" element={<SignUp />} />
          <Route exact path="/log-in" element={<LogIn />} />
          {/* <Route exact path="/shop/cups" element={<Cups />} /> */}
          {/* <Route exact path="/shop/plates" element={<Plates />} /> */}
          {/* <Route exact path="/shop//espresso-machines" element={<EspressoMachines />} /> */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
