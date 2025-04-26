import React from 'react';
import "./Why.css";
import { FiLinkedin } from "react-icons/fi";
import { FiFacebook } from "react-icons/fi";
import { CiTwitter } from "react-icons/ci";
import { FiYoutube } from "react-icons/fi";
import { motion } from "framer-motion";


const Why = () => {
  return (
    <section id="why">
      <div className="why__container">
        <motion.div className="why__left"
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: false, amount: 0.5 }}><img src="/assets/why.png" alt="gigi"></img>
        </motion.div>

        <motion.div className="why__right"
         initial={{ opacity: 0, x: 100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: false, amount: 0.5 }}>
          <h2>Why DIGI?</h2>
          <p>DIGI unlock the potential of AI-powered applications</p>
          <button className="select__btn">Get started</button>
        </motion.div>
      </div>

      <footer>
        <a href="#home">
          <img src="/assets/logonav.png" className="logo" alt="Scroll to about" />
        </a>
        <div className="icons">
          <FiFacebook className="icon" />
          <FiLinkedin className="icon" />
          <CiTwitter className="icon" />
          <FiYoutube className="icon" />
        </div>
      </footer>
    </section>
  )
}

export default Why
