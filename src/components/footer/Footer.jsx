import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import { BsInstagram } from "react-icons/bs";
import { BsTwitter } from "react-icons/bs";
import './footer.css'

const Footer = () => {
  return (
    <footer id="footer">
      <a href="#" className="footer_logo">
        PORTFOLIO
      </a>

      <ul className="permalinks">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#experience">Experience</a>
        </li>
        <li>
          <a href="#services">Services</a>
        </li>
        <li>
          <a href="#portfolio">Portfolio</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>

      <div className="footer_socials">
        <a
          target="_blank"
          href="https://www.linkedin.com/in/rahul-gupta-73371a20b/"
        >
          <BsLinkedin className="icon" />
        </a>
        <a target="_blank" href="https://www.instagram.com/fenix.rahul/">
          <BsInstagram className="icon" />
        </a>
        <a target="_blank" href="https://x.com/Rgrahulgupta02?t=kp-F3JJ_OM9EJjLwzRBHRQ&s=09">
          <BsTwitter className="icon" />
        </a>
      </div>
      <div className="footer_copyright">
        <small>Thank you for visiting my portfolio website.</small>
      </div>
    </footer>
  );
}

export default Footer