import React, { useState, useEffect } from 'react'
import * as FaIcons from 'react-icons/fa'

import IconLaCasetta from './icons/IconLaCasetta'

const Header = () => {
   const [sideDrawer, setSideDrawer] = useState(false)
   const [headerClass, setHeaderClass] = useState('main-head')

   // Listen for scroll
   useEffect(() => {
      window.addEventListener('scroll', handleHeaderOnScroll);
   }, [])

   // Set background-color on scroll
   const handleHeaderOnScroll = () => {
      if (window.pageYOffset > 75) {
         setHeaderClass('main-head scrolled')
      } else {
         setHeaderClass('main-head')
      }
   }

   // Toggle sideDrawer menu
   const handleSideDrawer = () => {
      setSideDrawer((prevDrawerState) => !prevDrawerState)
   }

   // Remove backdrop and hide sideDrawer
   const handleBackdrop = () => {
      setSideDrawer(false)
   }

   const navClass = sideDrawer ? "navigation side-drawer" : "navigation"
   const backdropClass = sideDrawer ? "backdrop" : ""

   const navOptions = ['home', 'about', 'menu', 'gallery', 'reservation']

   return (
      <header className={headerClass}>
         <div className="container">
            <div className="logo">
               <IconLaCasetta />
            </div>
            <nav className={navClass}>
               <ul>
                  {
                     navOptions.map((option, index) => (
                        <li key={index}>
                           <a href={`#${option}`} className="nav-link" onClick={handleBackdrop}>
                              {option}
                           </a>
                        </li>
                     ))
                  }
               </ul>
            </nav>
            <button className="hamburger" onClick={handleSideDrawer}>
               <FaIcons.FaBars className="hamburger-icon" />
            </button>
         </div>
         <div className={backdropClass} onClick={handleBackdrop}></div>
      </header>
   )
}

export default Header