import React from 'react'
import './services.css';
import { BsCheck } from 'react-icons/bs'
import Service__lottie from './Service__lottie';
import SkillsLottie from './SkillsLottie';

export default function Services() {
  return (
    <section id='services'>
      <div className="about__lottie">
        <SkillsLottie />

      </div>
      <h5>What I Offer</h5>
      <h2>Services</h2>
      <div className="container services__container">
        <article className='service'

        >
          <div className="service__head">
            <h3>Mobile app development</h3>
          </div>
          <ul className='service__list'>
            <li>
              <div className="service__icon">
                <BsCheck />
              </div>
              <h5>React Native</h5>
            </li>
            <li>
              <div className="service__icon">
                <BsCheck />
              </div>
              <h5>Cross platform</h5>
            </li>
            <li>
              <div className="service__icon">
                <BsCheck />
              </div>
              <h5>IOS and Android</h5>
            </li>
            <li>
              <div className="service__icon">
                <BsCheck />
              </div>
              <h5>Backend and Database</h5>

            </li>
            <li>
              <div className="service__icon">
                <BsCheck />
              </div>
              <h5>Payment gateway(e.g. Stripe, Paypal)</h5>
            </li>
          </ul>
        </article>






        {/* ------------------------------------------------ */}
        <article className='service'

        >
          <div className="service__head">
            <h3>Web Applications (Website)</h3>
          </div>
          <ul className='service__list'>
            <li>
              <div className="service__icon">
                <BsCheck />
              </div>
              <h5>ReactJS/NextJS</h5>
            </li>
            <li>
              <div className="service__icon">
                <BsCheck />
              </div>
              <h5>Typescript & Redux</h5>
            </li>
            <li>
              <div className="service__icon">
                <BsCheck />
              </div>
              <h5>Responsive Design.</h5>
            </li>
            <li>
              <div className="service__icon">
                <BsCheck />
              </div>
              <h5>NodeJS & ExpressJS</h5>
            </li>

            <li>
              <div className="service__icon">
                <BsCheck />
              </div>
              <h5>Firebase | MongoDB | MySQL</h5>
            </li>

            <li>
              <div className="service__icon">
                <BsCheck />
              </div>
              <h5>Domain and Hosting</h5>
            </li>

            <li>
              <div className="service__icon">
                <BsCheck />
              </div>
              <h5>Complete deployement with backup of project.</h5>
            </li>
          </ul>
        </article>






        {/* ------------------------------------------------ */}
        <article className='service'

        >
          <div className="service__head">
            <h3>Custom Software's</h3>
          </div>
          <ul className='service__list'>
            <li>
              <div className="service__icon">
                <BsCheck />
              </div>
              <h5>Requirement Analysis</h5>
            </li>
            <li>
              <div className="service__icon">
                <BsCheck />
              </div>
              <h5>Implement</h5>
            </li>
            <li>
              <div className="service__icon">
                <BsCheck />
              </div>
              <h5>Testing</h5>
            </li>
            <li>
              <div className="service__icon">
                <BsCheck />
              </div>
              <h5>Deployment</h5>
            </li>
            <li>
              <div className="service__icon">
                <BsCheck />
              </div>
              <h5>Maintenance</h5>
            </li>
          </ul>
        </article>






        {/* ------------------------------------------------ */}






      </div>

      <div className="service__lottie">
        <Service__lottie />
      </div>
    </section>
  )
}
