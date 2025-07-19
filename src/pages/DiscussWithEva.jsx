import React from 'react';
import { useNavigate } from 'react-router-dom';
import './DiscussWithEVA.css';
import evaImage from '../assets/eva.jpeg';

const DiscussWithEVA = () => {
  const navigate = useNavigate();

  // Ambil data user dari localStorage
  const username = localStorage.getItem('username') || 'User';
  const email = localStorage.getItem('email') || 'user@example.com';

  // Fungsi untuk lanjut ke halaman DescribeCode
  const handleGoToDescribe = () => {
    navigate('/describe-code');
  };

  return (
    <div className="discuss-container">
      {/* Sidebar EVA */}
      <div className="eva-sidebar">
        <img src={evaImage} alt="EVA" className="eva-image" />
      </div>

      {/* Main Content */}
      <div className="discuss-main">
        {/* User info kanan atas */}
        <div className="user-info">
          <div><strong>{username}</strong></div>
          <div>{email}</div>
        </div>

        {/* Header */}
        <h1 className="discuss-title">Discuss with EVA</h1>
        <p className="discuss-subtitle">AI Programming Assistant</p>

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

        {/* Chat Area */}
        <div className="chat-box">
          <h4>💬 Chat with EVA</h4>
          <div className="chat-log">
            <p><strong>EVA:</strong> Hai! Apa yang ingin kamu diskusikan hari ini?</p>
            <p><strong>You:</strong> Tolong bantu buatkan program analisis data cuaca.</p>
          </div>
          <input type="text" placeholder="Type your message..." className="chat-input" />
        </div>

        {/* Action Buttons */}
        <div className="action-buttons">
          <button className="btn-rangkum">🧠 Final Discussion</button>
          <button className="btn-order" onClick={handleGoToDescribe}>
            ✏️ Describe Code
          </button>
        </div>
      </div>
    </div>
  );
};

export default DiscussWithEVA;
