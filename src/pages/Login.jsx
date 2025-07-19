// src/pages/Login.jsx
import React from 'react';
import './Login.css';
import evaImage from '../assets/eva.jpeg';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    // Simulasi login sukses, arahkan ke home
    navigate('/');
  };

  return (
    <div className="login-container">
      <div className="login-left">
        <img src={evaImage} alt="EVA" />
      </div>
      <div className="login-right">
        <h2>Login</h2>
        <p className="subtext">Sign in to continue</p>
        <form onSubmit={handleLogin}>
          <label>Email</label>
          <input type="email" placeholder="Please enter Email" required />
          <label>Password</label>
          <input type="password" placeholder="Please enter password" required />
          <button type="submit">LOGIN</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
