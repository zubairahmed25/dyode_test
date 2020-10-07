import React, { useState } from "react";
import "./new-arrivials.scss";
import ArrowLeft from "../../assets/images/Arrow Left.png";
import ArrowRight from "../../assets/images/Arrow Right.png";

const NewArrivials = () => {
  const [products, setProducts] = useState([
    {
      id: 1,
      imgSrc: "Product Image 1",
      title: "Product Title",
      detail: "Women's T-Shirt",
      price: 11.99
    },
    {
      id: 2,
      imgSrc: "Product Image 1",
      title: "Product Title",
      detail: "Women's T-Shirt",
      price: 11.99
    },
    {
      id: 3,
      imgSrc: "Product Image 1",
      title: "Product Title",
      detail: "Women's T-Shirt",
      price: 11.99
    },
    {
      id: 4,
      imgSrc: "Product Image 1",
      title: "Product Title",
      detail: "Women's T-Shirt",
      price: 11.99
    }
  ]);
  return (
    <section className="new-arrivials-section">
      <h2>New Arrivials</h2>
      <div className="container">
        <button className="arrow-left">
          <img src={ArrowLeft} alt="left arrow" />
        </button>
        <button className="arrow-right">
          <img src={ArrowRight} alt="right arrow" />
        </button>
        <ul className="products">
          {products.map(p => (
            <li className="product-item" key={p.id}>
              <img src={`/assets/images/${p.imgSrc}.jpg`} alt="product" />
              <div className="more-info">
                <p className="title">{p.title}</p>
                <p className="detail">{p.detail}</p>
                <p className="price">${p.price}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};
export default NewArrivials;
