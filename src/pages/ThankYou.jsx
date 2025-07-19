// src/pages/ThankYou.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './ThankYou.css';
import evaImage from '../assets/eva.jpeg'; // Ganti sesuai nama file gambar EVA-mu

const ThankYou = () => {
  const navigate = useNavigate();

  return (
    <div className="thankyou-container">
      <div className="thankyou-left">
        <img src={evaImage} alt="EVA" className="thankyou-image" />
      </div>
      <div className="thankyou-right">
        <h2>Thank You for<br />Your Registration<br />& Please Check<br />Your E-mail</h2>
        <p>Back to Login & Enter Code From<br />Your E-mail to continue</p>
        <button className="thankyou-button" onClick={() => navigate('/login')}>
          BACK TO LOGIN
        </button>
      </div>
    </div>
  );
};

export default ThankYou;
