// src/pages/ServicesPage.js
import React from 'react';
import { Link, Routes, Route } from 'react-router-dom';
import InterestGroups from './InterestGroups'; // Import InterestGroups component
import './ServicesPage.css';

const ServicesPage = () => {
  return (
    <div className="services-container">
      <Link to="/campus-communities">
        <div className="box">
          <img src="/images/community.jpg" alt="Campus Communities" />
          <h3>Campus Communities</h3>
          <p>Get information about all the branches</p>
        </div>
      </Link>

      <Link to="/interest-groups"> {/* Add Link to navigate to interest groups */}
        <div className="box">
          <img src="/images/clubs.png" alt="Interest Groups" />
          <h3>Interest Groups</h3>
          <p>Explore various interest groups within the college community.</p>
        </div>
      </Link>

      <Routes>
        <Route path="/interest-groups" element={<InterestGroups />} />
      </Routes>
    </div>
  );
};

export default ServicesPage;
