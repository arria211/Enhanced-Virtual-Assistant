import React from 'react';
import './GenerateToNLP.css';
import evaImage from '../assets/eva.jpeg';

const GenerateToNLP = () => {
  const username = localStorage.getItem('username') || 'User';
  const email = localStorage.getItem('email') || 'user@example.com';

  const dummyNLP = `{
    "task": "generate_python_code",
    "description": "Program untuk menganalisis data cuaca dari file CSV dan menampilkan grafik suhu harian",
    "inputs": ["file_path: string"],
    "outputs": ["line_chart: image"]
  }`;

  return (
    <div className="nlp-container">
      {/* Sidebar EVA */}
      <div className="eva-sidebar">
        <img src={evaImage} alt="EVA" className="eva-image" />
      </div>

      {/* Main Content */}
      <div className="nlp-main">
        {/* User info kanan atas */}
        <div className="user-info">
          <div><strong>{username}</strong></div>
          <div>{email}</div>
        </div>

        <h1 className="nlp-title">NLP Format</h1>
        <p className="nlp-subtitle">This is NLP Format from your description</p>

        <div className="nlp-box">
          <pre>{dummyNLP}</pre>
        </div>

        <div className="nlp-buttons">
          <button className="btn-back">🔙 Back</button>
          <button className="btn-next">🚀 Generate to Pseocode</button>
        </div>
      </div>
    </div>
  );
};

export default GenerateToNLP;
