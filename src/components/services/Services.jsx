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
        <article className='service' onClick={()=>{
          window.open('https://www.fiverr.com/mujtaba__ali/develop-cross-platform-ios-and-android-mobile-application-5ee6?context_referrer=user_page&ref_ctx_id=7e6a00f037d3f685835a20abb2203ab2&pckg_id=1&pos=6&seller_online=true&imp_id=2e287922-33fa-444f-b28a-b3dea7a38a80','_blank'); 

        }}
    
        >
          <div className="service__head">
            <h3>Mobile app development</h3>
          </div>
          <ul className='service__list'>
            <li>
              <div className="service__icon">
              <BsCheck/>
              </div>
              <h5>React Native</h5>
            </li>
            <li>
              <div className="service__icon">
              <BsCheck/>
              </div>
              <h5>Cross platform</h5>
            </li>
            <li>
              <div className="service__icon">
              <BsCheck/>
              </div>
              <h5>IOS and Android</h5>
            </li>
            <li>
              <div className="service__icon">
              <BsCheck/>
              </div>
              <h5>Payment gateway(e.g. Stripe)</h5>
            </li>
            <li>
              <div className="service__icon">
              <BsCheck/>
              </div>
              <h5>24/7 availability and 1month service free</h5>
            </li>
          </ul>
        </article>



        


        {/* ------------------------------------------------ */}
        <article className='service' 
         onClick={()=>{
          window.open('https://www.fiverr.com/mujtaba__ali/develop-mern-stack-web-application-3d69?context_referrer=user_page&ref_ctx_id=7e6a00f037d3f685835a20abb2203ab2&pckg_id=1&pos=5&seller_online=true&imp_id=2a59dee4-0855-4b18-a2ab-1e971a1bae1d','_blank'); 

        }}
        >
          <div className="service__head">
          <h3>Web Applications (Website)</h3>
          </div>
          <ul className='service__list'>
            <li>
              <div className="service__icon">
              <BsCheck/>
              </div>
              <h5>MERN stack</h5>
            </li>
            <li>
              <div className="service__icon">
              <BsCheck/>
              </div>
              <h5>React,NextJS and Redux.</h5>
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
              <h5>Domain and Hosting</h5>
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
        <article className='service' 
          onClick={()=>{
            window.open('https://www.fiverr.com/mujtaba__ali/create-responsive-websites-in-html-css-javascript-react-nodejs-nextjs?context_referrer=user_page&ref_ctx_id=7e6a00f037d3f685835a20abb2203ab2&pckg_id=1&pos=3&seller_online=true&imp_id=08913aa2-c464-40e7-bca8-fe77d5f0366c','_blank'); 
  
          }}
        >
          <div className="service__head">
          <h3>Custom Software's</h3>
          </div>
          <ul className='service__list'>
            <li>
              <div className="service__icon">
              <BsCheck/>
              </div>
              <h5>Requirement Analysis</h5>
            </li>
            <li>
              <div className="service__icon">
              <BsCheck/>
              </div>
              <h5>Implement</h5>
            </li>
            <li>
              <div className="service__icon">
              <BsCheck/>
              </div>
              <h5>Testing</h5>
            </li>
            <li>
              <div className="service__icon">
              <BsCheck/>
              </div>
              <h5>Deployment</h5>
            </li>
            <li>
              <div className="service__icon">
              <BsCheck/>
              </div>
              <h5>Maintenance</h5>
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
