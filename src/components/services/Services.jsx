import React from 'react'
import './services.css'
import { BiCheck } from 'react-icons/bi'
const Services = () => {
  return (
    <section id='services'>
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className="container services__container">
        <article className='service'>
          <div className="service__head">
            <h3>UI/UX Design</h3>
          </div>

          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon' />
              <p>UI and Interaction Design.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Design Thinking.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Wireframe and Interactive Prototyping.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Mobile First and Responsive Design.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Customer Experience Consulting.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>  Ecommerce functionality.</p>
            </li>
          </ul>
        </article>
        {/* END OF UI/UX */}
        <article className='service'>
          <div className="service__head">
            <h3>Web Development</h3>
          </div>

          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Shopping Cart / Online Ordering System / Online Payments.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Learning Management System (LMS)</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>User Interface (UI) Design</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>User Experience (UX) Design</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Booking / Reservations / Availability System</p>
            </li>
          </ul>
        </article>
        {/* END OF WEB DEVELOPMENT */}
        <article className='service'>
          <div className="service__head">
            <h3>Content Creation</h3>
          </div>

          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Long-form Content.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Micrographics.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Infographics.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Website & Social Engagement Videos</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Animated Explainer Videos</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Animated Explainer Videos</p>
            </li>
          </ul>
        </article>
        {/* CONTENT CREATION */}
      </div>

    </section>
  )
}

export default Services