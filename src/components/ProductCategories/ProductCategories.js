import React, { useState } from "react";
import "./product-categories.scss";
const ProductCategories = () => {
  const [products, setProducts] = useState([
    {
      id: 1,
      imgSrc: "Womens Image",
      name: "Women"
    },
    {
      id: 2,
      imgSrc: "Mens Image",
      name: "Men"
    },
    {
      id: 3,
      imgSrc: "Accessories Image",
      name: "Accessories"
    }
  ]);
  return (
    <section className="product-categories-section">
      <div className="container">
        <ul className="product-catogories">
          {products.map(p => (
            <li className="product-item" key={p.id}>
              <img src={`/assets/images/${p.imgSrc}.jpg`} alt="product" />
              <button className="product-btn">{p.name}</button>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};
export default ProductCategories;
