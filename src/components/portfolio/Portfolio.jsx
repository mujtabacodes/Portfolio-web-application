import React, { useRef, useState } from "react";
import { useSelector } from "react-redux";
import "./portfolio.css";
import porfolioimg from "./../../assets/images/home-img.jpg";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";


// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";

const FixedData = [
  {
    id: 1,
    image: porfolioimg,
    title: "Racha Adel  website",
    description:"lorem20sdfasdfnaklsdfnklasdnfkasdnfknasdkfnaklsdnfkasdnfknasdkfn",
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
  {
    id: 5,
    image: porfolioimg,
    title: "Oy its Working",
    github: "https://github.com",
    demo: "https://www.google.com",
  },
];

// import{actionCreatorsPortfolio} from '../../actions/index'

export default function Portfolio() {
const portfolioData=useSelector((state)=>state.portfolio);
console.log(portfolioData);






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
        {FixedData.map(({ id, image,description, title, github, demo }) => {
          return (
            <SwiperSlide key={id} className="porfolio__item">
              <div className="portfolio__item-img">
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
             
              <small className="text-light description">{description}</small>
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
        {portfolioData.map(({ _id, selectedFile,description, title, github, demo }) => {
          return (
            <SwiperSlide key={_id} className="porfolio__item">
              <div className="portfolio__item-img">
                <img src={selectedFile} alt={title} />
              </div>
              <h3>{title}</h3>
              <small className="text-light description">{description}</small>
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
