import React from "react";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import "./Features.css";

export const Features = () => {
  return (
    <section className="features" id="features">
      <div className="features__container">
        <header className="features__header" data-aos="fade-down">
          <h2>We work with the support of leading companies around the world</h2>
          <img src="/assets/rectangle-15.png"></img>
        </header>
        <div className="features__content">
          <div className="features__left" data-aos="fade-up" data-aos-delay="1000">
            <h2>Our new features</h2>
            <p>At DIGI, we believe in innovation and continuous improvement and our latest additions are a testament to the commitement.</p>
            <button><HiOutlineArrowNarrowRight></HiOutlineArrowNarrowRight></button>
          </div>
          <div className="features__right">
            <img src="/assets/rectangle-11.png" className="features__image-main" data-aos="fade-up" data-aos-delay="1200"></img>
            <img src="/assets/img-overlay.png" className="features__image-overlay" data-aos="fade-left" data-aos-delay="2700"></img>
          </div>
        </div>
      </div>
    </section>
  );
};