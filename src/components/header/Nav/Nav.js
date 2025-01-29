import React from "react";
import NavIcons from "../../../elements/NavIcons/NavIcons";
import NavItems from "../../../elements/NavItems/NavItems";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import "./Nav.css";

export default function Nav() {
  const icons = [
    { id: 1, link: "#", icon: <FaTwitter className="nav-icon__icon" /> },
    { id: 2, link: "#", icon: <FaInstagram className="nav-icon__icon" /> },
    { id: 3, link: "#", icon: <FaFacebookF className="nav-icon__icon" /> },
    { id: 4, link: "#", icon: <FaYoutube className="nav-icon__icon" /> },
  ];
  const navItems = [
    { id: 1, link: "/shop", title: "فروشگاه" },
    { id: 2, link: "#", title: "بلاگ" },
    { id: 3, link: "#", title: "برند ها" },
    { id: 4, link: "#", title: "مطالب کاربران" },
  ];
  return (
    <>
      <div className="nav__container">
        <div className="nav__top-bar">
          <div className="nav__right-section">
            <div className="nav__icons-container">
              {icons.map((val) => (
                <NavIcons key={val.id} {...val} />
              ))}
            </div>
          </div>
          <div className="nav__left-section">
            <div className="nav__items-container">
              {navItems.map((val) => (
                <NavItems key={val.id} {...val} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
