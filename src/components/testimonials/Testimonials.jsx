import React from "react";
import { useSelector } from "react-redux";
import "./testimonials.css";
import BoyAvator from "./../../assets/images/boy-profile.webp";
import GirlAvator from "./../../assets/images/girl-profile.webp";
import rachaAdel from "./../../assets/images/racha-adel.webp";
import bassi from "./../../assets/images/bassi.webp";
import jef from "./../../assets/images/jef.webp";


import { Swiper, SwiperSlide } from "swiper/react";


// import required modules
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";


// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";

import Testimonial__lottie from "./Testimonial__lottie";

const FixedData = [
  {
    id: 1,
    avator: GirlAvator,
    name: "Shaina",
    comment:
      "Mujtaba has been great to work with, he has helped me throughout the whole process and definitely is superb at what he does. I am very excited to run the site myself now and with the tutorial guide on how to manage my site is very helpful. I would definitely recommend Mujtaba to anyone who is looking for a professional website to be made. Thank You so much Mujtaba!",
  },
  {
    id: 2,
    avator: rachaAdel,
    name: "Racha Adel",
    comment:
      "Excellent. Such a pleasure to work with someone who is responsive and has a lot of skills, as well as patience. I enjoyed working with Shafique Mujtaba. He was very hardworking and provided great suggestions to make sure my website exactly how I imagined. I absolutely recommend hiring him . 'If you looking for a true professional this guy is your guy! I guarantee you wouldn’t be disappointed!'",
  },
  {
    id: 3,
    avator: bassi,
    name: "Bassi",
    comment:
      "Mujtaba is an incredible developer very patient, fast he finds the same solutions to some things that you did not imagine, he is a passionate and perfectionist, I found the right developer thank you brother",
  },
  {
    id: 4,
    avator: BoyAvator,
    name: "Letlotlompete",
    comment:
      "The service was seemless. He communicates all the time and the work was exceptional and punctual. I am extremely satisfied with the work he has done me!!!",
  },
  {
    id: 5,
    avator: jef,
    name: "Jefowles",
    comment:
      "Polite and easy to communicate with.",
  },

];

export default function Testimonials() {
  const testimonialData = useSelector((state) => state.testimonial);
  console.log(testimonialData);

  return (
    <section id="testimonials">
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          dynamicBullets: true,
          clickable: true,
        }}
        modules={[Autoplay, Pagination]}
        className="container testimonials__container mySwiper"

      >
        {FixedData.map(
          ({ id, avator, name, comment }) => {
            return (
              <SwiperSlide key={id} className="testimonial">
                <div className="client__avator">
                  <img src={avator} alt="" />
                </div>
                <div>
                  <h5 className="client__name">{name}</h5>
                  <small className="client__comment">{comment}</small>
                </div>
              </SwiperSlide>
            );
          }
        )}
        {testimonialData.map(
          ({ _id, selectedFile, clientname, clientcomment }) => {
            return (
              <SwiperSlide key={_id} className="testimonial">
                <div className="client__avator">
                  <img src={selectedFile} alt="" />
                </div>
                <div>
                  <h5 className="client__name">{clientname}</h5>
                  <small className="client__comment relative">{clientcomment}</small>
                </div>
              </SwiperSlide>
            );
          }
        )}

        {/* ========================== */}

        {/* ========================== */}
      </Swiper>

      <div className="testimonial__lottie">
        <Testimonial__lottie />
      </div>
    </section>
  );
}
