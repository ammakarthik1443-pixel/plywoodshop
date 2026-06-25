import React from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import { productData } from '../assets/productData'; 
import './Products.css'; 

export default function Products() {
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();

  const currentCategory = searchParams.get('category') || 'All';
  
  const categories = ['All', 'Plywood', 'Laminates', 'Doors', 'Hardware', 'Glass'];

  const handleCategoryChange = (cat) => {
    setSearchParams({ category: cat });
  };

  const filteredProducts = currentCategory === 'All' 
    ? productData 
    : productData.filter(product => product.category === currentCategory);

  return (
    // ✨ Container-ku mela 50px padding kuduthu erakirukom
    <div className="luxury-products-section" style={{ paddingTop: '50px' }}>
      
      {/* ✨ Filter Bar-ku mela nalla gap matrum spacing add panniyachu */}
      <div 
        className="luxury-filter-bar" 
        style={{ 
          display: 'flex', 
          justifyContent: 'center', 
          gap: '15px', 
          marginTop: '20px', 
          marginBottom: '50px',
          flexWrap: 'wrap'
        }}
      >
        {categories.map((cat) => (
          <button 
            key={cat} 
            className={`filter-tab-btn ${currentCategory === cat ? 'active-tab' : ''}`}
            onClick={() => handleCategoryChange(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* 4-Column Masonry Grid */}
      <div className="products-masonry-layout">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <div key={product.id} className="premium-product-vault-card">
              
              {/* Image Chamber */}
              <div className="product-media-chamber">
                <span className="product-badge-node">{product.category}</span>
                <img src={product.heroImage} alt={product.name} />
              </div>

              {/* Product Info */}
              <div className="product-spec-base">
                <h4>{product.name}</h4>
                <p className="product-card-brief-desc">
                  {product.shortDesc || "Premium architectural asset available."}
                </p>
                
                {/* Price and Action Button */}
                <div className="product-price-row">
                  <span style={{ fontWeight: 'bold', color: '#333' }}>₹{product.price}</span>
                  <button 
                    className="card-explore-action-btn"
                    style={{ background: 'none', border: 'none', cursor: 'pointer' }}
                    onClick={() => navigate(`/product/${product.id}`)}
                  >
                    View Details <span className="arrow-vector-span">→</span>
                  </button>
                </div>
              </div>

            </div>
          ))
        ) : (
          <div style={{ gridColumn: '1 / -1', textAlign: 'center', padding: '50px', color: '#777' }}>
            <p>Sorry, no products available in {currentCategory} right now.</p>
          </div>
        )}
      </div>
    </div>
  );
}