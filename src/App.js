// React-ReactDOM
import React from "react";
// Routing
import { Routes, Route } from "react-router-dom";
// Components
import Header from "./components/Shared/Header/Header";
import Home from "./components/Home/Home";
import Login from "./components/Authentication/Login/Login";
import Appointment from "./components/Appointment/Appointment";
import Footer from "./components/Shared/Footer/Footer";
import Register from "./components/Authentication/Register/Register";
function App() {
  return (
    <React.Fragment>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/appointment" element={<Appointment />} />
        <Route path="/register" element={<Register />} />
      </Routes>
      <Footer />
    </React.Fragment>
  );
}

export default App;
