import React from 'react'
import { BsLinkedin, BsGithub } from 'react-icons/bs'

const HeaderSocials = () => {
    return (
        <div className='header__socials'>
            <a href="https://linkedin.com/in/emmie-fahlström-7422b91b7"><BsLinkedin /></a>
            <a href="https://github.com/emcofa"><BsGithub /></a>
        </div>
    )
}

export default HeaderSocials