import React from 'react'
import Lottie from "react-lottie";
import data from "./../../assets/lottie's/services.json";

export default function Service__lottie() {
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
            width={300}
            style={{
            //   top: "-3%",
              left: "7%",
              // zIndex: -1,
              overflow: "hidden",
              // position: "fixed",
              // marginLeft:'10rem',
              marginTop:'-6.5rem',
              position:"absolute"
            }}
          />
        </div>
      );
}


