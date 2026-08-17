import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import './Home.css';

export default function Home() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  return (
    <div className="home">
      {/* ===== HERO SECTION WITH BACKGROUND IMAGE ===== */}
      <section className="hero">
        <img
          src="https://images.unsplash.com/photo-1487017159836-4e23f3b82fbb?w=1600&h=900&fit=crop"
          alt="Modern Architecture"
          className="hero-background"
        />
        <div className="hero-overlay"></div>

        <motion.div
          className="hero-content"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          <h1>Where Architecture Meets Brand Identity</h1>
          <p>
            Physical space and visual identity are designed as one at Centric Design Studio.
            Buildings and organizations communicate through both their structure and their mark.
          </p>
          <Link to="/contact" className="btn">
            Start Your Project
          </Link>
        </motion.div>

        <motion.div
          className="scroll-indicator"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          ↓
        </motion.div>
      </section>

      {/* ===== MISSION STATEMENT WITH IMAGE ===== */}
      <section className="mission-section">
        <div className="mission-background">
          <img
            src="https://images.unsplash.com/photo-1486325212027-8081e485255e?w=1200&h=600&fit=crop"
            alt="Modern architecture interior"
          />
        </div>
        <div className="mission-overlay-panel">
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2>Good Design Is Good Business</h2>
              <p className="mission-statement">
                Architecture and graphic design are not separate disciplines. At Centric Design
                Studio, we practice them together. The spaces we design and the brands we build
                reinforce each other — so your organization, your people, and your work
                communicate as one.
              </p>
            </motion.div>

            {/* Three Pillars */}
            <motion.div
              className="pillars"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {[
                { title: 'Visionary Solutions', desc: 'Creative excellence that pushes the boundaries of design.' },
                { title: 'Quality Driven', desc: 'Meticulous attention to detail in every project.' },
                { title: 'Sustainable Practice', desc: 'Environmentally responsible design certified by industry standards.' },
              ].map((pillar, i) => (
                <motion.div key={i} className="pillar" variants={itemVariants}>
                  <h3>{pillar.title}</h3>
                  <p>{pillar.desc}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* ===== SERVICES PREVIEW WITH IMAGES ===== */}
      <section className="services-section">
        <div className="container">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            Our Services
          </motion.h2>

          <motion.div
            className="services-grid"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {[
              { title: 'Architecture Design', img: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=400&h=300&fit=crop' },
              { title: 'BIM & 3D Modeling', img: 'https://images.unsplash.com/photo-1503387693106-6f3ee3b6351b?w=400&h=300&fit=crop' },
              { title: 'LEED & Sustainable Design', img: 'https://images.unsplash.com/photo-1486304873009-c3da05edef85?w=400&h=300&fit=crop' },
              { title: 'Interior Design', img: 'https://images.unsplash.com/photo-1565183666519-27122e151e0e?w=400&h=300&fit=crop' },
              { title: 'Environmental Graphic Design', img: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=400&h=300&fit=crop' },
              { title: 'Signage & Wayfinding', img: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=300&fit=crop' },
            ].map((service, i) => (
              <motion.div key={i} className="service-item" variants={itemVariants}>
                <div className="service-image">
                  <img src={service.img} alt={service.title} />
                </div>
                <h3>{service.title}</h3>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ===== PORTFOLIO PREVIEW ===== */}
      <section className="portfolio-preview">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="container"
        >
          Featured Work
        </motion.h2>

        <motion.div
          className="portfolio-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {[
            { title: 'Detroit Tech Hub', img: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&h=400&fit=crop' },
            { title: 'Corporate Branding', img: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=600&h=400&fit=crop' },
            { title: 'Interior Renovation', img: 'https://images.unsplash.com/photo-1565183666519-27122e151e0e?w=600&h=400&fit=crop' },
            { title: 'Wayfinding System', img: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop' },
          ].map((project, i) => (
            <motion.div key={i} className="portfolio-item" variants={itemVariants}>
              <img src={project.img} alt={project.title} />
              <h3>{project.title}</h3>
            </motion.div>
          ))}
        </motion.div>

        <div className="container portfolio-cta">
          <Link to="/portfolio" className="btn">
            View Full Portfolio
          </Link>
        </div>
      </section>

      {/* ===== CERTIFICATIONS BAND ===== */}
      <section className="certifications-band">
        <div className="container">
          <h3>Certified & Trusted</h3>
          <div className="cert-list">
            <span className="cert-badge">DBE</span>
            <span className="cert-badge">SBE</span>
            <span className="cert-badge">MBE</span>
            <span className="cert-badge">CBE</span>
            <span className="cert-badge">FEP</span>
            <span className="cert-badge">LEED</span>
          </div>
          <p className="cert-note">
            Wayne County USDOT Certified • Wayne County Airport Authority • State of Michigan
          </p>
        </div>
      </section>

      {/* ===== TESTIMONIALS ===== */}
      <section className="testimonials-section">
        <div className="container">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            Client Testimonials
          </motion.h2>

          <motion.div
            className="testimonials-grid"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {[
              {
                quote: 'Exceptional design that transformed our space and brand.',
                author: 'Sarah Chen',
                title: 'Director, Development',
              },
              {
                quote: 'Professional, creative, and deeply responsive to our vision.',
                author: 'Michael Johnson',
                title: 'CEO, Tech Firm',
              },
              {
                quote: 'The integration of architecture and branding was seamless and powerful.',
                author: 'Jennifer Davis',
                title: 'Principal, Museum',
              },
            ].map((testimonial, i) => (
              <motion.div key={i} className="testimonial" variants={itemVariants}>
                <p className="quote">"{testimonial.quote}"</p>
                <p className="author">— {testimonial.author}, {testimonial.title}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ===== FINAL CTA WITH FULL-BLEED IMAGE ===== */}
      <section className="final-cta">
        <img
          src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1600&h=600&fit=crop"
          alt="Modern office space"
          className="cta-bg"
        />
        <div className="cta-overlay"></div>
        <motion.div
          className="cta-content"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2>Ready to Transform Your Space and Brand?</h2>
          <p>Let's collaborate on a project that elevates both your architecture and your identity.</p>
          <Link to="/contact" className="btn">
            Get In Touch
          </Link>
        </motion.div>
      </section>
    </div>
  );
}
