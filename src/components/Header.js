import React from 'react'
import Logo from './../data/Logo'

class Header extends React.Component {
   state = {
      bubbleMenuOpen: false,
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

   // Toggle bubble menu
   handleBubbleMenu = () => {
      this.setState((prevState) => ({ bubbleMenuOpen: !prevState.bubbleMenuOpen }))
   }

   render() {
      const navClass = this.state.bubbleMenuOpen ? "navigation active" : "navigation"
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
                              <a href={`#${option}`} className="nav-link" onClick={this.handleBubbleMenu} >
                                 {option}
                              </a>
                           </li>
                        ))
                     }
                  </ul>
               </nav>
               <div className="hamburger" onClick={this.handleBubbleMenu}>
                  <i className="fas fa-bars fa-2x"></i>
               </div>
            </div>
         </header>
      )
   }
}

export default Header