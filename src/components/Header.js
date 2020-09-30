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
      const menu = ['home', 'about', 'menu', 'gallery', 'reservation']

      return (
         <header className="hero">
            <div className="navbar">
               <div className="logo">
                  <img src="./icons/logo2.svg" alt="" />
               </div>
               <nav>
                  <ul className={this.state.bubbleMenuOpen ? "nav-links active" : "nav-links"}>
                     {
                        menu.map((el) => (
                           <li>
                              <a href={`#${el}`} onClick={this.closeBubbleMenu}>
                                 {el}
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
            <div className="hero-content">
               <h4>Welcome To</h4>
               <h1>ExoticaRestaurant</h1>
               <p>
                  Our master chefs serve the most delicious variety of the <br />
                  freshest food from all over the world.
               </p>
               <a href="" className="btn-hero">Reserve Table</a>
            </div>
         </header>
      )
   }
}

export default Header