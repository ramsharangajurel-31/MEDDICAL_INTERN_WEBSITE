import React from 'react'
import AboutBanner from '../components/AboutBanner.jsx';
import Aboutpage from '../components/Aboutpage.jsx';
import Testimonial from '../components/testimonial.jsx';
import ContactInfoCards from '../components/ContactInfoCards.jsx';
import DoctorSlider from '../components/DoctorSlider.jsx';


const about = () => {
  return (
    <div>
    <AboutBanner />
    <Aboutpage />
    <Testimonial />
    <DoctorSlider />
    <ContactInfoCards />
    </div>
  )
}

export default about
