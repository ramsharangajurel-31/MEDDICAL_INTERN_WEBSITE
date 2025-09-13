import React from 'react';
import HeroSection from '../components/HeroSection';
import ContactInfoCards from '../components/ContactInfoCards';
import Aboutsection from '../components/Aboutsection';
import ServiceDetails from '../components/ServiceDetails';
import Specialties from '../components/Specialties';
import AppointmentForm from '../components/AppointmentForm';
import DoctorSlider from '../components/DoctorSlider';
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
