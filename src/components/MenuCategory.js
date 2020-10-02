import React from 'react'

const MenuCategory = (props) => {
   return (
      <ul className="menu-category">
         {
            props.menuList.map((item) => (
               <li className="item">
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
   )
}

export default MenuCategory