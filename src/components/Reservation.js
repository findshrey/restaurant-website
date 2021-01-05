import React from 'react'

const Reservation = () => (
   <section id="reservation" className="reservation">
      <div className="container">
         <header className="head-white">
            <h3>Book your table</h3>
            <h2>Reservation</h2>
         </header>
         <form className="form">
            <div className="form-group">
               <input type="text" placeholder="Date*" required />
               <input type="text" placeholder="Time*" required />
               <input type="number" placeholder="Party" />
            </div>
            <div className="form-group">
               <input type="text" placeholder="Name*" required />
               <input type="number" placeholder="Phone*" required />
               <input type="email" placeholder="Email" />
            </div>
            <textarea rows="13" placeholder="Message" />
            <div className="btn-wrapper">
               <button type="submit" className="btn-reserve">Make Reservation</button>
            </div>
         </form>
      </div>
   </section>
)

export default Reservation