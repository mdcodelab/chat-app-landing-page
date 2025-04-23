import React from 'react';
import 'aos/dist/aos.css';
import './Community.css';

const Community = () => {
  return (
    <section id="community">
      <h2 className="testimonials-title" data-aos="fade-down">Echoes from the Crowd</h2>
      <div className="hexagon-container">
        <div className="testimonial center"></div>

        <div className="testimonial top-left" data-aos="fade-down" data-aos-delay="100">
          <span className="tooltip">
            Digi Chat Bot answers<br />instantly and accurately,<br />saving precious time.
          </span>
        </div>

        <div className="testimonial top-right" data-aos="fade-down" data-aos-delay="200">
          <span className="tooltip">
            Easy to integrate,<br />intuitive to use,<br />perfect for any team.
          </span>
        </div>

        <div className="testimonial left" data-aos="fade-left" data-aos-delay="300">
          <span className="tooltip">
            Supports 24/7 customer<br />service with zero<br />human fatigue.
          </span>
        </div>

        <div className="testimonial right" data-aos="fade-right" data-aos-delay="400">
          <span className="tooltip">
            Reduces response time<br />and boosts user<br />satisfaction.
          </span>
        </div>

        <div className="testimonial bottom-left" data-aos="fade-up" data-aos-delay="500">
          <span className="tooltip">
            Automates repetitive<br />tasks with ease and<br />consistency.
          </span>
        </div>

        <div className="testimonial bottom-right" data-aos="fade-up" data-aos-delay="600">
          <span className="tooltip">
            Enhances sales<br />conversion with smart<br />real-time replies.
          </span>
        </div>
      </div>
    </section>
  );
};

export default Community;
