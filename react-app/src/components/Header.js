// src/components/Header.js
import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/App.css';

const Header = () => (
    <header className="header">
        <div className="header-content">
            <Link to="/" className="logo">Alyssa Brewer</Link>
            <nav className="nav">
                <Link className="nav-button" to="/">Home</Link>
                
                {/* Dropdown Button and Content */}
                <div className="nav-button-wrapper">
                    <Link className="nav-button" to="/blog">Blog</Link>
                    <div className="dropdown-content">
                        <Link to="/blog/projects">Projects</Link>
                        <Link to="/blog/photos">Photos</Link>
                        <Link to="/blog/other">Other</Link>
                    </div>
                </div>

                <Link className="nav-button" to="/about">About</Link>
                <Link className="nav-button" to="/contact">Contact</Link>
                
            </nav>
        </div>
    </header>
);

export default Header;