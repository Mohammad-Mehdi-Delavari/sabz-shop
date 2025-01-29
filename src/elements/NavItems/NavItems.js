import React from 'react'
import "./NavItems.css"

export default function NavItems({link,title}) {
  return (
    <>
        <a className="nav-item__link" href={link}>
        <span className="nav-item__section">{title} </span>
      </a>
    </>
  )
}
