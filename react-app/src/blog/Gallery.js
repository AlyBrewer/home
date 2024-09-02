// src/blog/Gallery.js

import React from 'react';
import { useState } from 'react';
import imageData from './imageData'; 
import '../styles/Gallery.css';

const Gallery = () => {
    const [selectedCategory, setSelectedCategory] = useState('all');
    const categories = [...new Set(imageData.map(image => image.category)), 'all'];

    const handleCategoryChange = (event) => {
        setSelectedCategory(event.target.value);
    };

    // Filter images 
    const filteredImages = selectedCategory === 'all'
        ? imageData
        : imageData.filter(image => image.category === selectedCategory);

    
    return (
        <div className="gallery-container">
          {/* Filter Options */}
          <div className="filter">
            <label htmlFor="category">Filter by category:</label>
            <select id="category" onChange={handleCategoryChange} value={selectedCategory}>
              <option value="all">All</option>
              <option value="art">Art</option>
              <option value="nature">Nature</option>
              <option value="urban">Urban</option>
              <option value="special_occasion">Special Occasion</option>
            </select>
          </div>
    
          {/* Gallery Items */}
          <div className="gallery">
            {filteredImages.map(image => (
              <div key={image.id} className="gallery-item">
                <img src={image.imageUrl} alt={image.description} />
                <p>{image.description}</p>
              </div>
            ))}
          </div>
        </div>
      );
    };

  export default Gallery;