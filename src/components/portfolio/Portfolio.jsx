import React from "react";
import "./portfolio.css";
import IMG1 from "../../assets/cabs.jpg";
import IMG2 from "../../assets/harmonic.png";
import IMG3 from "../../assets/snakes.jpg";
import IMG4 from "../../assets/dis.jpg";
import IMG5 from "../../assets/astrella_1.jpg";
import IMG6 from "../../assets/paw.png";
import IMG7 from "../../assets/triad.jpg";
const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Accomplishments</h5>
      <h2>Projects</h2>

      <div className="container portfolio__container">
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG1} alt="" />
          </div>
          <h3>Smart Cabs</h3>

          <div className="portfolio__item-cta">
            <div>
              <a
                href="https://github.com/Mayank20387/Smart-Cabs"
                className="btn"
                target="_blank"
              >
                Github
              </a>
            </div>
          </div>
          <div className="box-para">
            <p>
              A cab booking platform , which has a proper working back-end code
              along with a database for storing data effectively, which can be
              called as and when needed, as well as a user-interactive
              front-end, for users to use our application with great ease.
            </p>
          </div>
        </article>

        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG2} alt="" />
          </div>
          <h3>Harmonic Character Articulation</h3>
          <div className="portfolio__item-cta">
            <a
              href="https://github.com/Mayank20387/Harmonic-Coordinates-for-Character-Articulation"
              className="btn"
              target="_blank"
            >
              Github
            </a>
          </div>
          <div className="box-para">
            <p>
              The goal of this project is to create and control volume
              deformations, also known as rigging that is used to articulate
              characters used in high end applications such as computer
              generated feature films.
            </p>
          </div>
        </article>

        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG3} alt="" />
          </div>
          <h3>Snakes & Ladders</h3>
          <div className="portfolio__item-cta">
            <a
              href="https://github.com/Mayank20387/Snakes_code"
              className="btn"
              target="_blank"
            >
              Github
            </a>
          </div>
          <div className="box-para">
            <p>
              This snakes and ladders game is primarily designed as a semester
              project. It particularly aims at imparting general workable and
              practical knowledge about Java and Javafx with scene Builder and
              lets the beginners have adequate concept on programming small to
              big projects
            </p>
          </div>
        </article>

        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG4} alt="" />
          </div>
          <h3>Ingenious</h3>
          <div className="portfolio__item-cta">
            <a
              href="https://github.com/Mayank20387/Ingenious"
              className="btn"
              target="_blank"
            >
              Github
            </a>
          </div>
          <div className="box-para">
            <p>
              Users can use tools to manipulate 3d objects to teach or study
              them in detail with the features of Virtual Drawing and much more
            </p>
          </div>
        </article>

        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG5} alt="" />
          </div>
          <h3>Astrella</h3>
          <div className="portfolio__item-cta">
            <a
              href="https://www.figma.com/proto/T8RK35yp8lxzWm5eZLANv0/Astrella?node-id=11%3A2&scaling=min-zoom&page-id=0%3A1&starting-point-node-id=1%3A2&show-proto-sidebar=1"
              className="btn"
              target="_blank"
            >
              Demo
            </a>
          </div>
          <div className="box-para">
            <p>
              Astrella is a tool to express one's enthusiasm towards space
              exploration. Provides New's feed, blogs, information and a 3d
              space simulator
            </p>
          </div>
        </article>

        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG6} alt="" />
          </div>
          <h3>Pawriwar</h3>
          <div className="portfolio__item-cta">
            <a
              href="https://www.figma.com/proto/goeJsnkGrxB2uZ3rI4YGQg/PAWriwar-website?node-id=2%3A2&starting-point-node-id=2%3A2&scaling=contain"
              className="btn"
              target="_blank"
            >
              Demo
            </a>
          </div>
          <div className="box-para">
            <p>
              Used Design Process and Thinking to solve the problem of NGO
              (Pawriwar).Redesigned the Visual Identity of the NGO and Designed
              a website increasing donation and support for the NGO.
            </p>
          </div>
        </article>

        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG7} alt="" />
          </div>
          <h3>Triad</h3>
          <div className="portfolio__item-cta">
            <a href="https://github.com/Mayank20387/Triad" className="btn">
              Github
            </a>
          </div>
          <div className="box-para">
            <p>
              Developed a code for Hotel search and extensive price comparison
              based on hotel ratings. Used concepts of Python, Django and Mysql.
            </p>
          </div>
        </article>
      </div>
    </section>
  );
};

export default Portfolio;
