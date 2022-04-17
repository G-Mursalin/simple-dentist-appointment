// React-ReactDOM
import React from "react";
// Routing
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
const Header = () => {
  return (
    <React.Fragment>
      <nav className="px-8 py-5 flex items-center justify-between flex-wrap  bg-indigo-500  fixed w-full z-10 top-0">
        <div className="flex items-center flex-shrink-0 text-white mr-6">
          <Link
            className="text-white no-underline hover:text-white hover:no-underline"
            to="/"
          >
            <div className="text-2xl pl-2 flex content-center">
              <img
                src="https://i.ibb.co/JxmLcJv/header-Icon.png"
                alt="header icon"
                className="w-7 mr-2 rounded"
              />
              <span>Dentcare</span>
            </div>
          </Link>
        </div>

        <div className="block lg:hidden">
          <button
            id="nav-toggle"
            onClick={() =>
              document.getElementById("nav-content").classList.toggle("hidden")
            }
            className="flex items-center px-3 py-2 border rounded text-gray-500 border-gray-600 hover:text-white hover:border-white"
          >
            <svg
              className="fill-current h-3 w-3"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
          </button>
        </div>

        <div
          className="w-full flex-grow lg:flex lg:items-center lg:w-auto hidden lg:block pt-6 lg:pt-0"
          id="nav-content"
        >
          <ul className="list-reset lg:flex justify-end flex-1 items-center">
            <li className="mr-6">
              <NavLink
                to="/home"
                style={({ isActive }) => {
                  return {
                    borderBottom: isActive ? "2px solid black" : "",
                  };
                }}
                className="inline-block px-2 text-lg text-white"
              >
                Home
              </NavLink>
            </li>
            <li className="mr-6">
              <NavLink
                to="/login"
                style={({ isActive }) => {
                  return {
                    borderBottom: isActive ? "2px solid black" : "",
                  };
                }}
                className="inline-block px-2 text-lg text-white"
              >
                Login
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </React.Fragment>
  );
};

export default Header;
