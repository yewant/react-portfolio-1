import React from 'react'
import './contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import {RiMessengerLine} from 'react-icons/ri'
import {BsWhatsapp} from 'react-icons/bs'
import { useState } from 'react';
import emailjs from 'emailjs-com';

const Result = () => {
  return(
    <p>Your message has been sent successfully!</p>
  );
};

function Contact(props) {
  const [result, showResult] = useState(false);
  const sendEmail = (e) => {
    e.preventDefault();
    
    emailjs.sendForm('service_3d0l6jp', 'template_esmgm78', e.target, 'IYDRxNGn02IUvgF0a')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      }
      );
  e.target.reset();
  showResult(true);
};

// hide result
setTimeout(() => {
  showResult(false);
}, 5000);

  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className='contact__option'>
            <MdOutlineEmail className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>yewantkarki18@gmail.com</h5>
            <a href="mailto:yewantkarki18@gmail.com" target="_blank">Send a message</a>
          </article>
          <article className='contact__option'>
            <RiMessengerLine className='contact__option-icon'/>
            <h4>Messenger</h4>
            <h5>Yewant Karki</h5>
            <a href="https://m.me/yewant13" target="_blank">Send a message</a>
          </article>
          <article className='contact__option'>
            <BsWhatsapp className='contact__option-icon'/>
            <h4>Whatsapp</h4>
            <h5></h5>
            <a href="https://api.whatsapp.com/send?phone=9779865055438" target="_blank">Send a message</a>
          </article>
        </div>
   
        <form action="" onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Your full Name' required/>
          <input type="email" name='email' placeholder='Your Email' required />
          <textarea name="message" rows="7" placeholder='Your Message' required></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>

          <div className="row">{result ? <Result /> : null}</div>
        </form>
      </div>
    </section>
  );
}

export default Contact