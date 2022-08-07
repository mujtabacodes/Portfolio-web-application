import React from 'react'
import Lottie from "react-lottie";
import data from "./../../assets/lottie's/footer.json";

export default function About_lottie() {
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
              right: "10%",
              // zIndex: -1,
              overflow: "hidden",
              // position: "fixed",
              // marginLeft:'10rem',
              marginTop:'-7rem',
              position:"absolute"
            }}
          />
        </div>
      );
}


