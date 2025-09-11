import React from 'react'
import ServiceBanner from '../components/ServiceBanner'
import ServiceCard from '../components/ServiceCard'
import ContactInfoCards from '../components/ContactInfoCards'

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
