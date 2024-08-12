// src/blog/Projects.js
import React from 'react';
import '../styles/App.css';
import { OpenInNewTab, BlogPost } from '../scripts/scripts';

const Projects = () => (
    <main className="main">
        <p>This is a placeholder for the projects page</p>
        <BlogPost
                title="Blog Post Test"
                author="Alyssa Brewer"
                date="August 15, 2024"
                content={<p>This is the content of the blog post.</p>}
                image="https://loremflickr.com/320/240"
                tags={['Projects', 'React']}
            />
    </main>
);

export default Projects;