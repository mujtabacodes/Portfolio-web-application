import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

import portfolio1 from "./../../assets/images/portfolio1.png"
import portfolio2 from "./../../assets/images/portfolio2.png"
import portfolio3 from "./../../assets/images/portfolio3.png"
import portfolio4 from "./../../assets/images/portfolio4.png"
import portfolio5 from "./../../assets/images/ecommerce_site.png"
import portfolio6 from "./../../assets/images/portfolio-6.png"
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "./portfolio.css";

// import required modules
import { Mousewheel, Pagination } from "swiper";
import { useSelector } from "react-redux";



const portfoioItems = [
  {
    id: 1,
    image: portfolio1,
    title: "Admin Dashboard",
    description: "MERN stack",
    github: "https://github.com/Mujtaba4li/Admin-dashboard-FYP",
    demo: "https://admin-dashboard-fyp.vercel.app/dashboard",
  },
  {
    id: 5,
    image: portfolio5,
    title: "Ecommerce site",
    description: "ReactJS, NextJS, Sanity, Stripe",
    github: "https://github.com/Mujtaba4li/BuyNow-ecommerce-store",
    demo: "https://buy-now-ecommerce-store.vercel.app/",
  },

  {
    id: 6,
    image: portfolio6,
    title: "Pak Deliveroo Mobile app",
    description: "React Native, Redux, Sanity, TailwindCSS",
    github: "https://github.com/Mujtaba4li/Pak-Deliveroo-React-Native",
    demo: "https://vimeo.com/756063945",
  },
  {
    id: 2,
    image: portfolio2,
    title: "Jadid Creation",
    description: "Wordpress website",
    github: "https://github.com/Mujtaba4li?tab=repositories",
    demo: "https://jadidcreation.com/",
  },
  {
    id: 3,
    image: portfolio3,
    title: "Memories",
    description: "A simple CRUD MERN stack app",

    github: "https://github.com/Mujtaba4li/Memories-MERN-stack-FRONTEND",
    demo: "https://eloquent-beignet-f03ed6.netlify.app/",
  },
  {
    id: 4,
    image: portfolio4,
    title: "Paractise website",
    description: "HTML,CSS and JAVASCRIPT portfoio website",
    github: "https://github.com/Mujtaba4li/Portfolio-Website-using-HTML-CSS-and-JAVASCRIPT",
    demo: "https://grand-concha-54ca91.netlify.app/",
  },

];
export default function Portfolio() {
  const portfolioData = useSelector((state) => state.portfolio);
  console.log(portfolioData);

  return (
    <>
      <section id="portfolio" className="portfolio">
        <h5>My Recent Work</h5>
        <h2>Portfolio</h2>
        <Swiper
          direction={"horizontal"}
          // slidesPerView={2}
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
              slidesPerView: 2,
              spaceBetween: 30,
            }
          }}
          spaceBetween={30}
          mousewheel={true}
          pagination={{
            clickable: true,
          }}
          modules={[Mousewheel, Pagination]}
          className="mySwiper"
        >
          {portfoioItems.map(({ id, image, description, title, github, demo }, index) => {
            return (
              <SwiperSlide key={id} className="project-item">
                <div className="portfolio__item-img">
                  <img src={image} alt={title} />
                </div>
                <div className="project-details">
                  <h3 className="project-title"><span className="project-pre-title">Project {index + 1} from {portfoioItems.length} :</span> {title}</h3>

                  <small className="project-description">{description}</small>
                </div>
                <div className="portfolio__item-cta">
                  <a href={github} className="btn m-2" target="_blank">
                    GitHub
                  </a>
                  <a href={demo} className="btn btn-primary m-2" target="_blank">
                    Live Demo
                  </a>
                </div>
              </SwiperSlide>
            );
          })}



        </Swiper>
      </section>
    </>
  );
}
