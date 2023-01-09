
import React from 'react'
import './about.css'
import ME from '../../assets/me-about.jpg'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'


const About = () => {
  return (
    <section id='about'>
    <h5>Get To Know</h5>
    <h2>About Me</h2>
    <div className="container about__container">
      <div className="about__me">
        <div className="about__me-image">
          <img src={ME} alt="About Image" />
        </div>
      </div>

      <div className="about__content">
        <div className="about__cards">
        <article className='about__card'>
          <FaAward className='about__icon'/>
          <h5>Experience</h5>
          <small>3+ Years Working</small>
        </article>

        <article className='about__card'>
          <FiUsers className='about__icon'/>
          <h5>Clients</h5>
          <small>200+ Worldwide</small>
        </article>

        <article className='about__card'>
          <VscFolderLibrary className='about__icon'/>
          <h5>Projects</h5>
          <small>40+ Completed</small>
        </article>
        </div>

        <p className='text-justify'>
        “I am a positive, enthusiastic and competent Web Developer who, over the years, has built up a diverse range of skills, qualities and attributes that guarantee I will perform highly in this role. I have extensive experience working both alone and as part of a team on often time-sensitive, challenging web development projects that require outstanding creative and technical capabilities and the ability to ensure all work is optimized across a wide range of platforms. I take my work as a Web Developer seriously and this means I always ensure my skills are kept up to date within this rapidly changing industry. If you hire me as your Web Developer, I assure you I will fit into your team quickly, I will always put the commercial needs of your business at the forefront of everything I do, and the work I carry out will be consistent to a first-class standard.”
        </p>

        <a href="#contact" className='btn btn-primary'>Let's Talk</a>

      </div>
    </div>
    </section>
  )
}

export default About