import React from 'react'
import Lottie from "react-lottie";
import data from "./../../assets/lottie's/coding.json";

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
        height={290}
        width={290}
        style={{
          //   top: "-3%",
          left: "4%",
          // zIndex: -1,
          overflow: "hidden",
          // position: "fixed",
          // marginLeft:'10rem',
          marginTop: '-5.5rem',
          position: "absolute"
        }}
      />
    </div>
  );
}


