import React from 'react'
import Header from './Header'
import Showcase from './Showcase'
import About from './About'
import Features from './Features'
import Menu from './Menu'
import Gallery from './Gallery'
import Reservation from './Reservation'
import Footer from './Footer'

const App = () => {
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