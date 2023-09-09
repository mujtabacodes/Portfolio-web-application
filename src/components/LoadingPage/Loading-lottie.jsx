import React from 'react'
import Lottie from "react-lottie";
import data from "../../assets/lottie's/welcome__lottie.json";

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
    <div>
      <Lottie

        options={defaultOptions}
        height={300}
        width={300}

      />
    </div>
  );
}


