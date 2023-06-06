import React from 'react'
import './footer.css'
import logo from './../../assets/images/logo.png'
import {BsLinkedin} from 'react-icons/bs'
import {AiFillGithub} from 'react-icons/ai'
import {RiWhatsappFill} from 'react-icons/ri'
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
          <a href="https://www.linkedin.com/in/mujtaba-shafique/" target="_blank">
            <BsLinkedin/>
          </a>
          <a href="https://github.com/Mujtaba4li" target="_blank">
            <AiFillGithub/>
          </a>
          
        </div>

        <div className="footer__copyright">
          <small>&copy; All rights reserved! </small>
        </div>

    </footer>
  )
}