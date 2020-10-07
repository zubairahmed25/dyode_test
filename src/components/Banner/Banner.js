import React from "react";
import "./banner.scss";
import BannerImg from "../../assets/images/Hero Image 2.jpg";
const Banner = () => {
  return (
    <section className="banner-section">
      <div className="banner">
        <img className="banner-img" src={BannerImg} alt="banner" />
        <div className="container banner-detail">
          <h3 className="title">Title Goes Here</h3>
          <p className="detail">Tagline will go right here.</p>
          <button className="shop-btn">SHOP NOW</button>
        </div>
      </div>
    </section>
  );
};
export default Banner;
