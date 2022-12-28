import React from "react";
import "./about.css";
import ME from "../../assets/mayank_about.jpg";

const styles = {
  textAlign: "justify"
};
const About = () => {
  return (
    <body>
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About image" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <h5>
                “A famous explorer once said that the extraordinary is in what
                we do, not who we are.” – Tomb Raider
              </h5>
            </article>
          </div>
          <p style={styles}>
            Computer science & Design student from IIIT Delhi, future SDE. I
            learned how to apply my classroom knowledge creatively in real-world
            situations and the value of teams in solving complex problems. In
            addition, I frequently play video games to broaden my knowledge and
            problem solving skills :p
          </p>
          {/* <a href="#contact" className="btn1 btn-primary-1">
            Let's Talk
          </a> */}
        </div>
      </div>
    </section>
    </body>
  );
};
export default About;
