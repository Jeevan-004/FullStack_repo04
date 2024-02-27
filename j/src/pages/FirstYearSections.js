// src/pages/FirstYearSections.js
import React from 'react';
import { Link } from 'react-router-dom';
import './FirstYearSections.css'; // Import the CSS file

const FirstYearSections = () => {
  return (
    <div className="sections-container">
      <div className="title">First Year Sections</div>
      <div className="boxes-container">
        <Link to="/campus-communities/first-years/chemistry-section">
          <div className="section-box">
            <img src="/images/chemistry.jpg" alt="Chemistry Sections" />
            <h3>Chemistry Sections</h3>
            <p>Explore sections in the chemistry cycle.</p>
          </div>
        </Link>
        <Link to="/campus-communities/first-years/physics-section">
          <div className="section-box">
            <img src="/images/physics.jpg" alt="Physics Sections" />
            <h3>Physics Sections</h3>
            <p>Explore sections in the physics cycle.</p>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default FirstYearSections;
