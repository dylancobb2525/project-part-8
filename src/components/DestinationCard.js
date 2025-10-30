import React from 'react';
import '../styles/components-styles/DestinationCard.css';

function DestinationCard({ image, name, onClick }) {
    return (
        <div className="destination-card" onClick={onClick}>
            <img src={image} alt={name} />
            <p>{name}</p>
        </div>
    );
}

export default DestinationCard;

