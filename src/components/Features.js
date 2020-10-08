import React from 'react'
import features from './../data/features'

const Features = () => (
   <section id="features">
      <div className="container">
         {
            features.map((feature, index) => (
               <div className="feature" key={index} >
                  <i className={feature.icon}></i>
                  <h4>{feature.title}</h4>
                  <p>{feature.description}</p>
               </div>
            ))
         }
      </div>
   </section>
)

export default Features

{/* What helps people, helps business. */ }
{/* The goal as a company is to have customer service that is not just the best but legendary */ }