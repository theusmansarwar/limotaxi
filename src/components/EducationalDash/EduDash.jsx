import React from 'react';
import './Edu.css';

export default function EducationalSection() {
  return (
    <div className="educational-container">
      <div className="educational-header">
        <h2 className="educational-title">Educational</h2>
        <p className="educational-description">
          Here you will find a wide variation of knowledge and learning material. You can also book an appointment
          with our support team.
        </p>
        <button className="book-account-btn">Book Account Review</button>
      </div>

      <h3 className="section-title">Walkthroughs</h3>
      <div className="cards-grid">
        <div className="card dispatch-get-started">
          <div className="card-icon">
            <div className="icon-circle"></div>
            <div className="steering-wheel">
              <div className="hand-left"></div>
              <div className="hand-right"></div>
            </div>
          </div>
          <h4 className="card-title">Dispatch</h4>
          <p className="card-subtitle">Get started</p>
        </div>

        <div className="card dispatch-first-job">
          <div className="card-icon">
            <div className="headphone-band"></div>
            <div className="headphone-circle"></div>
          </div>
          <h4 className="card-title">Dispatch</h4>
          <p className="card-subtitle">First Job</p>
        </div>

        <div className="card dispatch-analytics">
          <div className="card-icon">
            <div className="monitor">
              <div className="bar bar-1"></div>
              <div className="bar bar-2"></div>
              <div className="bar bar-3"></div>
              <div className="bar bar-4"></div>
              <div className="user-icon-circle"></div>
            </div>
          </div>
          <h4 className="card-title">Dispatch</h4>
          <p className="card-subtitle">Get started</p>
        </div>
      </div>

      <h3 className="section-title">Other Material</h3>
      <div className="cards-grid">
        <div className="card knowledge-base">
          <div className="card-icon">
            <div className="database-stack">
              <div className="db-disk"></div>
              <div className="db-disk"></div>
              <div className="db-disk"></div>
              <div className="bulb-icon-circle">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5">
                  <path d="M9 18h6M10 22h4M15 8a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"/>
                  <path d="M12 3v2"/>
                </svg>
              </div>
              <div className="book-icon-wrapper">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5">
                  <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/>
                  <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/>
                </svg>
              </div>
            </div>
          </div>
          <h4 className="card-title">Knowledge Base</h4>
        </div>

        <div className="card manuals-book">
          <div className="card-icon">
            <div className="book-stack">
              <div className="book-pages"></div>
              <div className="gear-icon-circle">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5">
                  <circle cx="12" cy="12" r="3"/>
                  <path d="M12 1v6m0 6v6M1 12h6m6 0h6"/>
                </svg>
              </div>
            </div>
          </div>
          <h4 className="card-title">Manuals</h4>
        </div>

        <div className="card manuals-video">
          <div className="card-icon">
            <div className="video-player">
              <div className="play-stripes">
                <div className="stripe"></div>
                <div className="stripe"></div>
                <div className="stripe"></div>
              </div>
              <div className="play-button"></div>
            </div>
          </div>
          <h4 className="card-title">Manuals</h4>
        </div>
      </div>

      <div className="cards-grid faqs-grid">
        <div className="card faqs-card">
          <div className="card-icon">
            <div className="chat-bubble">
              <div className="question-mark-circle">?</div>
            </div>
          </div>
          <h4 className="card-title">FAQs</h4>
        </div>
      </div>
    </div>
  );
}