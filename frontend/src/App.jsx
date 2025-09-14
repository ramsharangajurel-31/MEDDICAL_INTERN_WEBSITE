import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import "./styles/style.css"
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Doctor from './pages/Doctor';
import News from './pages/News';
import Services from './pages/Services';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import TopHeader from './components/layout/TopHeader';
import ServiceDetails from './components/ServiceDetails';
import AppointmentPage from './pages/AppointmentPage';
import AdminPanel from './pages/AdminPanel';

function App() {
  const location = useLocation();
  const isAdmin = location.pathname === '/admin';

  return (
    < >
      <TopHeader />
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/service/:id" element={<ServiceDetails />} />
          <Route path="/doctors" element={<Doctor />} />
          <Route path="/news" element={<News />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/appointment" element={<AppointmentPage />} />
          <Route path="/admin" element={<AdminPanel />} />
        </Routes>
      </main>
      {!isAdmin && <Footer />}
    </>
  );
}

export default App;
