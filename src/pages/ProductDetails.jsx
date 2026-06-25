import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { productData } from '../assets/productData'; // Path correct-a check pannikonga
import {
  FaArrowLeft,
  FaShoppingCart,
  FaMinus,
  FaPlus,
  FaStar
} from 'react-icons/fa';
import './ProductDetails.css';

export default function ProductDetails() {
  const { productId } = useParams();
  const navigate = useNavigate();

  // 1. Direct-a product find panrom (useEffect thevai illa, so error varathu!)
  const product = productData.find(p => p.id === productId);

  // 2. Quantity State (- 1 + feature)
  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState('18mm');

  if (!product) {
    return (
      <div className="product-details-container">
        <h2>Product not found!</h2>
        <button onClick={() => navigate(-1)}>Go Back</button>
      </div>
    );
  }

  // Quantity control functions
  const handleIncrease = () => setQuantity(prev => prev + 1);
  const handleDecrease = () => setQuantity(prev => (prev > 1 ? prev - 1 : 1));

  const handleAddToCart = () => {
  const existingCart =
    JSON.parse(localStorage.getItem('cart')) || [];

  const existingItem = existingCart.find(
    item => item.id === product.id
  );

  if (existingItem) {
    existingItem.quantity += quantity;
  } else {
    existingCart.push({
      ...product,
      quantity
    });
  }

  localStorage.setItem(
    'cart',
    JSON.stringify(existingCart)
  );
  window.dispatchEvent(
  new Event('cartUpdated')
);

  
};

  return (
    <div className="product-details-container">
      <button
  className="premium-back-btn"
  onClick={() => navigate(-1)}
>
  <FaArrowLeft />
  <span>Back to Catalog</span>
</button>

      <div className="details-grid">
        {/* Left Side: Image */}
        <div className="image-section">
  <div className="main-image-box">
    <img src={product.heroImage} alt={product.name} />
  </div>
</div>

        {/* Right Side: Product Info */}
        <div className="info-section">
          <h1>{product.name}</h1>
          <div className="ecom-ratings">
  <div className="rating-badge">
    {product.rating || 4.5}
    <FaStar size={12} />
  </div>

  <div className="rating-count">
    {product.reviews || 25} Ratings
  </div>
</div>
          <p className="category-tag">{product.category}</p>
          
          <div className="pricing-box">
            <span className="price">₹{product.price}</span>
            {product.originalPrice && (
              <span className="old-price"><s>₹{product.originalPrice}</s></span>
            )}
          </div>
          <h4>Select Thickness</h4>

<div className="var-buttons">
  {['12mm', '18mm', '25mm'].map((size) => (
    <button
      key={size}
      className={`var-btn ${
        selectedSize === size ? 'selected' : ''
      }`}
      onClick={() => setSelectedSize(size)}
    >
      {size}
    </button>
  ))}
</div>

          <p className="description">
            {product.detailedDesc || product.shortDesc || "Premium quality product from Sai & Co."}
          </p>
         <div className="payment-methods">
  <h4>Select Payment Method</h4>

  <label>
    <input type="radio" name="payment" value="UPI" />
    UPI / GPay / PhonePe
  </label>

  <label>
    <input type="radio" name="payment" value="Card" />
    Credit / Debit Card
  </label>

  <label>
    <input type="radio" name="payment" value="NetBanking" />
    Net Banking
  </label>

  <label>
    <input type="radio" name="payment" value="COD" />
    Cash On Delivery
  </label>
</div>

<div className="delivery-box">
  <h4>Delivery Dedails</h4>

  <p>🚚 Delivery within 2-5 days</p>
  <p>📦 Free delivery above ₹5000</p>
  <p>🔄 Easy replacement available</p>
</div>

<div className="spec-box">
  <h4>Specifications</h4>

  {Object.entries(product.specifications || {})
    .map(([key,value])=>(
      <p key={key}>
        <strong>{key}</strong> : {value}
      </p>
  ))}
</div>

          {/* Quantity Selector: - 1 + */}
          <div className="quantity-wrapper">
            <p>Quantity:</p>
            <div className="qty-controls">
              <button onClick={handleDecrease} className="qty-btn"><FaMinus /></button>
              <span className="qty-display">{quantity}</span>
              <button onClick={handleIncrease} className="qty-btn"><FaPlus /></button>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="ecom-actions">

  <button
    className="add-to-cart-btn"
    onClick={handleAddToCart}
  >
    <FaShoppingCart />
    ADD TO CART
  </button>

  <button
    className="buy-now-btn"
    onClick={() => {
      handleAddToCart();
      navigate('/cart');
    }}
  >
    BUY NOW
  </button>

</div>
        </div>
      </div>
    </div>
  );
}