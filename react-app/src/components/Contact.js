// src/components/Contact.js
import React from 'react';
import '../styles/App.css';
import '../scripts/scripts';
import ContactForm from './ContactForm';
import SocialLinks from './SocialLinks';

const Contact = () => (
    <main className="main">
        <div className='main-title'>
            <h1>Contact Me!</h1>
        </div>
        <p>Contact me through this awesome form I made:</p>
        <div className='colu'>
            <ContactForm />
            <SocialLinks />
        </div>
    </main>
);

export default Contact;
