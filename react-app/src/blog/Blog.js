// src/blog/Blog.js
import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/App.css';
import './blog_styles.css';

const Blog = () => (
    <main className="main">
        <h1>My Blog!</h1>
        <div className='blog-wrap'>
            <nav className="blog-nav">
                <h3>Topics</h3>
                <Link className="blog-button" to="/blog/projects">Projects</Link>
                <Link className="blog-button" to="/blog/photos">Photography</Link>
                <Link className="blog-button" to="/blog/other">Other</Link>
            </nav>
        </div>
    </main>
);

export default Blog;