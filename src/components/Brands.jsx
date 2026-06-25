import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import { imageData } from '../assets/imageData';

import 'swiper/css';
import './Brands.css';

export default function Brands() {
  return (
    <section className="brands-carousel-section-wrapper">
      <div className="brands-container-inner">
        <p className="brands-narrative-tag">Authorized Strategic Supply Channel Partner</p>
        <Swiper
          modules={[Autoplay]}
          spaceBetween={40}
          slidesPerView={5}
          loop={true}
          autoplay={{ delay: 2000, disableOnInteraction: false }}
          breakpoints={{
            320: { slidesPerView: 2 },
            768: { slidesPerView: 4 },
            1024: { slidesPerView: 5 }
          }}
          className="brands-swiper-deck"
        >
          {imageData.brands.map((brand, idx) => (
            <SwiperSlide key={idx} className="brand-slide-unit">
              <div className="brand-logo-pod">
                <img src={brand.logo} alt={brand.name} />
                <span className="brand-label-under">{brand.name}</span>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}