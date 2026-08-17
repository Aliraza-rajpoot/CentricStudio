import React from 'react';
import { Link } from 'react-router-dom';
import { FiMapPin, FiPhone, FiMail, FiLinkedin } from 'react-icons/fi';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="container">
          <div className="footer-grid">
            {/* Brand Section */}
            <div className="footer-section">
              <h3 className="footer-logo">
                <span>CENTRIC</span>
                <span className="footer-tagline">Design Studio</span>
              </h3>
              <p className="footer-description">
                Where Architecture Meets Brand Identity. Designing spaces and experiences that communicate excellence.
              </p>
              <div className="social-links">
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" title="LinkedIn">
                  <FiLinkedin />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div className="footer-section">
              <h4>Quick Links</h4>
              <ul className="footer-links">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/services">Services</Link></li>
                <li><Link to="/portfolio">Portfolio</Link></li>
              </ul>
            </div>

            {/* Services */}
            <div className="footer-section">
              <h4>Services</h4>
              <ul className="footer-links">
                <li><a href="#architecture">Architecture Design</a></li>
                <li><a href="#bim">BIM & 3D Modeling</a></li>
                <li><a href="#leed">Sustainable Design</a></li>
                <li><a href="#signage">Signage & Wayfinding</a></li>
              </ul>
            </div>

            {/* Contact Info */}
            <div className="footer-section">
              <h4>Get In Touch</h4>
              <div className="footer-contact">
                <div className="contact-item">
                  <FiMapPin />
                  <div>
                    <p className="contact-label">Detroit Office</p>
                    <p>607 Shelby St, Ste 721<br />Detroit, MI 48226</p>
                  </div>
                </div>
                <div className="contact-item">
                  <FiPhone />
                  <div>
                    <p className="contact-label">Phone</p>
                    <a href="tel:+13134861908">+1 (313) 486-1908</a>
                  </div>
                </div>
                <div className="contact-item">
                  <FiMail />
                  <div>
                    <p className="contact-label">Email</p>
                    <a href="mailto:hello@centricdesign.com">hello@centricdesign.com</a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Certifications */}
          <div className="footer-certifications">
            <p className="certifications-label">Certified & Trusted</p>
            <div className="certifications-badges">
              <span className="badge">DBE</span>
              <span className="badge">SBE</span>
              <span className="badge">MBE</span>
              <span className="badge">FEP</span>
            </div>
          </div>

          {/* Copyright */}
          <div className="footer-bottom">
            <p>&copy; 2026 Centric Design Studio. All rights reserved.</p>
            <p>Based at TechTown, Wayne State University Research & Technology Park</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
