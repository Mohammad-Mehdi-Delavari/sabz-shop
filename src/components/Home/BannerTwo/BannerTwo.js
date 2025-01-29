import React from "react";
import "./BannerTwo.css";
export default function BannerTwo({ infos }) {

  return (
    <div className="BannerTwo__container">
      {infos.map((val) => (
        <div key={val.id} className="BannerTwo__img-back-ground">
          <img src={val.img} className="BannerTwo__img" />
          <div className="BannerTwo__img-border"></div>
          <div className="BannerTwo__img-text">
            <p className="BannerTwo__img-text-one">حس خوب مراقبت</p>
            <p className="BannerTwo__img-text-two">{val.title}</p>
            <p className="BannerTwo__img-text-tree">از کوچیک تا بزرگ</p>
            <button
              style={{ backgroundColor: val.color, border: "none" }}
              className="btn btn-success BannerTwo__info-btn"
            >
              اطلاعات بیشتر
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
