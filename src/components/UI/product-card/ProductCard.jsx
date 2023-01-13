import React from "react";

import productImg from "../../../assets/images/product_2.1.jpg";

import { Link } from "react-router-dom";

import "../../../styles/product-card.css";

const ProductCard = () => {
  return (
    <div className="product__item">
      <div className="product__img">
        <img src={productImg} alt="product__image" />
      </div>

      <div className="product__content">
        <h5>
          <Link to="">Burger</Link>
        </h5>
        <div>
          <span className="product__price">$24.00</span>
          <button className="addToCart">Add to Cart</button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
