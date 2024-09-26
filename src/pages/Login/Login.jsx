import React, { useState } from 'react';
import './login.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState(''); // State to hold success or error message

  function handleSubmit(e) {
    e.preventDefault();

    fetch('http://localhost/csp-backend/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email,
        password,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.token) {
          localStorage.setItem('token', data.token);
          window.location.href = '/';
        } else {
          setMessage(data.message || 'Login failed. Please try again.');
        }
      })
      .catch(() => {
        setMessage('An error occurred. Please try again later.');
      });
  }

  return (
    <div className="login-container">
      <div className="login-box">
        <h2>Login</h2>
        <form method="post" onSubmit={handleSubmit}>
          <div className="input-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="input-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          {message && <p className="message">{message}</p>} {/* Display message */}
          <button type="submit" className="login-btn">Login</button>
          <div className="forgot-password">
            <a href="#">Forgot your password?</a><br />
            <p>Don't have an account? <a href="/register">Register</a></p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
