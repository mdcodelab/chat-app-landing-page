import React from 'react';
import "./Why.css";
import { FiLinkedin } from "react-icons/fi";
import { FiFacebook } from "react-icons/fi";
import { CiTwitter } from "react-icons/ci";
import { FiYoutube } from "react-icons/fi";


const Why = () => {
  return (
    <>
      <section id="why">
        <div className="why__left" data-aos="fade-right">
          <img src="/assets/why.png" alt="Why Digi" />
        </div>

        <div className="why__right" data-aos="fade-left">
          <h2>Why DIGI?</h2>
          <p>DIGI unlock the potential of AI-powered applications</p>
          <button className="select__btn">Get started</button>
        </div>
      </section>

      <footer>
        <a href="#home">
          <img src="/assets/rectangle-5.png" className="footer__image" alt="Scroll to about" />
        </a>
        <div className="icons">
          <FiFacebook className="icon" />
          <FiLinkedin className="icon" />
          <CiTwitter className="icon" />
          <FiYoutube className="icon" />
        </div>
      </footer>
    </>
  )
}

export default Why
