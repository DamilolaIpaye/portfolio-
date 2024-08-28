import React from 'react';

const Contact = () => {
    return (
        <section id="contact" className="contact-section">
            <h2 className="contact-title">Contact Me</h2>
            <form className="contact-form">
                <div className="form-group">
                    <label className="form-label">Name:</label>
                    <input type="text" name="name" className="form-input" />
                </div>
                <div className="form-group">
                    <label className="form-label">Email:</label>
                    <input type="email" name="email" className="form-input" />
                </div>
                <div className="form-group">
                    <label className="form-label">Message:</label>
                    <textarea name="message" className="form-textarea"></textarea>
                </div>
                <button type="submit" className="send-button">Send</button>
            </form>
        </section>
    );
};

export default Contact;
