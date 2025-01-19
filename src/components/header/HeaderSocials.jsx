import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa';
import {BsInstagram} from 'react-icons/bs'

const HeaderSocials = () => {
  return (
    <div className="header_socials">
      <a
        href="https://www.linkedin.com/in/rahul-gupta-73371a20b/"
        target="_blank"
      >
        <BsLinkedin />
      </a>
      <a href="https://github.com/Rahulgupta02" target="_blank">
        <FaGithub />
      </a>
      <a href="https://www.instagram.com/fenix.rahul/" target="_blank">
        <BsInstagram />
      </a>
    </div>
  );
}

export default HeaderSocials