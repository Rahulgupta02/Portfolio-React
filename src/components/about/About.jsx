import React from "react";
import ME from "../../assets/ME.png";
import "./about.css";
import { FaAward } from "react-icons/fa";

const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about_container">
        <div className="about_me">
          <div className="about_me-image">
            <img src={ME} alt="About Image" />
          </div>
        </div>

        <div className="about_content">
          <div className="about_cards">
            <article className="about_card">
              <FaAward className="about_icon" />
              <h5>Experience</h5>
              <small>1 Year+ Experience</small>
            </article>
            <article className="about_card">
              <FaAward className="about_icon" />
              <h5>Projects</h5>
              <small>3+ Completed</small>
            </article>
            <article className="about_card">
              <FaAward className="about_icon" />
              <h5>DSA</h5>
              <small>4 star coder</small>
            </article>
          </div>
          <p>
          Hello, my name is Rahul Gupta. I am a Software Engineer at Global Logic, where I contribute to innovative software solutions. I graduated with a B.Tech in Computer Technology from CV Raman Global University BBSR.

I have extensive experience in programming languages such as Java, JavaScript, and SQL,

Additionally, I specialize in building web applications using the MERN stack (MongoDB, Express.js, React, and Node.js). I solved over 300+ problems on LeetCode.

At Global Logic, I am dedicated to leveraging my skills to deliver high-quality software solutions while continually advancing my technical expertise.
          </p>

          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
