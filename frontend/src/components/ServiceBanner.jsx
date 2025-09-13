import React from 'react';
import contactSectionImg from '../assets/contactsection.jpeg';

export default function ServiceBanner({ breadcrumb = "Home / Services", title = "Our Services" }) {
  return (
    <section
      className="service-banner"
      style={{ backgroundImage: `url(${contactSectionImg})` }}
    >
      <div className="container service-banner-inner">
        <p className="service-breadcrumb">{breadcrumb}</p>
        <h1 className="service-title">{title}</h1>
      </div>
    </section>
  );
}
