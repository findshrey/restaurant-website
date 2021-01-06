import React from 'react'
import * as FaIcons from 'react-icons/fa'
import Logo from './../data/Logo'

class Header extends React.Component {
   state = {
      sideDrawer: false,
      headerClass: 'main-head'
   }

   componentDidMount() {
      window.addEventListener('scroll', this.handleHeaderOnScroll);
   }

   // Header background on scroll
   handleHeaderOnScroll = () => {
      if (window.pageYOffset > 75) {
         this.setState({ headerClass: 'main-head scrolled' })
      } else {
         this.setState({ headerClass: 'main-head' })
      }
   }

   // Toggle sideDrawer menu
   handleSideDrawer = () => {
      this.setState((prevState) => ({ sideDrawer: !prevState.sideDrawer }))
   }

   render() {
      const navClass = this.state.sideDrawer ? "navigation active" : "navigation"
      const backdropClass = this.state.sideDrawer ? "backdrop" : ""

      const navOptions = ['home', 'about', 'menu', 'gallery', 'reservation']

      return (
         <header className={this.state.headerClass}>
            <div className="container">
               <Logo />
               <nav className={navClass}>
                  <ul>
                     {
                        navOptions.map((option, index) => (
                           <li key={index}>
                              <a href={`#${option}`} className="nav-link" onClick={this.handleSideDrawer}>
                                 {option}
                              </a>
                           </li>
                        ))
                     }
                  </ul>
               </nav>
               <div className="hamburger" onClick={this.handleSideDrawer}>
                  <FaIcons.FaBars className="hamburger-icon" />
               </div>
            </div>
            <div className={backdropClass} onClick={this.handleSideDrawer}></div>
         </header>
      )
   }
}

export default Header