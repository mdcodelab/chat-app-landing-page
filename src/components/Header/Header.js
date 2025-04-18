import React from "react";
import { Button } from "../../Button/Button";
import { PiWaveformThin } from "react-icons/pi";
import "./Header.css";

export const Header = () => {
  return (
    <header className="frame" id="about">
      <nav className="navbar" aria-label="Main navigation">
        <img
          className="logo"
          src="/assets/rectangle-5.png"
          alt="Digi logo"
          loading="lazy"
        />
        <ul className="nav-links">
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#features">Features</a>
          </li>
          <li>
            <a href="#community">Community</a>
          </li>
          <li>
            <a href="#pricing">Pricing</a>
          </li>
          <li>
            <a href="#why-digi">Why DIGI</a>
          </li>
        </ul>
        <a href="#login" className="login-link">
          Log in
        </a>
      </nav>

      <section className="hero">
        <div className="hero-content">
          <h1 className="hero-title">
            Unleash&nbsp;&nbsp;the power of AI with DIGI
          </h1>
          <p className="hero-subtitle">
            Enter DIGI chat bot your gateway to unleash ing the unparalleled
            power of AI.
          </p>
          <div className="cta-button">
            <Button className="get-started" color="primary" size="medium" />
          </div>
        </div>
        <img
          className="hero-bg"
          src="/assets/rectangle-4.png"
          alt="Background visual"
          loading="lazy"
        />
      </section>
    </header>
  );
}; 