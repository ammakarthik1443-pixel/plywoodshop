import React from 'react';
import { FiPhone, FiMail, FiMapPin, FiMessageSquare } from 'react-icons/fi';
import './Contact.css';

export default function Contact() {
  return (
    <section id="contact" className="section-padding contact-hub-wrapper">
      <div className="contact-split-grid">
        <div className="contact-intel-column" data-aos="fade-right">
          <span className="premium-tag">Connect Matrix</span>
          <h2>Initiate Material Specification</h2>
          <p className="contact-narrative-p">
            Connect with our specification desk directly to evaluate architectural drawings, compile high-volume quotes, or arrange dynamic showroom presentation tours.
          </p>

          <div className="intel-channels-list">
            <div className="intel-channel-item">
              <FiPhone className="intel-icon" />
              <div>
                <h4>Direct Operations Line</h4>
                <p>+91 98765 43210</p>
              </div>
            </div>
            <div className="intel-channel-item">
              <FiMail className="intel-icon" />
              <div>
                <h4>Corporate Communications</h4>
                <p>specifications@saicoplywood.com</p>
              </div>
            </div>
            <div className="intel-channel-item">
              <FiMapPin className="intel-icon" />
              <div>
                <h4>Central Showroom Footprint</h4>
                <p>104, Premium Timber Zone, Hardware Street, Junction India</p>
              </div>
            </div>
          </div>

          <a href="https://wa.me/919876543210" target="_blank" rel="noreferrer" className="whatsapp-floating-trigger-btn">
            <FiMessageSquare /> Secure Instant WhatsApp Channel
          </a>
        </div>

        <div className="contact-form-column" data-aos="fade-left">
          <form className="premium-specification-form" onSubmit={(e) => e.preventDefault()}>
            <div className="form-double-row">
              <div className="input-group-unit">
                <label>Full Name</label>
                <input type="text" placeholder="e.g. Harinath K" required />
              </div>
              <div className="input-group-unit">
                <label>Email Address</label>
                <input type="email" placeholder="e.g. harinath@example.com" required />
              </div>
            </div>
            <div className="input-group-unit">
              <label>Select Asset Category</label>
              <select>
                <option>Premium Calibrated Plywood</option>
                <option>High-Gloss Italian Laminates</option>
                <option>Custom Hand-Carved Doors</option>
                <option>Biometric Hardware Automations</option>
              </select>
            </div>
            <div className="input-group-unit">
              <label>Project Narrative / Requirements</label>
              <textarea rows="5" placeholder="Outline material volume metrics or dimensions..."></textarea>
            </div>
            <button type="submit" className="btn-premium">Transmit Specification Inquiry</button>
          </form>
        </div>
      </div>

      <div className="embedded-map-container" data-aos="fade-up">
        <iframe 
          title="Sai & Co Location Map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.85143714856!2d80.2114777!3d13.0445499!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTPCsDAyJzQwLjQiTiA4MMKwMTInNDEuMyJF!5e0!3m2!1sen!2sin!4v1625000000000!5m2!1sen!2sin" 
          width="100%" 
          height="450" 
          style={{ border: 0 }} 
          allowFullScreen="" 
          loading="lazy"
        ></iframe>
      </div>
    </section>
  );
}