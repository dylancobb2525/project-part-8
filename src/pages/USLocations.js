import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PageHeader from '../components/PageHeader';
import LocationCardLarge from '../components/LocationCardLarge';
import '../styles/pages-styles/Locations.css';

function USLocations() {
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
                title="United States Locations" 
                subtitle="Explore all my US travel destinations"
                backgroundImage={`${process.env.PUBLIC_URL}/images/hero.png`}
            />
            
            <main id="main-content">
                <section id="locations-content">
                    <div className="locations-grid">
                        <LocationCardLarge
                            image={`${process.env.PUBLIC_URL}/images/fortl.png`}
                            title="Fort Lauderdale, Florida"
                            description="This was a trip I went on with some hometown friends after graduating highschool."
                            onClick={() => expandImage(`${process.env.PUBLIC_URL}/images/fortl.png`)}
                        />
                        <LocationCardLarge
                            image={`${process.env.PUBLIC_URL}/images/boca.png`}
                            title="Boca Raton, Florida"
                            description="This is where my mom's side of the family lives. I go atleast once per year."
                            onClick={() => expandImage(`${process.env.PUBLIC_URL}/images/boca.png`)}
                        />
                        <LocationCardLarge
                            image={`${process.env.PUBLIC_URL}/images/nyc.png`}
                            title="New York City, NY"
                            description="I live an hour from New York City, so I go as much as possible. This is a specific picture in Midtown, I really enjoy going to the SoHo area."
                            onClick={() => expandImage(`${process.env.PUBLIC_URL}/images/nyc.png`)}
                        />
                        <LocationCardLarge
                            image={`${process.env.PUBLIC_URL}/images/dc.png`}
                            title="Washington, DC"
                            description="I went here a couple of years ago it was a really cool to see the nations capital."
                            onClick={() => expandImage(`${process.env.PUBLIC_URL}/images/dc.png`)}
                        />
                        <LocationCardLarge
                            image={`${process.env.PUBLIC_URL}/images/char.png`}
                            title="Charleston, SC"
                            description="I visit here on weekends when I am not busy at school. Beautiful city."
                            onClick={() => expandImage(`${process.env.PUBLIC_URL}/images/char.png`)}
                        />
                        <LocationCardLarge
                            image={`${process.env.PUBLIC_URL}/images/gat.png`}
                            title="Gatlinburg, TN"
                            description="I went on a mountain weekend trip here with my fraternity, it was so awesome hiking the mountains."
                            onClick={() => expandImage(`${process.env.PUBLIC_URL}/images/gat.png`)}
                        />
                    </div>
                    
                    <div className="back-section">
                        <Link to="/travels" className="back-btn">Back to My Travels</Link>
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

export default USLocations;

