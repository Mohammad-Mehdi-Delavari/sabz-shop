import React, { useState } from "react";
import "./MenuItems.css";
import { IoIosArrowDown } from "react-icons/io";
import Dropdown from "react-bootstrap/Dropdown";
import { Collapse } from "react-bootstrap";

export default function MenuItems({ title, link, dropItems }) {
  const [isShow, setIsShow] = useState(false);

  const mouseEnter = () => {
    if (dropItems) {
      setTimeout(() => {
        setIsShow(true);
      }, 500);
    }
  };
  const mouseLeave = () => {
    if (dropItems) {
      setTimeout(() => {
        setIsShow(false);
      }, 500);
    }
  };
  const dropDownMap = (dd) => {
    return dd.map((val) => (
      <Dropdown.Item key={val.id} className="d-rtl" href={val.link}>
        {val.title}
      </Dropdown.Item>
    ));
  };
  const dropDowns = (dd) => {
    if (dd) {
      return (
        <Dropdown show={isShow}>
          <Collapse dimension="width" in={isShow}>
            <Dropdown.Menu
              className="dd"
              onMouseEnter={mouseEnter}
              onMouseLeave={mouseLeave}
            >
              {dropDownMap(dd)}
            </Dropdown.Menu>
          </Collapse>
        </Dropdown>
      );
    }
  };
  return (
    <>
      <li
        className="menu-item__section"
        onMouseEnter={mouseEnter}
        onMouseLeave={mouseLeave}
      >
        <a className="menu-item__link" href={link}>
          {title}
          {dropItems && <IoIosArrowDown />}
        </a>
        {dropDowns(dropItems)}
      </li>
    </>
  );
}
