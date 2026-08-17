import React from 'react';
import { motion } from 'framer-motion';
import { FiCheck, FiShield, FiTrendingUp } from 'react-icons/fi';
import './Certifications.css';

export default function Certifications() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  };

  const certifications = [
    {
      name: 'DBE',
      fullName: 'Disadvantaged Business Enterprise',
      code: 'HRD0920360',
      issuer: 'Wayne County USDOT',
      icon: FiShield,
      description: 'Recognized as a certified disadvantaged business enterprise for federal and state contracting opportunities.',
    },
    {
      name: 'SBE',
      fullName: 'Small Business Enterprise (Airport Authority)',
      code: 'SBE09-0102',
      issuer: 'Wayne County Airport Authority',
      icon: FiCheck,
      description: 'Certified as a small business enterprise with the Wayne County Airport Authority.',
    },
    {
      name: 'SBE',
      fullName: 'Small Business Enterprise (County)',
      code: 'HRD0920360',
      issuer: 'Wayne County',
      icon: FiCheck,
      description: 'Certified as a small business enterprise with Wayne County government.',
    },
    {
      name: 'MBE',
      fullName: 'Minority Owned Business Enterprise',
      code: 'HRD0920360',
      issuer: 'Wayne County',
      icon: FiTrendingUp,
      description: 'Recognized as a minority-owned business enterprise promoting economic opportunity and diversity.',
    },
    {
      name: 'CBE',
      fullName: 'County Based Enterprise',
      code: 'HRD0920360',
      issuer: 'Wayne County',
      icon: FiCheck,
      description: 'Certified as a county-based enterprise with local economic development focus.',
    },
    {
      name: 'FEP',
      fullName: 'Fair Employment Practices Compliance',
      code: 'HRD0920360',
      issuer: 'State of Michigan',
      icon: FiCheck,
      description: 'Maintains full compliance with fair employment practices and diversity standards.',
    },
  ];

  return (
    <div className="certifications">
      {/* ========== PAGE HERO ========== */}
      <section className="page-hero">
        <div className="hero-overlay-page"></div>
        <div className="container">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Certifications & Credentials
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Recognized certifications establishing credibility and commitment to excellence
          </motion.p>
        </div>
      </section>

      {/* ========== CERTIFICATIONS GRID ========== */}
      <section className="certifications-showcase">
        <div className="container">
          <motion.div
            className="certifications-grid"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
          >
            {certifications.map((cert, index) => {
              const Icon = cert.icon;
              return (
                <motion.div
                  key={index}
                  className="cert-showcase-card"
                  variants={itemVariants}
                  whileHover={{ y: -15 }}
                >
                  <div className="cert-icon">
                    <Icon />
                  </div>

                  <div className="cert-badge-large">{cert.name}</div>

                  <h3>{cert.fullName}</h3>

                  <div className="cert-details">
                    <div className="cert-code">
                      <span className="label">Certification Code</span>
                      <span className="value">{cert.code}</span>
                    </div>
                    <div className="cert-issuer">
                      <span className="label">Issued By</span>
                      <span className="value">{cert.issuer}</span>
                    </div>
                  </div>

                  <p className="cert-description">{cert.description}</p>

                  <div className="cert-verification">
                    <FiCheck className="verify-icon" />
                    <span>Verified Certification</span>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* ========== COMPLIANCE SECTION ========== */}
      <section className="compliance-section dark">
        <div className="container">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, margin: '-100px' }}
          >
            Compliance & Standards
          </motion.h2>

          <motion.div
            className="compliance-grid"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
          >
            {[
              {
                title: 'Government Contracting',
                items: [
                  'Eligible for federal and state contracting',
                  'DBE and SBE certifications',
                  'Government project experience',
                ],
              },
              {
                title: 'Quality Standards',
                items: [
                  'LEED accredited professionals',
                  'BIM coordination certified',
                  'Industry best practices',
                ],
              },
              {
                title: 'Legal Compliance',
                items: [
                  'Fair employment practices',
                  'Diversity commitment',
                  'Regulatory compliance',
                ],
              },
              {
                title: 'Professional Excellence',
                items: [
                  'Licensed architects and designers',
                  'Continuing education',
                  'Professional memberships',
                ],
              },
            ].map((section, index) => (
              <motion.div
                key={index}
                className="compliance-card"
                variants={itemVariants}
              >
                <h3>{section.title}</h3>
                <ul>
                  {section.items.map((item, idx) => (
                    <li key={idx}>
                      <FiCheck />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ========== TRUST STATEMENT ========== */}
      <section className="trust-statement">
        <div className="container">
          <motion.div
            className="trust-content"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <FiShield className="trust-icon" />
            <h2>Why Certification Matters</h2>
            <p>
              Our comprehensive certifications demonstrate our commitment to excellence, diversity, and compliance with
              the highest industry standards. They qualify us to work on government and institutional projects while
              ensuring our clients receive services from verified, trusted professionals.
            </p>
            <p>
              Whether you're a government agency, institutional client, or private organization, our certifications
              provide assurance that you're partnering with a credible, qualified design firm.
            </p>
            <a href="/contact" className="btn">
              Work With Us
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
