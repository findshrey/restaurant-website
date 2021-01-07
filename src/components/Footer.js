import React from 'react'
import footerContents from './../data/footer-contents'

const Footer = () => (
   <footer className="section-fade-in">
      <div className="footer-upper">
         <div className="container">
            {
               footerContents.map((content, index) => (
                  <div className="footer-block" key={index} >
                     <div className="footer-icon">
                        {content.icon}
                     </div>
                     <h3>{content.title}</h3>
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