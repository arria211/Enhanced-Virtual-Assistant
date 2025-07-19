// src/pages/EnterCode.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './EnterCode.css';
import evaImage from '../assets/eva.jpeg'; // Ganti dengan path gambar kamu

const EnterCode = () => {
  const [code, setCode] = useState('');
  const navigate = useNavigate();

  const handleLogin = () => {
    // TODO: verifikasi kode ke backend
    // Jika valid:
    navigate('/home');
  };

  return (
    <div className="code-container">
      <div className="code-left">
        <img src={evaImage} alt="EVA" className="code-image" />
      </div>
      <div className="code-right">
        <h2>Login</h2>
        <p>Enter Code to continue</p>
        <input
          type="text"
          placeholder="Please enter code from your E-mail"
          value={code}
          onChange={(e) => setCode(e.target.value)}
          required
        />
        <button className="code-button" onClick={handleLogin}>LOGIN</button>
      </div>
    </div>
  );
};

export default EnterCode;
