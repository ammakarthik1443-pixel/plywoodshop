import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import AOS from 'aos';

// Global Layout Components
import Orders from './pages/Orders';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// Core Landing Page Sub-sections
import Hero from './components/Hero';
import Categories from './components/Categories';
import About from './components/About';
import Products from './components/Products'; // Ithu neenga Home page-la kaatura products ah irukalam
import Gallery from './components/Gallery';
import Brands from './components/Brands';
import WhyChooseUs from './components/WhyChooseUs';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';

// Product Details Page
import ProductDetails from './pages/ProductDetails';
import Cart from './pages/Cart';



import 'aos/dist/aos.css';

function ScrollResetHook() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function Home() {
  return (
    <>
      <Hero />
      <Categories />
      <About />
      {/* Home page-la verum categories mattum venum na, intha <Products /> ah command pannidalam */}
      <Gallery />
      <Brands />
      <WhyChooseUs />
      <Testimonials />
      <Contact />
    </>
  );
}

export default function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: 'ease-in-out-cubic'
    });
  }, []);

  return (
    <Router>
      <ScrollResetHook />
      <div className="premium-app-root">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          
          {/* ITHU THAN MISSING! SEPARATE PRODUCTS PAGE ROUTE */}
          <Route path="/products" element={<Products />} /> 
          
          <Route path="/cart" element={<Cart />} />
          <Route path="/product/:productId" element={<ProductDetails />} />
          <Route path="/orders" element={<Orders />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}