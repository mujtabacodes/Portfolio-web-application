import React from 'react'
import Lottie from "react-lottie";
import data from "./../../assets/lottie's/testimonail.json";

export default function Testimonial__lottie() {
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: data,
        rendererSettings: {
          preserveAspectRatio: "xMidYMid slice",
        },
      };
    
      return (
        <div id="lottie">
          <Lottie
            options={defaultOptions}
            height={300}
            width={400}
            style={{
            //   top: "-3%",
              right: "25%",
              // zIndex: -1,
              overflow: "hidden",
              position: "fixed",
              // marginLeft:'10rem',
              marginTop:'-2rem',
              position:"absolute"
            }}
          />
        </div>
      );
}


