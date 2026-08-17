import React, { useState } from 'react';
import { motion } from 'framer-motion';
import './Portfolio.css';

export default function Portfolio() {
  const [activeFilter, setActiveFilter] = useState('All');

  const projects = [
    {
      title: 'Detroit Tech Hub Renovation',
      category: 'Architecture',
      image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&h=400&fit=crop',
      description: 'Complete renovation of a historic building into a modern tech workspace',
    },
    {
      title: 'Corporate Identity System',
      category: 'Branding',
      image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=600&h=400&fit=crop',
      description: 'Comprehensive brand identity system for Fortune 500 company',
    },
    {
      title: 'Museum Interior Design',
      category: 'Interiors',
      image: 'https://images.unsplash.com/photo-1565183666519-27122e151e0e?w=600&h=400&fit=crop',
      description: 'Innovative interior design for contemporary art museum',
    },
    {
      title: 'Airport Wayfinding System',
      category: 'Signage',
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop',
      description: 'Complete wayfinding and signage system for major airport terminal',
    },
    {
      title: 'Office Buildout',
      category: 'Architecture',
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&h=400&fit=crop',
      description: 'Modern office space with sustainable design principles',
    },
    {
      title: 'Retail Brand Experience',
      category: 'Branding',
      image: 'https://images.unsplash.com/photo-1499209974033-79611c6dc663?w=600&h=400&fit=crop',
      description: 'Brand environment design for luxury retail flagship store',
    },
    {
      title: 'Hotel Interior Design',
      category: 'Interiors',
      image: 'https://images.unsplash.com/photo-1631049307038-da0ec41d8b00?w=600&h=400&fit=crop',
      description: 'Elegant hospitality interior design and space planning',
    },
    {
      title: 'Environmental Graphics',
      category: 'Signage',
      image: 'https://images.unsplash.com/photo-1533299228282-7d71f3dd4adbe?w=600&h=400&fit=crop',
      description: 'Large-scale environmental graphics and installations',
    },
  ];

  const categories = ['All', 'Architecture', 'Branding', 'Interiors', 'Signage'];

  const filteredProjects =
    activeFilter === 'All'
      ? projects
      : projects.filter((project) => project.category === activeFilter);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  };

  return (
    <div className="portfolio">
      {/* ========== PAGE HERO ========== */}
      <section className="page-hero">
        <div className="hero-overlay-page"></div>
        <div className="container">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Our Portfolio
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Featured projects showcasing our architecture and design expertise
          </motion.p>
        </div>
      </section>

      {/* ========== FILTER & PROJECTS ========== */}
      <section className="portfolio-section">
        <div className="container">
          {/* Filter Buttons */}
          <motion.div
            className="filter-buttons"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            {categories.map((category) => (
              <button
                key={category}
                className={`filter-btn ${activeFilter === category ? 'active' : ''}`}
                onClick={() => setActiveFilter(category)}
              >
                {category}
              </button>
            ))}
          </motion.div>

          {/* Projects Grid */}
          <motion.div
            className="projects-portfolio-grid"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            key={activeFilter}
          >
            {filteredProjects.map((project, index) => (
              <motion.div
                key={index}
                className="portfolio-card"
                variants={itemVariants}
                whileHover={{ y: -15 }}
              >
                <div className="project-image">
                  <img src={project.image} alt={project.title} />
                  <div className="project-hover">
                    <div className="hover-content">
                      <h3>{project.title}</h3>
                      <p>{project.description}</p>
                    </div>
                  </div>
                </div>
                <div className="project-info">
                  <h3>{project.title}</h3>
                  <p className="project-category">{project.category}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ========== CTA ========== */}
      <section className="cta-portfolio">
        <div className="container">
          <motion.div
            className="cta-content"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2>Interested in Seeing More?</h2>
            <p>Let's discuss how we can create something exceptional for your project.</p>
            <a href="/contact" className="btn btn-gold">
              Start a Conversation
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
