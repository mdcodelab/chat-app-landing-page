import React from 'react';
import { FaCheck } from "react-icons/fa6";
import "./Pricing.css";

const Pricing = () => {
  return (
    <section id="pricing">
      <h2>Pay once, use forever</h2>
      <div className="pricing__content">
        {/* BASIC */}
        <div className="basic">
          <h5>Basic plan</h5>
          <h2>Free</h2>
          <p>AI chat bot, personalized recommendations</p>
          <div className="content__basic">
            <div className="item">
              <FaCheck className="icon" />
              <p>AI chat bot</p>
            </div>
            <div className="item">
              <FaCheck className="icon" />
              <p>Personalized recommendations</p>
            </div>
            <div className="content__basic__item">
              <FaCheck className="check" />
              <p>Community support</p>
            </div>
          </div>
        </div>

        {/* PREMIUM */}
        <div className="premium">
          <h5>Premium plan</h5>
          <h2>$10</h2>
          <p>Advanced AI chat bot, priority support</p>
          <div className="content__premium">
            <div className="content__premium__item">
              <FaCheck className="check" />
              <p>Advanced AI chat bot</p>
            </div>
            <div className="content__premium__item">
              <FaCheck className="check" />
              <p>Priority support</p>
            </div>
            <div className="content__premium__item">
              <FaCheck className="check" />
              <p>Early access to features</p>
            </div>
          </div>
        </div>

        {/* SUPER */}
        <div className="super">
          <h5>Super plan</h5>
          <h2>$20</h2>
          <p>Everything in Premium + team features</p>
          <div className="content__super">
            <div className="content__super__item">
              <FaCheck className="check" />
              <p>All Premium features</p>
            </div>
            <div className="content__super__item">
              <FaCheck className="check" />
              <p>Team collaboration tools</p>
            </div>
            <div className="content__super__item">
              <FaCheck className="check" />
              <p>Dedicated AI assistant</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
