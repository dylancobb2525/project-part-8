import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PageHeader from '../components/PageHeader';
import LocationCardLarge from '../components/LocationCardLarge';
import './Locations.css';

function InternationalLocations() {
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
                title="International Locations" 
                subtitle="Discover destinations around the globe"
                backgroundImage="/images/hero.png"
            />
            
            <main id="main-content">
                <section id="locations-content">
                    <div className="locations-grid">
                        <LocationCardLarge
                            image="/images/aruba.png"
                            title="Aruba"
                            description="I have been to Aruba several times. The weather is always picture perfect and some of the best restaurants I've been to on an island."
                            onClick={() => expandImage('/images/aruba.png')}
                        />
                        <LocationCardLarge
                            image="/images/stmart.png"
                            title="St Maarten"
                            description="A beautiful island with amazing views and super friendly locals."
                            onClick={() => expandImage('/images/stmart.png')}
                        />
                        <LocationCardLarge
                            image="/images/stbart.png"
                            title="St Barths"
                            description="A small yet luxurious island that has unique shell beaches and tons of shopping."
                            onClick={() => expandImage('/images/stbart.png')}
                        />
                        <LocationCardLarge
                            image="/images/ang.png"
                            title="Anguilla"
                            description="What I would call a super niche island in the Caribbean. Has the best beaches I have ever seen and amazing coral reefs."
                            onClick={() => expandImage('/images/ang.png')}
                        />
                        <LocationCardLarge
                            image="/images/bermuda.png"
                            title="Bermuda"
                            description="Crystal clear waters and beautiful beaches that are just a short cruise ride away. Would highly recommend."
                            onClick={() => expandImage('/images/bermuda.png')}
                        />
                        <LocationCardLarge
                            image="/images/punta.png"
                            title="Punta Cana"
                            description="It has been a while since I have been here but it is a great mix of island vacation and party scene."
                            onClick={() => expandImage('/images/punta.png')}
                        />
                        <LocationCardLarge
                            image="/images/riv.png"
                            title="Riviera Maya"
                            description="It has been almost 8 years since I last went to Mexico, but this was a really fun vacation."
                            onClick={() => expandImage('/images/riv.png')}
                        />
                        <LocationCardLarge
                            image="/images/niagra.png"
                            title="Niagara Falls"
                            description="Struggled to find a good picture from this trip, but for anyone living up north this is a must see destination."
                            onClick={() => expandImage('/images/niagra.png')}
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

export default InternationalLocations;

