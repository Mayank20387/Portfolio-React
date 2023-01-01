import React, { useRef } from "react";
import "./contact.css";
import { MdOutlineEmail } from "react-icons/md";
import { RiMessengerLine } from "react-icons/ri";
import { BsWhatsapp } from "react-icons/bs";
import { AiFillGithub } from "react-icons/ai";
import emailjs from "emailjs-com";

import { AiFillLinkedin } from "react-icons/ai";
const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_yhmyh7q",
        "template_wbpqpbr",
        form.current,
        "Po8nwYiPRh31wRCkt"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );

    e.target.reset();
  };

  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>
      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail className="contact__option-icon" />
            <h4>Email</h4>
            <h5>mayank2002kaim@gmail.com</h5>
            <a href="mailto:mayank2002kaim@gmail.com" target="_blank">
              Send a message
            </a>
          </article>

          <article className="contact__option">
            <AiFillGithub className="contact__option-icon" />
            <h4>Github</h4>
            <a href="https://github.com/Mayank20387" target="_blank">
              Redirect
            </a>
          </article>

          <article className="contact__option">
            <AiFillLinkedin className="contact__option-icon" />
            <h4>Linkedin</h4>
            <a
              href="https://www.linkedin.com/in/mayank-kaim-472b43242/"
              target="_blank"
            >
              Check out
            </a>
          </article>
        </div>

        <form ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            name="name"
            placeholder="Your Full Name"
            required
          />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea
            name="message"
            rows="7"
            placeholder="Your Message"
            required
          ></textarea>
          <div className="one2">
            <button type="submit" className="btn btn-primary">
              Send Message
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
