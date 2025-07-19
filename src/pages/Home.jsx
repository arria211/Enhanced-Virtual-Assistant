import React from 'react';
import './Home.css';
import { useNavigate } from 'react-router-dom';
import avatar from '../assets/eva.jpeg'; // Pastikan gambar karakter EVA disimpan di sini

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="home">
      <div className="home-content">
        <div className="left">
          <h1 className="home-title">EVA</h1>
          <h2 className="home-subtitle">AI PROGRAMMING ASSISTANT</h2>

          <div className="home-buttons">
            <button className="btn login-btn" onClick={() => navigate('/login')}>Login</button>
            <button className="btn signup-btn" onClick={() => navigate('/signup')}>Signup</button>
          </div>

          <p className="home-tagline">Strategies and Applications</p>
        </div>

        <div className="right">
          <img src={avatar} alt="EVA Avatar" className="eva-image" />
        </div>
      </div>
    </div>
  );
};

export default Home;
