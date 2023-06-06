import React from "react";
import "./experience.css";
import { BsPatchCheckFill } from "react-icons/bs";
import ToolsAndTechnologies from "./ToolsAndTechnologies";
export default function Experience() {
  return (
    <section id="experience">
      <h5>Skills that I Know</h5>
      <h2>Experience</h2>
      <div className="container experience__container">
        <div className="container__frontend">
          <h3>Front End</h3>
          <div className="experience__content">
            <article className="experience__detail">
              <div className="experience__icon">
                <BsPatchCheckFill />
              </div>
              <div>
                <h4>ReactJS</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience__detail">
              <div className="experience__icon">
                <BsPatchCheckFill />
              </div>
              <div>
                <h4>Typescript/JS</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience__detail">
              <div className="experience__icon">
                <BsPatchCheckFill />
              </div>
              <div>
                <h4>Styled components</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience__detail">
              <div className="experience__icon">
                <BsPatchCheckFill />
              </div>
              <div>
                <h4>NextJS</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="experience__detail">
              <div className="experience__icon">
                <BsPatchCheckFill />
              </div>
              <div>
                <h4>React Native</h4>
                <small className="text-light">Basics</small>
              </div>
            </article>
            <article className="experience__detail">
              <div className="experience__icon">
                <BsPatchCheckFill />
              </div>
              <div>
                <h4>TailwindCSS</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience__detail">
              <div className="experience__icon">
                <BsPatchCheckFill />
              </div>
              <div>
                <h4>Material UI</h4>
                <small className="text-light">Intermediate</small>
              </div>{" "}
            </article>
            <article className="experience__detail">
              <div className="experience__icon">
                <BsPatchCheckFill />
              </div>
              <div>
                <h4>HTML,CSS & boostrap</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
          </div>
        </div>
        <div className="container__backend">
          <h3>Back End</h3>
          <div className="experience__content">
            <article className="experience__detail">
              <div className="experience__icon">
                <BsPatchCheckFill />
              </div>
              <div>
                <h4>Firebase</h4>
                <small className="text-light">Experienced</small>
              </div>{" "}
            </article>
            <article className="experience__detail">
              <div className="experience__icon">
                <BsPatchCheckFill />
              </div>
              <div>
                <h4>Node/ExpressJS</h4>
                <small className="text-light">Experienced</small>
              </div>{" "}
            </article>
            <article className="experience__detail">
              <div className="experience__icon">
                <BsPatchCheckFill />
              </div>
              <div>
                <h4>MongoDB</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience__detail">
              <div className="experience__icon">
                <BsPatchCheckFill />
              </div>
              <div>
                {" "}
                <h4>Java(SpringBoot)</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience__detail">
              <div className="experience__icon">
                <BsPatchCheckFill />
              </div>
              <div>
                {" "}
                <h4>MySQL</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="experience__detail">
              <div className="experience__icon">
                <BsPatchCheckFill />
              </div>
              <div>
                {" "}
                <h4>Sanity(CMS)</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="experience__detail">
              <div className="experience__icon">
                <BsPatchCheckFill />
              </div>
              <div>
                {" "}
                <h4>Firestore</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience__detail">
              <div className="experience__icon">
                <BsPatchCheckFill />
              </div>
              <div>
                {" "}
                <h4>Stripe payement</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
          </div>
        </div>
      </div>
     <ToolsAndTechnologies/>
    </section>
  );
}
