// src/pages/ForgotPassword.jsx
import React, { useState } from 'react';
import './ForgotPassword.css';
import evaImage from '../assets/eva.jpeg'; // Ganti dengan path gambar EVA kamu

const ForgotPassword = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleSendCode = () => {
    // TODO: Kirim permintaan ke backend untuk kirim kode verifikasi ke email
    alert('Kode verifikasi telah dikirim ke email.');
  };

  return (
    <div className="forgot-container">
      <div className="forgot-left">
        <img src={evaImage} alt="EVA" className="forgot-image" />
      </div>
      <div className="forgot-right">
        <h2>Forgot Password</h2>
        <input
          type="text"
          placeholder="Please enter Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="email"
          placeholder="Please enter E-mail"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button className="forgot-button" onClick={handleSendCode}>
          SEND CODE TO E-MAIL
        </button>
      </div>
    </div>
  );
};

export default ForgotPassword;
