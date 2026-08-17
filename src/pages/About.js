import React from 'react';
import { motion } from 'framer-motion';
import './About.css';

export default function About() {
  return (
    <div className="about">
      {/* Hero Section */}
      <section className="about-hero">
        <img
          src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1600&h=600&fit=crop"
          alt="Centric Design Studio"
          className="hero-image"
        />
        <div className="hero-overlay"></div>
        <motion.div
          className="hero-content"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1>About Centric Design Studio</h1>
          <p>Merging Architecture and Graphic Design Since 2015</p>
        </motion.div>
      </section>

      {/* Mission Section */}
      <section className="mission-section">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2>Our Mission</h2>
            <p className="mission-text">
              Centric Design Studio believes that architecture and graphic design are not separate disciplines—they
              are complementary forces that, when designed together, create powerful unified experiences. We merge
              space with identity, structure with communication, and vision with execution.
            </p>
            <p className="mission-text">
              Every project we undertake begins with a simple premise: the built environment and visual identity
              should speak the same language. This integrated approach ensures that organizations, their spaces,
              and their brands communicate as one cohesive force.
            </p>
          </motion.div>

          {/* Values */}
          <motion.div
            className="values-grid"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            {[
              { title: 'Visionary Solutions', desc: 'Creative excellence that pushes boundaries.' },
              { title: 'Quality Driven', desc: 'Meticulous attention to detail in every project.' },
              { title: 'Sustainable Practice', desc: 'Environmentally responsible, certified design.' },
            ].map((value, i) => (
              <div key={i} className="value-card">
                <h3>{value.title}</h3>
                <p>{value.desc}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Location */}
      <section className="location-section">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2>Based in Detroit</h2>
            <p className="location-text">
              Proudly located at <strong>TechTown</strong>, Wayne State University's Research & Technology Park and
              small business incubator.
            </p>
            <div className="locations">
              <div className="location-item">
                <h4>Main Office</h4>
                <p>607 Shelby St, Suite 721<br />Detroit, MI 48226</p>
              </div>
              <div className="location-item">
                <h4>TechTown Office</h4>
                <p>440 Burroughs, Suite 360<br />Detroit, MI 48202</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
