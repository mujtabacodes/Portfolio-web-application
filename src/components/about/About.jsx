import React from "react";
import "./about.css";
import ME from "./../../assets/images/about-image.webp";
import { FaAward, FaHandshake, FaLaptopCode } from "react-icons/fa";
import { BsInstagram, BsTwitter } from "react-icons/bs";
import About_lottie from "./About_lottie";
import { motion } from 'framer-motion'

export default function About() {
  return (
    <section id="about">
      <h5>GET TO KNOW</h5>
      <h2>About Me</h2>
      <div className="container about__container">
        <div className="about__me">
          <div

            className="about__me-img grid">
            {/* <img src={ME} alt="" /> */}
            {/* <div className="grid"> */}
            <figure className="effect-zoe">
              <img src={ME} alt="About me" />
              <figcaption>
                <h2>
                  Mr. <span> MUJTABA</span>
                </h2>
                <p className="icon-links">
                  <a href="https://twitter.com/mujtabacodes" target="_blank">
                    <BsTwitter />
                  </a>
                  <a href="https://www.instagram.com/mujtaba.codes_/" target="_blank">
                    <BsInstagram />
                  </a>
                </p>
              </figcaption>
            </figure>
          </div>
        </div>
        <div

          className="about__content">
          <div className="about__cards">
            <div className="about__card">
              <div className="about__icon">
                <FaAward />
              </div>
              <h3>Experience</h3>
              <h5 className="text-light">6month+</h5>
            </div>
            <div className="about__card">
              <div className="about__icon">
                <FaLaptopCode />
              </div>
              <h3>Projects</h3>
              <h5 className="text-light">10+</h5>
            </div>
            <div className="about__card">
              <div className="about__icon">
                <FaHandshake />
              </div>
              <h3>Clients</h3>
              <h5 className="text-light">5+</h5>
            </div>
          </div>

          <p className="text-justify text-sm">
            With over 2 years of experience in this field and building high-performance, pixel-perfect web apps, I have learned that the user's experience is of utmost importance. My dedication is focused on ensuring a seamless user experience, smooth transitions, consistent interactions, and fast loading times. Throughout the product lifecycle, I possess comprehensive experience in tasks such as planning, designing, coding, deploying, and providing customer support. I am the type of developer who can dive in, tackle challenges with creative problem-solving, and remain dedicated to achieving results.
          </p>
          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>


      <div className="about__lottie">
        <About_lottie />
      </div>
    </section>
  );
}
