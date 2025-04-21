import React from "react";
import { Button } from "../../Button/Button";
import { PiWaveformThin } from "react-icons/pi";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoMdClose } from "react-icons/io";
import "./Header.css";
import { useSidebarContext } from "../../useContext";

export const Header = () => {
  const { isSidebarOpen, setIsSidebarOpen, toggleSidebar } = useSidebarContext();
  function openSidebar () {
    setIsSidebarOpen(prevState => !prevState);
  }

  function closeSidebar () {
    setIsSidebarOpen(prevState=> !prevState);
  }

  return (
    <header className="frame" id="home">
      <nav className="navbar" aria-label="Main navigation">
       <a href="#home">
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
            <a href="#why">Why DIGI</a>
          </li>
        </ul>
        <a href="#login" className="login-link">
          Log in
        </a>
        <div className="menu">
      <RxHamburgerMenu className={isSidebarOpen ? "icon open" : "icon open none"} onClick={openSidebar}></RxHamburgerMenu>
      <IoMdClose className={isSidebarOpen ? "icon close none" : "icon close display"} onClick={closeSidebar}></IoMdClose>
        </div>
      </nav>

      <section className="hero">
        <div className="hero-content">
          <h1 className="hero-title">
            Unleash the power  <PiWaveformThin className="icon"></PiWaveformThin>  of AI with DIGI
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