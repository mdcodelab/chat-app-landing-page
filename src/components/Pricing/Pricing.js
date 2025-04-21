import React from 'react';
import { FaCheck } from "react-icons/fa6";
import "./Pricing.css";

const Pricing = () => {
  return (
    <section id="pricing">
      <h2>Pay once, use forever</h2>
      <div className="pricing__content">
        
        {/* BASIC */}
        <div
          className="price basic"
          data-aos="fade-up"
          data-aos-delay="1000"
        >
          <h5>Basic plan</h5>
          <h2>Free</h2>
          <h6>AI chat bot, personalized recommendations</h6>
          <div className="content__basic">
            <div className="item">
              <FaCheck className="icon" />
              <p>An AI chat bot that can understand your queries</p>
            </div>
            <div className="item">
              <FaCheck className="icon" />
              <p>20 requests per day</p>
            </div>
          </div>
          <button className="btn">Select plan</button>
        </div>

        {/* PREMIUM */}
        <div
          className="price premium"
          data-aos="fade-up"
          data-aos-delay="1500"
        >
          <span className="note">MOST POPULAR</span>
          <h5 style={{ opacity: "0.5" }}>Premium plan</h5>
          <h2>$ 10</h2>
          <h6>Advanced AI chat bot, priority support</h6>
          <div className="content__premium">
            <div className="item">
              <FaCheck className="icon" />
              <p>Unlimited number of requests</p>
            </div>
            <div className="item">
              <FaCheck className="icon" />
              <p>Integration with other platforms</p>
            </div>
            <div className="item">
              <FaCheck className="icon" />
              <p>Extended support</p>
            </div>
          </div>
          <button className="btn select__btn">Select plan</button>
        </div>

        {/* SUPER */}
        <div
          className="price super"
          data-aos="fade-up"
          data-aos-delay="2000"
        >
          <h5>Super plan</h5>
          <h2>$ 20</h2>
          <h6>Custom AI chat bot, dedicated account</h6>
          <div className="content__super">
            <div className="item">
              <FaCheck className="icon" />
              <p>All features of the standard platform</p>
            </div>
            <div className="item">
              <FaCheck className="icon" />
              <p>Access to the APIs for integration with specialized systems</p>
            </div>
            <div className="item">
              <FaCheck className="icon" />
              <p>Priority support</p>
            </div>
          </div>
          <button className="btn">Select plan</button>
        </div>

      </div>
    </section>
  );
};

export default Pricing;
