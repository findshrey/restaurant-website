import React from 'react'

class Header extends React.Component {
   state = {
      bubbleMenuOpen: false,
      navClassName: 'navbar'
   }

   componentDidMount() {
      window.addEventListener('scroll', this.scrollHandler);
   }

   // Navbar background on Scroll
   scrollHandler = () => {
      if (window.pageYOffset > 75) {
         this.setState({ navClassName: 'navbar scrolled' })
      } else {
         this.setState({ navClassName: 'navbar' })
      }
   }

   // Toggle bubble menu
   bubbleMenuHandler = () => {
      this.setState((prevState) => ({ bubbleMenuOpen: !prevState.bubbleMenuOpen }))
   }

   // Closes bubble menu
   closeBubbleMenu = () => {
      this.setState({ bubbleMenuOpen: false })
   }

   render() {
      const navOptions = ['home', 'about', 'menu', 'gallery', 'reservation']

      return (
         <header className={this.state.navClassName}>
            <div className="container">
               <div className="logo">
                  <img src="./images/logo.svg" alt="Website-logo" />
               </div>
               <nav>
                  <ul className={this.state.bubbleMenuOpen ? "nav-links active" : "nav-links"}>
                     {
                        navOptions.map((option, index) => (
                           <li key={index}>
                              <a href={`#${option}`} onClick={this.closeBubbleMenu} >
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