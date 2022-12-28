import React from "react";
import "./footer.css";
import { FaFacebookF } from "react-icons/fa";
import { FiInstagram } from "react-icons/fi";
import { IoLogoTwitter } from "react-icons/io";

const Footer = () => {
  return (
    <footer>
      <a href="" className="footer__logo">
        MAYANK | CSD
      </a>

      <ul className="permalinks">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#portfolio">Portfolio</a>
        </li>

        <li>
          <a href="#contacts">Contacts</a>
        </li>
      </ul>

      <div className="footer__socials">
        <a href="https://www.instagram.com/mayank_0711/">
          <FiInstagram />
        </a>
        <a href="https://twitter.com/Mayank57924469">
          <IoLogoTwitter />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
