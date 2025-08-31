import React from 'react';
import img from '../assets/aboutbanner.jpeg';

export default function Aboutpage() {
  return (
    <section className="aboutpage-container">
      <div className="aboutpage-image">
        <img src={img} alt="About us" />
      </div>
      <div className="aboutpage-content">
        <p className="subtitle">WELCOME TO HOSPITAL NAME</p>
        <h2 className="title">Best Care for Your Good Health</h2>
        <div className="bullet-points">
          <ul>
            <li>A Passion for Healing</li>
            <li>All our best</li>
            <li>Always Caring</li>
          </ul>
          <ul>
            <li>5-Star Care</li>
            <li>Believe in Us</li>
            <li>A Legacy of Excellence</li>
          </ul>
        </div>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque placerat scelerisque tortor ornare ornare. Quisque placerat scelerisque tortor ornare ornare Convallis felis vitae tortor augue. Velit nascetur proin massa in. Consequat faucibus porttitor enim et.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque placerat scelerisque. Convallis felis vitae tortor augue. Velit nascetur proin massa in.
        </p>
      </div>
    </section>
  );
}
