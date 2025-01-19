import React from 'react'
import './portfolio.css'
import coinInsight from "../../assets/coinInsight.jpg";
import codePen from "../../assets/codePen.jpg";
import portfoliowebsite from "../../assets/portfoliowebsite.jpg";

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio_container">
        <article className="portfolio_item">
          <div className="portfolio_item-image">
            <img src={coinInsight} alt="" />
          </div>

          <h3>Coin Insight</h3>
          <div className="portfolio_item-cta">
            <a
              href="https://github.com/Rahulgupta02/coin-Insight-FireBase"
              className="btn"
              target="_blank"
            >
              Github
            </a>
            <a
              href="https://coin-insight.web.app/"
              className="btn btn-primary"
              target="_blank"
            >
              Live Demo
            </a>
          </div>
        </article>
        <article className="portfolio_item">
          <div className="portfolio_item-image">
            <img src={codePen} alt="" />
          </div>

          <h3>Code Pen</h3>
          <div className="portfolio_item-cta">
            <a
              href="https://github.com/Rahulgupta02/Code-pen-clone"
              className="btn"
              target="_blank"
            >
              Github
            </a>
            <a
              href="https://code-pen-clone-web.netlify.app/"
              className="btn btn-primary"
              target="_blank"
            >
              Live Demo
            </a>
          </div>
        </article>
        <article className="portfolio_item">
          <div className="portfolio_item-image">
            <img src={portfoliowebsite} alt="" />
          </div>

          <h3>Portfolio site</h3>
          <div className="portfolio_item-cta">
            <a
              href="https://github.com/Rahulgupta02/Portfolio-React"
              className="btn"
              target="_blank"
            >
              Github
            </a>
            <a href="#" className="btn btn-primary" target="root">
              Live Demo
            </a>
          </div>
        </article>
      </div>
    </section>
  );
}

export default Portfolio