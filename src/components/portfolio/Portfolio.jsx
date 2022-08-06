import React from 'react'
import './portfolio.css'
import porfolioimg from './../../assets/images/home-img.jpg';

const dataApi=[
  {
  id:1,
  image:porfolioimg,
  title:"Racha Adel  website",
  github:'https://github.com',
  demo:'https://www.google.com'
},
  {
  id:2,
  image:porfolioimg,
  title:"Racha Adel  website",
  github:'https://github.com',
  demo:'https://www.google.com'
},
  {
  id:3,
  image:porfolioimg,
  title:"Racha Adel  website",
  github:'https://github.com',
  demo:'https://www.google.com'
},
  {
  id:4,
  image:porfolioimg,
  title:"Racha Adel  website",
  github:'https://github.com',
  demo:'https://www.google.com'
},




]


export default function Portfolio() {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio__container">
      

      {
        dataApi.map(({id,image,title,github,demo})=>{
          return(
            <article key={id}  className='porfolio__item'>
        <div className="portfolio__item-img">
          <img src={image} alt={title} />
        </div>
        <h3>{title}</h3>
      <div className="portfolio__item-cta">
      <a href={github} className='btn' target='_blank'>GitHub</a>
        <a href={demo} className='btn btn-primary' target='_blank'>Live Demo</a>
        
      </div>
      </article>
          )
        })
      }


      {/* ========================================= */}
    








      {/* ========================================= */}
      </div>
    </section>
  )
}
