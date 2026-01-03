import React from 'react'
import "./Nav.css"
import logo from "../assets/logo.png"

const Nav = () => {
  return (
    <div>
      <img src={logo} alt="" />
      <div className="nav-menu">
        <div className="lang-box">
          <h1></h1>

          <div className="lang-menu">
            <h1></h1>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Nav
