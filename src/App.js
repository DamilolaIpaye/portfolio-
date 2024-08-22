import React from 'react';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

const App = () => {
  return (
    <div>
      <div>
        <Navbar />
        <div className='About'><About /></div>
      </div>
      <div className='container'>
        <div className='projects'><Projects /></div>
        <div className='contact'><Contact /></div>
        <div><Footer /></div>
      </div>
    </div>
  );
};

export default App;
