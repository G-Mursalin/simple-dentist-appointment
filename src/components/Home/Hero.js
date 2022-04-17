// React-ReactDOM
import React from "react";

const Hero = () => {
  return (
    <section className="text-gray-600 body-font">
      <div className="container mx-auto flex px-8 py-24 md:flex-row flex-col items-center  ">
        <div className="lg:max-w-2xl lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
          <img
            className="object-cover object-center rounded"
            alt="hero"
            src="https://i.ibb.co/5KSKYwm/hero-Section.jpg"
          />
        </div>
        <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-indigo-500">
            Bright Your Smile
            <p className="text-gray-900">An Enjoyable Experience</p>
          </h1>
          <p className="mb-8 leading-relaxed">
            Advanced cosmetic dental services to restore your confidence with a
            healthy and beautiful smile.Conduct a compleat dental examination
            ans creat an individualize treatment plan for you.
          </p>
          <div className="flex justify-center">
            <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
