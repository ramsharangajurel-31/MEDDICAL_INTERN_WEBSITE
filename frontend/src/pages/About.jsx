import React from 'react'
import AboutBanner from '../components/AboutBanner.jsx';
import Aboutpage from '../components/Aboutpage.jsx';
import Testimonial from '../components/Testimonial.jsx';
import ContactInfoCards from '../components/ContactInfoCards.jsx';


const about = () => {
  return (
    <div>
    <AboutBanner />
    <Aboutpage />
    <Testimonial />
    <ContactInfoCards />
    </div>
  )
}

export default about
