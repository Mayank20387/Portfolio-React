import React from "react";
import "./header.css";
import CV from "../../assets/Mayank_Resume.pdf";
import ME from "../../assets/Mayank1.jpg";

const Header = () => {
  return (
    <header>
      <div className="container header_container"></div>

      <h5>Hello I'm</h5>

      <div className="ani">
        <h1>MAYANK KAIM</h1>
      </div>

      <h5 className="text-light">SOFTWARE DEVELOPER</h5>

      <div className="cta">
        <a href={CV} download className="btn">
          Download CV
        </a>
        <a href="#contact" className="btn btn-primary">
          Contact
        </a>
      </div>

      <div className="me">
        <div className="about__me-image1">
          <img src={ME} alt="me" />
        </div>
      </div>
    </header>
  );
};

export default Header;
