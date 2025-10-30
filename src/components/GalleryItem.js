import React from 'react';
import '../styles/components-styles/GalleryItem.css';

function GalleryItem({ image, alt, size, onClick }) {
    return (
        <div className={`gallery-item ${size}`} onClick={onClick}>
            <img src={image} alt={alt} />
        </div>
    );
}

export default GalleryItem;

