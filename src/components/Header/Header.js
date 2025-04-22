import React from "react";
import { GiPsychicWaves } from "react-icons/gi";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoMdClose } from "react-icons/io";
import { useSidebarContext } from "../../useContext";
import { Button } from "../../Button/Button";
import "./Header.css";

export const Header = () => {
  const { isSidebarOpen, setIsSidebarOpen } = useSidebarContext();

  const toggleSidebar = () => {
    setIsSidebarOpen((prev) => !prev);
  };

  return (
    <header className="frame" id="home">
      <nav className="navbar" aria-label="Main navigation">
        <a href="#home" onClick={toggleSidebar}>
          <img
            className="logo"
            src="/assets/rectangle-5.png"
            alt="Digi logo"
            loading="lazy"
          />
        </a>
        <ul className="nav-links">
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
            <a href="#testimonials">Testimonials</a>
          </li>
          <li>
            <a href="#why">Why DIGI</a>
          </li>
        </ul>
        <a href="#login" className="login-link">
          Log in
        </a>
        <div className="menu">
          {isSidebarOpen ? (
            <IoMdClose className="icon" onClick={toggleSidebar} />
          ) : (
            <RxHamburgerMenu className="icon" onClick={toggleSidebar} />
          )}
        </div>
      </nav>

      <section className="hero">
        <div className="hero-content">
          <h1 className="hero-title">
            Unleash the power <GiPsychicWaves className="icon" /> of AI with DIGI
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
    </header>
  );
};
