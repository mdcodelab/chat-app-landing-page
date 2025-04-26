import React from "react";
import { GiPsychicWaves } from "react-icons/gi";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoMdClose } from "react-icons/io";
import { Button } from "../../Button/Button";
import "./Header1.css";

export const Header1 = () => {

  return (

      <section className="hero">
        <div className="hero-content">
          <h1 className="hero-title">
            Unleash the Power <GiPsychicWaves className="icon" /> of AI with DIGI
          </h1>
          <p className="hero-subtitle">
            Enter DIGI chat bot your gateway to unleashing the unparalleled power of AI
          </p>
          <div className="cta-button">
            <Button className="get-started" color="primary" size="medium" />
          </div>
        </div>

        <div className="hero-bg">
          <img src="/assets/hero.png" alt="Hero Background" />
        </div>
      </section>
  );
};

export default Header1;
