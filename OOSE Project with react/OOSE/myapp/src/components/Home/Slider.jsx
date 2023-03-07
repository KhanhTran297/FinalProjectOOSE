import React from "react";
import "../../assets/slider.css";
const Slider = () => {
  return (
    <div id="slider">
      <div className="sliderContent">
        <div className="titleContent">Baby love</div>
        <div className="subtitleContent">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit
          commodi quae in aut nam temporibus eveniet consequatur omnis dolorum
          repellat repudiandae, quibusdam eaque et voluptatum possimus excepturi
          fugiat corporis dolor?
        </div>
        <button className="btnSlider">Get Started</button>
      </div>
      <div className="sliderImg">
        <div className="imgBox">
          <img src="./img/slider.jpg" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Slider;
