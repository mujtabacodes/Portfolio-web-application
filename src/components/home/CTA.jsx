import React from "react";
import CV from "./../../assets/pdf/cv.pdf";

export default function CTA() {
  return (
    <>
      <div className="cta">
        <a href={CV}  download="Mujtaba Shafique _MERN_SpringBOOT_MySQL_1year" className="btn">
          Download CV
        </a>
        <a href="#contact" className="btn btn-primary">
          Let's Talk
        </a>
      </div>
    </>
  );
}
