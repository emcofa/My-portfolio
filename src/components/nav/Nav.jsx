import React from 'react'
import './nav.css'
import { AiOutlineHome, AiOutlineUser, AiOutlineBook } from 'react-icons/ai'
import { RiServiceLine } from 'react-icons/ri'
import { BiMessageAltDetail } from 'react-icons/bi'
import { useState } from 'react'

const Nav = () => {
  const [active, setActive] = useState('#');

  return (
    <nav>
      <a href="#" onClick={() => setActive('#')} className={active === '#' ? 'active' : ''}><AiOutlineHome /></a>
      <a href="#about" onClick={() => setActive('#about')} className={active === '#about' ? 'active' : ''}><AiOutlineUser /></a>
      <a href="#experience" onClick={() => setActive('#experience')} className={active === '#experience' ? 'active' : ''}><AiOutlineBook /></a>
      <a href="#portfolio" onClick={() => setActive('#portfolio')} className={active === '#portfolio' ? 'active' : ''}><RiServiceLine /></a>
      <a href="#contact" onClick={() => setActive('#contact')} className={active === '#contact' ? 'active' : ''}><BiMessageAltDetail /></a>
    </nav>
  )
}

export default Nav