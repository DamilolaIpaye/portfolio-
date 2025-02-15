import React from 'react';
import ProfileImg from "../assets/me.png"
import YellowBg from "../assets/yellow-bg.png"

const About = () => {
  // const handleLinkedInClick = () => {
  //   window.open('https://www.linkedin.com/in/damilola-ipaye-8413b1243/', '_blank');
  // };

  const handleProjectButtonClick = () => {
    const projectSection = document.getElementById('projects');
    if (projectSection) {
      projectSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="about" className="about">
      <div className="text-content">
        <h1 className="profile-greeting">
          Hello, my name
          <br className="sm-hidden" /> is Rodiyah Ipaye.
        </h1>
        <div className="profile-img-sm">
          <img src={ProfileImg} alt="Rodiyah Ipaye" />
        </div>
        <p className="about-me">
          I specialize in creating the user interface (UI) and
          user experience (UX) of a website or web application. I am responsible
          for translating design mockups into functional, interactive, and
          visually appealing web pages. This involves working with languages
          like HTML, CSS, and JavaScript, as well as frameworks and libraries
          such as React, Angular, or Vue.js.
        </p>

        <button className="btn-primary  btn btn-hover" onClick={handleProjectButtonClick}>Projects
        </button>
        <a
          href="https://www.linkedin.com/in/damilola-ipaye-8413b1243/"
          target="_blank"
          rel='noopener noreferrer'
          className="btn-link  btn btn-outline">
          LinkedIn
        </a>
      </div>

      <div
        style={{
          backgroundImage:
            `url(${YellowBg})`,
        }}
        className="profile-image"
      >
        <img src={ProfileImg} className="topRightImage" alt="Damilola" />
      </div>
    </section >
  );
};

export default About;
