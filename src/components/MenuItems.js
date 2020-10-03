import React from 'react'

const MenuItems = (props) => {
   return (
      <ul className="menu-items">
         {
            props.itemList.map((item) => (
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

export default MenuItems