import React from 'react'
import footerContents from './../data/footer-contents'

const Footer = () => (
   <footer>
      <div className="footer-upper">
         <div className="container">
            {
               footerContents.map((content) => (
                  <div className="content-block">
                     <h4>{content.title}</h4>
                     <p>{content.content}</p>
                  </div>
               ))
            }
         </div>
      </div>
      <div className="footer-lower">
         <div className="container">
            <p>Copyright &copy; Exotica 2020</p>
         </div>
      </div>
   </footer>
)

export default Footer