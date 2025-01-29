import React from "react";
import "./NavIcons.css";

export default function NavIcons({ icon, link }) {
  return (
    <>
      <a className="nav-icon__link" href={link}>
        <span className="nav-icon__section">{icon}</span>
      </a>
    </>
  );
}
