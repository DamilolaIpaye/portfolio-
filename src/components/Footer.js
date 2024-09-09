import React from 'react';
import LinkedinImg from "../assets/linkedin.png"
import InstaImg from "../assets/insta.png"
import MailImg from "../assets/mail.png"

const Footer = () => {
    return (
        <footer style={{
            backgroundImage: `url('/image/Vector.png')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            padding: '110px'
        }}>
            <div className='footer'>
                <a href='https://www.instagram.com/ipaye_rodiah/' target='_blank' rel='noopener noreferrer'>
                    <img src={InstaImg} alt='Instagram' className='footer-icon' />
                </a>
                <a href='https://www.linkedin.com/in/damilola-ipaye-8413b1243/' target='_blank' rel='noopener noreferrer'>
                    <img src={LinkedinImg} alt='LinkedIn' className='footer-icon' />
                </a>
                <a href='mailto:ipayedamilolaao@gmail.com/' target='_blank' rel='noopener noreferrer'>
                    <img src={MailImg} alt='Email' className='footer-icon' />
                </a>
                <h6>Rodiyah 2024</h6>
            </div>
        </footer>
    );
};

export default Footer;
