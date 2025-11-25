import React, { useState } from 'react';
import './TaxiCallerEmbed.css';

const TaxiCallerEmbed = () => {
  const [selectedSize, setSelectedSize] = useState('Medium');
  
  const embedCode = `<!-- Start TaxiCaller Booking Form -->
<div id="taxicaller-booking-form" style="width: 540px"></div>
<script src="https://passenger.taxicaller.net/embed/embed-v1.0.0.js"></script>
<script>
  new TaxiCaller.PassengerApp({
    element: '#taxicaller-booking-form',
    app: 'taxicaller',
    company: 63291,
    heightDesktop: '700px',
    heightMobile: '200px',
    mobileBreakpoint: '992px',
    returnMessage: '<! Return to website',
  })
</script>
<!-- End TaxiCaller Booking Form -->`;

  const copyToClipboard = () => {
    navigator.clipboard.writeText(embedCode);
  };

  return (
    <div className="taxicaller-container">
      
      {/* Main Heading */}
      <div className="main-content">
        <h1 className="page-title">ONLINE BOOKING FOR YOUR WEBSITE</h1>
        <p className="subtitle">
          Customize your web booking form and use the code to embed it on your website. This is the responsive version designed for both phones and computers. <span className="link-text">You may use the older desktop-optimized version instead.</span>
        </p>

        {/* Two Column Layout */}
        <div className="two-column-layout">
          {/* Left Column - Configure */}
          <div className="left-column">
            <h2 className="section-title">CONFIGURE YOUR EMBED CODE</h2>
            <div className="size-selector">
              <label className="size-label">Size:</label>
              <select 
                className="size-dropdown"
                value={selectedSize}
                onChange={(e) => setSelectedSize(e.target.value)}
              >
                <option>Small</option>
                <option>Medium</option>
                <option>Large</option>
              </select>
            </div>
          </div>

          {/* Right Column - Code Snippet */}
          <div className="right-column">
            <h2 className="section-title">CODE SNIPPET FOR YOUR WEBSITE</h2>
            <p className="email-notice">
              Please send a copy of the operations license of your company to <span className="email-link">legal@taxicaller.com.</span>
            </p>
            <div className="code-box">
              <pre className="code-content">{embedCode}</pre>
            </div>
          </div>
        </div>

        {/* Preview Section */}
        <div className="preview-section">
          {/* Mobile Preview */}
          <div className="preview-box">
            <h3 className="preview-title">MOBILE PREVIEW</h3>
            <p className="preview-description">
              This is a non-interactive preview of what the embedded booking form will look like on mobile devices. Clicking the button on the real version will bring up a fullscreen booking form.
            </p>
            <div className="mobile-preview">
              <div className="mobile-frame">
                <div className="booking-button">
                  <h4>MAKE A BOOKING</h4>
                  <p className="press-text">PRESS HERE</p>
                  <div className="phone-icon">
                    <div className="icon-circle">
                      <svg width="30" height="40" viewBox="0 0 30 40" fill="none">
                        <rect x="8" y="5" width="14" height="30" rx="2" stroke="white" strokeWidth="2" fill="none"/>
                        <line x1="10" y1="32" x2="20" y2="32" stroke="white" strokeWidth="1"/>
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Computer Preview */}
          <div className="preview-box">
            <h3 className="preview-title">COMPUTER PREVIEW</h3>
            <p className="preview-description">
              This is what your booking form will look like to computer users. The preview below is the live version, just like how it will look and function on your website.
            </p>
            <div className="computer-preview">
              <div className="computer-frame">
                <div className="booking-header">
                  <span className="booking-title">MAKE A BOOKING</span>
                  {/* <div className="info-icon">
                    <span>i</span>
                  </div> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TaxiCallerEmbed;