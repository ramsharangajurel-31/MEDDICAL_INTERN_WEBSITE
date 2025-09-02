import React from 'react';
import contactSectionImg from '../assets/contactsection.jpeg';

export default function ServiceBanner() {
  return (
    <section
      className="service-banner"
      style={{ backgroundImage: `url(${contactSectionImg})` }}
    >
      <div className="container service-banner-inner">
        <p className="breadcrumb">Home / Services</p>
        <h1 className="service-title">Our Services</h1>
      </div>
    </section>
  );
}
