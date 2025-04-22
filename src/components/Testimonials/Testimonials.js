import React from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './Testimonials.css';

const Testimonials = () => {

  return (
    <section id="testimonials">
      <h2 className="testimonials-title">Testimonials</h2>
      <div className="hexagon-container">
        <div className="testimonial center"></div>

        <div className="testimonial top-left" data-aos="fade-down" data-aos-delay="100"></div>
        <div className="testimonial top-right" data-aos="fade-down" data-aos-delay="200"></div>
        <div className="testimonial left" data-aos="fade-left" data-aos-delay="300"></div>
        <div className="testimonial right" data-aos="fade-right" data-aos-delay="400"></div>
        <div className="testimonial bottom-left" data-aos="fade-up" data-aos-delay="500"></div>
        <div className="testimonial bottom-right" data-aos="fade-up" data-aos-delay="600"></div>
      </div>
    </section>
  );
};

export default Testimonials;
