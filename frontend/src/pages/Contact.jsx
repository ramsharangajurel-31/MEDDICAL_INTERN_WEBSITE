import React from 'react'
import ContactBanner from '../components/ContactBanner.jsx';
import ContactForm from '../components/ContactForm.jsx';
import ContactInfoCards from '../components/ContactInfoCards.jsx';

const contact = () => {
  return (
    <div>
      <ContactBanner />

      <div className="map-container">
        <iframe
          title="New York City Map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d193571.4389279273!2d-74.11808665000001!3d40.705825399999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c250b7b1f7a1b7%3A0x8a1a1a1a1a1a1a1a!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2sin!4v1680000000000!5m2!1sen!2sin"
          width="95%"
          height="500px"
          style={{ border: 0, borderRadius: '0px', margin: '40px' }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>

      <div className="contact-page-container">
        <ContactForm />
        <ContactInfoCards contactPage />
      </div>
    </div>
  )
}

export default contact
