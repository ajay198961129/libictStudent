import React, { useState } from "react";
import { Link } from "react-router-dom";
import MobileMenu from "./MobileMenu";
import "./Header.css";
import logoImage from "../assests/images/logo-mini.png";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header>
      <nav>
        <div className="logo">
          <Link to="/">
            <img src={logoImage} />
          </Link>
        </div>
        <div className="nav-links">
          <Link to="/courses">Courses</Link>
          {/* <Link to="/mycourse">My Courses</Link> */}
          <Link to="/about-us">About Us</Link>
          <Link className="login-btn" to="/login">
            Login
          </Link>
        </div>
        <div className="hamburger" onClick={toggleMobileMenu}>
          &#9776;
        </div>
      </nav>
      {menuOpen && <MobileMenu closeMenu={toggleMobileMenu} />}
    </header>
  );
};

export default Header;
