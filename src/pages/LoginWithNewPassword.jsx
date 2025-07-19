// src/pages/LoginWithNewPassword.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './LoginWithNewPassword.css'; // <- Path sudah benar
import aiImage from '../assets/eva.jpeg';

const LoginWithNewPassword = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('New password set:', { name, email, password });
    navigate('/home');
  };

  return (
    <div className="login-with-new-password-container">
      <div className="login-left">
        <img src={aiImage} alt="AI Character" />
      </div>
      <div className="login-right">
        <h2 className="login-title">Login With New<br />Password</h2>
        <form onSubmit={handleSubmit} className="login-form">
          <label className="login-label">Please enter your name</label>
          <input
            type="text"
            className="login-input"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />

          <label className="login-label">Please enter Email</label>
          <input
            type="email"
            className="login-input"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <label className="login-label">Please create new password</label>
          <input
            type="password"
            className="login-input"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <button type="submit" className="login-button">LOGIN</button>
        </form>
      </div>
    </div>
  );
};

export default LoginWithNewPassword;