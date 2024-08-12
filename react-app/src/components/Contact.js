// src/components/Contact.js
import React from 'react';
import '../styles/App.css';
import ContactForm from './ContactForm';

const Contact = () => (
    <main className="main">
        <h1>Contact Me!</h1>
        <p>Contact me through this awesome form I made:</p>
        <ContactForm />
    </main>
);

export default Contact;
