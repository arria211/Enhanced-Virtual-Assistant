import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Signup.css';
import evaImg from '../assets/eva.jpeg'; // ganti nama sesuai file gambar EVA

const Signup = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Signup data:', formData);
    // Integrasi dengan backend nanti di sini
  };

  return (
    <div className="signup-container">
      <div className="signup-left">
        <img src={evaImg} alt="EVA" className="signup-img" />
      </div>
      <div className="signup-right">
        <h2 className="signup-title">Create new<br />Account</h2>
        <p className="signup-link" onClick={() => navigate('/login')}>Already Registered? <span>Login</span></p>
        <form onSubmit={handleSubmit} className="signup-form">
          <label> Please enter your name </label>
          <input type="text" name="name" value={formData.name} onChange={handleChange} required />

          <label> Please enter Email </label>
          <input type="email" name="email" value={formData.email} onChange={handleChange} required />

          <label> Please enter password </label>
          <input type="password" name="password" value={formData.password} onChange={handleChange} required />

          <button type="submit" className="signup-button">Sign Up</button>
        </form>
      </div>
    </div>
  );
};

export default Signup;
