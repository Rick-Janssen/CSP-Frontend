import React from 'react';
import './register.css';

const Register = () => {
  return (
    <>
    <div className="register-container">
      <div className="register-box">
        <h2>Register</h2>
        <form>
          <div className="input-group">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              id="username"
              placeholder="Enter your username"
            />
          </div>
          <div className="input-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              placeholder="Enter your email"
            />
          </div>
          <div className="input-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              placeholder="Enter your password"
            />
          </div>
          <div className="input-group">
            <label htmlFor="confirmPassword">Confirm Password</label>
            <input
              type="password"
              id="confirmPassword"
              placeholder="Confirm your password"
            />
          </div>
          <button type="submit" className="register-btn">Register</button>
          <div className="login-link">
            <p>Already have an account? <a href="#">Login</a></p>
          </div>
        </form>
      </div>
    </div>
    </>
  );
};

export default Register;