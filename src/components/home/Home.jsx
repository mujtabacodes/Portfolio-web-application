import React, { useEffect, useState } from "react";
import CTA from "./CTA";
import "./home.css";
// import ME from './../../assets/images/home-img.jpg'
import ME from './../../assets/images/header-img.png'
import HomeSocial from "./HomeSocial";
import { BsLinkedin, } from 'react-icons/bs'
import { BiPhoneCall } from 'react-icons/bi'
import { RiWhatsappFill } from 'react-icons/ri'
import { AiFillGithub, AiFillMail } from 'react-icons/ai'
import SkillRotator from "./SkillRotator";
import { Application } from "@splinetool/runtime";

export default function Home() {
  const [loading, setLoading] = useState(true); // Start with loading set to true
  const [scene, setScene] = useState(null);
  useEffect(() => {
    const canvasElement = document.getElementById("canvas3d");

    if (canvasElement) {
      const app = new Application(canvasElement);
      app.load("https://prod.spline.design/xca2gVsEGPN5HsGs/scene.splinecode", {
        lazy: true,
      });
      setScene(app);
      if (scene) {

        setLoading(false); // Set loading to false when the scene is loaded
      }



    }

    const timer = setTimeout(() => {
      // dispatch(getPortifolio());
      // dispatch(getTestimonial());
      setLoading(false); // Set loading to false after 3 seconds
    }, 3500);

    // Clear the timer if the component unmounts before the 3 seconds
    return () => clearTimeout(timer);
  }, []);
  console.log("Toh scens kuch asah hain");
  console.log(scene);


  const skills = [
    'MERN Stack',
    'React',
    'NEXT.js',
    'Node',
    // Add more skills here as needed
  ];
  return (
    <>
      <header className="container home__container">
        <h5>Hello I'm</h5>
        <h1 className="name">Mujtaba Shafique</h1>
        <h5 className="text-light">
          Software Engineer | Web and Mobile App |
          <SkillRotator skills={skills} />
          developer
        </h5>
        <CTA />
        <div className='row'>
          <div>
            <HomeSocial />
          </div>
          <div>

            {loading && <div className="animated-welcome">
              Loading...
            </div>
            }
            <div className="animated-welcome">
              <canvas id="canvas3d" width="800" height="400"></canvas>
            </div>

            <div className="me mobileview-welcome">
              <img src={ME} alt="" className="img" />
            </div>
            <div className="mobileIcon">
              <a href="tel:+923046511650" className='phone M_icon'><BiPhoneCall /></a>
              <a href="https://api.whatsapp.com/send?phone=923046511650" target='_blank' className='whatsaap M_icon'><RiWhatsappFill /></a>
              <a href="mailto:mujtaba.shafique@outlook.com" target='_blank' className='mail M_icon'><AiFillMail /></a>
              <a href="https://www.linkedin.com/in/mujtaba-shafique/" target='_blank' className='linkedIn M_icon'><BsLinkedin /></a>
              <a href="https://github.com/Mujtaba4li" target='_blank' className='github M_icon'><AiFillGithub /></a>
            </div>
          </div>
          <div>
            <div className='rigtSide'>
              <a href="#about" className="scroll__down">Scroll Down</a>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
