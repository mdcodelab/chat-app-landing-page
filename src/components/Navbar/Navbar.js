import React from "react";
import { GiPsychicWaves } from "react-icons/gi";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoMdClose } from "react-icons/io";
import { useSidebarContext } from "../../useContext";
import "./Navbar.css";

export const Navbar = () => {
  const { isSidebarOpen, setIsSidebarOpen } = useSidebarContext();

  const toggleSidebar = () => {
    setIsSidebarOpen((prev) => !prev);
  };

  return (
      <nav className="navbar" aria-label="Main navigation">
        <a href="#home">
          <img
            className="logo"
            src="/assets/logonav.png"
            alt="Digi logo"
            loading="lazy"
          />
        </a>
        <ul className="nav-links">
          <li>
            <a href="#features">Features</a>
          </li>
          <li>
            <a href="#download">Download</a>
          </li>
          <li>
            <a href="#pricing">Pricing</a>
          </li>
          <li>
            <a href="#community">Community</a>
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
  );
};

export default Navbar;

