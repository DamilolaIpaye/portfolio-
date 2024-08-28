import React from 'react';

const Footer = () => {
    return (
        <footer style={{
            backgroundImage: `url('/image/Vector.png')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            padding: '110px'
        }}>
            <div className='footerimg'>
                <a href='https://www.instagram.com/ipaye_rodiah/' target='_blank' rel='noopener noreferrer'>
                    <img src='/image/insta.jpg' alt='Instagram' />
                </a>
                <a href='https://www.linkedin.com/in/damilola-ipaye-8413b1243/' target='_blank' rel='noopener noreferrer'>
                    <img src='/image/in.PNG' alt='LinkedIn' />
                </a>
                <img src='/image/mail.PNG' alt='Email' />
            </div>
            <h6>Rodiyah@2024</h6>
        </footer>
    );
};

export default Footer;
