import React from "react";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import { AiOutlineOpenAI } from "react-icons/ai";
import { RiMicrosoftLine } from "react-icons/ri";
import { SiNvidia } from "react-icons/si";
import "./Features.css";

export const Features = () => {
  return (
    <section className="features" id="features">
      <div className="features__container">
        <header className="features__header" data-aos="fade-down">
          <h2>We work with the support of leading companies around the world</h2>
          <div className="icons__title">
            <div className="title">
              <AiOutlineOpenAI className="icon" />
              <h4>Open AI</h4>
            </div>
            <div className="title">
              <SiNvidia className="icon" />
              <h4>Nvidia</h4>
            </div>
            <div className="title">
              <RiMicrosoftLine className="icon" />
              <h4>Microsoft</h4>
            </div>
          </div>
        </header>

        <div className="features__content">
          <div className="features__left" data-aos="fade-up" data-aos-delay="1000">
            <h2>Our new features</h2>
            <p>
              At DIGI, we believe in innovation and continuous improvement, and
              our latest additions are a testament to the commitment.
            </p>
            <button>
              <HiOutlineArrowNarrowRight />
            </button>
          </div>

          <div className="features__right">
            <img
              src="/assets/rectangle-11.png"
              className="features__image-main"
              data-aos="fade-up"
              data-aos-delay="1200"
              alt="Main feature"
            />
            <img
              src="/assets/img-overlay.png"
              className="features__image-overlay"
              data-aos="fade-left"
              data-aos-delay="2700"
              alt="Overlay feature"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
