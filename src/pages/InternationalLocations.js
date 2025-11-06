import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import PageHeader from '../components/PageHeader';
import '../styles/pages-styles/Locations.css';

function InternationalLocations() {
    const [destinations, setDestinations] = useState([]);
    const [selectedDestination, setSelectedDestination] = useState(null);

    useEffect(() => {
        loadDestinations();
    }, []);

    const loadDestinations = async () => {
        try {
            const response = await axios.get('https://travel-server-yn4b.onrender.com/api/destinations');
            // Filter to show only International destinations
            const internationalDest = response.data.filter(dest => dest.category === "International");
            setDestinations(internationalDest);
        } catch (error) {
            console.error('Error loading destinations:', error);
        }
    };

    const openModal = (destination) => {
        setSelectedDestination(destination);
    };

    const closeModal = () => {
        setSelectedDestination(null);
    };

    return (
        <div>
            <PageHeader 
                title="International Locations" 
                subtitle="Discover destinations around the globe"
                backgroundImage={`${process.env.PUBLIC_URL}/images/hero.png`}
            />
            
            <main id="main-content">
                <section id="locations-content">
                    <div className="locations-grid">
                        {destinations.map((destination) => (
                            <div 
                                key={destination._id} 
                                className="location-card-large"
                                onClick={() => openModal(destination)}
                            >
                                <img 
                                    src={`https://travel-server-yn4b.onrender.com/${destination.main_image}`}
                                    alt={destination.name}
                                />
                                <div className="location-info">
                                    <h3>{destination.name}</h3>
                                    <p>{destination.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                    
                    <div className="back-section">
                        <Link to="/travels" className="back-btn">Back to My Travels</Link>
                    </div>
                </section>
            </main>
            
            {selectedDestination && (
                <div className="modal" onClick={closeModal}>
                    <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                        <span className="close" onClick={closeModal}>&times;</span>
                        <img 
                            src={`https://travel-server-yn4b.onrender.com/${selectedDestination.main_image}`}
                            alt={selectedDestination.name}
                            className="modal-image"
                        />
                        <h2>{selectedDestination.name}</h2>
                        <p>{selectedDestination.description}</p>
                    </div>
                </div>
            )}
        </div>
    );
}

export default InternationalLocations;

