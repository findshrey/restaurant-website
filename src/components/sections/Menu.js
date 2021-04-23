import React from 'react'

import firebase from './../../firebase/firebase'

// Filter dishes by category
const filterMenu = (menu, filterBy) => {
   if (Object.keys(menu).length === 0) {
      return []
   }

   return menu[filterBy]
}

class Menu extends React.Component {
   state = {
      menu: {},
      activeBtn: 0,
      selectedCategory: 'appetizers'
   }

   // Get menu from firebase and set state
   componentDidMount() {
      let data = {}

      firebase.firestore().collection('menu').get().then((snapshot) => {
         snapshot.docs.forEach((doc) => {
            data = { ...data, ...doc.data() }
         })

         this.setState(() => ({ menu: data }))
      })
   }

   // Set active button
   handleActiveBtn = (btnIndex) => {
      this.setState(() => ({ activeBtn: btnIndex }))
   }

   // Change selected category
   handleCategory = (navItem) => {
      this.setState(() => ({ selectedCategory: navItem }))
   }

   render() {
      // Get available menu categories
      const menuCategories = Object.keys(this.state.menu)
      // Get dishes to render
      const renderedItems = filterMenu(this.state.menu, this.state.selectedCategory)

      return (
         <section id="menu" className="menu section-fade-in">
            <div className="container">
               <header className="head-white">
                  <h3>Choose & Taste</h3>
                  <h2>Restaurant Menu</h2>
               </header>
               <nav className="menu-nav">
                  {
                     menuCategories.map((category, index) => (
                        <button
                           key={index}
                           className={index === this.state.activeBtn ? 'active' : ''}
                           onClick={() => { this.handleActiveBtn(index); this.handleCategory(category) }}
                        >
                           {category}
                        </button>
                     ))
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