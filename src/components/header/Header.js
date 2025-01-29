import React from 'react'
import Nav from './Nav/Nav'
import Topbar from './Topbar/Topbar'

export default function Header () {
  return (
    <div className='header'>
        <Nav/>
        <Topbar />
    </div>
  )
}
