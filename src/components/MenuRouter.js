import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import MenuNav from './MenuNav'
import MenuItems from './MenuItems'
import menu from './../data/menu'

const MenuRouter = () => (
   <BrowserRouter>
      <>
         <MenuNav />
         <Switch>
            <Route path="/" exact>
               <MenuItems itemList={menu.appetizers} />
            </Route>
            <Route path="/pasta">
               <MenuItems itemList={menu.pasta} />
            </Route>
            <Route path="/entrees">
               <MenuItems itemList={menu.entrees} />
            </Route>
            <Route path="/pizza">
               <MenuItems itemList={menu.pizza} />
            </Route>
            <Route path="/beverages">
               <MenuItems itemList={menu.beverages} />
            </Route>
         </Switch>
      </>
   </BrowserRouter>
)

export default MenuRouter