import React from 'react';
import './GenerateToCode.css';
import evaImage from '../assets/eva.jpeg';

const GenerateToCode = () => {
  return (
    <div className="container">
      <div className="left-pane">
        <img src={evaImage} alt="EVA" />
      </div>

      <div className="right-pane">
        <h2>Generate Python Code</h2>
        <p>Final Output Generator</p>

        <button className="connect-button">Connect to Visual Studio</button>

        <div className="project-explorer">
          <h4>Project Explorer</h4>
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
          <pre>
{`import requests

def get_weather():
    response = requests.get('https://api.weather.com')
    data = response.json()
    return data['temperature']

print(get_weather())`}
          </pre>
        </div>

        <div className="button-group">
          <button className="regenerate-button">🔄 Regenerate</button>
          <button className="toNext-button">⬇ Download .py</button>
        </div>
      </div>
    </div>
  );
};

export default GenerateToCode;
