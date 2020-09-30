import React from 'react'

const features = [
   {
      icon: 'fas fa-award',
      title: <>100% Fresh <br /> Products</>,
      para: 'Fresh and organic vegetables. Good for your health, and it also tastes better!'
   },
   {
      icon: 'fas fa-utensils',
      title: <>Delicious <br /> Food</>,
      para: 'Pull up a chair. Take a taste. Come join us. Life is so endlessly delicious.'
   },
   {
      icon: 'fas fa-users',
      title: <>Friendly <br /> Staff</>,
      para: 'Our greatest asset is the customer! We treat each customer as if they are the only one!'
   },
   {
      icon: 'fas fa-thumbs-up',
      title: <>Relaxing <br /> Atmosphere</>,
      para: 'Because one cannot think well, love well, sleep well, if one has not dined well.'
   }
]

const Features = () => (
   <section id="features">
      <div className="container">
         {
            features.map((feature) => (
               <div className="feature">
                  <i className={feature.icon}></i>
                  <h4>{feature.title}</h4>
                  <p>{feature.para}</p>
               </div>
            ))
         }
      </div>
   </section>
)

export default Features

{/* What helps people, helps business. */ }
{/* The goal as a company is to have customer service that is not just the best but legendary */ }