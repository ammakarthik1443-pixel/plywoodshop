import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Home.css'; // Unga home css file name correct-a check pannikonga

export default function Home() {
  const navigate = useNavigate();

  // Categories list with representative images
  const assetClasses = [
    { 
      name: 'Plywood', 
      image: 'https://images.unsplash.com/photo-1533090161767-e6ffed986c88?auto=format&fit=crop&w=600&q=80' 
    },
    { 
      name: 'Laminates', 
      image: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=600&q=80' 
    },
    { 
      name: 'Doors', 
      image: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=600&q=80' 
    },
    { 
      name: 'Hardware', 
      image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=600&q=80' 
    },
    { 
      name: 'Glass', 
      image: 'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=600&q=80' 
    }
  ];

  // Category click aana, antha specific category page-ku kondu poga
  const handleCategoryClick = (categoryName) => {
    navigate(`/products?category=${categoryName}`);
  };

  return (
    <div className="home-container">
      {/* Hero Section (if you have one, keep it here) */}
      
      <section className="asset-classes-section">
        <div className="section-header">
          <p className="subtitle">SIGNATURE OFFERINGS</p>
          <h2>Architectural Asset Classes</h2>
          <div className="divider-line"></div>
        </div>

        <div className="categories-grid">
          {assetClasses.map((item, index) => (
            <div 
              key={index} 
              className="category-card"
              onClick={() => handleCategoryClick(item.name)}
            >
              <div className="image-wrapper">
                <img src={item.image} alt={item.name} />
                <div className="overlay">
                  <span className="category-label">{item.name.toUpperCase()}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}