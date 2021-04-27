import React from 'react'

import { FOOTER_CONTENTS } from './../data/constants'

const Footer = () => (
   <footer className="section-fade-in">
      <div className="footer-upper">
         <div className="container">
            {
               FOOTER_CONTENTS.map((content, index) => (
                  <div className="footer-block" key={index} >
                     <div className="block-icon">
                        {content.icon}
                     </div>
                     <h3>{content.title}</h3>
                     <div className="block-content">{content.content}</div>
                  </div>
               ))
            }
         </div>
      </div>
      <div className="footer-lower">
         <div className="container">
            <span>Copyright &copy; La Casetta 2020</span>
         </div>
      </div>
   </footer>
)

export default Footer