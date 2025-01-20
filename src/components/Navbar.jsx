import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav className={`navbar ${isScrolled ? "scrolled" : ""}`}>
      <div className="navbar-container">
        <Link to="/home" className="navbar-logo">
          MATT MARTINEZ
        </Link>
        <div className="menu-icon" onClick={toggleMenu}>
          <i className={isMenuOpen ? "fa fa-times" : "fa fa-bars"}></i>
        </div>
        <ul className={isMenuOpen ? "nav-menu active" : "nav-menu"}>
          <li className="nav-item">
            <Link to="/home" className="nav-links" onClick={toggleMenu}>
              HOME
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/portfolio" className="nav-links" onClick={toggleMenu}>
              PORTFOLIO
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/about" className="nav-links" onClick={toggleMenu}>
              ABOUT
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/contact" className="nav-links" onClick={toggleMenu}>
              CONTACT
            </Link>
          </li>
          <li className="nav-item">
            <a
              href="https://github.com/Mattmart42"
              className="nav-links"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="/assets/github-mark-white.png" alt="Github" className="github-icon" />
            </a>
            <a
              href="https://www.linkedin.com/in/matt-martinez-a85112257/"
              className="nav-links"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="/assets/icons8-linkedin (2).svg" alt="LinkedIn" className="linkedin-icon" />
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;