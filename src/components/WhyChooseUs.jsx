import React from 'react';
import { FiCheckCircle, FiShield, FiTrendingUp, FiHelpCircle, FiTruck, FiSettings } from 'react-icons/fi';
import './WhyChooseUs.css';

export default function WhyChooseUs() {
  const values = [
    { icon: <FiShield />, title: "Verified Elite Brands", desc: "Permanent procurement networks ensuring direct access to global standard material runs." },
    { icon: <FiCheckCircle />, title: "Structural Calibration", desc: "100% moisture-stabilized, boiling water proof engineered timbers optimized for long-term wear." },
    { icon: <FiTrendingUp />, title: "Institutional Pricing", desc: "Transparent volume-tier economic matrices scaled directly from core factory floors." },
    { icon: <FiHelpCircle />, title: "Architectural Advisory", desc: "On-site thickness calculations, density mappings, and finish pairing matrices." },
    { icon: <FiTruck />, title: "Secure Fleet Logistics", desc: "Consolidated freight transport preventing structural edge fractures during transit." },
    { icon: <FiSettings />, title: "Machinery Integration", desc: "Precision template mapping for advanced biometric hardware and lock fixtures." }
  ];

  return (
    <section id="why-choose" className="section-padding utilities-value-wrapper">
      <div className="section-header" data-aos="fade-up">
        <span>Strategic Value</span>
        <h2>Operational Parameters of Excellence</h2>
      </div>

      <div className="utilities-value-grid">
        {values.map((v, idx) => (
          <div className="utility-value-node-card" key={idx} data-aos="fade-up" data-aos-delay={idx * 50}>
            <div className="utility-icon-housing">{v.icon}</div>
            <div className="utility-text-block">
              <h3>{v.title}</h3>
              <p>{v.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}