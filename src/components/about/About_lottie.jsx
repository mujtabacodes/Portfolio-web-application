import React from 'react'
import Lottie from "react-lottie";
import data from "./../../assets/lottie's/about_old.json";

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
        height={350}
        width={350}
        style={{
          //   top: "-3%",
          right: "8%",
          // zIndex: -1,
          overflow: "hidden",
          // position: "fixed",
          // marginLeft:'10rem',
          marginTop: '-7rem',
          position: "absolute"
        }}
      />
    </div>
  );
}


