import React from 'react';
import { FiAward, FiLayers, FiUsers, FiCpu } from 'react-icons/fi';
import './About.css';

export default function About() {
  const metrics = [
    { icon: <FiAward />, value: "15+", label: "Years Luxury Heritage" },
    { icon: <FiLayers />, value: "5000+", label: "Structural Frameworks" },
    { icon: <FiUsers />, value: "2000+", label: "Elite Client Portfolios" },
    { icon: <FiCpu />, value: "50+", label: "Global Brand Affiliations" }
  ];

  return (
    <section id="about" className="section-padding about-section-wrapper">
      <div className="about-split-container">
        <div className="about-visual-canvas" data-aos="fade-right">
          <div className="main-canvas-img">
            <img src="https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=800&q=80" alt="Luxury Interior" />
          </div>
          <div className="accent-canvas-box">
            <h3>Crafting Masterpieces Since 2011</h3>
          </div>
        </div>

        <div className="about-textual-column" data-aos="fade-left">
          <span className="premium-tag">About Sai & Co</span>
          <h2>Where Material Science Meets High Architectural Artistry</h2>
          <p className="lead-paragraph">
            For more than fifteen years, Sai & Co has anchored high-end residential architectures, commercial developments, and bespoke interior spaces with uncompromised timber assets and advanced architectural utilities.
          </p>
          <p className="body-paragraph">
            We partner exclusively with premium grading houses to deliver certified structural materials that ensure permanent resilience against time, climate, and structural load.
          </p>

          <div className="metrics-dashboard-grid">
            {metrics.map((m, idx) => (
              <div className="metric-single-card" key={idx}>
                <div className="metric-icon-sphere">{m.icon}</div>
                <div className="metric-numerical-text">{m.value}</div>
                <p className="metric-descriptor">{m.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}