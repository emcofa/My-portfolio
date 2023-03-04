import React from 'react'
import './footer.css'
import { AiFillFacebook, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai'

const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer__logo'>EF</a>
      <ul className='permalinks'>
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        {/* <li> <a href="#services">Services</a></li> */}
        <li> <a href="#portfolio">Portfolio</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
      <div className="footer__socials">
        <a href="https://instagram.com/emmiefahlstrom"><AiFillInstagram /></a>
        <a href="https://www.facebook.com/emmie.fahlstrom"><AiFillFacebook /></a>
        <a href="https://linkedin.com/in/emmie-fahlström-7422b91b7"><AiFillLinkedin /></a>
      </div>
      <div className="footer__copyright">
        <small>
          &copy; Emmie Fahlström 2023 - Made with React.js
        </small>
      </div>
    </footer>
  )
}

export default Footer