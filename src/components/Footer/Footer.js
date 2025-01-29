import React from "react";
import "./Footer.css";
import { AiFillTwitterCircle } from "react-icons/ai";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaTelegram } from "react-icons/fa";
export default function Footer() {
  const icons = [
    { id: 1, icon: <AiFillTwitterCircle className="Footer__icon" />, link: "#" },
    { id: 2, icon: <FaSquareInstagram className="Footer__icon" />, link: "#" },
    { id: 3, icon: <FaTelegram className="Footer__icon" />, link: "#" },
  ];
  return (
    <div className="Footer__container">
      <img
        src="https://demo.i-wp.ir/woodland/sabzine/wp-content/uploads/2022/01/items.png"
        alt="footer"
        className="Footer__bg-img"
      />
      <div className="Footer__text-container">
        <p className="Footer__text"><p>تازه‌ترین و زیباترین گل‌ها و گیاهان، لبخند را روی لب‌های عزیزانتون بیارید.</p>
        ما تلاش می کنیم تا شما بدون نیاز به وقت گذاشتن و بیرون اومدن توی ترافیک شهری و از هرکجای این کره خاکی بتونید تازه‌ترین گل‌ها را در شهر تهران هدیه دهید و یا در محل خودتون تحویل بگیرید.</p>
        <p className="Footer__phon">تلفن : 021-12345678</p>
        <div className="Footer__icon-section">
          {icons.map((val) => (
            <a key={val.id} href={val.link} className="Footer__icon-link">
              {val.icon}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
