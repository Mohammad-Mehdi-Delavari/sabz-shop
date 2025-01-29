import React from "react";
import "./BannerTree.css";

export default function BannerTree({ infos }) {
  return (
    <>
      <div className="BannerTree__container">
        {infos.map((val) => (
          <div key={val.id} className="BannerTree__img-section">
            <img className="BannerTree__img" src={val.img} alt={val.title} />
              <div className="BannerTree__img-hover">
                <button className="BannerTree__img-hover-btn btn btn-success">
                  مشاهده کنید
                </button>
              </div>
              <div className="BannerTree__title"><p className="BannerTree__title-text">{val.title}</p></div>
            </div>
        ))}
      </div>
    </>
  );
}
