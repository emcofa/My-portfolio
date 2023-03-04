import React from 'react'
import './portfolio.css'
import Spark from '../../assets/spark.png'
import Mvc from '../../assets/mvc.png'
import Texteditor from '../../assets/texteditor.png'
import Spellchecker from '../../assets/spellchecker.png'
import api from '../../assets/api.png'
import train from '../../assets/train.png'


const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio__container">
        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={Spark} alt="test" />
          </div>
          <h5>React, React Native, Express, MySQL, Python</h5>
          <p>A complete electric scooter system containing both client and server side, a mobile app, API, database and simulation for the system. Made as a group project at BTH.</p>
          <div className="portfolio__item-cta">
            <a href="https://github.com/Spark-Vteam/Spark-Project" className='btn btn-primary'>GitHub Code</a>
          </div>
        </article>
        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={Spellchecker} alt="test" />
          </div>
          <h5>Object Oriented Python</h5>
          <p>Final project for course OOPython at BTH.
            A spell-checking program for the terminal that uses a Trie to store a dictionary written in object-oriented Python.</p>
          <div className="portfolio__item-cta">
            <a href="https://github.com/emcofa/Spellchecker" className='btn btn-primary'>GitHub Code</a>
          </div>
        </article>
        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={Texteditor} alt="test" />
          </div>
          <h5>React</h5>
          <p>This is a React app that includes the client side for a collaborative text editor built using Trix. It was created as part of the JavaScript Frameworks course at BTH.</p>
          <div className="portfolio__item-cta">
            <a href="https://github.com/emcofa/Jsramverk-frontend" className='btn btn-primary'>GitHub Code</a>
            <a href="http://www.student.bth.se/~emfh21/editor/" className='btn'>Live Demo</a>
          </div>
        </article>
        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={api} alt="test" />
          </div>
          <h5>Express, MongoDb</h5>
          <p>This is an API for a Trix editor using MongoDb and the framework Express and is a school work for the course JavaScript Frameworks at BTH.</p>
          <div className="portfolio__item-cta">
            <a href="https://github.com/emcofa/Jsramverk-backend" className='btn btn-primary'>GitHub Code</a>
          </div>
        </article>
        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={train} alt="test" />
          </div>
          <h5>React Native, TypeScript</h5>
          <p>Train Delay Tracker is a mobile app built as a final project for the course Web Applications at BTH. Allows users to keep track of train delays in real-time using data from an API.</p>
          <div className="portfolio__item-cta">
            <a href="https://github.com/emcofa/project-webapp" className='btn btn-primary'>GitHub Code</a>
          </div>
        </article>
        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={Mvc} alt="test" />
          </div>
          <h5>Symfony, Twig, ORM</h5>
          <p>Final project and course projects for course MVC at BTH. Information about the global goal 5, equality, is being fetched though a database and rendered with chart.js </p>
          <div className="portfolio__item-cta">
            <a href="https://github.com/emcofa/mvc-report" className='btn btn-primary'>GitHub code</a>
            <a href="http://www.student.bth.se/~emfh21/dbwebb-kurser/mvc/me/report/public/proj" className='btn'>Live Demo</a>
          </div>
        </article>
      </div>
    </section>
  )
}

export default Portfolio