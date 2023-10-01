import React from 'react'
import Lottie from "react-lottie";
import data from "../../assets/lottie's/animation_ln770pi0.json";

export default function HomeLottie() {
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
        height={400}
        width={400}

      />
    </div>
  );
}


