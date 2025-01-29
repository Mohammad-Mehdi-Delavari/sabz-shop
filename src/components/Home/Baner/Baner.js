import React from "react";
import "./Baner.css"

export default function Baner() {
  return (
    <>
      <div className="baner__container">
        <div className="baner__section-right">
          <div className="baner__img-section">
            <img src="https://demo.i-wp.ir/woodland/sabzine/wp-content/uploads/2022/01/Untitled-2.png" alt="گل" className="baner__img" />
          </div>
        </div>
        <div className="baner__section-left">
          <div className="baner__text-section-one">
            <p className="baner__text-one">چون ز جُست و جوی دل نومید گشتم آمدم </p>
            <p className="baner__text-one"> خفته دیدم دل سِتان با دلسِتان ای عاشقان</p>
            
          </div>
          <div className="baner__text-section-two">
          جذاب‌ترین هدیه را از میان گل و گیاهان سبز شاپ انتخاب کنید
          </div>
          <div className="baner__text-section-two-after"></div>
          <div className="baner__text-section-tree">
          <p className="baner__text-tree">تازه‌ترین و زیباترین گل‌ها و گیاهان، لبخند را روی لب‌های عزیزانتون بیارید.</p>
          <p className="baner__text-tree">ما تلاش می کنیم تا شما بدون نیاز به وقت گذاشتن و بیرون اومدن توی ترافیک شهری و از هرکجای این کره خاکی بتونید تازه‌ترین گل‌ها را در شهر تهران هدیه دهید و یا در محل خودتون تحویل بگیرید.</p>
          </div>
          <div className="baner__btn-section">
            <button className="btn btn-success baner__info-btn">اطلاعات بیشتر</button>
            <button className="btn btn-secondary baner__shop-btn">خرید کنید</button>
          </div>
        </div>
      </div>
    </>
  );
}
