import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import MenuNav from './MenuNav'
import MenuCategory from './MenuCategory'
import menu from './../data/menu'

const MenuRouter = () => (
   <BrowserRouter>
      <>
         <MenuNav />
         <Switch>
            <Route path="/" exact>
               <MenuCategory menuList={menu.appetizers} />
            </Route>
            <Route path="/pasta">
               <MenuCategory menuList={menu.pasta} />
            </Route>
            <Route path="/entrees">
               <MenuCategory menuList={menu.entrees} />
            </Route>
            <Route path="/pizza">
               <MenuCategory menuList={menu.pizza} />
            </Route>
            <Route path="/beverages">
               <MenuCategory menuList={menu.beverages} />
            </Route>
         </Switch>
      </>
   </BrowserRouter>
)

export default MenuRouter