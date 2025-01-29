import React from "react";
import "./Product.css"

export default function ({ showItems , height, border }) {
  const showDiscountNumber = (discount) => {
    if (discount) {
      return (
        <span className="Popular__item-discount">
          {" "}
          {discount}%<span>-</span>
        </span>
      );
    }
  };
  const discountNumber = (price, discount) => {
    if (discount) {
      return Math.floor(price / (100 - discount)) * 100;
    }
  };

  return (
    <>
      {showItems.map((val) => (
        <a
          key={val.id}
          className="Popular__item-container-link"
          href={val.link}
          style={{height:`${height}rem`,borderRadius:border}}
        >
          {showDiscountNumber(val.discount)}
          <div className="Popular__item-container">
            <div className="Popular__item-img-section">
              <img
                className="Popular__item-img"
                src={val.img}
                alt={val.title}
              />
            </div>
            <h3 className="Popular__item-title">{val.title}</h3>
            <div className="Popular__item-prices-section">
              <del className="Popular__item-price-discount">
                {discountNumber(val.price, val.discount)}
              </del>
              <span className="Popular__item-price">{val.price}تومان</span>
            </div>
          </div>
        </a>
      ))}
    </>
  );
}
