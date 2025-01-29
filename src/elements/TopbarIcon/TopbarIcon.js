import React from "react";
import "./TopbarIcon.css";
export default function ({ title, icon, link}) {
    return (
        <>
      {link !== undefined ? (
        <a className="nav-item__link d-f" href={link}>
          {element(icon,title)}
        </a>
      ) : element(icon,title) 
      }
    </>
  );
}

const element = (icon,title) => (<span className="topbar-right__section"> {icon} {title} </span>)