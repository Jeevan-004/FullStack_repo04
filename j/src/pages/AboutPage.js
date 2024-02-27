// src/pages/AboutPage.js
import React from 'react';
import './AboutPage.css';

const AboutPage = () => {
  return (
    <div className="about-container">
      <h2>About Us</h2>

      {/* Add an image element */}
      <img src="/images/aboutpage.jpg" alt="About Us" className="about-image" />

      <p>
        Welcome to BMSCE Social Hub! We are a vibrant community dedicated to connecting
        students and fostering a sense of belonging. Our mission is to...
      </p>

      <h3>Our History</h3>
      <p>
        Founded in 2023, BMSCE Social Hub has been a leading platform for information viewing.
        Over the years, we have achieved [mention achievements].
      </p>

      <h3>Our Values</h3>
      <p>
        At BMSCE Social Hub, we believe in [list core values]. Our philosophy centers around
        [describe guiding principles].
      </p>

      <h3>Leadership Team</h3>
      <p>
        Meet the dedicated individuals leading BMSCE Social Hub towards success.
        [Briefly introduce key leaders and their roles]
      </p>

      {/* Add more sections based on your organization's content structure */}
    </div>
  );
};

export default AboutPage;
