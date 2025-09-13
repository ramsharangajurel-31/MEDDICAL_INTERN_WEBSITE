import React from 'react'
import DoctotBanner from '../components/DoctotBanner'
import DoctorPage from '../components/DoctorPage'
import Testimonial from '../components/testimonial'
import ContactInfoCards from '../components/ContactInfoCards'

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
