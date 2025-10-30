import React, { useState } from 'react';
import '../styles/components-styles/Slideshow.css';

function Slideshow() {
    const images = [
        { src: `${process.env.PUBLIC_URL}/images/nyc.png`, alt: 'New York City' },
        { src: `${process.env.PUBLIC_URL}/images/aruba.png`, alt: 'Aruba' },
        { src: `${process.env.PUBLIC_URL}/images/stbart.png`, alt: 'St. Barths' },
        { src: `${process.env.PUBLIC_URL}/images/stmart.png`, alt: 'St. Maarten' },
        { src: `${process.env.PUBLIC_URL}/images/bermuda.png`, alt: 'Bermuda' },
        { src: `${process.env.PUBLIC_URL}/images/fortl.png`, alt: 'Fort Lauderdale' },
        { src: `${process.env.PUBLIC_URL}/images/dc.png`, alt: 'Washington DC' },
        { src: `${process.env.PUBLIC_URL}/images/char.png`, alt: 'Charleston' }
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    const goToPrevious = () => {
        setCurrentIndex((prevIndex) => 
            prevIndex === 0 ? images.length - 1 : prevIndex - 1
        );
    };

    const goToNext = () => {
        setCurrentIndex((prevIndex) => 
            prevIndex === images.length - 1 ? 0 : prevIndex + 1
        );
    };

    return (
        <div className="slideshow">
            <div className="slideshow-container">
                <button className="slideshow-btn prev" onClick={goToPrevious}>
                    &#10094;
                </button>
                
                <div className="slide">
                    <img 
                        src={images[currentIndex].src} 
                        alt={images[currentIndex].alt}
                        className="slideshow-image"
                    />
                    <div className="slide-caption">
                        {images[currentIndex].alt}
                    </div>
                </div>

                <button className="slideshow-btn next" onClick={goToNext}>
                    &#10095;
                </button>
            </div>
        </div>
    );
}

export default Slideshow;

