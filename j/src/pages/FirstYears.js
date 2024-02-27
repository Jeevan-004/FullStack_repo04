// src/pages/FirstYearSections.js
import React from 'react';
import './FirstYearSections.css'; // Import the CSS file
import { Link } from 'react-router-dom';

const FirstYearSections = () => {
  return (
    <div>
      <h2>First Year Sections</h2>
      <div className="section-container">
        {/* Chemistry Cycle Sections */}
        <Link to="/campus-communities/first-years/chemistry-section">
          <div className="section-box">
            <img src="/images/chemistry-section.jpg" alt="Chemistry Cycle" />
            <h3>Chemistry Cycle</h3>
            <p>Explore sections in the Chemistry Cycle.</p>
          </div>
        </Link>

        {/* Physics Cycle Sections */}
        <Link to="/campus-communities/first-years/physics-section">
          <div className="section-box">
            <img src="/images/physics-section.jpg" alt="Physics Cycle" />
            <h3>Physics Cycle</h3>
            <p>Explore sections in the Physics Cycle.</p>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default FirstYearSections;
