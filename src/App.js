import React, { Component } from 'react';
import profpic from './images/profpic.png'
import github from './images/github.svg'
import github_dark from './images/github_dark.svg'
import linkedin from './images/linkedin.svg'
import { experiences, skills, projects, interests } from './resume.js'
import { themeColors } from './style-constants'
import './App.css';

const changeColorTo = (colorHex) => {
  document.documentElement.style.setProperty('--main-color', colorHex);
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="info-container">
          <div className="pic-and-name-container">
          <img className="pic" src={profpic} alt="Self"></img>
            <p className="name">JACOB FISHER</p>
          </div>
          <p className="subtitle">SOFTWARE DEVELOPER</p>
          <p className="summary">Incoming software engineer at <a className="underlinedLink" href="https://www.ticketmaster.com/">@Ticketmaster</a>.
            Currently interning at <a className="underlinedLink" href="https://www.tutorfly.org/">@Tutorfly</a> working on their mobile app.
            Previously interned at <a className="underlinedLink" href="https://www.fox.com/">@Fox</a> working with the API team 
            and <a className="underlinedLink" href="https://www.caa.com/">@CAA</a> with Business Technology Solutions. Very 
            recent <a className="underlinedLink" href="http://www.ucla.edu/">@UCLA</a> graduate looking for an awesome full time gig.</p>
          <div className="socialIcons">
            <a href="https://github.com/jacobfisher18"><img className="socialIcon" src={github} alt="github"></img></a>
            <a href="https://www.linkedin.com/in/jacobfisher18/"><img className="socialIcon rightmost" src={linkedin} alt="linkedin"></img></a>
          </div>
          <div className="colors-container">
            {themeColors.map((color, i) => { 
                return (
                  <div
                    className="color"
                    style={{ backgroundColor: color , marginRight: i === themeColors.length-1 ? 0 : 20}}
                    onClick={() => changeColorTo(color)}>
                  </div>
                )
              })}
          </div>
        </div>
        <div className="main-container">
          <div className="content-container">
          <p className="section-title">
            <span className="section-title-number">001.</span> Education
          </p>

          <div className="resume-item">
            <p className="resume-item-title">UNIVERSITY OF CALIFORNIA, LOS ANGELES</p>
            <p className="resume-item-subtitle">
              <span className="font-bold">B.S. Cognitive Science,</span> Specialization in Computing, Linguistics Minor<br />
              <span className="font-small">Honors: summa cum laude (GPA: 3.92)</span>
            </p>
          </div>

          <p className="section-title">
            <span className="section-title-number">002.</span> Experience
          </p>

          {experiences.map((item) => {
              return (
                <div className="resume-item">
                  <p className="resume-item-title">
                    <span className="font-bold">{item.company}</span>, <span className="font-med">{item.title}</span> | <span className="font-small">{item.timeframe}</span>
                  </p>
                  <p className="resume-item-subtitle">
                    {item.bullets.map((el) => (<p>• {el}</p>))}
                  </p>
                </div>
              )
            })}

          <p className="section-title">
            <span className="section-title-number">003.</span> Skills
          </p>

          <div className="skills-container">
          {skills.map((item) => {
              return (
                <div className="chip-container">
                  <p className={`chip`}>{item}</p>
                </div>
              )
            })}
          </div>

          <p className="section-title">
            <span className="section-title-number">004.</span> Projects
          </p>

          {projects.map((item) => {
              return (
                <div className="resume-item">
                  <div className="resume-item-header">
                    <a href={item.link} className={item.link === '' && "disabled"}><p className="resume-item-title font-bold">{item.title.toUpperCase()}</p></a>
                    {
                      item.githubLink &&
                      <a href={item.githubLink}><img className="github-link" src={github_dark} alt="github"></img></a>
                    }
                  </div>
                  <p className="resume-item-subtitle">
                    {item.blurb}
                  </p>
                  {
                    item.images.map(img => {
                      return (
                        <div className="project-img-container">
                          <div className="project-img-div">
                            <img className="project-img" src={img.src} alt={img.caption} />
                          </div>
                          <p className="project-img-caption">{img.caption}</p>
                        </div>
                      )
                    })
                  }
                </div>
              )
            })}

          <p className="section-title">
            <span className="section-title-number">005.</span> Interests
          </p>

          {interests.map((item) => {
              return (
                <div className="chip-container">
                  <p className={`chip`}>{item}</p>
                </div>
              )
            })}

          </div>

          <div className="footer">
            <a className="contact-container" href="mailto: jacobfisher18@gmail.com">
              <p className="contact-text">CONTACT ME</p>
            </a>
            <p className="copywright">© 2019 JACOB FISHER. MADE IN LOS ANGELES.</p>
          </div>

        </div>
      </div>
    );
  }
}

export default App;
