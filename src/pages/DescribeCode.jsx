import React from 'react';
import './DescribeCode.css';
import evaImage from '../assets/eva.jpeg';

const DescribeCode = () => {
  const username = localStorage.getItem('username') || 'User';
  const email = localStorage.getItem('email') || 'user@example.com';

  return (
    <div className="describe-container">
      {/* Sidebar EVA */}
      <div className="eva-sidebar">
        <img src={evaImage} alt="EVA" className="eva-image" />
      </div>

      {/* Main Content */}
      <div className="describe-main">
        {/* User info kanan atas */}
        <div className="user-info">
          <div><strong>{username}</strong></div>
          <div>{email}</div>
        </div>

        {/* Header */}
        <h1 className="describe-title">Describe Code</h1>
        <p className="describe-subtitle">Tell EVA what code you want to create in natural language</p>

        {/* Tombol Connect */}
        <button className="connect-button">Connect to Visual Studio</button>

        {/* File Explorer */}
        <div className="file-explorer">
          <h3>Project Explorer</h3>
          <ul>
            <li>📄 main.py</li>
            <li>📁 helpers/
              <ul>
                <li style={{ marginLeft: '20px' }}>📄 utils.py</li>
              </ul>
            </li>
            <li>📄 README.md</li>
          </ul>
        </div>

        {/* Area Deskripsi */}
        <div className="describe-box">
          <h4>📝 Describe what you want</h4>
          <textarea
            className="describe-input"
            rows="8"
            placeholder="Tulis deskripsi program yang kamu inginkan menggunakan Bahasa manusia..."
          />
        </div>

        {/* Tombol Aksi */}
        <div className="action-buttons">
          <button className="btn-generate">🧠 Generate to NLP</button>
        </div>
      </div>
    </div>
  );
};

export default DescribeCode;
