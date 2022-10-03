import React from "react";
import CV from "./../../assets/pdf/Mujtaba_Shafique.pdf";

export default function CTA() {
  return (
    <>
      <div className="cta">
        <a href={CV}  download="Mujtaba Shafique" className="btn">
          Download CV
        </a>
        <a href="#contact" className="btn btn-primary">
          Let's Talk
        </a>
      </div>
    </>
  );
}
