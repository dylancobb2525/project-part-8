import React from 'react';
import '../styles/components-styles/BucketCard.css';

function BucketCard({ image, title, description, onClick }) {
    return (
        <div className="bucket-card">
            <img src={image} alt={title} onClick={onClick} />
            <div className="bucket-text">
                <h3>{title}</h3>
                <p>{description}</p>
            </div>
        </div>
    );
}

export default BucketCard;

