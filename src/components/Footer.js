import React from "react";
import "./Footer.css";
import logo from "../assests/images/logo-mini.png";
import { FaFacebook, FaYoutube } from "react-icons/fa";
import { FaLinkedinIn, FaTwitter } from "react-icons/fa6";
const Footer = () => {
  return (
    <footer>
      <div className="footer-logo">
        <img src={logo} />
        <p>
          LIBICT is an online learning platform for social impact organizations.
        </p>
        <div className="social-media">
          <a href="#">
            <FaFacebook color="#fff" size={25} />
          </a>
          <a href="#">
            <FaTwitter color="#fff" size={25} />
          </a>
          <a href="#">
            <FaLinkedinIn color="#fff" size={25} />
          </a>
          <a href="#">
            <FaYoutube color="#fff" size={25} />
          </a>
        </div>
      </div>
      <div className="quick-links">
        <h3>Quick Links</h3>
        <ul>
          <li>
            <a href="#">About Us</a>
          </li>
          <li>
            <a href="#">Terms of Use</a>
          </li>
          <li>
            <a href="#">Privacy Policy</a>
          </li>
        </ul>
      </div>
      <div className="company-links">
        <h3>Company</h3>
        <ul>
          <li>
            <a href="#">Courses</a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
