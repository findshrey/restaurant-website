import React from "react"

const Reservation = () => {
   return (
      <section id="reservation" className="reservation section-fade-in">
         <div className="container">
            <header className="head-white">
               <h3>Book your table</h3>
               <h2>Reservation</h2>
            </header>
            <form
               name="reservation"
               className="form"
               method="POST"
               // action="/#reservation"
            >
               {/* Connects to the HTML form within index.html */}
               <input type="hidden" name="form-name" value="reservation" />
               <div className="form-group">
                  <input type="text" name="date" placeholder="Date*" required />
                  <input type="text" name="time" placeholder="Time*" required />
                  <input type="number" name="party" placeholder="Party" />
               </div>
               <div className="form-group">
                  <input
                     type="text"
                     name="user-name"
                     placeholder="Name*"
                     required
                  />
                  <input
                     type="number"
                     name="phone"
                     placeholder="Phone*"
                     required
                  />
                  <input type="email" name="email" placeholder="Email" />
               </div>
               <textarea rows="13" name="message" placeholder="Message" />
               <div className="btn-wrapper">
                  <button type="submit" className="btn-reserve">
                     Make Reservation
                  </button>
               </div>
            </form>
         </div>
      </section>
   )
}

export default Reservation
