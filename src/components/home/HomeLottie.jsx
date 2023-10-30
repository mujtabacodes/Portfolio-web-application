import React from 'react'
import Lottie from "react-lottie";
import data from "../../assets/lottie's/welcome-note.json";

export default function HomeLottie() {
  const defaultOptions = {
    // loop: false,
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
        width={800}

      />
    </div>
  );
}


