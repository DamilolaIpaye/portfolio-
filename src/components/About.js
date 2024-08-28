import React from 'react';

const About = () => {
  const handleLinkedInClick = () => {
    window.open('https://www.linkedin.com/in/damilola-ipaye-8413b1243/', '_blank');
  };

  const handleProjectButtonClick = () => {
    const projectSection = document.getElementById('projects');
    if (projectSection) {
      projectSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="about" className='about'>
      <img src='/image/me.jpg' className='topRightImage' />
      <img src='/image/yellow-bg.png' className='bg' />

      <h1>Hello, my name<br />
        is Rodiyah Ipaye.</h1>
      <p>
        I specialize in creating the user interface (UI) and<br />
        user experience (UX) of a website or web application. I am responsible<br />
        for translating design mockups into functional, interactive, and<br />
        visually appealing web pages. This involves working with languages<br />
        like HTML, CSS, and JavaScript, as well as frameworks and libraries<br />
        such as React, Angular, or Vue.js.</p>
      <button className='linked' onClick={handleLinkedInClick}>LinkedIn</button>
      <button className='project-button' onClick={handleProjectButtonClick}>Projects</button>
    </section>
  );
};

export default About;
