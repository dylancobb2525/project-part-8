import React from 'react';
import '../styles/components-styles/LocationCard.css';

function LocationCard({ image, name, onClick }) {
    return (
        <div className="location-card">
            <img src={image} alt={name} onClick={onClick} />
            <p>{name}</p>
        </div>
    );
}

export default LocationCard;

