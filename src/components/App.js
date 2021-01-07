import React from 'react'
import Header from './Header'
import Showcase from './sections/Showcase'
import About from './sections/About'
import Features from './sections/Features'
import Menu from './sections/Menu'
import Gallery from './sections/Gallery'
import Reservation from './sections/Reservation'
import Footer from './Footer'

class App extends React.Component {
   componentDidMount() {
      const sections = document.querySelectorAll('.section-fade-in')

      const options = {
         root: null,
         rootMargin: '0px',
         threshold: 0.1
      }

      const callback = (entries, observer) => {
         entries.forEach((entry) => {
            if (entry.isIntersecting) {
               entry.target.style.animation = 'sectionFadeIn 1s ease forwards'
               observer.unobserve(entry.target)
            }
         })
      }

      const observer = new IntersectionObserver(callback, options)

      sections.forEach((section) => {
         observer.observe(section)
      })
   }

   render() {
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
}

export default App