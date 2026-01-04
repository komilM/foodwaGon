import React from 'react'
import "./App.css"
import Nav from './nav/Nav'
import Header from './header/Header'
import rasmcard from "./assets/Image (5).png"
import rasmcard1 from "./assets/Image (6).png"
import rasmcard2 from "./assets/Image (7).png"
import rasmcard3 from "./assets/Image (8).png"

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
          <div className="card">
            <img src={rasmcard1} alt="" />
            <p>Greys Vage</p>
            <button>6 Days Remaining</button>
          </div>
          <div className="card">
            <img src={rasmcard2} alt="" />
            <p>Greys Vage</p>
            <button>6 Days Remaining</button>
          </div>
          <div className="card">
            <img src={rasmcard3} alt="" />
            <p>Greys Vage</p>
            <button>6 Days Remaining</button>
          </div>  
        </div>
      </section>
      <main>
        <h1>How does it work</h1>
      </main>
    </div>
  )
}

export default App
