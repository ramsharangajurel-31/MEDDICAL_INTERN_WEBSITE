import React from 'react'
import DoctotBanner from '../components/DoctotBanner.jsx'
import DoctorPage from '../components/DoctorPage.jsx'
import Testimonial from '../components/testimonial.jsx'
import ContactInfoCards from '../components/ContactInfoCards.jsx'

const doctor = () => {
  return (
    <div>
      <DoctotBanner />
      <DoctorPage />
      <Testimonial />
      <ContactInfoCards />
    </div>
  )
}

export default doctor
