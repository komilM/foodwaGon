import React from 'react'
import "./Header.css"
import rasmosh from "../assets/Image (4).png"

const Header = () => {
  return (
    <div className='header'>
      <div className="header-texts">
        <h1>Are you starving?</h1>
        <p>Within a few clicks, find meals that are accessible near you</p>
        <div className="register-part">
            <div className="register-btns">
                <button>Delivery</button>
                <button>Pickup</button>
            </div>
            <div className="inputs">
                <input type="text" placeholder='Enter Your Address' />
                <button>Find Food</button>
            </div>
        </div>
      </div>
      <img className='rasmosh' src={rasmosh} alt="" />
    </div>
  )
}

export default Header
