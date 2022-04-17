// React-ReactDOM
import React from "react";
// Routing
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <footer className="body-font bg-indigo-500">
      <div className="container px-5 pt-20 pb-0  mx-auto">
        <div className="flex flex-wrap md:text-left text-center order-first justify-between">
          <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2 className="title-font font-medium text-white tracking-widest text-2xl  font-bold mb-3">
              Opening Hours
            </h2>
            <nav className="list-none mb-10">
              <li className="text-white border-b-2 p-1">
                Monday (8:00 - 16:00)
              </li>
              <li className="text-white border-b-2 p-1">
                Tuesday (8:00 - 16:00)
              </li>
              <li className="text-white border-b-2 p-1">
                Wednesday (12:00 - 20:00)
              </li>
              <li className="text-white border-b-2 p-1">
                Thursday (8:00 - 16:00)
              </li>
              <li className="text-white border-b-2 p-1">
                Friday (8:00 - 16:00)
              </li>
              <li className="text-white border-b-2 p-1">
                Saturday (9:00 - 13:00)
              </li>
            </nav>
          </div>
          <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2 className="title-font font-medium text-white tracking-widest text-2xl  font-bold mb-3">
              Drop Your E-mail for Up To Date
            </h2>
            <div className="flex xl:flex-nowrap md:flex-nowrap lg:flex-wrap flex-wrap justify-center items-end md:justify-start">
              <div className="relative w-40 sm:w-auto xl:mr-4 lg:mr-0 sm:mr-4 mr-2">
                <input
                  type="text"
                  placeholder="Your E-mail"
                  id="footer-field"
                  name="footer-field"
                  className="w-full bg-white  rounded border border-gray-300   focus:ring-2 focus:ring-indigo-200 focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
              <button className="lg:mt-2 xl:mt-0 flex-shrink-0 inline-flex text-black bg-white border-0 py-2 px-6  rounded">
                Send
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
