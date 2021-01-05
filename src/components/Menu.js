import React from 'react'
import MenuRouter from './MenuRouter'

const Menu = () => (
   <section id="menu" className="menu">
      <div className="container">
         <header className="head-white">
            <h3>Choose & Taste</h3>
            <h2>Restaurant Menu</h2>
         </header>
         <MenuRouter />
      </div>
   </section>
)

export default Menu