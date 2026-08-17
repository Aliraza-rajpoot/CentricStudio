import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiMapPin, FiPhone, FiMail, FiCheck } from 'react-icons/fi';
import './Contact.css';

export default function Contact() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    projectType: 'Architecture',
    message: '',
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const validateEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const validatePhone = (phone) => {
    return /^[\d\s\-+()]+$/.test(phone) && phone.replace(/\D/g, '').length >= 10;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};

    if (!formData.fullName.trim()) newErrors.fullName = 'Full name is required';
    if (!formData.email.trim()) newErrors.email = 'Email is required';
    else if (!validateEmail(formData.email)) newErrors.email = 'Please enter a valid email';
    if (!formData.phone.trim()) newErrors.phone = 'Phone number is required';
    else if (!validatePhone(formData.phone)) newErrors.phone = 'Please enter a valid phone number';
    if (!formData.message.trim()) newErrors.message = 'Message is required';

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    // Success - reset form and show confirmation
    setSubmitted(true);
    setTimeout(() => {
      setFormData({
        fullName: '',
        email: '',
        phone: '',
        projectType: 'Architecture',
        message: '',
      });
      setSubmitted(false);
    }, 3000);
  };

  return (
    <div className="contact">
      {/* ========== PAGE HERO ========== */}
      <section className="page-hero">
        <div className="hero-overlay-page"></div>
        <div className="container">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Get In Touch
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Let's discuss your project and how we can help bring your vision to life
          </motion.p>
        </div>
      </section>

      {/* ========== CONTACT SECTION ========== */}
      <section className="contact-section">
        <div className="container">
          <div className="contact-grid">
            {/* Contact Form */}
            <motion.div
              className="contact-form-wrapper"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true, margin: '-100px' }}
            >
              <h2>Send us a Message</h2>

              {submitted ? (
                <motion.div
                  className="success-message"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  <FiCheck className="success-icon" />
                  <h3>Thank You!</h3>
                  <p>We've received your message and will get back to you soon.</p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="contact-form">
                  <div className="form-group">
                    <label htmlFor="fullName">Full Name *</label>
                    <input
                      type="text"
                      id="fullName"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleChange}
                      className={errors.fullName ? 'error' : ''}
                      placeholder="Your name"
                    />
                    {errors.fullName && <span className="error-message">{errors.fullName}</span>}
                  </div>

                  <div className="form-group">
                    <label htmlFor="email">Email Address *</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className={errors.email ? 'error' : ''}
                      placeholder="your@email.com"
                    />
                    {errors.email && <span className="error-message">{errors.email}</span>}
                  </div>

                  <div className="form-group">
                    <label htmlFor="phone">Phone Number *</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className={errors.phone ? 'error' : ''}
                      placeholder="(313) 486-1908"
                    />
                    {errors.phone && <span className="error-message">{errors.phone}</span>}
                  </div>

                  <div className="form-group">
                    <label htmlFor="projectType">Project Type *</label>
                    <select
                      id="projectType"
                      name="projectType"
                      value={formData.projectType}
                      onChange={handleChange}
                    >
                      <option value="Architecture">Architecture Design</option>
                      <option value="Interior">Interior Design</option>
                      <option value="Branding">Branding & Signage</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>

                  <div className="form-group">
                    <label htmlFor="message">Message *</label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      className={errors.message ? 'error' : ''}
                      placeholder="Tell us about your project..."
                      rows="6"
                    ></textarea>
                    {errors.message && <span className="error-message">{errors.message}</span>}
                  </div>

                  <button type="submit" className="btn">
                    Send Message
                  </button>
                </form>
              )}
            </motion.div>

            {/* Contact Information */}
            <motion.div
              className="contact-info-wrapper"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true, margin: '-100px' }}
            >
              <h2>Contact Information</h2>

              <div className="info-card">
                <div className="info-icon">
                  <FiMapPin />
                </div>
                <div className="info-content">
                  <h3>Detroit Office</h3>
                  <p>607 Shelby St, Suite 721</p>
                  <p>Detroit, MI 48226</p>
                  <p>United States</p>
                </div>
              </div>

              <div className="info-card">
                <div className="info-icon">
                  <FiMapPin />
                </div>
                <div className="info-content">
                  <h3>TechTown Office</h3>
                  <p>440 Burroughs, Suite 360</p>
                  <p>Detroit, MI 48202</p>
                  <p>United States</p>
                </div>
              </div>

              <div className="info-card">
                <div className="info-icon">
                  <FiPhone />
                </div>
                <div className="info-content">
                  <h3>Phone</h3>
                  <a href="tel:+13134861908">+1 (313) 486-1908</a>
                </div>
              </div>

              <div className="info-card">
                <div className="info-icon">
                  <FiMail />
                </div>
                <div className="info-content">
                  <h3>Email</h3>
                  <a href="mailto:hello@centricdesign.com">hello@centricdesign.com</a>
                </div>
              </div>

              <div className="response-time">
                <p><strong>Response Time:</strong> We typically respond within 24 business hours</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ========== MAP SECTION ========== */}
      <section className="map-section">
        <motion.div
          className="map-container"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <iframe
            title="Centric Design Studio Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2952.2869471626646!2d-83.04573!3d42.3313!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8824cb0f5f5f5f5f%3A0x5f5f5f5f5f5f5f5f!2s607%20Shelby%20St%2C%20Detroit%2C%20MI%2048226!5e0!3m2!1sen!2sus!4v1234567890"
            width="100%"
            height="500"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </motion.div>
      </section>
    </div>
  );
}
