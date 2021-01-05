import React from 'react'
import * as FaIcons from 'react-icons/fa'

const footerContents = [
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

export default footerContents