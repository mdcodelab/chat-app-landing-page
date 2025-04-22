import React from 'react';
import './Testimonials.css';

const Testimonials = () => {
  return (
    <section id="testimonials">
        <h2 className="testimonials-title">Testimonials</h2>
        <div className="hexagon-container">
      <div className="testimonial center"></div>
      <div className="testimonial top-left">Sus Stânga</div>
      <div className="testimonial top-right">Sus Dreapta</div>
      <div className="testimonial left">Stânga</div>
      <div className="testimonial right">Dreapta</div>
      <div className="testimonial bottom-left">Jos Stânga</div>
      <div className="testimonial bottom-right">Jos Dreapta</div>
        </div>
    </section>
  );
};

export default Testimonials;
