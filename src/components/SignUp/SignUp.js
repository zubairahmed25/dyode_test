import React, { useState } from "react";
import "./sign-up.scss";

const SignUp = () => {
  return (
    <section className="sign-up-section">
      <div className="container">
        <h2>
          <img src="/assets/images/Email Icon.png" alt="email" />
          <span>Sign up.&amp; stay connected</span>
        </h2>
        <div className="wrapper">
          <p>
            Sign up for the newsletter and get 20% off! Get access to exclusive
            offers and be the first to know when new stuff drops.
          </p>
          <div className="subscription">
            <input className="email-input" placeholder="Your Email Address" />
            <button className="subscribe-btn">Subscribe</button>
          </div>
        </div>
      </div>
    </section>
  );
};
export default SignUp;
