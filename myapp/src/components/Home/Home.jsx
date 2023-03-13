import React from "react";
import Features from "./Features";
import Header from "./Header";
import NewestUpdate from "./NewestUpdate";
import Question from "./Question";
import Slider from "./Slider";

const Home = () => {
  return (
    <div>
      <Slider></Slider>
      <Features></Features>
      <NewestUpdate></NewestUpdate>
      <Question></Question>
    </div>
  );
};

export default Home;
