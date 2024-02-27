// src/App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import SignUpPage from './pages/SignUpPage';
import HomePage from './pages/HomePage';
import ServicesPage from './pages/ServicesPage';
import CampusCommunity from './pages/CampusCommunity';
import ContactPage from './pages/ContactPage';
import AboutPage from './pages/AboutPage';
import Navbar from './components/Navbar';
import BranchDetails from './components/BranchDetails';
import branchDetailsData from './data/branchDetailsData';
import InterestGroups from './pages/InterestGroups'; // Import InterestGroups component

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleLogout = (navigate) => {
    setIsLoggedIn(false);
    navigate('/login');
  };

  const handleSignUp = () => {
    setIsLoggedIn(true);
  };

  return (
    <Router>
      <div>
        <Navbar isLoggedIn={isLoggedIn} onLogout={handleLogout} />
        <Routes>
          <Route path="/login" element={<LoginPage onLogin={handleLogin} />} />
          <Route path="/signup" element={<SignUpPage onSignUp={handleSignUp} />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/campus-communities" element={<CampusCommunity />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/about" element={<AboutPage />} />
          
          {/* Add a route for InterestGroups */}
          <Route path="/interest-groups" element={<InterestGroups />} />

          {/* Update the route to pass branchDetailsData */}
          <Route
            path="/campus-communities/:branch"
            element={<BranchDetails branchDetails={branchDetailsData} />}
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
