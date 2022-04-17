// React-ReactDOM
import React from "react";
// Routing
import { Routes, Route } from "react-router-dom";
// Components
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Login from "./components/Authentication/Login/Login";
function App() {
  return (
    <React.Fragment>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </React.Fragment>
  );
}

export default App;
