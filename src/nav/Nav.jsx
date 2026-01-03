import React from 'react'
import "./Nav.css"
import logo from "../assets/logo.png"

const Nav = () => {
  return (
    <div className='body'>
      <img src={logo} alt="" />
      <div className="nav-menu">
        <div className="lang-box">
          <h1 className='lang-btn'>English</h1>

          <div className="lang-menu">
            <h1>English</h1>
            <h1>Russia</h1>
            <h1>Uzbek</h1>
          </div>
        </div>
        <h1>Search Food</h1>
        <button></button>
      </div>
    </div>
  )
}

export default Nav
