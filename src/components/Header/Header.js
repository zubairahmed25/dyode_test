import React from "react";
import MenuIcon from "../../assets/images/Menu.svg";
import Logo from "../../assets/images/Logo.png";
import ShoppingIcon from "../../assets/images/shopping.png";
import "./header.scss";
export const Header = () => {
  return (
    <section className="header-section">
      <div className="announcement-bar">
        FREE SHIPPING ON ALL ORDERS OVER $75
      </div>
      <header className="header">
        <div className="container">
          <div className="menu">
            <img className="menu-img" src={MenuIcon} alt="menu-icon" />
          </div>
          <div className="logo">
            <img className="logo-img" src={Logo} alt="logo-icon" />
          </div>
          <ul className="links">
            <li className="link">
              <a href="#">Women</a>
            </li>
            <li className="link">
              <a href="#">Men</a>
            </li>
            <li className="link">
              <a href="#">Accessories</a>
            </li>
            <li className="link">
              <a href="#">Sale</a>
            </li>
          </ul>
          <div className="shopping">
            <img className="shopping-icon" src={ShoppingIcon} alt="shopping" />
          </div>
        </div>
      </header>
    </section>
  );
};
