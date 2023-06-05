import React from "react";
import CV from "./../../assets/pdf/Mujtaba_Shafique.pdf";

export default function CTA() {
  return (
    <>
      <div className="cta">
        <a href={CV}  download="Mujtaba Shafique" className="btn custom_btn">
          Download CV
        </a>
        <a href="#contact" className="btn btn-primary custom_btn">
          Schedule a meeting
        </a>
      </div>
    </>
  );
}
