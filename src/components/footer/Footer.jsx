import React from 'react'
import './footer.css'
import logo from './../../assets/images/logo.png'
import {BsInstagram,BsTwitter} from 'react-icons/bs'
export default function Footer() {
  return (
    <footer>
      <a href="#" className='footer__logo'>
        <img src={logo} alt="Mujtaba Ali" width='30%' />
      </a>
        <ul className="permalinks">
          <li><a href="#">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#experience">Experience</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#portfolio">Portfolio</a></li>
          <li><a href="#testimonials">Testimonials</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>

        <div className="footer__social">
          <a href="https://www.instagram.com/_m.u.j.t.4.b.a_ali/" target="_blank">
            <BsInstagram/>
          </a>
          <a href="https://twitter.com/mujt4ba_ali" target="_blank">
            <BsTwitter/>
          </a>
          
        </div>

        <div className="footer__copyright">
          <small>&copy; All rights reserved! </small>
        </div>

    </footer>
  )
}