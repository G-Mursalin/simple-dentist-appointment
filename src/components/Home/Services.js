// React-ReactDOM
import React from "react";
import { useState, useEffect } from "react";
// Components
import Service from "./Service";
const Services = () => {
  const [servicesData, setServicesData] = useState([]);

  //Fetching data from json file
  useEffect(() => {
    fetch("servicesData.json")
      .then((res) => res.json())
      .then((data) => setServicesData(data));
  }, []);

  return (
    <section className="text-gray-600 body-font">
      <h1 className="text-5xl text-center">Services</h1>
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-wrap -m-4">
          {servicesData.map((service) => (
            <Service key={service.id} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
