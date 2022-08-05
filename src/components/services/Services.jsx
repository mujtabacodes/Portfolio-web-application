import React from 'react'
import './services.css';
import {BsCheck} from 'react-icons/bs'

export default function Services() {
  return (
    <section id='services'>
      <h5>What I Offer</h5>
      <h2>Services</h2>
      <div className="container services__container">
        <article className='service'>
          <div className="service__head">
            Website Development
          </div>
          <ul className='service__list'>
            <li>
              <div className="service__icon">
              <BsCheck/>
              </div>
              <h5>Lorem ipsum dolor sit amet.</h5>
            </li>
            <li>
              <div className="service__icon">
              <BsCheck/>
              </div>
              <h5>Lorem ipsum dolor sit amet.</h5>
            </li>
            <li>
              <div className="service__icon">
              <BsCheck/>
              </div>
              <h5>Lorem ipsum dolor sit amet.</h5>
            </li>
            <li>
              <div className="service__icon">
              <BsCheck/>
              </div>
              <h5>Lorem ipsum dolor sit amet.</h5>
            </li>
            <li>
              <div className="service__icon">
              <BsCheck/>
              </div>
              <h5>Lorem ipsum dolor sit amet.</h5>
            </li>
          </ul>
        </article>



        


        {/* ------------------------------------------------ */}
        <article className='service'>
          <div className="service__head">
           MERN stack WEB apps
          </div>
          <ul className='service__list'>
            <li>
              <div className="service__icon">
              <BsCheck/>
              </div>
              <h5>Lorem ipsum dolor sit amet.</h5>
            </li>
            <li>
              <div className="service__icon">
              <BsCheck/>
              </div>
              <h5>Lorem ipsum dolor sit amet.</h5>
            </li>
            <li>
              <div className="service__icon">
              <BsCheck/>
              </div>
              <h5>Lorem ipsum dolor sit amet.</h5>
            </li>
            <li>
              <div className="service__icon">
              <BsCheck/>
              </div>
              <h5>Lorem ipsum dolor sit amet.</h5>
            </li>
            <li>
              <div className="service__icon">
              <BsCheck/>
              </div>
              <h5>Lorem ipsum dolor sit amet.</h5>
            </li>
          </ul>
        </article>



        


        {/* ------------------------------------------------ */}
        <article className='service'>
          <div className="service__head">
           Wordpress Website
          </div>
          <ul className='service__list'>
            <li>
              <div className="service__icon">
              <BsCheck/>
              </div>
              <h5>Lorem ipsum dolor sit amet.</h5>
            </li>
            <li>
              <div className="service__icon">
              <BsCheck/>
              </div>
              <h5>Lorem ipsum dolor sit amet.</h5>
            </li>
            <li>
              <div className="service__icon">
              <BsCheck/>
              </div>
              <h5>Lorem ipsum dolor sit amet.</h5>
            </li>
            <li>
              <div className="service__icon">
              <BsCheck/>
              </div>
              <h5>Lorem ipsum dolor sit amet.</h5>
            </li>
            <li>
              <div className="service__icon">
              <BsCheck/>
              </div>
              <h5>Lorem ipsum dolor sit amet.</h5>
            </li>
          </ul>
        </article>



        


        {/* ------------------------------------------------ */}
      </div>
    </section>
  )
}
