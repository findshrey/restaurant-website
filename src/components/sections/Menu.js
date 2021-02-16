import React from 'react'

import menu from './../../data/menu'

const menuNav = Object.keys(menu)

const filterDishes = (menu, filterBy) => {
   if (Object.keys(menu).length === 0) {
      return []
   }

   return menu[filterBy]
}

class Menu extends React.Component {
   state = {
      menuCategory: 'appetizers',
      activeBtn: 0
   }

   handleActiveBtn = (btnIndex) => {
      this.setState(() => ({ activeBtn: btnIndex }))
   }

   handleChange = (navItem) => {
      this.setState(() => ({ menuCategory: navItem }))
   }

   render() {
      const renderedItems = filterDishes(menu, this.state.menuCategory)

      return (
         <section id="menu" className="menu section-fade-in">
            <div className="container">
               <header className="head-white">
                  <h3>Choose & Taste</h3>
                  <h2>Restaurant Menu</h2>
               </header>
               <nav className="menu-nav">
                  {
                     menuNav.map((navItem, index) => {
                        return (
                           <button
                              key={index}
                              className={index === this.state.activeBtn ? 'active' : ''}
                              onClick={() => { this.handleActiveBtn(index); this.handleChange(navItem) }}
                           >
                              {navItem}
                           </button>
                        )
                     })
                  }
               </nav>
               <ul className="menu-items">
                  {
                     renderedItems.map((item, index) => (
                        <li className="item" key={index} >
                           <div className="item-title">
                              <span className="item-name">{item.name}</span>
                              <span className="item-price">{item.price}</span>
                           </div>
                           <div className="item-description">
                              {item.description}
                           </div>
                        </li>
                     ))
                  }
               </ul>
            </div>
         </section>
      )
   }
}

export default Menu