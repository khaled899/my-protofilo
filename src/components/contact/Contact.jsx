import React, { useRef } from 'react';
import './contact.css'
import { MdOutlineMail } from 'react-icons/md'
import { RiMessengerLine } from 'react-icons/ri'
import { BsWhatsapp } from 'react-icons/bs'
import emailjs from '@emailjs/browser';

export const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_tcc2n6e', 'template_rl98f2o', form.current, 'l0Ua2LfN05mB3v3xw')
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });

    e.target.reset()
  };
  return (
    <section id='contact'>
      <h5>Get in Touch</h5>
      <h2>Contact Me</h2>
      <div className="container contact-container">
        <div className="contact-options">
          <article className="contact-option">
            <MdOutlineMail className='icon' />
            <h4>Email</h4>
            <h5>khaled.KMA8999@gmail.com</h5>
            <a href="mailto:khaled.KMA8999@gmail.com" rel=''>Send a Message</a>
          </article>

          <article className="contact-option">
            <RiMessengerLine className='icon' />
            <h4>Massenger</h4>
            <h5>Khaled Magdy</h5>
            <a href="#" rel=''>Send a Message</a>
          </article>


          <article className="contact-option">
            <BsWhatsapp className='icon' />
            <h4>WhatsApp</h4>
            <h5>01063039216</h5>
            <a href="https://api.whatsapp.com/send?phone=+201063039216" rel=''>Send a Message</a>
          </article>
        </div>
        <form ref={form} onSubmit={sendEmail} >
          <input type="text" name='name' placeholder='Your Name' required />
          <input type="email" name='email' placeholder='Your Email' required />
          <textarea name="message" rows="7" placeholder='Your Message' required></textarea>
          <button type='submit' className='btn btn-primary'>Submit</button>
        </form>
      </div>
    </section>
  )
}
