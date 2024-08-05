import React from "react";
import "./MobileMenu.css";

const MobileMenu = ({ closeMenu }) => {
  return (
    <div className="mobile-menu">
      <a href="#" onClick={closeMenu}>
        &#10006;
      </a>
      <a href="#">Courses</a>
      <a href="#">About Us</a>
    </div>
  );
};

export default MobileMenu;
