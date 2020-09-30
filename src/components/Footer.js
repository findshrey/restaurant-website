import React from 'react'

const footerUpper = [
   {
      title: 'LOCATIONS',
      content: <>Brooklyn <br />
      376 Fake Street <br />
      Brooklyn, NY — 11231 <br />
      (718) 555-1234</>
   },
   {
      title: 'HOURS',
      content: <>Monday — Thursday <br />
      8am — 11pm <br />
      Friday — Sunday <br />
      11am — 11pm</>
   },
   {
      title: 'CONTACT',
      content: <>No. 120 E 4th Ave, USA <br />
      reservation@ravores.com <br />
      +1234 567 789</>
   }
]

const Footer = () => (
   <footer>
      <div className="footer-upper">
         <div className="container">
            {
               footerUpper.map((el) => (
                  <div className="upper-block">
                     <h4>{el.title}</h4>
                     <p>{el.content}</p>
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