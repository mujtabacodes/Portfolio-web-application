import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "./portfolio.css";
import { Mousewheel, Pagination } from "swiper";
import { useSelector } from "react-redux";

import portfolio1 from "./../../assets/images/portfolio1.png";
import portfolio2 from "./../../assets/images/portfolio2.png";
import portfolio3 from "./../../assets/images/portfolio3.png";
import portfolio4 from "./../../assets/images/portfolio4.png";
import portfolio5 from "./../../assets/images/portfolio5.png";
import portfolio6 from "./../../assets/images/portfolio6.png";
import portfolio7 from "./../../assets/images/portfolio7.png";

const portfoioItems = [
  {
    id: 1,
    image: portfolio1,
    title: "Ecommerce site",
    description: "NextJS(React), TailwindCSS, Sanity, Stripe payment method",
    github: "https://github.com/Mujtaba4li/BuyNow-ecommerce-store",
    demo: "https://buy-now-ecommerce-store.vercel.app/",
  },
  {
    id: 2,
    image: portfolio2,
    title: "Netflix Clone",
    description: "ReactJS, Typescript, Stripe Checkout & Webhooks, Redux tool kit, Firestore, Google Auth",
    github: "https://github.com/Mujtaba4li/netflix-clone",
    demo: "https://netflix-clone-69c81.web.app/",
  },
  {
    id: 3,
    image: portfolio4,
    title: "Deliveroo clone",
    description: "React Native(Andriod & IOS mobile application), TailwindCSS, Sanity",
    github: "https://github.com/Mujtaba4li/Pak-Deliveroo-React-Native",
    demo: "https://vimeo.com/756063945",
  },
  {
    id: 4,
    image: portfolio3,
    title: "React Calculator",
    description: "ReactJS, Redux, TailwindCSS",
    github: "https://github.com/Mujtaba4li/React-calculator",
    demo: "https://react-calculator-mujtaba4li.vercel.app/",
  },
 
  {
    id: 5,
    image: portfolio5,
    title: "Ecommerce Website",
    description: "WordPress, WooCommerce, Contact Form",
    //github: "https://jadidcreation.com/",
    //demo: "https://jadidcreation.com/",
  },
  {
    id: 6,
    image: portfolio6,
    title: "Admin Dashboard",
    description: "ReactJS, Material UI, Axios, ChartJS",
    // github: "https://github.com/Mujtaba4li/Admin-dashboard-FYP",
     demo: "https://admin-dashboard-fyp.vercel.app/dashboard",
  },
  {
    id: 7,
    image: portfolio7,
    title: "Token Authentication",
    description: "React JS, MaterialIU, Axios, JWT token authentication",
    github: "https://github.com/Mujtaba4li/frontend-hiringTest",
    demo: "https://frontend-hiring-test-mujtaba-shafique.vercel.app/",
  },
];

export default function Portfolio() {
  const { innerHeight: h, innerWidth: w } = window;
  const [isHovered, setIsHovered] = useState(null);

  return (
    <>
      <section id="portfolio" className="portfolio">
        <h5>My Recent Work</h5>
        <h2>Portfolio</h2>
        <Swiper
          direction="horizontal"
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
            },
          }}
          spaceBetween={30}
          mousewheel={true}
          pagination={{ clickable: true }}
          modules={[Mousewheel, Pagination]}
          className="mySwiper"
        >
          {portfoioItems.map(({ id, image, description, title, github, demo }, index) => {
            return (
              <SwiperSlide key={id} className="project-item">
                <div className="portfolio__item-img" onMouseOver={() => setIsHovered(id)}
                  onMouseOut={() => setIsHovered(null)}>
                  <img
                    src={image}
                    alt={title}
                    className="image"

                  />
                </div>

                <div className="content">
                  <div className="project-details">
                    <h3 className="project-title">
                      
                      {title}
                    </h3>
                    <small className="project-description">{description}</small>
                  </div>
                  <div className="portfolio__item-cta">
                    {github && (

                      <a href={github} className="btn m-2 linksBtn" target="_blank" rel="noopener noreferrer">
                        Code Review
                      </a>
                    )}
                    {demo && (

                      <a href={demo} className="btn btn-primary m-2 linksBtn" target="_blank" rel="noopener noreferrer">
                        Live Demo
                      </a>
                    )}
                  </div>
                </div>

              </SwiperSlide>
            );
          })}
        </Swiper>
      </section>
    </>
  );
}
