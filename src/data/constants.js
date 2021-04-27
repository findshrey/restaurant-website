import React from 'react'
import * as FaIcons from 'react-icons/fa'

const NAV_LINKS = [
   {
      name: 'Home',
      url: '#home'
   },
   {
      name: 'About',
      url: '#about'
   },
   {
      name: 'Menu',
      url: '#menu'
   },
   {
      name: 'Gallery',
      url: '#gallery'
   },
   {
      name: 'Reservation',
      url: '#reservation'
   }
]

const FEATURES = [
   {
      icon: <FaIcons.FaAward />,
      title: <>100% Fresh <br /> Products</>,
      description: 'Fresh and organic vegetables. Good for your health, and it also tastes better!'
   },
   {
      icon: <FaIcons.FaUtensils />,
      title: <>Delicious <br /> Food</>,
      description: 'Food paired with exquisite Italian wines and spirits for wholesome dining experience!'
   },
   {
      icon: <FaIcons.FaUsers />,
      title: <>Friendly <br /> Staff</>,
      description: 'Our greatest asset is the customer! We treat each customer as if they are the only one!'
   },
   {
      icon: <FaIcons.FaThumbsUp />,
      title: <>Relaxing <br /> Atmosphere</>,
      description: 'Relaxing and soothing atmosphere for you to enjoy your meal to the fullest!'
   }
]

const FOOTER_CONTENTS = [
   {
      icon: <FaIcons.FaCompass />,
      title: 'LOCATION',
      content: <>
         Brooklyn <br />
         376 Bjerg Street <br />
         Brooklyn, NY — 11231 <br />
         (718) 555-1234
      </>
   },
   {
      icon: <FaIcons.FaClock />,
      title: 'HOURS',
      content: <>
         Monday — Thursday <br />
         8am — 11pm <br />
         Friday — Sunday <br />
         11am — 11pm
      </>
   },
   {
      icon: <FaIcons.FaPhone />,
      title: 'CONTACT',
      content: <>
         No. 120 E 4th Ave, USA <br />
         reservation@lacasetta.com <br />
         +1234 567 789
      </>
   }
]

export { NAV_LINKS, FEATURES, FOOTER_CONTENTS }