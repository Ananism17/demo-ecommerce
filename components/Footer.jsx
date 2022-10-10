import React from 'react'
import { BsFacebook, BsGithub, BsLinkedin } from 'react-icons/bs'

const Footer = () => {
  return (
    <div className="footer-container">
      <p>2022 | Anan er Bagan | All Rights Reserved</p>
      <p className='icons'>
        <a href="https://linkedin.com" target="_blank"><BsLinkedin /></a>
        <a href="https://github.com" target="_blank"><BsGithub /></a>
        <a href="https://facebook.com" target="_blank"><BsFacebook /></a>
      </p>
    </div>
  )
}

export default Footer