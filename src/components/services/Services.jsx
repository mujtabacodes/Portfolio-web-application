import React from 'react'
import './services.css';
import {BsCheck} from 'react-icons/bs'
import Service__lottie from './Service__lottie';

export default function Services() {
  return (
    <section id='services'>
      <h5>What I Offer</h5>
      <h2>Services</h2>
      <div className="container services__container">
        <article className='service'>
          <div className="service__head">
            <h3>Website Development</h3>
          </div>
          <ul className='service__list'>
            <li>
              <div className="service__icon">
              <BsCheck/>
              </div>
              <h5>Front End (REACT).</h5>
            </li>
            <li>
              <div className="service__icon">
              <BsCheck/>
              </div>
              <h5>Back End: NodeJS / SpringBoot(java).</h5>
            </li>
            <li>
              <div className="service__icon">
              <BsCheck/>
              </div>
              <h5>Database (MongoDB/MySQL) .</h5>
            </li>
            <li>
              <div className="service__icon">
              <BsCheck/>
              </div>
              <h5>Mobile & Tablet responsive .</h5>
            </li>
            <li>
              <div className="service__icon">
              <BsCheck/>
              </div>
              <h5>With hosting and deployement.</h5>
            </li>
          </ul>
        </article>



        


        {/* ------------------------------------------------ */}
        <article className='service'>
          <div className="service__head">
          <h3>MERN stack WEB apps</h3>
          </div>
          <ul className='service__list'>
            <li>
              <div className="service__icon">
              <BsCheck/>
              </div>
              <h5>NextJS.</h5>
            </li>
            <li>
              <div className="service__icon">
              <BsCheck/>
              </div>
              <h5>React and Redux.</h5>
            </li>
            <li>
              <div className="service__icon">
              <BsCheck/>
              </div>
              <h5>NodeJS and ExpressJS.</h5>
            </li>
            <li>
              <div className="service__icon">
              <BsCheck/>
              </div>
              <h5>MongoDB.</h5>
            </li>
            <li>
              <div className="service__icon">
              <BsCheck/>
              </div>
              <h5>JST security.</h5>
            </li>
            <li>
              <div className="service__icon">
              <BsCheck/>
              </div>
              <h5>24/7 support.</h5>
            </li>
            <li>
              <div className="service__icon">
              <BsCheck/>
              </div>
              <h5>Complete deployement with backup of project.</h5>
            </li>
          </ul>
        </article>



        


        {/* ------------------------------------------------ */}
        <article className='service'>
          <div className="service__head">
          <h3> Wordpress Website</h3>
          </div>
          <ul className='service__list'>
            <li>
              <div className="service__icon">
              <BsCheck/>
              </div>
              <h5>Advance & Stylish theme .</h5>
            </li>
            <li>
              <div className="service__icon">
              <BsCheck/>
              </div>
              <h5>Paid plugins .</h5>
            </li>
            <li>
              <div className="service__icon">
              <BsCheck/>
              </div>
              <h5>Domain and Hosting .</h5>
            </li>
            <li>
              <div className="service__icon">
              <BsCheck/>
              </div>
              <h5>Own customization (if any need) .</h5>
            </li>
            <li>
              <div className="service__icon">
              <BsCheck/>
              </div>
              <h5>24/7 support .</h5>
            </li>
          </ul>
        </article>



        


        {/* ------------------------------------------------ */}






      </div>

      <div className="service__lottie">
        <Service__lottie/>
      </div>
    </section>
  )
}
