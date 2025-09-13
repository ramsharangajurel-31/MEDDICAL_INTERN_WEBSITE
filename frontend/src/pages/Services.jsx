import React from 'react'
import ServiceBanner from '../components/ServiceBanner.jsx'
import ServiceCard from '../components/ServiceCard.jsx'
import ContactInfoCards from '../components/ContactInfoCards.jsx'

const services = () => {
  return (
    <div>
      <ServiceBanner />
      <ServiceCard />
      <ContactInfoCards />
      
    </div>
  )
}

export default services
