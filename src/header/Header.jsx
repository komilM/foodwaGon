import React from 'react'
import "./Header.css"

const Header = () => {
  return (
    <div className='header'>
      <div className="header-texts">
        <h1>Are you starving?</h1>
        <p>Within a few clicks, find meals that are accessible near you</p>
        <div className="register-part">
            <div className="register-btns">
                <button></button>
                <button></button>
            </div>
            <div className="inputs">
                <input type="text" placeholder='Enter Your Address' />
                <button></button>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Header
