import React from 'react';
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaYoutube } from 'react-icons/fa';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="corporate-footer-wrapper">
      <div className="footer-top-matrix">
        <div className="footer-brand-column">
          <h3>SAI & CO</h3>
          <p>The definitive material house for elite architectural specifications, calibrated timber infrastructure, and biometric utility integrations.</p>
          <div className="social-links-row">
            <a href="#home"><FaFacebookF /></a>
            <a href="#home"><FaInstagram /></a>
            <a href="#home"><FaLinkedinIn /></a>
            <a href="#home"><FaYoutube /></a>
          </div>
        </div>

        <div className="footer-links-column">
          <h4>Asset Classes</h4>
          <ul>
            <li><a href="#categories">Calibrated Ply</a></li>
            <li><a href="#categories">Veneers & Louvers</a></li>
            <li><a href="#categories">Designer Blockboards</a></li>
            <li><a href="#categories">IoT Biometric Automation</a></li>
          </ul>
        </div>

        <div className="footer-links-column">
          <h4>Enterprise</h4>
          <ul>
            <li><a href="#about">Corporate Profile</a></li>
            <li><a href="#why-choose">Operational Strategy</a></li>
            <li><a href="#gallery">Case Materials</a></li>
            <li><a href="#contact">Contact Matrix</a></li>
          </ul>
        </div>

        <div className="footer-links-column">
          <h4>Strategic Resources</h4>
          <ul>
            <li><a href="#visualizer">3D Configurator</a></li>
            <li><a href="#products-catalog">Showroom Catalog</a></li>
            <li><a href="#home">Specification Sheets</a></li>
            <li><a href="#home">Supply Chains</a></li>
          </ul>
        </div>
      </div>

      <div className="footer-base-copyright-bar">
        <p>&copy; {new Date().getFullYear()} Sai & Co Plywood & Hardware. All Sovereign Rights Reserved. Designed for High-Performance Environments.</p>
      </div>
    </footer>
  );
}