import React from 'react'
import { Image } from 'cloudinary-react'

const About = () => (
   <section id="about" className="about section-fade-in">
      <div className="container">
         <header className="head-red">
            <h3>About Us</h3>
            <h2>Who we are</h2>
         </header>
         <div className="about-content">
            <div className="about-block">
               <p>
                  Owners and the chef who hail from Emilia Romagna region of Northeastern Italy in settings that make you want to come back for more.
                  <br /> <br />
                  The experience sparks memories of the Italian owners filled with nostalgia from their childhood as they prepare an entirely authentic and
                  completely home-made Italian cuisine where we follow the tradition of serving an amazing selection of hand-made pasta from scratch every day –
                  prepared in the same way as our mothers, and the mothers of their mothers, have always done it in our home region in Italy.
               </p>
               <Image
                  cloudName="dg4arvkpw"
                  publicId="la-casetta/about/about_1_rtkmdo.jpg"
                  loading="lazy"
                  srcSet="
                     https://res.cloudinary.com/dg4arvkpw/image/upload/w_600/la-casetta/about/about_1_rtkmdo.jpg 600w,
                     https://res.cloudinary.com/dg4arvkpw/image/upload/w_1200/la-casetta/about/about_1_rtkmdo.jpg 1200w"
                  sizes="(max-width: 800px) 90vw, 50vw"
               />
            </div>
            <div className="about-block">
               <Image
                  cloudName="dg4arvkpw"
                  publicId="la-casetta/about/about_2_s8yey7.jpg"
                  loading="lazy"
                  srcSet="
                     https://res.cloudinary.com/dg4arvkpw/image/upload/w_600/la-casetta/about/about_2_s8yey7.jpg 600w,
                     https://res.cloudinary.com/dg4arvkpw/image/upload/w_1200/la-casetta/about/about_2_s8yey7.jpg 1200w"
                  sizes="(max-width: 800px) 90vw, 50vw"
               />
               <p>
                  We pair our food with a long list of exquisite Italian wines and spirits to give you wholesome dining experience.
                  We thrive on bringing people together with traditional Italian food and drinks.
                  <br /> <br />
                  The ambiance in our dining room is sophisticated but never too formal.
                  Every corner of the restaurant has been lovingly decorated to showcase the original and traditional Italy straight out of our Italian owner’s memories.
               </p>
            </div>
         </div>
      </div>
   </section>
)

export default About