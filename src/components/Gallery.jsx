import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiZoomIn, FiX } from 'react-icons/fi';
import { imageData } from '../assets/imageData';
import './Gallery.css';

export default function Gallery() {
  const [activeLightbox, setActiveLightbox] = useState(null);

  return (
    <section id="gallery" className="section-padding gallery-wrapper">
      <div className="section-header" data-aos="fade-up">
        <span>Design Archive</span>
        <h2>Architectural Gallery & Case Studies</h2>
      </div>

      <div className="gallery-dense-masonry">
        {imageData.gallery.map((item, index) => (
          <div 
            key={item.id} 
            className={`gallery-item-tile tile-size-${(index % 3) + 1}`}
            data-aos="zoom-in"
            data-aos-delay={index * 30}
          >
            <img src={item.img} alt={item.title} loading="lazy" />
            <div className="tile-hover-curtain" onClick={() => setActiveLightbox(item)}>
              <FiZoomIn className="zoom-icon-svg" />
              <h4>{item.title}</h4>
            </div>
          </div>
        ))}
      </div>

      <AnimatePresence>
        {activeLightbox && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="lightbox-backdrop"
          >
            <button className="close-lightbox-btn" onClick={() => setActiveLightbox(null)}><FiX /></button>
            <motion.div 
              initial={{ scale: 0.9, y: 30 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 30 }}
              className="lightbox-content-frame"
            >
              <img src={activeLightbox.img} alt={activeLightbox.title} />
              <div className="lightbox-caption-bar">
                <h3>{activeLightbox.title}</h3>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}