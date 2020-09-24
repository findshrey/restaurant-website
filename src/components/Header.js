import React from 'react'

class Header extends React.Component {
   render() {
      return (
         <header className="hero">
            <div className="navbar">
               <div className="logo">
                  <img src="" alt="" />
               </div>
               <nav>
                  <ul className="nav-links">
                     <li><a href="#">HOME</a></li>
                     <li><a href="#">ABOUT</a></li>
                     <li><a href="#">MENU</a></li>
                     <li><a href="#">GALLERY</a></li>
                     <li><a href="#">RESERVATIONS</a></li>
                  </ul>
               </nav>
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