import React from 'react'
import './portfolio.css'
import IMG1 from '../../asset/port1.jpg'
import IMG2 from '../../asset/port2.jpg'
import IMG3 from '../../asset/port3.jpg'
import IMG4 from '../../asset/port4.jpg'
const Portfolio = () => {
  return (
   <section id="portfolio">
     <h5>My Recent Work</h5>
     <h2>Portfolio</h2>

     <div className="container portfolio__container">
       <article className="portfolio__item">
         <div className="portfolio__item-image">
          <img src={IMG1} alt=""/>
         </div>
         <h3>Digital Clock with gradient UI/UX</h3>
         <div className="portfolio__item-cta">
         <a href="https://sharp-almeida-d476be.netlify.app/" className="btn btn-primary" target="_blank">Live Demo</a>
         </div>
       </article>
       <article className="portfolio__item">
         <div className="portfolio__item-image">
         <img src={IMG2} alt=""/>
         </div>
         <h3>Simple Calculator Using ReactJS</h3>
         <div className="portfolio__item-cta">
         <a href="https://www.linkedin.com/posts/shazar-rahman-914781201_codewithharry-react-frontendwebdevelopment-activity-7014318817044541440-bupx?utm_source=share&utm_medium=member_desktop" className="btn btn-primary" target="_blank">Live Demo</a>
         </div>
       </article>
       <article className="portfolio__item">
         <div className="portfolio__item-image">
          <img src={IMG3} alt=""/>
         </div>
         <h3>Music Player App with Animation</h3>
         <div className="portfolio__item-cta">
         <a href="https://shazarrahman.github.io/music-player.github.io/" className="btn btn-primary" target="_blank">Live Demo</a>
         </div>
       </article>
       <article className="portfolio__item">
         <div className="portfolio__item-image">
          <img src={IMG4} alt=""/>
         </div>
         <h3>Snake Game Using HTML5 CSS3 JavaScript</h3>
         <div className="portfolio__item-cta">
         <a href="https://www.linkedin.com/posts/shazar-rahman-914781201_html-css-javascript-activity-6833004519195058176-qNpv/" className="btn btn-primary" target="_blank">Live Demo</a>
         </div>
       </article>
       </div>
   </section>
  )
}

export default Portfolio
