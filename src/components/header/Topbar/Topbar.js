import React from "react";
import "./Topbar.css";
import { FaRegUser } from "react-icons/fa";
import { RiEBike2Fill } from "react-icons/ri";
import { IoIosSearch } from "react-icons/io";
import { CiHeart } from "react-icons/ci";
import { TbArrowsShuffle } from "react-icons/tb";
import { AiOutlineShoppingCart } from "react-icons/ai";
import TopbarIcon from "../../../elements/TopbarIcon/TopbarIcon";
import MenuItems from "../../../elements/MenuItems/MenuItems";

export default function Topbar() {
  const rightItems = [
    {
      id: 1,
      title: "ورود/ثبت نام",
      icon: <FaRegUser className="topbar__right-icon" />,
      link: "#",
    },
    {
      id: 2,
      title: "ارسال روز",
      icon: <RiEBike2Fill className="topbar__right-icon" />,
    },
  ];
  const leftItems = [
    {
      id: 1,
      icon: <IoIosSearch className="topbar__right-icon p-l" />,
      link: "#",
    },
    {
      id: 2,
      icon: <TbArrowsShuffle className="topbar__right-icon p-l" />,
      link: "#",
    },
    {
      id: 3,
      icon: <CiHeart className="topbar__right-icon p-l" />,
      link: "#",
    },
    {
      id: 4,
      title: "0تومان",
      icon: <AiOutlineShoppingCart className="topbar__right-icon p-l" />,
      link: "#",
    },
  ];
  const menuRightItems = [
    { id: 1, title: "صفحه اصلی", link: "/" },
    {
      id: 2,
      title: "فروشگاه",
      link: "/shop",
      dropItems: [
        { id: 1, title: "سبد خرید", link: "#" },
        { id: 2, title: "حساب کار بری", link: "#" },
        { id: 3, title: "پرداخت", link: "#" },
      ],
    },
    { id: 3, title: "حساب کاربری", link: "#" },
    { id: 4, title: "بلاگ", link: "#" },
  ];
  const menuLeftItems = [
    {
      id: 1,
      title: "زنانه",
      link: "#",
      dropItems: [
        { id: 1, title: "مجلسی", link: "#" },
        { id: 2, title: "اکسسوری", link: "#" },
        { id: 3, title: "کیف و کفش", link: "#" },
      ],
    },
    { id: 2, title: "مردانه", link: "#" },
    { id: 3, title: "بچگانه", link: "#" },
    { id: 4, title: "جواهرات", link: "#" },
    { id: 5, title: "اکسسوری", link: "#" },
  ];
  return (
    <>
      <div className="topbar__container">
        <div className="topbar__section">
          <div className="topbar__right-section">
            {rightItems.map((val) => (
              <TopbarIcon key={val.id} {...val} />
            ))}
          </div>
          <div className="topbar__center-section">
            <a className="topbar__center-section-link" href="#">
              سبز شاپ
            </a>
            <div className="topbar__center-section-link-after">
            </div>
          </div>
          <div className="topbar__left-section">
            {leftItems.map((val) => (
              <TopbarIcon key={val.id} {...val} />
            ))}
          </div>
        </div>
      </div>
      <div className="topbar__menu-section">
        <div className="topbar__menu-right-section">
          {menuRightItems.map((val) => (
            <MenuItems key={val.id} {...val} />
          ))}
        </div>
        <div className="topbar__menu-left-section">
          {menuLeftItems.map((val) => (
            <MenuItems key={val.id} {...val} />
          ))}
        </div>
      </div>
    </>
  );
}
