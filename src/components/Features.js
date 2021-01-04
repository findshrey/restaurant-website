import React from 'react'
import features from './../data/features'

const Features = () => (
   <section id="features" className="features">
      <div className="container">
         {
            features.map((feature, index) => (
               <div className="feature" key={index} >
                  <div className="feature-icon">
                     {feature.icon}
                  </div>
                  <h4>{feature.title}</h4>
                  <p>{feature.description}</p>
               </div>
            ))
         }
      </div>
   </section>
)

export default Features
