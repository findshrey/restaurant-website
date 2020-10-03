import React from 'react'

const Reservation = () => (
   <section id="reservation">
      <div className="container">
         <header className="head-res">
            <h4>Book your table</h4>
            <h3>Reservation</h3>
         </header>
         <form>
            <div className="form-inner">
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
               <textarea name="" id="" rows="10" placeholder="Message"></textarea>
            </div>
            <button type="submit" className="btn-reserve">Make Reservation</button>
         </form>
      </div>
   </section>
)

export default Reservation