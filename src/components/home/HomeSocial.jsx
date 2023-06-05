import React from 'react'
import { BsLinkedin, } from 'react-icons/bs'
import { BiPhoneCall } from 'react-icons/bi'
import { RiWhatsappFill } from 'react-icons/ri'
import {  AiFillGithub, AiFillMail } from 'react-icons/ai'
import './home.css'
export default function HomeSocial() {
  return (
    <>
      <div className="header__socials">
        <a href="tel:+923046511650"  className='phone icon'><BiPhoneCall /></a>
        <a href="https://api.whatsapp.com/send?phone=923046511650" target='_blank' className='whatsaap icon'><RiWhatsappFill /></a>
        <a href="mailto:mujtaba.shafique@outlook.com" target='_blank' className='mail icon'><AiFillMail /></a>
        <a href="https://www.linkedin.com/in/mujtaba-shafique/" target='_blank' className='linkedIn icon'><BsLinkedin /></a>
        <a href="https://github.com/Mujtaba4li" target='_blank' className='github icon'><AiFillGithub /></a>
      </div> 
    </>
  )
}
