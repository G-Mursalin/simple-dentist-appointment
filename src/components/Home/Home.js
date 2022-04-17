// React-ReactDOM
import React from "react";
// Components
import Hero from "./Hero";
import Services from "./Services";
import Steps from "./Steps";
const Home = () => {
  return (
    <React.Fragment>
      <Hero />
      <Services />
      <Steps />
    </React.Fragment>
  );
};

export default Home;
