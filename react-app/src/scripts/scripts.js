// src/scripts/scripts.js
import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

// OpenInNewTab Component
const OpenInNewTab = ({ href, children }) => { //props of href and children
    const handleClick = (event) => { //event is mouseclick
        // If external, open it in a new tab
        if (href.startsWith('http') || href.startsWith('https')) {
            event.preventDefault(); // The default is to replace current tab when u click it
            window.open(href, '_blank'); // Open URL in a new tab
        }
    };

    // If internal , use Link 
    const isInternal = !href.startsWith('http') && !href.startsWith('https');

    return isInternal ? (
        <Link to={href}>
            {children}
        </Link>
    ) : (
        <a href={href} onClick={handleClick}>
            {children}
        </a>
    );
};

OpenInNewTab.propTypes = {
    href: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired,
};

const BlogPost = ({ title, author, date, content, image, tags }) => {
    return (
        <article className="post">
            {image && <img src={image} alt={title} className="post-image" />}
            <h1 className="post-title">{title}</h1>
            <div className="post-meta">
                <span className="post-author">By {author}</span>
                <span className="post-date">{date}</span>
            </div>
            <div className="post-content">
                {content}
            </div>
            {tags && tags.length > 0 && (
                <div className="post-tags">
                    {tags.map((tag, index) => (
                        <span key={index} className="tag">
                            {tag}
                        </span>
                    ))}
                </div>
            )}
        </article>
    );
};

BlogPost.propTypes = {
    title: PropTypes.string.isRequired,
    author: PropTypes.string,
    date: PropTypes.string,
    content: PropTypes.node.isRequired,
    image: PropTypes.string,
    tags: PropTypes.arrayOf(PropTypes.string),
};

// Named exports
export { OpenInNewTab, BlogPost };



