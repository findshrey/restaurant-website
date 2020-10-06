import React from 'react'

class Header extends React.Component {
   state = {
      bubbleMenuOpen: false
   }

   bubbleMenuHandler = () => {
      this.setState((prevState) => ({ bubbleMenuOpen: !prevState.bubbleMenuOpen }))
   }

   closeBubbleMenu = () => {
      this.setState({ bubbleMenuOpen: false })
   }

   render() {
      const navOptions = ['home', 'about', 'menu', 'gallery', 'reservation']

      return (
         <header className="navbar">
            <div className="container">
               <div className="logo">
                  <img src="./icons/logo.svg" alt="" />
               </div>
               <nav>
                  <ul className={this.state.bubbleMenuOpen ? "nav-links active" : "nav-links"}>
                     {
                        navOptions.map((option) => (
                           <li>
                              <a href={`#${option}`} onClick={this.closeBubbleMenu}>
                                 {option}
                              </a>
                           </li>
                        ))
                     }
                  </ul>
               </nav>
               <div className="hamburger" onClick={this.bubbleMenuHandler}>
                  <i className="fas fa-bars fa-2x"></i>
               </div>
            </div>
         </header>
      )
   }
}

export default Header