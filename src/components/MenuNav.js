import React from 'react'
import { NavLink } from 'react-router-dom'

const MenuNav = () => (
   <nav className="menu-nav">
      <NavLink to="/" activeClassName="is-active" exact>Appetizers</NavLink>
      <NavLink to="/pasta" activeClassName="is-active">Pasta</NavLink>
      <NavLink to="/entrees" activeClassName="is-active">Entrees</NavLink>
      <NavLink to="/pizza" activeClassName="is-active">Pizza</NavLink>
      <NavLink to="/beverages" activeClassName="is-active">Beverages</NavLink>
   </nav>
)

export default MenuNav