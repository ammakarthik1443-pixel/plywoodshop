import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { imageData } from '../assets/imageData';
import './Categories.css';

export default function Categories() {
  const navigate = useNavigate();

  const categoryMap = {
    'Plywood & Boards': 'Plywood',
    'Laminates & Veneers': 'Laminates',
    'Designer Doors': 'Doors',
    'Digital Locks': 'Hardware',
    'Luxury Handles': 'Hardware',
    'Hardware Fittings': 'Hardware',
    'Modular Kitchen': 'All',
    'Wardrobes': 'All'
  };

  const handleCategoryClick = (categoryName) => {
    const category =
      categoryMap[categoryName] || 'All';

    navigate(
      `/products?category=${encodeURIComponent(
        category
      )}`
    );
  };

  return (
    <section
      id="categories"
      className="section-padding categories-bg"
    >
      <div
        className="section-header"
        data-aos="fade-up"
      >
        <span>Curated Architecture</span>
        <h2>
          Signature Architectural Asset Classes
        </h2>
      </div>

      <div className="categories-grid-system">
        {imageData.categories.map((cat, index) => (
          <motion.div
  key={index}
  className="category-showcase-card"
  whileHover={{ y: -10 }}
  transition={{ type: "spring", stiffness: 300 }}
  data-aos="fade-up"
  data-aos-delay={index * 50}
  onClick={() =>
    navigate(`/products?category=${cat.name}`)
  }
>
            <div className="category-image-wrap">
              <img
                src={cat.image}
                alt={cat.name}
                loading="lazy"
              />

              <div className="category-overlay-mask">
                <p className="category-item-metric">
                  {cat.items}
                </p>
              </div>
            </div>

            <div className="category-meta-block">
              <h3>{cat.name}</h3>
              <button className="category-view-btn">
  View Collection →
</button>

              <button
                className="view-all-btn"
                onClick={(e) => {
                  e.stopPropagation();
                  handleCategoryClick(cat.name);
                }}
              >
                
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}