import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { Fade } from "react-awesome-reveal";
import data from './data.js';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <div className="container">
      <div className="header-wrapper">
        <Fade top>
          <h2>
            سلام | नमस्ते | Hello | 你好 | ਕਿਦਾਨ
          </h2>
        </Fade>
        <Fade bottom>
          <h2>
            I'm Shikhar Sakhuja.
          </h2>
        </Fade>
        <Fade bottom cascade>
          <div className="heading-wrapper">
            <h3>
              Building AI-powered hiring solutions at <a href="https://www.teamsinta.com/" target="_blank" rel="noopener noreferrer">SintaHR</a> and fighting financial fraud at <a href="https://discord.com/" target="_blank" rel="noopener noreferrer">Discord</a>.
            </h3>
          </div>
        </Fade>
        <Fade bottom>
          <div className="social-icons">
            {data.social.map((socialLink, index) => {
              const IconComponent = socialLink.icon;
              return (
                <a
                  key={index}
                  href={socialLink.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <IconComponent style={{ color: "#D6D6D6", fontSize: 40 }} />
                </a>
              );
            })}
          </div>
        </Fade>
      </div>
    </div>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
