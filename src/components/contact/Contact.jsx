import React, { useState } from 'react'
import { useRef } from 'react'
import './contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import {RiMessengerLine} from 'react-icons/ri'
import {BsWhatsapp} from 'react-icons/bs'
import emailjs from 'emailjs-com';

export const Contact = () => {
const form = useRef();
const[name, setName] = useState('');
const[email, setEmail] = useState('');
const[message, setMessage] = useState('');
let submit=(e)=>{
 e.preventDefault();
 if(!name){
  alert("Please enter your name")
 }else if(!email){
  alert("Please enter your email")
 }else if(email==='yewantkarki18@gmail.com' || email==='YEWANTKARKI18@GMAIL.COM'){
  alert("This is my email address. Please enter your valid email address.")
 }else if(!message){
  alert("Please enter your message")
 }else{
  emailjs.sendForm('service_jekclli', 'template_smqowtc', form.current, 'IYDRxNGn02IUvgF0a')
      .then(() => {
          alert("Your mail sent successfully!");
          setName('');
          setEmail('');
          setMessage('');
      }, () => {
          alert("Something went wrong! Please try again letter.");
      }
      );
 }
}

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
   
        <form onSubmit={submit} ref={form}>
          <input type="text" name='name' placeholder='Your full Name' required value={name} onChange={(e)=>{setName(e.target.value)}}/>
          <input type="email" name='email' placeholder='Your Email' required value={email} onChange={(e)=>{setEmail(e.target.value)}}/>
          <textarea name="message" rows="7" placeholder='Your Message' required value={message} onChange={(e)=>{setMessage(e.target.value)}}></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact