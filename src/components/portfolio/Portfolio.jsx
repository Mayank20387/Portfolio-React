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
              <a href="#" className="btn">
                Github
              </a>
            </div>
          </div>
        </article>

        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG2} alt="" />
          </div>
          <h3>Character Articulation using Harmonic Coordinates</h3>
          <div className="portfolio__item-cta">
            <a href="#" className="btn">
              Github
            </a>
          </div>
        </article>

        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG3} alt="" />
          </div>
          <h3>Snakes & Ladders</h3>
          <div className="portfolio__item-cta">
            <a href="#" className="btn">
              Github
            </a>
          </div>
        </article>

        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG4} alt="" />
          </div>
          <h3>Ingenious</h3>
          <div className="portfolio__item-cta">
            <a href="#" className="btn">
              Github
            </a>
          </div>
        </article>

        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG5} alt="" />
          </div>
          <h3>Astrella</h3>
          <div className="portfolio__item-cta">
            <a href="#" className="btn">
              Github
            </a>
          </div>
        </article>

        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG6} alt="" />
          </div>
          <h3>Pawriwar</h3>
          <div className="portfolio__item-cta">
            <a href="#" className="btn">
              Github
            </a>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG7} alt="" />
          </div>
          <h3>Triad</h3>
          <div className="portfolio__item-cta">
            <a href="#" className="btn">
              Github
            </a>
          </div>
        </article>
      </div>
    </section>
  );
};

export default Portfolio;
