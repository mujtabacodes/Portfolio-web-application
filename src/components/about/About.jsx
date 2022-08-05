import React from "react";
import "./about.css";
import ME from "./../../assets/images/about-img.jpg";
import { FaAward, FaHandshake, FaLaptopCode } from "react-icons/fa";

export default function About() {
  return (
    <section id="about">
      <h5>GET TO KNOW</h5>
      <h2>About Me</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-img">
          <img src={ME} alt="" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <div className="about__card">
              <div className="about__icon">
              <FaAward />


              </div>
              <h3>Experience</h3>
              <h5 className="text-light">2+ years</h5>
            </div>
            <div className="about__card">
            <div className="about__icon">
              <FaLaptopCode />
              </div>
              <h3>Number of project</h3>
              <h5 className="text-light">10+</h5>
            </div>
            <div className="about__card">
            <div className="about__icon">
              <FaHandshake />
              </div>
              <h3>Work with Clients</h3>
              <h5 className="text-light">10+</h5>
            </div>
          </div>
          <p>
          Looking for a great, enthusiastic developer team to work for that will provide me with challenging, interesting work that I can learn from and contribute to. I'd like to contribute more to Website development, I love to develop the MERN stack web apps. Currently learning React-Native.
          </p>
          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
}
