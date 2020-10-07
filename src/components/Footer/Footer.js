import React, { useState } from "react";
import "./footer.scss";

const Footer = () => {
  const [services, setServices] = useState([
    {
      id: 1,
      name: "Customer Service",
      child: [
        {
          id: 1,
          link: "Accessibility"
        },
        {
          id: 2,
          link: "Contact Us"
        },
        {
          id: 3,
          link: "Return Policy"
        },
        {
          id: 4,
          link: "FAQ"
        },
        {
          id: 5,
          link: "Gift Certificates"
        },
        {
          id: 6,
          link: "Wishlist"
        },
        {
          id: 7,
          link: "About Us"
        }
      ]
    },
    {
      id: 2,
      name: "Company",
      child: [
        {
          id: 1,
          link: "About Us"
        },
        {
          id: 2,
          link: "Careers"
        },
        {
          id: 3,
          link: "Press"
        },
        {
          id: 4,
          link: "Affiliates"
        }
      ]
    }
  ]);
  const handleCollapse = service => {
    const list = services.map(s => ({
      ...s,
      isCollapsed: service.id === s.id ? !s.isCollapsed : s.isCollapsed
    }));
    setServices(list);
  };
  return (
    <section className="footer-section">
      <div className="container">
        {services.map(s => (
          <div className="service" key={s.id}>
            <h3 onClick={() => handleCollapse(s)}>{s.name}</h3>
            <ul className={`links ${s.isCollapsed ? "collapsed" : ""}`}>
              {s.child.map(c => (
                <li className="link-li" key={c.id}>
                  <a href="#" className="link">
                    {c.link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
        <div className="space" />
        <div className="social-links">
          <h3>Follow Us</h3>
          <ul className="links">
            <li className="link-li">
              <a href="#">
                <img src="/assets/images/Group 3.png" />
              </a>
            </li>
            <li className="link-li">
              <a href="#">
                <img src="/assets/images/Group 8.png" />
              </a>
            </li>
            <li className="link-li">
              <a href="#">
                <img src="/assets/images/Group 15.png" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};
export default Footer;
