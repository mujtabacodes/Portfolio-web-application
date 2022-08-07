import React, { useRef, useState } from "react";
import "./portfolio.css";
import porfolioimg from "./../../assets/images/home-img.jpg";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";


// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";

const dataApi = [
  {
    id: 1,
    image: porfolioimg,
    title: "Racha Adel  website",
    github: "https://github.com",
    demo: "https://www.google.com",
  },
  {
    id: 2,
    image: porfolioimg,
    title: "Racha Adel  website",
    github: "https://github.com",
    demo: "https://www.google.com",
  },
  {
    id: 3,
    image: porfolioimg,
    title: "Racha Adel  website",
    github: "https://github.com",
    demo: "https://www.google.com",
  },
  {
    id: 4,
    image: porfolioimg,
    title: "Racha Adel  website",
    github: "https://github.com",
    demo: "https://www.google.com",
  },
];

export default function Portfolio() {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <Swiper
        className="container portfolio__container mySwiper"
        // loop={true}  
       
      //  spaceBetween={30}
        // centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}

        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 30,
          }}}

      >
        {dataApi.map(({ id, image, title, github, demo }) => {
          return (
            <SwiperSlide key={id} className="porfolio__item">
              <div className="portfolio__item-img">
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <small className="text-light description">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Impedit, vitae?</small>
              <div className="portfolio__item-cta">
                <a href={github} className="btn" target="_blank">
                  GitHub
                </a>
                <a href={demo} className="btn btn-primary" target="_blank">
                  Live Demo
                </a>
              </div>
            </SwiperSlide>
          );
        })}

        {/* ========================================= */}

        {/* ========================================= */}
      </Swiper>
    </section>
  );
}
