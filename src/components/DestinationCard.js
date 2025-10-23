import React from 'react';
import './DestinationCard.css';

function DestinationCard({ image, name, onClick }) {
    return (
        <div className="destination-card" onClick={onClick}>
            <img src={image} alt={name} />
            <p>{name}</p>
        </div>
    );
}

export default DestinationCard;

