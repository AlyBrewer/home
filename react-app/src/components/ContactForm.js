import React, { useState } from 'react';
import emailjs from 'emailjs-com'; // Import EmailJS
import '../styles/ContactForm.css';

function ContactForm() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        console.log('Sending formData:', formData); // Debug log
        
        emailjs.init('XbvHB_ZQEvpO8lCwL')
        emailjs.send('service_555pobi', 'contact_form', formData)
            .then((response) => {
                alert('Message sent!');
                setFormData({
                    name: '',
                    email: '',
                    message: '',
                });
                setIsSubmitting(false);
            }, (err) => {
                alert('Failed to send the message. Please try again.');
                console.error('EmailJS error:', err);
                setIsSubmitting(false);
            });
    };

    return (
        <form onSubmit={handleSubmit} className="contact-form">
            <div className="form-group">
                <label htmlFor="name">Name</label>
                <input 
                    type="text" 
                    id="name" 
                    name="name" 
                    value={formData.name}
                    onChange={handleChange} 
                    required 
                />
            </div>
            <div className="form-group">
                <label htmlFor="email">Email</label>
                <input 
                    type="email" 
                    id="email" 
                    name="email" 
                    value={formData.email}
                    onChange={handleChange} 
                    required 
                />
            </div>
            <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea 
                    id="message" 
                    name="message" 
                    value={formData.message}
                    onChange={handleChange} 
                    required 
                ></textarea>
            </div>
            <button type="submit" className="submit-button" disabled={isSubmitting}>
                {isSubmitting ? 'Sending...' : 'Send'}
            </button>
        </form>
    );
}

export default ContactForm;
