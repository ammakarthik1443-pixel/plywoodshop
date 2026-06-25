import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import './Hero.css';

export default function Hero() {
  const navigate = useNavigate();

  const slides = [
  {
    title: "Premium Hardware & Architectural Fittings",
    subtitle: "Exquisite Craftsmanship For Refined Living Spaces",
    image: "/hero/hero1.jpg"
  },
  {
    title: "Luxury Veneers & Structural Plywood",
    subtitle: "The Indestructible Core Of Architectural Masterpieces",
    image: "/hero/hero2.jpg"
  },
  {
    title: "Smart Digital Security Systems",
    subtitle: "Advanced Protection With Modern Technology",
    image: "/hero/hero3.jpg"
  },
  {
    title: "Palatial Custom Teak Wood Doors",
    subtitle: "Grand Visual Statements Formed From Century-Old Timbers",
    image: "/hero/hero4.jpg"
  }
];
  


  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) =>
        prev === slides.length - 1
          ? 0
          : prev + 1
      );
    }, 5000);

    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <section className="hero-carousel">

      {slides.map((slide, index) => (
        <div
          key={index}
          className={`hero-slide ${
            index === current ? 'active' : ''
          }`}
          style={{
            backgroundImage: `url(${slide.image})`
          }}
        >

          <div className="hero-overlay">

            <span className="hero-tag">
              SAI & CO LUXURY SHOWCASE
            </span>

            <h1>
              {slide.title}
            </h1>

            <p>
              {slide.subtitle}
            </p>

            <div className="hero-actions">

  <button
    className="btn-primary"
    onClick={() => navigate("/products")}
  >
    EXPLORE CATALOG
  </button>

  <button
    className="btn-secondary"
    onClick={() => {
      const contact =
        document.getElementById("contact");

      if (contact) {
        contact.scrollIntoView({
          behavior: "smooth"
        });
      }
    }}
  >
    SCHEDULE CONSULTATION
  </button>

</div>
          </div>

        </div>
      ))}

      <div className="hero-dots">
        {slides.map((_, index) => (
          <span
            key={index}
            className={
              index === current
                ? "dot active-dot"
                : "dot"
            }
            onClick={() => setCurrent(index)}
          ></span>
        ))}
      </div>

    </section>
  );
}