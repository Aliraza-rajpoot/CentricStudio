import React from 'react';
import { motion } from 'framer-motion';
import './Services.css';

export default function Services() {
  const services = [
    {
      num: '01',
      title: 'Architecture Design',
      desc: 'Full building and space design services',
      features: ['Master planning', 'Commercial buildings', 'Code compliance', '3D visualization'],
    },
    {
      num: '02',
      title: 'BIM & 3D Modeling',
      desc: 'Building information modeling and visualization',
      features: ['Revit coordination', '3D renderings', 'Virtual walkthroughs', 'Digital assets'],
    },
    {
      num: '03',
      title: 'LEED & Sustainable Design',
      desc: 'Environmentally responsible, certification-ready design',
      features: ['LEED certification', 'Energy modeling', 'Material selection', 'Green strategy'],
    },
    {
      num: '04',
      title: 'Interior Design',
      desc: 'Thoughtful space planning and design',
      features: ['Space planning', 'Material selection', 'Lighting design', 'Fixture specification'],
    },
    {
      num: '05',
      title: 'Environmental Graphic Design',
      desc: 'Brand experience translated into physical space',
      features: ['Experiential design', 'Brand environments', 'Wall graphics', 'Integrations'],
    },
    {
      num: '06',
      title: 'Signage & Wayfinding',
      desc: 'Intuitive navigation and identification systems',
      features: ['Wayfinding strategy', 'Digital signage', 'ADA solutions', 'Fabrication'],
    },
  ];

  return (
    <div className="services-page">
      <section className="services-hero">
        <img
          src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=1600&h=600&fit=crop"
          alt="Services"
          className="hero-image"
        />
        <div className="hero-overlay"></div>
        <motion.div
          className="hero-content"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1>Our Services</h1>
          <p>Complete architecture and design solutions</p>
        </motion.div>
      </section>

      <section className="services-grid-section">
        <div className="container">
          <motion.div
            className="services-grid"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            {services.map((service, i) => (
              <motion.div
                key={i}
                className="service-card"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="service-number">{service.num}</div>
                <h3>{service.title}</h3>
                <p className="service-desc">{service.desc}</p>
                <ul className="service-features">
                  {service.features.map((feature, j) => (
                    <li key={j}>✓ {feature}</li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
}
