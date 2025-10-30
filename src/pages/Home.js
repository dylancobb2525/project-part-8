import React, { useState } from 'react';
import DestinationCard from '../components/DestinationCard';
import '../styles/pages-styles/Home.css';

function Home() {
    const [popupImage, setPopupImage] = useState(null);

    const expandImage = (imgSrc) => {
        setPopupImage(imgSrc);
    };

    const closePopup = () => {
        setPopupImage(null);
    };

    return (
        <div>
            <section id="hero-section">
                <img src={`${process.env.PUBLIC_URL}/images/hero.png`} alt="Travel Hero" id="hero-image" />
                <div className="hero-overlay">
                    <h2>DESTINATIONS WITH DYLAN</h2>
                    <p>Explore the world through my travels</p>
                </div>
            </section>
            
            <main id="main-content">
                <section id="recent-destinations">
                    <h2>Recent Destinations</h2>
                    <div className="destination-cards">
                        <DestinationCard 
                            image={`${process.env.PUBLIC_URL}/images/nyc.png`}
                            name="New York City"
                            onClick={() => expandImage(`${process.env.PUBLIC_URL}/images/nyc.png`)}
                        />
                        <DestinationCard 
                            image={`${process.env.PUBLIC_URL}/images/stbart.png`}
                            name="St. Barths"
                            onClick={() => expandImage(`${process.env.PUBLIC_URL}/images/stbart.png`)}
                        />
                        <DestinationCard 
                            image={`${process.env.PUBLIC_URL}/images/stmart.png`}
                            name="St. Maarten"
                            onClick={() => expandImage(`${process.env.PUBLIC_URL}/images/stmart.png`)}
                        />
                    </div>
                </section>
                
                <aside id="welcome-message">
                    <h2>Welcome to My Travel Journey</h2>
                    <p>Hi everyone! My name is Dylan Cobb, and I'm currently a 19-year-old who has a large passion for travel. I've traveled to several different US states as well as several different countries outside of the United States. My goal is not only to track everywhere I've been but to hopefully add to this list as I grow older. I want to be able to use this website as motivation for myself to travel, as well as being able to reflect on all my amazing trips and the memories I've made along the way.</p>
                </aside>
            </main>
            
            {popupImage && (
                <div id="image-popup" onClick={closePopup}>
                    <img id="popup-img" src={popupImage} alt="Expanded view" />
                </div>
            )}
        </div>
    );
}

export default Home;

