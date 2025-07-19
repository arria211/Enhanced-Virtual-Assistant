// src/pages/GenerateToPseudocode.jsx
import React from 'react';
import './GenerateToPseudocode.css';
import aiImage from '../assets/eva.jpeg';

const GenerateToPseudocode = () => {
  return (
    <div className="container">
      {/* Bagian kiri */}
      <div className="left-pane">
        <img src={aiImage} alt="EVA" />
      </div>

      {/* Bagian kanan */}
      <div className="right-pane">
        <h2>Generate Pseudocode</h2>
        <p>AI Code Writer Generator</p>

        <button className="connect-button">Connect to Visual Studio</button>

        <div className="project-explorer">
          <strong>Project Explorer</strong>
          <ul>
            <li>main.py</li>
            <li>
              helpers/
              <ul>
                <li>utils.py</li>
              </ul>
            </li>
            <li>README.md</li>
          </ul>
        </div>

        <div className="generated-code">
{`BEGIN
  CALL weather_api
  GET data
  CALCULATE average_temperature from data
  RETURN average_temperature
END`}
        </div>

        <div className="button-group">
          <button className="regenerate-button">🔁 Regenerate</button>
          <button className="toNext-button">➡️ Generate to Code</button>
        </div>
      </div>
    </div>
  );
};

export default GenerateToPseudocode;