import React from 'react';
import './Edu.css';

// 1–7 image imports
import DispatchIcon from "../../assets/Dispatch.png";
import HeadsetIcon from "../../assets/Headset.png";
import AEduIcon from "../../assets/AEdu.png";
import KnowIcon from "../../assets/Know.png";
import ManualsIcon from "../../assets/mannual.png";
import EducationalIcon from "../../assets/Educational.png";
import FaqsIcon from "../../assets/Faqs.png";

export default function EducationalSection() {
  return (
    <div className="educational-container">
      <div className="educational-header">
        <h2 className="educational-title">Educational</h2>
        <p className="educational-description">
          Here you will find a wide variation of knowledge and learning material. 
          You can also book an appointment with our support team.
        </p>
        <button className="book-account-btn">Book Account Review</button>
      </div>

      {/* --- Walkthroughs Section --- */}
      <h3 className="section-title">Walkthroughs</h3>
      <div className="cards-grid">
        <div className="card dispatch-get-started">
          <div className="card-icon">
            <img src={DispatchIcon} alt="Dispatch Get Started" className="edu-icon" />
          </div>
          <h4 className="card-title">Dispatch</h4>
          <p className="card-subtitle">Get started</p>
        </div>

        <div className="card dispatch-first-job">
          <div className="card-icon">
            <img src={HeadsetIcon} alt="Dispatch First Job" className="edu-icon" />
          </div>
          <h4 className="card-title">Dispatch</h4>
          <p className="card-subtitle">First Job</p>
        </div>

        <div className="card dispatch-analytics">
          <div className="card-icon">
            <img src={AEduIcon} alt="Dispatch Analytics" className="edu-icon" />
          </div>
          <h4 className="card-title">Dispatch</h4>
          <p className="card-subtitle">Analytics</p>
        </div>
      </div>

      {/* --- Other Material Section --- */}
      <h3 className="section-title">Other Material</h3>
      <div className="cards-grid">
        <div className="card knowledge-base">
          <div className="card-icon">
            <img src={KnowIcon} alt="Knowledge Base" className="edu-icon" />
          </div>
          <h4 className="card-title">Knowledge Base</h4>
        </div>

        <div className="card manuals-book">
          <div className="card-icon">
            <img src={ManualsIcon} alt="Manuals" className="edu-icon" />
          </div>
          <h4 className="card-title">Manuals</h4>
        </div>

        <div className="card manuals-video">
          <div className="card-icon">
            <img src={EducationalIcon} alt="Educational Material" className="edu-icon" />
          </div>
          <h4 className="card-title">Educational Material</h4>
        </div>
      </div>

      {/* --- FAQs Section --- */}
      <div className="cards-grid faqs-grid">
        <div className="card faqs-card">
          <div className="card-icon">
            <img src={FaqsIcon} alt="FAQs" className="edu-icon" />
          </div>
          <h4 className="card-title">FAQs</h4>
        </div>
      </div>
    </div>
  );
}
