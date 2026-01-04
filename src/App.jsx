import React from 'react'
import "./App.css"
import Nav from './nav/Nav'
import Header from './header/Header'
import rasmcard from "./assets/Image (5).png"

const App = () => {
  return (
    <div>
      <Nav></Nav>
      <Header></Header>
      <section>
        <div className="cards">
          <div className="card">
            <img src={rasmcard} alt="" />
            <p>Greys Vage</p>
            <button>6 Days Remaining</button>
          </div>
        </div>
      </section>
    </div>
  )
}

export default App
