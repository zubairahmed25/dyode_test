import React from "react";
import "./slider.scss";
import SliderImg from "../../assets/images/Hero Image 1.jpg";
const Slider = () => {
  return (
    <section className="slider-section">
      <div className="slider">
        <img className="slider-img"  src={SliderImg} alt="slider" />
        <div className="container slider-detail">
          <h3 className="title">Title Goes Here</h3>
          <p className="detail">Tagline will go right here.</p>
          <button className="shop-btn">SHOP NOW</button>
        </div>
      </div>
      <ul className="slider-icons">
        <li className="active"></li>
        <li></li>
        <li></li>
        <li></li>
      </ul>
    </section>
  );
};
export default Slider;
