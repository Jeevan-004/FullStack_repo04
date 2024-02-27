// src/pages/LoginPage.js
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './LoginPage.css';

const LoginPage = ({ onLogin }) => {
  const navigate = useNavigate();

  const handleLogin = () => {
    // Implement your login logic
    // Assuming a successful login for demonstration purposes
    onLogin();

    // Redirect to the home page after login
    navigate('/home');
  };

  return (
    <div className="login-container">
      <h2>Login Page</h2>
      <div>
        <label htmlFor="userId">User ID:</label>
        <input type="text" id="userId" />
      </div>
      <div>
        <label htmlFor="password">Password:</label>
        <input type="password" id="password" />
      </div>
      <button onClick={handleLogin}>Login</button>
      <p>
        Don't have an account? <Link to="/signup">Sign Up</Link>
      </p>
    </div>
  );
};

export default LoginPage;
