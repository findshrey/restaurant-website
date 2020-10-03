import React from 'react'
import MenuRouter from './MenuRouter'

const Menu = () => (
   <section id="menu">
      <div className="container">
         <header className="head-light">
            <h4>Choose & Taste</h4>
            <h3>Restaurant Menu</h3>
         </header>
         <MenuRouter />
      </div>
   </section>
)

export default Menu