import React from "react";
import { useSelector } from "react-redux";
import "./portfolio.css";
import portfolio1 from "./../../assets/images/portfolio1.png"
import portfolio2 from "./../../assets/images/portfolio2.png"
import portfolio3 from "./../../assets/images/portfolio3.png"
import portfolio4 from "./../../assets/images/portfolio4.png"

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
    image: portfolio1,
    title: "Admin Dashboard",
    description:"MERN stack app",
    github: "https://github.com/Mujtaba4li/Admin-dashboard-FYP",
    demo: "https://admin-dashboard-fyp.vercel.app/dashboard",
  },
  {
    id: 2,
    image: portfolio2,
    title: "Jadid Creation",
    description:"Wordpress website",
    github: "https://github.com/Mujtaba4li?tab=repositories",
    demo: "https://jadidcreation.com/",
  },
  {
    id: 3,
    image: portfolio3,
    title: "Memories",
    description:"A simple CRUD MERN stack app",

    github: "https://github.com/Mujtaba4li/Memories-MERN-stack-FRONTEND",
    demo: "https://eloquent-beignet-f03ed6.netlify.app/",
  },
  {
    id: 4,
    image: portfolio4,
    title: "Paractise website",
    description:"HTML,CSS and JAVASCRIPT portfoio website",
    github: "https://github.com/Mujtaba4li/Portfolio-Website-using-HTML-CSS-and-JAVASCRIPT",
    demo: "https://grand-concha-54ca91.netlify.app/",
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
