import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FiMenu, FiX } from 'react-icons/fi';
import './Navbar.css';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          <span className="logo-mark">⬠</span>
          <span className="logo-text">Centric</span>
        </Link>

        <div className={`nav-menu ${mobileMenuOpen ? 'active' : ''}`}>
          <Link to="/" className="nav-link" onClick={() => setMobileMenuOpen(false)}>
            Home
          </Link>
          <Link to="/about" className="nav-link" onClick={() => setMobileMenuOpen(false)}>
            About
          </Link>
          <Link to="/services" className="nav-link" onClick={() => setMobileMenuOpen(false)}>
            Services
          </Link>
          <Link to="/portfolio" className="nav-link" onClick={() => setMobileMenuOpen(false)}>
            Portfolio
          </Link>
          <Link to="/certifications" className="nav-link" onClick={() => setMobileMenuOpen(false)}>
            Certifications
          </Link>
          <Link to="/contact" className="nav-link btn-nav" onClick={() => setMobileMenuOpen(false)}>
            Contact
          </Link>
        </div>

        <div className="hamburger" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          {mobileMenuOpen ? <FiX /> : <FiMenu />}
        </div>
      </div>
    </nav>
  );
}
