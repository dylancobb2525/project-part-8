import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PageHeader from '../components/PageHeader';
import LocationCard from '../components/LocationCard';
import './Travels.css';

function Travels() {
    const [popupImage, setPopupImage] = useState(null);

    const expandImage = (imgSrc) => {
        setPopupImage(imgSrc);
    };

    const closePopup = () => {
        setPopupImage(null);
    };

    return (
        <div>
            <PageHeader 
                title="Destinations" 
                backgroundImage="/images/hero.png"
            />
            
            <main id="main-content" className="travels-layout">
                <section className="travel-column">
                    <h3>United States</h3>
                    <div className="location-grid">
                        <LocationCard 
                            image="/images/fortl.png"
                            name="Fort Lauderdale, FL"
                            onClick={() => expandImage('/images/fortl.png')}
                        />
                        <LocationCard 
                            image="/images/boca.png"
                            name="Boca Raton, Florida"
                            onClick={() => expandImage('/images/boca.png')}
                        />
                        <LocationCard 
                            image="/images/nyc.png"
                            name="New York City, NY"
                            onClick={() => expandImage('/images/nyc.png')}
                        />
                        <LocationCard 
                            image="/images/dc.png"
                            name="Washington, DC"
                            onClick={() => expandImage('/images/dc.png')}
                        />
                    </div>
                    <Link to="/us-locations" className="load-more-btn">Load More</Link>
                </section>
                
                <section className="travel-column">
                    <h3>International</h3>
                    <div className="location-grid">
                        <LocationCard 
                            image="/images/aruba.png"
                            name="Aruba"
                            onClick={() => expandImage('/images/aruba.png')}
                        />
                        <LocationCard 
                            image="/images/stmart.png"
                            name="St Maarten"
                            onClick={() => expandImage('/images/stmart.png')}
                        />
                        <LocationCard 
                            image="/images/stbart.png"
                            name="St Barths"
                            onClick={() => expandImage('/images/stbart.png')}
                        />
                        <LocationCard 
                            image="/images/ang.png"
                            name="Anguilla"
                            onClick={() => expandImage('/images/ang.png')}
                        />
                    </div>
                    <Link to="/international-locations" className="load-more-btn">Load More</Link>
                </section>
                
                <section className="travel-column">
                    <h3>Interactive Map</h3>
                    <div className="map-container">
                        <img src="/images/example.png" alt="Interactive Map" id="map-image" />
                        <p>Click to expand</p>
                    </div>
                </section>
            </main>
            
            {popupImage && (
                <div id="image-popup" onClick={closePopup}>
                    <img id="popup-img" src={popupImage} alt="Expanded view" />
                </div>
            )}
        </div>
    );
}

export default Travels;

