import React from 'react'

import { FEATURES } from './../../data/constants'

const Features = () => (
   <section id="features" className="features section-fade-in">
      <div className="container">
         {
            FEATURES.map((feature, index) => (
               <div className="feature" key={index} >
                  <div className="feature-icon">
                     {feature.icon}
                  </div>
                  <h3>{feature.title}</h3>
                  <p>{feature.description}</p>
               </div>
            ))
         }
      </div>
   </section>
)

export default Features
