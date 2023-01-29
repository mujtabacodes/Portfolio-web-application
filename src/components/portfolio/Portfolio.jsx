import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

import portfolio1 from "./../../assets/images/portfolio1.png"
import portfolio2 from "./../../assets/images/portfolio2.png"
import portfolio3 from "./../../assets/images/portfolio3.png"
import portfolio4 from "./../../assets/images/portfolio4.png"
import portfolio5 from "./../../assets/images/portfolio5.png"
import portfolio6 from "./../../assets/images/portfolio6.png"
import portfolio7 from "./../../assets/images/portfolio7.png"
import portfolio8 from "./../../assets/images/portfolio8.png"
import portfolio9 from "./../../assets/images/portfolio9.png"




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
    title: "React Calculator",
    description: "ReactJS, Redux, TailwindCSS",
    github: "https://github.com/Mujtaba4li/React-calculator",
    demo: "https://react-calculator-mujtaba4li.vercel.app/",
  },
  {
    id: 2,
    image: portfolio2,
    title: "Ecommerce site",
    description: "NextJS(React), TailwindCSS, Sanity, Stripe payment method",
    github: "https://github.com/Mujtaba4li/BuyNow-ecommerce-store",
    demo: "https://buy-now-ecommerce-store.vercel.app/",
  },

  {
    id: 3,
    image: portfolio3,
    title: "Token Authentication",
    description: "React JS, MaterialIU, Axios, JWT token authentication",
    github: "https://github.com/Mujtaba4li/frontend-hiringTest",
    demo: "https://frontend-hiring-test-mujtaba-shafique.vercel.app/",
  },
  {
    id: 4,
    image: portfolio4,
    title: "Portfolio Website",
    description: "ReactJS, TailwindCSS, NodeJS, MongoDB, Axios, EmailJS",
    github: "https://github.com/Mujtaba4li",
    demo: "https://mujtaba-ali.vercel.app/",
  },
  {
    id: 5,
    image: portfolio5,
    title: "Pak Deliveroo",
    description: "React Native(Andriod & IOS mobile application), TailwindCSS, Sanity",
    github: "https://github.com/Mujtaba4li/Pak-Deliveroo-React-Native",
    demo: "https://vimeo.com/756063945",
  },
  {
    id: 6,
    image: portfolio6,
    title: "Admin Dashboard",
    description: "ReactJS, Material UI, Axios, ChartJS",
    github: "https://github.com/Mujtaba4li/Admin-dashboard-FYP",
    demo: "https://admin-dashboard-fyp.vercel.app/dashboard",
  },
  {
    id: 7,
    image: portfolio7,
    title: "Ecommerce Website",
    description: "WordPress, WooCommerce, Contact Form",
      github: "https://jadidcreation.com/",
    demo: "https://jadidcreation.com/",
  },
  {
    id: 8,
    image: portfolio8,
    title: "CRUD WebApp",
    description: "ReactJS, MaterialUI,Redux, Axios, NodeJS, MongoDB",
    github: "https://github.com/Mujtaba4li/Memories-MERN-stack-FRONTEND",
    demo: "https://eloquent-beignet-f03ed6.netlify.app/",
  },
  {
    id: 9,
    image: portfolio9,
    title: "Porfolio website",
    description: "HTML,CSS and JAVASCRIPT (Paractise website)",
    github: "https://github.com/Mujtaba4li/Portfolio-Website-using-HTML-CSS-and-JAVASCRIPT",
    demo: "https://grand-concha-54ca91.netlify.app/",
  },
  

];
export default function Portfolio() {
  const portfolioData = useSelector((state) => state.portfolio);
  console.log(portfolioData);
  const {innerHeight:h,innerWidth:w}=window;
  console.log("Width is "+w);

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
