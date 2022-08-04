import React from "react";
import CTA from "./CTA";
import "./home.css";
// import ME from './../../assets/images/home-img.jpg'
import ME from './../../assets/images/header-img.png'
import HomeSocial from "./HomeSocial";
export default function Home() {
  return (
    <>
      <header className="container home__container">
        <h5>Hello I'm</h5>
        <h1>Mujtaba Shafique</h1>
        <h5 className="text-light">
          Software Engineer | Full stack developer | MERN | JAVA(springboot)
        </h5>
        <CTA/>
       <HomeSocial/>
        <div className="me">
          <img src={ME} alt="" className="img"/>
        </div>
        <a href="#contact" className="scroll__down">Scroll Down</a>
      </header>
    </>
  );
}
