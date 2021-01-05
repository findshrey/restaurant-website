import React from 'react'
import footerContents from './../data/footer-contents'

const Footer = () => (
   <footer>
      <div className="footer-upper">
         <div className="container">
            {
               footerContents.map((content, index) => (
                  <div className="footer-block" key={index} >
                     <div className="footer-icon">
                        {content.icon}
                     </div>
                     <h4>{content.title}</h4>
                     <p>{content.content}</p>
                  </div>
               ))
            }
         </div>
      </div>
      <div className="footer-lower">
         <div className="container">
            <p>Copyright &copy; La Casetta 2020</p>
         </div>
      </div>
   </footer>
)

export default Footer