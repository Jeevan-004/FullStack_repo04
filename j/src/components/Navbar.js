// src/components/Navbar.js
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Navbar.css';

const Navbar = ({ isLoggedIn, onLogout }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Implement your logout logic
    // For now, let's just navigate to the login page
    onLogout(() => navigate('/login')); // Pass a callback that navigates to the login page
  };

  return (
    <nav className="navbar-container">
      <ul className="navbar-list">
        {isLoggedIn ? (
          <>
            <li className="navbar-item">
              <Link to="/home" className="navbar-link">
                Home
              </Link>
            </li>
            <li className="navbar-item">
              <Link to="/about" className="navbar-link">
                About
              </Link>
            </li>
            <li className="navbar-item">
              <Link to="/contact" className="navbar-link">
                Contact
              </Link>
            </li>
            <li className="navbar-item">
              <button onClick={handleLogout} className="navbar-link">
                Logout
              </button>
            </li>
          </>
        ) : (
          <>
            <li className="navbar-item">
              <Link to="/login" className="navbar-link">
                Login
              </Link>
            </li>
            <li className="navbar-item">
              <Link to="/signup" className="navbar-link">
                Sign Up
              </Link>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;
