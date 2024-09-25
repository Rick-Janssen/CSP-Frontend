import React, { useState } from 'react';


import './login.css';

const Login = () => {

  const [email, SetEmail] = useState('');
  const [password, SetPassword] = useState('');

  function handleSubmit(e) {
    // Prevent the browser from reloading the page
    e.preventDefault();

    // Read the form data


    fetch('http://192.168.45.164/csp-backend/login', {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        email,
        password,
      })
    })
      .then(response => response.json())
      .then(data => {
        if (data.token) {
          localStorage.setItem('token', data.token);
        } else {
          console.log('Login failed:', data.message);
        }
      });


  }






  return (
    <div className="login-container">
      <div className="login-box">
        <h2>Login</h2>
        <form method='post' onSubmit={handleSubmit}>
          <div className="input-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => SetEmail(e.target.value)}
            />
          </div>
          <div className="input-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => SetPassword(e.target.value)}
            />
          </div>
          <button type="submit" className="login-btn"  >Login</button>
          <div className="forgot-password">
            <a href="#">Forgot your password?</a>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;