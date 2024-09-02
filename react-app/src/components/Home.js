// src/components/Home.js
import React from 'react';
import '../styles/App.css';
import {OpenInNewTab} from '../scripts/scripts.js';
import '../blog/blog_styles.css';
import { Link } from 'react-router-dom';


const Home = () => (
    <main className="main">
        <nav className="home-nav">
            <div className='main-title'>
                <h1>My Home!</h1>
            </div>
                <div className='main-subtitle'>
                    <h3>Topics</h3>
                </div>
                <Link className="blog-button" to="/about">About</Link>
                <Link className="blog-button" to="/blog">Blog</Link>
                <Link className="blog-button" to="/contact">Contact</Link>
        </nav>

    </main>

);

export default Home;