// src/pages/SignUpPage.js
import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import './SignUpPage.css';

const SignUpPage = ({ onSignUp }) => {
  const [isAccountCreated, setIsAccountCreated] = useState(false);
  const navigate = useNavigate();

  const handleSignUp = async () => {
    try {
      // Assuming a successful signup for demonstration purposes
      await onSignUp();

      // Display the success message
      setIsAccountCreated(true);

      // Redirect to the home page after signup
      navigate('/home');
    } catch (error) {
      // Handle signup failure (show error message, etc.)
      console.error('Signup failed:', error.message);
    }
  };

  return (
    <div className="signup-container">
      <h2>Sign Up</h2>
      <form>
        <div className="form-group">
          <label htmlFor="username">Username:</label>
          <input type="text" id="username" name="username" />
        </div>

        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input type="password" id="password" name="password" />
        </div>

        <button onClick={handleSignUp}>Sign Up</button>
      </form>
      <p>
        Already have an account? <Link to="/login">Login</Link>
      </p>

      {isAccountCreated && (
        <div className="success-animation">
          Account created successfully!
        </div>
      )}
    </div>
  );
};

export default SignUpPage;
