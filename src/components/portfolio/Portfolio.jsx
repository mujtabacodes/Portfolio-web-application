import React from 'react'
import './portfolio.css'
import porfolioimg from './../../assets/images/home-img.jpg';
export default function Portfolio() {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio__container">
      <article className='porfolio__item'>
        <div className="portfolio__item-img">
          <img src={porfolioimg} alt="" />
        </div>
        <h3>This is portfolio</h3>
        <a href="http://www.google.com" className='btn' target='_blank'>GitHub</a>
        <a href="http://www.google.com" className='btn btn-primary' target='_blank'>Live Demo</a>
        
      </article>


      {/* ========================================= */}
      <article className='porfolio__item'>
        <div className="portfolio__item-img">
          <img src={porfolioimg} alt="" />
        </div>
        <h3>This is portfolio</h3>
        <a href="http://www.google.com" className='btn' target='_blank'>GitHub</a>
        <a href="http://www.google.com" className='btn btn-primary' target='_blank'>Live Demo</a>
        
      </article>
      <article className='porfolio__item'>
        <div className="portfolio__item-img">
          <img src={porfolioimg} alt="" />
        </div>
        <h3>This is portfolio</h3>
        <a href="http://www.google.com" className='btn' target='_blank'>GitHub</a>
        <a href="http://www.google.com" className='btn btn-primary' target='_blank'>Live Demo</a>
        
      </article>
      <article className='porfolio__item'>
        <div className="portfolio__item-img">
          <img src={porfolioimg} alt="" />
        </div>
        <h3>This is portfolio</h3>
        <a href="http://www.google.com" className='btn' target='_blank'>GitHub</a>
        <a href="http://www.google.com" className='btn btn-primary' target='_blank'>Live Demo</a>
        
      </article>
      <article className='porfolio__item'>
        <div className="portfolio__item-img">
          <img src={porfolioimg} alt="" />
        </div>
        <h3>This is portfolio</h3>
        <a href="http://www.google.com" className='btn' target='_blank'>GitHub</a>
        <a href="http://www.google.com" className='btn btn-primary' target='_blank'>Live Demo</a>
        
      </article>
      <article className='porfolio__item'>
        <div className="portfolio__item-img">
          <img src={porfolioimg} alt="" />
        </div>
        <h3>This is portfolio</h3>
        <a href="http://www.google.com" className='btn' target='_blank'>GitHub</a>
        <a href="http://www.google.com" className='btn btn-primary' target='_blank'>Live Demo</a>
        
      </article>
      {/* ========================================= */}
      </div>
    </section>
  )
}
