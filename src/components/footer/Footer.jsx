import React from 'react'
import './footer.css'
import {FaFacebook} from 'react-icons/fa'
import {FiInstagram} from 'react-icons/fi'
import {BsLinkedin} from 'react-icons/bs'
const Footer = () => {
  return (
    <footer id="footer">
      <a href="#" className="footer__logo">Shazar Rahman</a>
      <ul className="permalinks">
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#certificate">Certificates</a></li>
        <li><a href="#contact">Contact me</a></li>
      </ul>
      <div className="footer__socials">
        <a href="https://www.linkedin.com/in/shazar-rahman-914781201/" target="_blank"><BsLinkedin className=".footer__logo"/></a>
        <a href="https://facebook.com/shazar.rahman/" target="_blank"><FaFacebook className=".footer__logo"/></a>
        <a href="https://www.instagram.com/shazarrahman/" target="_blank"><FiInstagram className=".footer__logo"/></a>
      </div>
      <div className="footer__copyright">
        <small> &copy; Shazar Rahman . All rights reserved</small>
      </div>
    </footer>
  )
}

export default Footer
