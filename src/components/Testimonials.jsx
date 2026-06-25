import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import { FaStar } from 'react-icons/fa';
import { imageData } from '../assets/imageData';

import 'swiper/css';
import 'swiper/css/pagination';
import './Testimonials.css';

export default function Testimonials() {
  return (
    <section className="section-padding testimonials-wrapper-outer">
      <div className="section-header" data-aos="fade-up">
        <span>References</span>
        <h2>Endorsements From Elite Builders</h2>
      </div>

      <div className="testimonials-carousel-pod" data-aos="fade-up">
        <Swiper
          modules={[Autoplay, Pagination]}
          spaceBetween={30}
          slidesPerView={1}
          autoplay={{ delay: 4500 }}
          pagination={{ clickable: true }}
          className="testimonial-swiper"
        >
          {imageData.testimonials.map((test, idx) => (
            <SwiperSlide key={idx} className="testimonial-slide-node">
              <div className="testimonial-quote-bubble">
                <div className="stars-array">
                  {Array.from({ length: test.rating }).map((_, i) => <FaStar key={i} />)}
                </div>
                <p className="testimonial-text-string">"{test.review}"</p>
                <div className="testimonial-author-row">
                  <img src={test.profile} alt={test.name} />
                  <div className="author-identity-block">
                    <h4>{test.name}</h4>
                    <span>{test.role}</span>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}