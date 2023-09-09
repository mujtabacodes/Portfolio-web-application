import React from 'react'
import Lottie from "react-lottie";
import data from "../../assets/lottie's/website.json";

export default function SkillsLottie() {
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
        className='skillLottie__style'
        style={{
          //   top: "-3%",
          right: "0%",
          // zIndex: -1,
          overflow: "hidden",
          // position: "fixed",
          // marginLeft:'10rem',
          marginTop: '-14rem',
          position: "absolute"
        }}
      />
    </div>
  );
}


