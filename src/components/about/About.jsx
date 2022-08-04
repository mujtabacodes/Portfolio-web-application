import React from "react";
import "./about.css";
import ME from "./../../assets/images/about-img.JPG";
import { FaAward, FaHandshake, FaLaptopCode } from "react-icons/fa";

export default function About() {
  return (
    <section id="about">
      <h5>GET TO KNOW</h5>
      <h2>About Me</h2>
      <div className="container about__container">
        <div className="about__me">
          <img src={ME} alt="" />
        </div>
        <div className="about__content">
          <div className="about__cards">
            <div className="about__card">
              <FaAward />
              <h3>Experience</h3>
              <p>2+ years</p>
            </div>
            <div className="about__card">
              <FaLaptopCode />
              <h3>Number of project</h3>
              <p>10+</p>
            </div>
            <div className="about__card">
              <FaHandshake />
              <h3>Work with Clients</h3>
              <p>10+</p>
            </div>
          </div>
          <p>
          Hello! My name is Mujtaba Shafique and I am a Software Engineering. I have 1+ years of experience in commercial website design and development. My main expertise is in React and Java(SpringBoot). I'm looking for a great, enthusiastic developer team to work for that will provide me with challenging, interesting work that I can learn from and contribute to. I'd like to contribute more to Website development, I love to develop the MERN stack web apps.
          </p>
          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
}
