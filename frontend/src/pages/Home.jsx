import React from 'react';
import HeroSection from '../components/herosection';
import ContactInfoCards from '../components/ContactInfoCards';
import Aboutsection from '../components/Aboutsection';
import ServiceDetails from '../components/ServiceDetails';

const Home = () => {
  return (
    <div>
      <HeroSection />
      <Aboutsection />
      <ServiceDetails />
      <ServiceDetails allServicesMode={true} />
        <ContactInfoCards />
      
    </div>
  );
}

export default Home;
