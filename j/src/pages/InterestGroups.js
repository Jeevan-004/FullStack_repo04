// src/pages/InterestGroups.js
import React from 'react';
import './InterestGroups.css';

const clubs = [
  { name: 'IEEE BMSCE', image: '/images/ieee.jpg' },
  { name: 'Photography Club', image: '/images/photography-club.jpg' },
  { name: 'BMSCE Mountaineering Club', image: '/images/mountaineering-club.jpg' },
  { name: 'BMSCE Rotaract Club', image: '/images/rotaract-club.jpg' },
  { name: 'Melton Foundation', image: '/images/melton-foundation.jpg' },
  { name: 'Chiranthana Kannada Sangha, BMSCE', image: '/images/kannada-sangha.jpg' },
  { name: 'NSS Unit BMSCE', image: '/images/nss.jpg' },
  { name: 'BMSCE NCC', image: '/images/ncc.jpg' },
  { name: 'BMSCE Entrepreneurship Development Cell', image: '/images/edc.jpg' },
  { name: 'Aerospace BMSCE', image: '/images/aerospace.jpg' },
];

const InterestGroups = () => {
  return (
    <div className="interest-groups-container">
      <h2>Interest Groups</h2>
      <div className="clubs-container">
        {clubs.map((club, index) => (
          <div key={index} className="club-box">
            <img src={club.image} alt={club.name} />
            <p>{club.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default InterestGroups;
