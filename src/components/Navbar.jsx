import React, { useEffect, useState } from 'react';
import {
  Link,
  useNavigate,
  useLocation
} from 'react-router-dom';
import {
  FaPhoneAlt,
  FaClipboardList,
  FaShoppingCart,
  FaBars,
  FaTimes
} from 'react-icons/fa';

import './Navbar.css';

export default function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();
  
  // Mobile Menu State
  const [menuOpen, setMenuOpen] = useState(false);
  
  const [cartCount, setCartCount] = useState(0);

  const closeMobileMenu = () => {
  setMenuOpen(false);
};

  const navigateToSection = (sectionId) => {
  closeMobileMenu();

  if (location.pathname !== "/") {
    navigate("/");

    setTimeout(() => {
      const section =
        document.getElementById(sectionId);

      if (section) {
        section.scrollIntoView({
          behavior: "smooth"
        });
      }
    }, 500);

  } else {

    const section =
      document.getElementById(sectionId);

    if (section) {
      section.scrollIntoView({
        behavior: "smooth"
      });
    }

  }
};
  
  useEffect(() => {
    const updateCart = () => {
      const cart =
        JSON.parse(localStorage.getItem('cart')) || [];
      const total = cart.reduce(
        (sum, item) => sum + item.quantity,
        0
      );
      setCartCount(total);
    };

    updateCart();

    window.addEventListener('cartUpdated', updateCart);

    return () => {
      window.removeEventListener('cartUpdated', updateCart);
    };
  }, []);

  return (
    <header className="premium-navbar-wrapper">
      <nav className="premium-navbar">

        {/* Logo */}
        <div
          className="brand-section"
          onClick={() => {
            navigate('/');
            closeMobileMenu();
          }}
        >
          <div className="brand-logo">
  <video
    autoPlay
    muted
    loop
    playsInline
    className="logo-video"
  >
    <source src="/logo.mp4" type="video/mp4" />
  </video>
</div>
          <div className="brand-text">
            <h2>SAI & CO</h2>
            <p>PLYWOOD & HARDWARE</p>
          </div>
        </div>
        
  
        {/* Hamburger Icon for Mobile */}
        <div
  className="mobile-menu-icon"
  onClick={() => setMenuOpen(!menuOpen)}
>
  {menuOpen ? <FaTimes /> : <FaBars />}
</div>

        {/* Menu (Added dynamic class for mobile) */}
       <ul className={`nav-menu ${menuOpen ? "active" : ""}`}>
          <li>
            <a
              href="/"
              onClick={(e) => {
                e.preventDefault();
                closeMobileMenu();
                if (location.pathname !== "/") {
                  navigate("/");
                }
                setTimeout(() => {
                  window.scrollTo({
                    top: 0,
                    behavior: "smooth"
                  });
                }, 200);
              }}
            >
              Home
            </a>
          </li>

          <li>
            <a
              href="#about"
              onClick={(e) => {
                e.preventDefault();
                navigateToSection("about");
              }}
            >
              About Us
            </a>
          </li>

          <li>
            <a
              href="#categories"
              onClick={(e) => {
                e.preventDefault();
                navigateToSection("categories");
              }}
            >
              Categories
            </a>
          </li>

          <li>
            <Link to="/products" onClick={closeMobileMenu}>
              Products
            </Link>
          </li>

          <li>
            <a
              href="#gallery"
              onClick={(e) => {
                e.preventDefault();
                navigateToSection("gallery");
              }}
            >
              Gallery
            </a>
          </li>

          <li>
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                navigateToSection("contact");
              }}
            >
              Contact
            </a>
          </li>
        </ul>

        {/* Right Side */}
        <div className="nav-right">

  <Link to="/cart" className="cart-btn">
    <FaShoppingCart />

    <span className="cart-count">
      {JSON.parse(localStorage.getItem("cart"))?.length || 0}
    </span>
  </Link>

  <a
    href="tel:+919876543210"
    className="nav-cta-btn"
  >
    <FaPhoneAlt />
    <span>Call Now</span>
  </a>

</div>

      </nav>
    </header>
  );
}