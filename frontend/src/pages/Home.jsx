import React from 'react';
import HeroSection from '../components/HeroSection.jsx';
import ContactInfoCards from '../components/ContactInfoCards.jsx';
import Aboutsection from '../components/Aboutsection.jsx';
import ServiceDetails from '../components/ServiceDetails.jsx';
import Specialties from '../components/Specialties.jsx';
import AppointmentForm from '../components/AppointmentForm.jsx';
import DoctorSlider from '../components/DoctorSlider.jsx';
import '../styles/homeService.css';

const Home = () => {
  return (
    <div>
      <HeroSection />
      <Aboutsection />
      <ServiceDetails homeMode={true} />
      <Specialties /> 
      <AppointmentForm /> 
      <DoctorSlider />    
    
      <ContactInfoCards />
      
    </div>
  );
}

export default Home;
