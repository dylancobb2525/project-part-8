import React from 'react';
import '../styles/components-styles/LocationCardLarge.css';

function LocationCardLarge({ image, title, description, onClick }) {
    return (
        <div className="location-card-large">
            <img src={image} alt={title} onClick={onClick} />
            <div className="location-info">
                <h3>{title}</h3>
                <p>{description}</p>
            </div>
        </div>
    );
}

export default LocationCardLarge;

