// rafce

import React from 'react'
import './about.css'
import Me from '../../assets/sketch.png'
import { FaAward } from 'react-icons/fa'
import { FiUsers } from 'react-icons/fi'
import { VscFolderLibrary } from 'react-icons/vsc'

const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={Me} alt="Me-icon" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className='about__card'>
              <FaAward className='about__icon' />
              <h5>Education</h5>
              <small>Higher Education Diploma</small>
            </article>
            <article className='about__card'>
              <FiUsers className='about__icon' />
              <h5>Experience</h5>
              <small>Teacher's assistant in Python and JavaScript</small>
            </article>
            <article className='about__card'>
              <VscFolderLibrary className='about__icon' />
              <h5>Projects</h5>
              <small>10+</small>
            </article>

          </div>
          <p className='about__me-text'>Hi, my name is Emmie and I am a software developer. I will be graduating from Blekinge Institute of Technology with a degree in web programming in June 2023. I am a driven and persistent individual who has a passion for programming and constantly learning new things.
          </p>
          <p className='about__me-text'>Throughout my studies, I have developed a broad range of skills in various programming languages and frameworks. I am excited about pursuing a career in software development and utilizing my skills to build innovative and creative solutions. Whether it's working on a team or individually, I am confident in my ability to bring my best to every project and challenge.</p>
          <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About