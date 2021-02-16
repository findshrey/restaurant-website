import React from 'react'
import * as FaIcons from 'react-icons/fa'
import IconLaCasetta from './icons/IconLaCasetta'

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

   // Remove backdrop and hide sideDrawer
   handleBackdrop = () => {
      this.setState(() => ({ sideDrawer: false }))
   }

   render() {
      const navClass = this.state.sideDrawer ? "navigation active" : "navigation"
      const backdropClass = this.state.sideDrawer ? "backdrop" : ""

      const navOptions = ['home', 'about', 'menu', 'gallery', 'reservation']

      return (
         <header className={this.state.headerClass}>
            <div className="container">
               <IconLaCasetta />
               <nav className={navClass}>
                  <ul>
                     {
                        navOptions.map((option, index) => (
                           <li key={index}>
                              <a href={`#${option}`} className="nav-link" onClick={this.handleBackdrop}>
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
            <div className={backdropClass} onClick={this.handleBackdrop}></div>
         </header>
      )
   }
}

export default Header