import React, { useState } from "react";
import "./instagram-follow.scss";
import ArrowLeft from "../../assets/images/Arrow Left.png";
import ArrowRight from "../../assets/images/Arrow Right.png";

const InstagramFollow = () => {
  const [followers, setProducts] = useState([
    {
      id: 1,
      imgSrc: "Social 1"
    },
    {
      id: 2,
      imgSrc: "Social 2"
    },
    {
      id: 3,
      imgSrc: "Social 3"
    },
    {
      id: 4,
      imgSrc: "Social 4"
    },
    {
      id: 5,
      imgSrc: "Social 5"
    }
  ]);
  return (
    <section className="instagram-follow-section">
      <h2>Follow us on Instagram!</h2>
      <div className="container">
        <ul className="followers">
          {followers.map(p => (
            <li className="item" key={p.id}>
              <img
                className="follower-img"
                src={`/assets/images/${p.imgSrc}.jpg`}
                alt="follower"
              />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};
export default InstagramFollow;
