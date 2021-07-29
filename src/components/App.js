import React, { useEffect } from "react"

import About from "./sections/About"
import Features from "./sections/Features"
import Footer from "./Footer"
import Gallery from "./sections/Gallery"
import Header from "./Header"
import Menu from "./sections/Menu"
import Reservation from "./sections/Reservation"
import Showcase from "./sections/Showcase"

const App = () => {
   // Setup Intersection Observer
   useEffect(() => {
      const sections = document.querySelectorAll(".section-fade-in")

      const options = {
         root: null,
         rootMargin: "0px",
         threshold: 0.1,
      }

      const callback = (entries, observer) => {
         entries.forEach((entry) => {
            if (entry.isIntersecting) {
               entry.target.style.animation = "sectionFadeIn 1s ease forwards"
               observer.unobserve(entry.target)
            }
         })
      }

      const observer = new IntersectionObserver(callback, options)

      sections.forEach((section) => {
         observer.observe(section)
      })
   }, [])

   return (
      <>
         <Header />
         <main>
            <Showcase />
            <About />
            <Features />
            <Menu />
            <Gallery />
            <Reservation />
         </main>
         <Footer />
      </>
   )
}

export default App
