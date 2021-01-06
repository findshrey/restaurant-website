import React from 'react'
import Header from './Header'
import Showcase from './sections/Showcase'
import About from './sections/About'
import Features from './sections/Features'
import Menu from './sections/Menu'
import Gallery from './sections/Gallery'
import Reservation from './sections/Reservation'
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