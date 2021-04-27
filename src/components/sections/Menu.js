import React, { useState, useEffect } from 'react'

import firebase from './../../firebase/firebase'

// Filter dishes by category
const filterMenu = (menu, filterBy) => {
   if (Object.keys(menu).length === 0) {
      return []
   }

   return menu[filterBy]
}

const Menu = () => {
   const [menu, setMenu] = useState({})
   const [activeBtn, setActiveBtn] = useState(0)
   const [selectedCategory, setSelectedCategory] = useState('appetizers')

   // Get menu from firebase and set state
   useEffect(() => {
      let data = {}

      firebase.firestore().collection('menu').get().then((snapshot) => {
         snapshot.docs.forEach((doc) => {
            data = { ...data, ...doc.data() }
         })

         setMenu(data)
      })
   }, [])

   // Set active button
   const handleActiveBtn = (btnIndex) => {
      setActiveBtn(btnIndex)
   }

   // Change selected category
   const handleCategory = (navItem) => {
      setSelectedCategory(navItem)
   }

   // Get available menu categories
   const menuCategories = Object.keys(menu)
   // Get dishes to render
   const filteredItems = filterMenu(menu, selectedCategory)

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
                        className={index === activeBtn ? 'active' : ''}
                        onClick={() => { handleActiveBtn(index); handleCategory(category) }}
                     >
                        {category}
                     </button>
                  ))
               }
            </nav>
            <ul className="menu-items">
               {
                  filteredItems.map((item, index) => (
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

export default Menu