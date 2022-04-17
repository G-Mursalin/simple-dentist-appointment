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
import PageNotFound from "./components/PageNotFound/PageNotFound";
import RequireAuth from "./components/Authentication/RequireAuth/RequireAuth";
import Blogs from "./components/Blogs/Blogs";
import About from "./components/About/About";

function App() {
  return (
    <React.Fragment>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route
          path="/appointment"
          element={
            <RequireAuth>
              <Appointment />
            </RequireAuth>
          }
        />
        <Route path="/register" element={<Register />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/about" element={<About />} />
        <Route path="/*" element={<PageNotFound />} />
      </Routes>
      <Footer />
    </React.Fragment>
  );
}

export default App;
