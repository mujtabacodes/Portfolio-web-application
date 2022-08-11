import React from "react";
import { useSelector } from "react-redux";
import "./testimonials.css";
import fi_avator from "./../../assets/images/fiverr-avator.PNG";
import up_avator from "./../../assets/images/upwork-avator.PNG";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper";
import Testimonial__lottie from "./Testimonial__lottie";

const FixedData = [
  {
    id: 1,
    avator: fi_avator,
    name: "Racha Adel  website",
    comment:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Error doloribus labore dicta? Totam alias possimus laborum? Ab accusantium eius vel aspernatur amet nisi iure! Ab officiis maiores voluptas in labore  ",
  },
  {
    id: 2,
    avator: up_avator,
    name: "Racha Adel  website",
    comment:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Error doloribus labore dicta? Totam alias possimus laborum? Ab accusantium eius vel aspernatur amet nisi iure! Ab officiis maiores voluptas in labore  ",
  },
  {
    id: 3,
    avator: fi_avator,
    name: "Racha Adel  website",
    comment:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Error doloribus labore dicta? Totam alias possimus laborum? Ab accusantium eius vel aspernatur amet nisi iure! Ab officiis maiores voluptas in labore  ",
  },
  {
    id: 4,
    avator: up_avator,
    name: "Racha Adel  website",
    comment:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Error doloribus labore dicta? Totam alias possimus laborum? Ab accusantium eius vel aspernatur amet nisi iure! Ab officiis maiores voluptas in labore  ",
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
        className="container testimonials__container mySwiper"
        pagination={{
          dynamicBullets: true,
        }}
        modules={[Pagination]}
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
                  <small className="client__comment">{clientcomment}</small>
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
