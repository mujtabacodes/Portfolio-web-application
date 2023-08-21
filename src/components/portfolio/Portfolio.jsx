import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "./portfolio.css";
import { Mousewheel, Pagination } from "swiper";
import { useSelector } from "react-redux";
import axios from 'axios';


import sanityClient, { urlFor } from "../../sanity";


export default function Portfolio() {
  const { innerHeight: h, innerWidth: w } = window;
  const [isHovered, setIsHovered] = useState(null);
  const [PortfolioItems, setPortfolioItems] = useState([]);

  useEffect(() => {
    sanityClient.fetch(`
    *[_type=="portfolio"]{
      ...,
      }`).then((data) => {
      setPortfolioItems(data);
    });

  }, [])


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
          {console.log("Portfolio items")}
          {console.log(PortfolioItems)}
          {PortfolioItems.map(({ id, image, description, title, github, demo }) => {
            return (
              <SwiperSlide key={id} className="project-item">
                <div className="portfolio__item-img" onMouseOver={() => setIsHovered(id)}
                  onMouseOut={() => setIsHovered(null)}>
                  <img
                    src={urlFor(image).url()}
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
