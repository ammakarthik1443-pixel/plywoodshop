import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Cart() {
  const navigate = useNavigate();

  const [cartItems, setCartItems] = useState([]);
  const [currentStep, setCurrentStep] = useState(1);
  const [paymentMethod, setPaymentMethod] = useState('UPI');
  const [orderId, setOrderId] = useState('');
  
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    address: '',
    landmark: '',
    city: '',
    state: '',
    pincode: ''
  });

  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem('cart')) || [];
    setCartItems(savedCart);
  }, []);

  const updateCart = (updatedCart) => {
    setCartItems(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
    window.dispatchEvent(new Event('cartUpdated'));
  };

  const increaseQty = (id) => {
    const updated = cartItems.map((item) =>
      item.id === id ? { ...item, quantity: item.quantity + 1 } : item
    );
    updateCart(updated);
  };

  const decreaseQty = (id) => {
    const updated = cartItems.map((item) =>
      item.id === id ? { ...item, quantity: item.quantity > 1 ? item.quantity - 1 : 1 } : item
    );
    updateCart(updated);
  };

  const removeItem = (id) => {
    const updated = cartItems.filter((item) => item.id !== id);
    updateCart(updated);
  };

  const totalAmount = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const handlePlaceOrder = (e) => {
    e.preventDefault();
    const generatedId = 'OD' + Math.floor(10000000 + Math.random() * 90000000);
    setOrderId(generatedId);
    localStorage.removeItem('cart');
    setCartItems([]);
    window.dispatchEvent(new Event('cartUpdated'));
    setCurrentStep(5);
  };

  const theme = {
    gold: '#c49a6c',
    dark: '#222',
    lightBg: '#f9f9f9',
    border: '#e0e0e0'
  };

  // Internal Responsive CSS (No external CSS file needed)
  const responsiveCSS = `
    .cart-wrapper { padding: 40px 5%; max-width: 1200px; margin: 0 auto; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; }
    .progress-bar { display: flex; justify-content: space-between; align-items: center; margin-bottom: 40px; background: #fff; padding: 20px; border-radius: 10px; box-shadow: 0 2px 10px rgba(0,0,0,0.05); }
    .step-node { display: flex; align-items: center; gap: 8px; }
    .step-line { flex: 1; height: 2px; min-width: 20px; margin: 0 5px; }
    .main-grid { display: flex; gap: 40px; align-items: flex-start; }
    .left-panel { flex: 2; width: 100%; }
    .right-panel { flex: 1; width: 100%; background: ${theme.lightBg}; padding: 25px; border-radius: 10px; position: sticky; top: 20px; }
    .address-grid-inputs { display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 10px; }
    .cart-item-card { display: flex; gap: 20px; border: 1px solid ${theme.border}; padding: 15px; margin-bottom: 15px; border-radius: 8px; background: #fff; }
    .cart-item-img { width: 100px; height: 100px; object-fit: cover; border-radius: 4px; }
    .cart-item-info { flex: 1; }
    .cart-item-actions { text-align: right; display: flex; flex-direction: column; justify-content: space-between; }
    
    /* Input Base Styles */
    .form-input { padding: 12px; border: 1px solid ${theme.border}; border-radius: 4px; width: 100%; box-sizing: border-box; }
    .primary-btn { padding: 12px; background: ${theme.dark}; color: #fff; border: none; cursor: pointer; font-weight: bold; width: 100%; border-radius: 4px; text-transform: uppercase; }

    /* MOBILE RESPONSIVE QUERIES */
    @media (max-width: 768px) {
      .cart-wrapper { padding: 20px 15px; }
      .progress-bar { padding: 15px; gap: 5px; flex-wrap: wrap; justify-content: center; }
      .step-label { display: none; } /* Hide text on mobile, show only circles */
      .main-grid { flex-direction: column; gap: 25px; }
      .right-panel { position: static; padding: 20px; }
      .address-grid-inputs { grid-template-columns: 1fr; }
      .cart-item-card { flex-direction: column; align-items: center; text-align: center; }
      .cart-item-info { width: 100%; display: flex; flex-direction: column; align-items: center; }
      .cart-item-actions { width: 100%; flex-direction: row; justify-content: space-between; align-items: center; border-top: 1px solid ${theme.border}; padding-top: 15px; margin-top: 10px; text-align: left; }
    }
  `;

  const renderProgressBar = () => {
    const steps = [
      { id: 1, label: 'Cart' }, { id: 2, label: 'Address' },
      { id: 3, label: 'Payment' }, { id: 4, label: 'Review' }, { id: 5, label: 'Success' }
    ];

    return (
      <div className="progress-bar">
        {steps.map((s, idx) => (
          <React.Fragment key={s.id}>
            <div className="step-node">
              <div style={{
                width: '30px', height: '30px', borderRadius: '50%',
                background: currentStep >= s.id ? theme.gold : '#ccc',
                color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold', fontSize: '0.9rem'
              }}>
                {currentStep > s.id ? '✓' : s.id}
              </div>
              <span className="step-label" style={{ fontSize: '0.85rem', fontWeight: currentStep === s.id ? 'bold' : '500', color: currentStep >= s.id ? '#000' : '#888' }}>
                {s.label}
              </span>
            </div>
            {idx < steps.length - 1 && (
              <div className="step-line" style={{ background: currentStep > s.id ? theme.gold : '#eee' }}></div>
            )}
          </React.Fragment>
        ))}
      </div>
    );
  };

  if (cartItems.length === 0 && currentStep !== 5) {
    return (
      <div style={{ textAlign: 'center', padding: '100px 20px' }}>
        <h2>Your Cart is Empty</h2>
        <button onClick={() => navigate('/products')} style={{ padding: '12px 25px', marginTop: '20px', cursor: 'pointer', background: 'transparent', border: `1px solid ${theme.gold}`, color: theme.gold, fontWeight: 'bold' }}>
          Continue Shopping
        </button>
      </div>
    );
  }

  return (
    <div className="cart-wrapper">
      <style>{responsiveCSS}</style> {/* Injected Responsive CSS */}
      
      {renderProgressBar()}

      {/* STEP 1: VIEW CART */}
      {currentStep === 1 && (
        <div>
          <h2 style={{ marginBottom: '20px' }}>Your Shopping Cart</h2>
          <div className="main-grid">
            <div className="left-panel">
              {cartItems.map((item) => (
                <div key={item.id} className="cart-item-card">
                  <img src={item.heroImage || item.image} alt={item.name} className="cart-item-img" />
                  <div className="cart-item-info">
                    <h3 style={{ fontSize: '1.1rem', margin: '0 0 8px 0' }}>{item.name}</h3>
                    <p style={{ margin: '0 0 10px 0', color: '#555' }}>₹{item.price}</p>
                    <div style={{ display: 'flex', gap: '15px', alignItems: 'center', justifyContent: 'center' }}>
                      <button onClick={() => decreaseQty(item.id)} style={{ padding: '5px 12px', cursor: 'pointer', border: '1px solid #ccc', background: '#fff' }}>-</button>
                      <span style={{ fontWeight: 'bold' }}>{item.quantity}</span>
                      <button onClick={() => increaseQty(item.id)} style={{ padding: '5px 12px', cursor: 'pointer', border: '1px solid #ccc', background: '#fff' }}>+</button>
                    </div>
                  </div>
                  <div className="cart-item-actions">
                    <p style={{ color: theme.gold, fontWeight: 'bold', margin: 0, fontSize: '1.1rem' }}>₹{item.price * item.quantity}</p>
                    <button onClick={() => removeItem(item.id)} style={{ color: 'red', border: 'none', background: 'none', cursor: 'pointer', fontSize: '0.9rem', padding: 0 }}>Remove</button>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="right-panel">
              <h3 style={{ marginTop: 0, borderBottom: `1px solid ${theme.border}`, paddingBottom: '10px' }}>Order Summary</h3>
              <div style={{ display: 'flex', justifyContent: 'space-between', margin: '15px 0' }}><span>Price ({cartItems.length} items):</span><span>₹{totalAmount}</span></div>
              <div style={{ display: 'flex', justifyContent: 'space-between', margin: '15px 0', color: 'green' }}><span>Delivery:</span><span>FREE</span></div>
              <div style={{ display: 'flex', justifyContent: 'space-between', margin: '20px 0 15px 0', fontSize: '1.2rem', fontWeight: 'bold', borderTop: `1px solid ${theme.border}`, paddingTop: '15px' }}>
                <span>Total:</span><span style={{ color: theme.gold }}>₹{totalAmount}</span>
              </div>
              <button className="primary-btn" onClick={() => setCurrentStep(2)} style={{ marginTop: '10px' }}>
                Proceed to Address
              </button>
            </div>
          </div>
        </div>
      )}

      {/* STEP 2: ENTER DELIVERY ADDRESS */}
      {currentStep === 2 && (
        <div className="main-grid">
          <div className="left-panel" style={{ background: '#fff', padding: '25px', border: `1px solid ${theme.border}`, borderRadius: '10px' }}>
            <h3 style={{ marginTop: 0, marginBottom: '20px' }}>Enter Delivery Address</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
              <input type="text" placeholder="Full Name" required value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} className="form-input" />
              <input type="tel" placeholder="Mobile Number" required value={formData.phone} onChange={(e) => setFormData({ ...formData, phone: e.target.value })} className="form-input" />
              <textarea rows="3" placeholder="Address (House No, Building, Street)" required value={formData.address} onChange={(e) => setFormData({ ...formData, address: e.target.value })} className="form-input" />
              <input type="text" placeholder="Landmark (Optional)" value={formData.landmark} onChange={(e) => setFormData({ ...formData, landmark: e.target.value })} className="form-input" />
              <div className="address-grid-inputs">
                <input type="text" placeholder="City" required value={formData.city} onChange={(e) => setFormData({ ...formData, city: e.target.value })} className="form-input" />
                <input type="text" placeholder="State" required value={formData.state} onChange={(e) => setFormData({ ...formData, state: e.target.value })} className="form-input" />
                <input type="text" placeholder="Pincode" required value={formData.pincode} onChange={(e) => setFormData({ ...formData, pincode: e.target.value })} className="form-input" />
              </div>
              <div style={{ display: 'flex', gap: '15px', marginTop: '10px' }}>
                <button onClick={() => setCurrentStep(1)} style={{ flex: 1, padding: '12px', background: 'transparent', border: `1px solid ${theme.border}`, cursor: 'pointer', borderRadius: '4px' }}>Back</button>
                <button onClick={() => { if (formData.name && formData.phone && formData.address && formData.pincode) { setCurrentStep(3); } else { alert('Please fill all mandatory fields'); } }} className="primary-btn" style={{ flex: 2 }}>
                  Deliver Here
                </button>
              </div>
            </div>
          </div>
          <div className="right-panel">
            <h3 style={{ marginTop: 0 }}>Summary</h3>
            <div style={{ display: 'flex', justifyContent: 'space-between', margin: '15px 0' }}><span>Total Amount:</span><strong>₹{totalAmount}</strong></div>
          </div>
        </div>
      )}

      {/* STEP 3: SELECT PAYMENT METHOD */}
      {currentStep === 3 && (
        <div style={{ maxWidth: '600px', margin: '0 auto', background: '#fff', padding: '35px', border: `1px solid ${theme.border}`, borderRadius: '10px', boxShadow: '0 4px 15px rgba(0,0,0,0.05)' }}>
          <h3 style={{ marginTop: 0, marginBottom: '25px' }}>Select Payment Method</h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
            <label style={{ display: 'flex', alignItems: 'center', gap: '12px', padding: '15px', border: `1px solid ${theme.border}`, borderRadius: '6px', cursor: 'pointer', background: paymentMethod === 'UPI' ? '#fdf9f4' : 'transparent', borderColor: paymentMethod === 'UPI' ? theme.gold : theme.border }}>
              <input type="radio" name="payment" checked={paymentMethod === 'UPI'} onChange={() => setPaymentMethod('UPI')} style={{ accentColor: theme.gold, width: '20px', height: '20px' }} />
              <div>
                <strong style={{ display: 'block' }}>Pay via UPI / QR Code</strong>
                <span style={{ fontSize: '0.8rem', color: '#686868' }}>Scan instant QR code or enter UPI ID to finish transaction</span>
              </div>
            </label>
            
            <label style={{ display: 'flex', alignItems: 'center', gap: '12px', padding: '15px', border: `1px solid ${theme.border}`, borderRadius: '6px', cursor: 'pointer', background: paymentMethod === 'COD' ? '#fdf9f4' : 'transparent', borderColor: paymentMethod === 'COD' ? theme.gold : theme.border }}>
              <input type="radio" name="payment" checked={paymentMethod === 'COD'} onChange={() => setPaymentMethod('COD')} style={{ accentColor: theme.gold, width: '20px', height: '20px' }} />
              <div>
                <strong style={{ display: 'block' }}>Cash on Delivery (COD)</strong>
                <span style={{ fontSize: '0.8rem', color: '#686868' }}>Pay with cash or digital mode upon delivery</span>
              </div>
            </label>

            {paymentMethod === 'UPI' && (
              <div style={{ textAlign: 'center', padding: '20px', background: theme.lightBg, border: `1px solid ${theme.border}`, borderRadius: '6px', marginTop: '10px' }}>
                <div style={{ width: '140px', height: '140px', background: '#fff', border: '1px solid #ccc', margin: '0 auto 10px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.85rem', color: '#666', fontWeight: 'bold' }}>
                  [ Dynamic QR Code ]
                </div>
                <p style={{ margin: 0, fontSize: '0.85rem', color: '#555' }}>Scan and pay securely using any UPI app</p>
              </div>
            )}

            <div style={{ display: 'flex', gap: '15px', marginTop: '20px' }}>
              <button onClick={() => setCurrentStep(2)} style={{ flex: 1, padding: '12px', background: 'transparent', border: `1px solid ${theme.border}`, cursor: 'pointer', borderRadius: '4px' }}>Back</button>
              <button onClick={() => setCurrentStep(4)} className="primary-btn" style={{ flex: 2 }}>Continue</button>
            </div>
          </div>
        </div>
      )}

      {/* STEP 4: REVIEW YOUR ORDER */}
      {currentStep === 4 && (
        <div>
          <h3 style={{ marginBottom: '20px' }}>Review Your Order</h3>
          <div className="main-grid">
            <div className="left-panel" style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              <div style={{ background: '#fff', padding: '20px', border: `1px solid ${theme.border}`, borderRadius: '8px' }}>
                <h4 style={{ margin: '0 0 10px 0', color: theme.gold }}>Delivery Address</h4>
                <p style={{ margin: '5px 0', fontWeight: 'bold' }}>{formData.name}</p>
                <p style={{ margin: '5px 0', color: '#555', fontSize: '0.95rem', lineHeight: '1.4' }}>
                  {formData.address}, {formData.landmark && `${formData.landmark}, `} {formData.city}, {formData.state} - {formData.pincode}
                </p>
                <p style={{ margin: '5px 0', color: '#555', fontSize: '0.95rem' }}><strong>Mobile:</strong> {formData.phone}</p>
              </div>

              <div style={{ background: '#fff', padding: '20px', border: `1px solid ${theme.border}`, borderRadius: '8px' }}>
                <h4 style={{ margin: '0 0 10px 0', color: theme.gold }}>Selected Payment Method</h4>
                <p style={{ margin: 0, fontWeight: '500' }}>{paymentMethod === 'UPI' ? 'UPI Transaction Route' : 'Cash on Delivery (COD)'}</p>
              </div>
            </div>

            <div className="right-panel">
              <h3 style={{ marginTop: 0 }}>Final Verification</h3>
              <div style={{ display: 'flex', justifyContent: 'space-between', margin: '20px 0', fontSize: '1.2rem', fontWeight: 'bold' }}>
                <span>Final Payable:</span><span style={{ color: theme.gold }}>₹{totalAmount}</span>
              </div>
              <div style={{ display: 'flex', gap: '10px', marginTop: '20px' }}>
                <button onClick={() => setCurrentStep(3)} style={{ flex: 1, padding: '12px', background: 'transparent', border: `1px solid ${theme.border}`, cursor: 'pointer', borderRadius: '4px' }}>Back</button>
                <button onClick={handlePlaceOrder} className="primary-btn" style={{ flex: 2, background: 'green' }}>Confirm Order</button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* STEP 5: ORDER PLACED SUCCESSFULLY */}
      {currentStep === 5 && (
        <div style={{ textAlign: 'center', padding: '50px 20px', background: theme.lightBg, border: `1px solid ${theme.border}`, borderRadius: '12px', maxWidth: '600px', margin: '40px auto', boxShadow: '0 4px 20px rgba(0,0,0,0.05)' }}>
          <div style={{ width: '80px', height: '80px', borderRadius: '50%', background: '#4CAF50', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '2.5rem', margin: '0 auto 20px', boxShadow: '0 4px 10px rgba(76,175,80,0.3)' }}>✓</div>
          <h2 style={{ color: theme.gold, margin: '0 0 10px 0', fontSize: '2rem' }}>Thank You!</h2>
          <p style={{ fontSize: '1.1rem', color: '#333', margin: '0 0 25px 0' }}>Your order has been placed successfully.</p>
          
          <div style={{ background: '#fff', padding: '20px', borderRadius: '8px', border: `1px solid ${theme.border}`, width: 'fit-content', margin: '0 auto 30px', textAlign: 'left', minWidth: '280px' }}>
            <p style={{ margin: '0 0 8px 0', color: '#666' }}>Order ID: <span style={{ color: '#000', fontWeight: 'bold' }}>{orderId}</span></p>
            <p style={{ margin: 0, color: 'green', fontWeight: '500' }}>Status: Confirmed & Shipping Initiated</p>
          </div>

          <button onClick={() => navigate('/products')} className="primary-btn">
            Continue Shopping
          </button>
        </div>
      )}

    </div>
  );
}