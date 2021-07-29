import React, { useState, useEffect } from "react"
import * as FaIcons from "react-icons/fa"

import { NAV_LINKS } from "./../data/constants"
import IconLaCasetta from "./icons/IconLaCasetta"

const Header = () => {
   const [headerClass, setHeaderClass] = useState("main-head")
   const [sideDrawer, setSideDrawer] = useState(false)

   // Listen for scroll
   useEffect(() => {
      window.addEventListener("scroll", handleHeader)

      return () => {
         window.removeEventListener("scroll", handleHeader)
      }
   }, [])

   // Set background-color on scroll
   const handleHeader = () => {
      if (window.pageYOffset > 75) {
         setHeaderClass("main-head scrolled")
      } else {
         setHeaderClass("main-head")
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

   return (
      <header className={headerClass}>
         <div className="container">
            <div className="logo">
               <IconLaCasetta />
            </div>
            <nav className={`navigation ${sideDrawer && "side-drawer"}`}>
               <ul>
                  {NAV_LINKS.map((link, index) => (
                     <li key={index}>
                        <a
                           href={link.url}
                           className="nav-link"
                           onClick={handleBackdrop}
                        >
                           {link.name}
                        </a>
                     </li>
                  ))}
               </ul>
            </nav>
            <button className="hamburger" onClick={handleSideDrawer}>
               <FaIcons.FaBars className="hamburger-icon" />
            </button>
         </div>
         {/* BACKDROP */}
         <div
            className={`${sideDrawer && "backdrop"}`}
            onClick={handleBackdrop}
         />
      </header>
   )
}

export default Header
