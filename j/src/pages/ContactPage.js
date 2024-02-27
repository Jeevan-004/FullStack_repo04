// src/pages/ContactPage.js
import React from 'react';
import './ContactPage.css'; // Import the CSS file

const ContactPage = () => {
  return (
    <div className="contact-container">
      <img className="contact-image" src="/images/contactpage.jpg" alt="Contact Image" />
      <h2>Contact B.M.S. College of Engineering</h2>
      <div className="contact-info">
        <p>
          Address: P.O. Box No.: 1908 Bull Temple Road, Bangalore - 560 019 Karnataka, India.
        </p>
        <p>Phone: +91-80-26622130-35.</p>
        <p>Fax: +91-80-26614357.</p>
        <p>Email: info@bmsce.ac.in.</p>
        <p>Business Hours: 9 am to 5 pm</p>
      </div>
    </div>
  );
};

export default ContactPage;
