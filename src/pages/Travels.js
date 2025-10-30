import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PageHeader from '../components/PageHeader';
import LocationCard from '../components/LocationCard';
import '../styles/pages-styles/Travels.css';

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
                backgroundImage={`${process.env.PUBLIC_URL}/images/hero.png`}
            />
            
            <main id="main-content" className="travels-layout">
                <section className="travel-column">
                    <h3>United States</h3>
                    <div className="location-grid">
                        <LocationCard 
                            image={`${process.env.PUBLIC_URL}/images/fortl.png`}
                            name="Fort Lauderdale, FL"
                            onClick={() => expandImage(`${process.env.PUBLIC_URL}/images/fortl.png`)}
                        />
                        <LocationCard 
                            image={`${process.env.PUBLIC_URL}/images/boca.png`}
                            name="Boca Raton, Florida"
                            onClick={() => expandImage(`${process.env.PUBLIC_URL}/images/boca.png`)}
                        />
                        <LocationCard 
                            image={`${process.env.PUBLIC_URL}/images/nyc.png`}
                            name="New York City, NY"
                            onClick={() => expandImage(`${process.env.PUBLIC_URL}/images/nyc.png`)}
                        />
                        <LocationCard 
                            image={`${process.env.PUBLIC_URL}/images/dc.png`}
                            name="Washington, DC"
                            onClick={() => expandImage(`${process.env.PUBLIC_URL}/images/dc.png`)}
                        />
                    </div>
                    <Link to="/us-locations" className="load-more-btn">Load More</Link>
                </section>
                
                <section className="travel-column">
                    <h3>International</h3>
                    <div className="location-grid">
                        <LocationCard 
                            image={`${process.env.PUBLIC_URL}/images/aruba.png`}
                            name="Aruba"
                            onClick={() => expandImage(`${process.env.PUBLIC_URL}/images/aruba.png`)}
                        />
                        <LocationCard 
                            image={`${process.env.PUBLIC_URL}/images/stmart.png`}
                            name="St Maarten"
                            onClick={() => expandImage(`${process.env.PUBLIC_URL}/images/stmart.png`)}
                        />
                        <LocationCard 
                            image={`${process.env.PUBLIC_URL}/images/stbart.png`}
                            name="St Barths"
                            onClick={() => expandImage(`${process.env.PUBLIC_URL}/images/stbart.png`)}
                        />
                        <LocationCard 
                            image={`${process.env.PUBLIC_URL}/images/ang.png`}
                            name="Anguilla"
                            onClick={() => expandImage(`${process.env.PUBLIC_URL}/images/ang.png`)}
                        />
                    </div>
                    <Link to="/international-locations" className="load-more-btn">Load More</Link>
                </section>
                
                <section className="travel-column">
                    <h3>Interactive Map</h3>
                    <div className="map-container">
                        <img src={`${process.env.PUBLIC_URL}/images/example.png`} alt="Interactive Map" id="map-image" />
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

