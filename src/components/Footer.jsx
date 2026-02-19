import React from 'react';
import { FaInstagram, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          {/* Left Column */}
          <div className="footer-about">
            <div className="footer-brand">
              <img src="/assets/BigSoc Logo White.png" alt="Big O Society" className="footer-logo-img" />
              <h2 className="footer-logo-text">CodeWars 4.0</h2>
            </div>
            <p className="footer-desc">
              Part of Anaadyanta 2026 - NMIT's Techno-Cultural Fest.
              The ultimate coding competition for college students and tech enthusiasts.
            </p>
            <div className="social-icons">
              <a href="https://www.instagram.com/bigsoc.nmit?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" className="social-link" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
              <a href="mailto:bigsoc.nmit@gmail.com" className="social-link"><FaEnvelope /></a>
            </div>
          </div>

          {/* Middle Column */}
          <div className="footer-links-col">
            <h3>Quick Links</h3>
            <ul className="footer-nav">
              <li><a href="#home">Home</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#roadmap">Timeline</a></li>
              <li><a href="#rounds">Rounds</a></li>
              <li><a href="#rules">Rules</a></li>
              <li><a href="#team">Team</a></li>
              <li><a href="#faq">FAQ</a></li>
            </ul>
          </div>

          {/* Contact Column */}
          <div className="footer-contact-col">
            <h3>Contact</h3>
            <div className="contact-details">
              <ul className="contact-list">
                <li>
                  <span className="contact-name">Mridul Tiwari</span>
                  <a href="tel:+919463928232" className="contact-number">+91 94639 28232</a>
                </li>
                <li>
                  <span className="contact-name">Aarjika Lahiri</span>
                  <a href="tel:+918318443489" className="contact-number">+91 8318443489</a>
                </li>
                <li>
                  <span className="contact-name">Prem Piyush</span>
                  <a href="tel:+916366521333" className="contact-number">+91 6366521333</a>
                </li>
                <li style={{ marginTop: '1rem' }}>
                  <span className="contact-name">Email</span>
                  <a href="mailto:bigsoc.nmit@gmail.com" className="contact-number">bigsoc.nmit@gmail.com</a>
                </li>
              </ul>
            </div>
          </div>

          {/* Map Column */}
          <div className="footer-map-col">
            <div className="location-header">
              <h3>Location</h3>
              <a
                href="https://www.google.com/maps/dir//Nitte+Meenakshi+Institute+of+Technology,+Bengaluru"
                target="_blank"
                rel="noopener noreferrer"
                className="directions-link"
              >
                Get Directions
              </a>
            </div>
            <div className="map-container">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3884.2709668585!2d77.589839!3d13.132470!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae161b0c0a0a01%3A0x6b63300a84518451!2sNitte%20Meenakshi%20Institute%20of%20Technology!5e0!3m2!1sen!2sin!4v1677654321098!5m2!1sen!2sin"
                width="100%"
                height="150"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="NMIT Location"
              ></iframe>
            </div>
            <p className="map-address">📍 NMIT, Bengaluru, India</p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} CodeWars 4.0 - All rights reserved.</p>
          <div className="legal-links">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
          </div>
        </div>
      </div>

      <style jsx>{`
        .footer {
          background-color: #000;
          padding: 4rem 0 2rem;
          border-top: 1px solid rgba(255, 255, 255, 0.1);
          margin-top: auto;
          position: relative;
          z-index: 10;
        }

        .footer-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 3rem;
          margin-bottom: 4rem;
        }

        @media (min-width: 1024px) {
          .footer-grid {
            grid-template-columns: 2fr 1fr 1fr 1.5fr; /* Added column for map */
            gap: 3rem;
          }
        }
        
        @media (min-width: 768px) and (max-width: 1023px) {
           .footer-grid {
             grid-template-columns: 1fr 1fr;
           }
           .footer-about {
             grid-column: span 2;
           }
        }

        /* Left Column */
        .footer-brand {
          display: flex;
          align-items: center;
          gap: 1rem;
          margin-bottom: 1rem;
        }

        .footer-logo-img {
          width: 50px;
          height: 50px;
          object-fit: contain;
          border-radius: 50%;
        }

        .footer-logo-text {
          font-family: var(--font-mono);
          font-size: 1.8rem;
          color: var(--primary-color);
          margin-bottom: 0;
          letter-spacing: 1px;
        }

        .footer-desc {
          color: #aaa;
          font-size: 0.9rem;
          line-height: 1.6;
          max-width: 350px;
          margin-bottom: 1.5rem;
        }

        .social-icons {
          display: flex;
          gap: 1.5rem;
        }

        .social-link {
          color: #fff;
          font-size: 1.5rem;
          transition: color 0.3s;
        }

        .social-link:hover {
          color: var(--primary-color);
        }

        /* Middle & Right Columns */
        h3 {
          font-family: var(--font-mono);
          font-size: 1.2rem;
          color: #fff;
          margin-bottom: 1.5rem;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }

        .footer-nav, .contact-list {
          list-style: none;
          padding: 0;
        }

        .contact-details .contact-list li {
           margin-bottom: 1.2rem;
        }

        .contact-name {
           display: block;
           color: #fff;
           font-weight: 600;
           margin-bottom: 0.2rem;
        }

        /* Specificity boosted to ensuring primary color overrides default styling */
        .contact-details .contact-number {
           display: block;
           color: var(--primary-color);
           font-family: var(--font-mono);
           font-size: 0.9rem;
           text-decoration: none;
           transition: all 0.3s;
        }

        .contact-details .contact-number:hover {
           color: #fff;
           text-shadow: 0 0 5px var(--primary-color);
        }
        
        .contact-label {
           color: #888;
        }

        .footer-nav li, .contact-list li {
          margin-bottom: 0.8rem;
        }

        .footer-nav a, .contact-list a, .contact-list li {
          color: #bbb;
          text-decoration: none;
          font-size: 0.95rem;
          transition: color 0.2s;
        }

        .footer-nav a:hover, .contact-list a:hover {
          color: var(--primary-color);
        }
        
        /* Map Column */
        .location-header {
           display: flex;
           justify-content: space-between;
           align-items: center;
           margin-bottom: 1.5rem;
        }

        .location-header h3 {
           margin-bottom: 0;
        }

        .directions-link {
           color: var(--primary-color);
           font-size: 0.8rem;
           text-decoration: none;
           border: 1px solid var(--primary-color);
           padding: 0.3rem 0.8rem;
           border-radius: 20px;
           transition: all 0.3s;
        }

        .directions-link:hover {
           background: var(--primary-color);
           color: #000;
        }

        .map-container {
           border-radius: 10px;
           overflow: hidden;
           border: 1px solid rgba(255, 255, 255, 0.1);
        }
        
        .map-address {
           margin-top: 1rem;
           color: #bbb;
           font-size: 0.9rem;
           display: flex;
           align-items: center;
           gap: 0.5rem;
        }
        
        .map-container iframe {
           display: block;
           filter: grayscale(100%) invert(90%); /* Dark mode map style */
        }
        
        .map-container:hover iframe {
           filter: grayscale(0%);
           transition: filter 0.3s;
        }

        /* Bottom Bar */
        .footer-bottom {
          border-top: 1px solid rgba(255, 255, 255, 0.1);
          padding-top: 2rem;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 1rem;
          color: #666;
          font-size: 0.85rem;
        }

        .legal-links {
          display: flex;
          gap: 2rem;
        }

        .legal-links a {
          color: #666;
          text-decoration: none;
          transition: color 0.2s;
        }

        .legal-links a:hover {
          color: #fff;
        }

        @media (min-width: 768px) {
          .footer-bottom {
            flex-direction: row;
            justify-content: space-between;
          }
        }
      `}</style>
    </footer>
  );
};

export default Footer;
