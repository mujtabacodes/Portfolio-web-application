import React from 'react'
import './contact.css'
import {FiMail} from 'react-icons/fi'
import {BsWhatsapp} from 'react-icons/bs'
import Form from './Form'
export default function Contact() {
  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
    <div className="contact__options">
      <article className="contact__option">
        <div className="contact__option-icon">
          <FiMail/>
        </div>
        <h4>Email</h4>
        <h5>mujtaba.shafique@outlook.com</h5>
        <a href="mailto:mujtaba.shafique@outlook.com">Send a message</a>
      </article>
      <article className="contact__option">
        <div className="contact__option-icon">
          <BsWhatsapp/>
        </div>
        <h4>WhatsApp</h4>
        <h5>+923046511650</h5>
        <a href="https://api.whatsapp.com/send?phone=923046511650" target="_blank">Send a message</a>
      </article>
    </div>
<Form/>


      </div>

    </section>
  )
}
