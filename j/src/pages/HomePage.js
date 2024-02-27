// src/pages/HomePage.js
import React from 'react';
import { Link } from 'react-router-dom';
import './HomePage.css';

const HomePage = () => {
  return (
    <div className="home-container">
      <div className="intro-section">
        <h1>Welcome to BMSCE Social Hub!</h1>
        <p>
          Stay connected with your college community and explore the exciting features we offer.
          Choose from our services, get in touch with us, or learn more about what makes our college unique.
        </p>
      </div>

      <div className="box-container">
        <Link to="/services" className="box">
          <img src="/images/services.jpg" alt="Service 1" />
          <h3>Services</h3>
          <p>Explore the various services we offer.</p>
        </Link>

        <Link to="/contact" className="box">
          <img src="/images/contact.jpg" alt="Contact" />
          <h3>Contact</h3>
          <p>Get in touch with us for any queries or assistance.</p>
        </Link>

        <Link to="/about" className="box">
          <img src="/images/about.jpg" alt="About" />
          <h3>About</h3>
          <p>Learn more about what makes our college unique.</p>
        </Link>
      </div>
    </div>
  );
};

export default HomePage;
