// src/blog/Blog.js
import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/App.css';
import './blog_styles.css';

const Blog = () => (
    <main className="main">
        <div className='main-title'>
            <h1>My Blog!</h1>
        </div>
            <nav className="blog-nav">
                <div className='main-subtitle'>
                    <h3>Topics</h3>
                </div>
                <Link className="blog-button" to="/blog/projects">Projects</Link>
                <Link className="blog-button" to="/blog/photos">Photography</Link>
                <Link className="blog-button" to="/blog/other">Other</Link>
            </nav>
    </main>
);

export default Blog;