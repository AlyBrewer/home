// src/scripts/scripts.js
import React from 'react';

const OpenInNewTab = ({ href, children }) => {
    const handleClick = (event) => {
        event.preventDefault(); 
        window.open(href, '_blank'); // Open URL in a new tab
    };

    return (
        <a href={href} onClick={handleClick}>
            {children}
        </a>
    );
};

export default OpenInNewTab;