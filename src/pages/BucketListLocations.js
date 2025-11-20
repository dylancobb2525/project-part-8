import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import PageHeader from '../components/PageHeader';
import DestinationDialog from '../components/DestinationDialog';
import '../styles/pages-styles/Locations.css';
import { getDestinationImageUrl } from '../utils/imageHelper';

function BucketListLocations() {
    const [destinations, setDestinations] = useState([]);
    const [selectedDestination, setSelectedDestination] = useState(null);
    const [successMessage, setSuccessMessage] = useState("");

    useEffect(() => {
        loadDestinations();
    }, []);

    const loadDestinations = async () => {
        try {
            const response = await axios.get('https://travel-server-yn4b.onrender.com/api/destinations');
            // Filter to show only Bucket List destinations
            const bucketListDest = response.data.filter(dest => dest.category === "Bucket List");
            setDestinations(bucketListDest);
        } catch (error) {
            console.error('Error loading destinations:', error);
        }
    };

    const openDestinationDialog = (destination) => {
        setSelectedDestination(destination);
    };

    const closeDestinationDialog = () => {
        setSelectedDestination(null);
    };

    const updateDestination = (updatedDestination) => {
        setDestinations((dests) =>
            dests.map((dest) =>
                dest._id === updatedDestination._id ? updatedDestination : dest
            )
        );
        setSuccessMessage("Destination updated successfully!");
        setTimeout(() => setSuccessMessage(""), 3000);
    };

    const hideDestination = () => {
        setDestinations((dests) =>
            dests.filter((dest) => dest._id !== selectedDestination._id)
        );
        setSuccessMessage("Destination deleted successfully!");
        setTimeout(() => setSuccessMessage(""), 3000);
        setSelectedDestination(null);
    };

    return (
        <div>
            <PageHeader 
                title="More Bucket List Destinations" 
                subtitle="Dream destinations waiting to be explored"
                backgroundImage={`${process.env.PUBLIC_URL}/images/hero.png`}
            />
            
            <main id="main-content">
                {successMessage && (
                    <div style={{
                        padding: '10px',
                        margin: '10px 0',
                        backgroundColor: '#4CAF50',
                        color: 'white',
                        borderRadius: '5px',
                        textAlign: 'center'
                    }}>
                        {successMessage}
                    </div>
                )}

                <section id="locations-content">
                    <div className="locations-grid">
                        {destinations.map((destination) => (
                            <div 
                                key={destination._id} 
                                className="location-card-large"
                                onClick={() => openDestinationDialog(destination)}
                            >
                                <img 
                                    src={getDestinationImageUrl(destination.main_image)}
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
                        <Link to="/bucketlist" className="back-btn">Back to Bucket List</Link>
                    </div>
                </section>
            </main>
            
            {selectedDestination && (
                <DestinationDialog
                    _id={selectedDestination._id}
                    name={selectedDestination.name}
                    description={selectedDestination.description}
                    category={selectedDestination.category}
                    main_image={selectedDestination.main_image}
                    closeDestinationDialog={closeDestinationDialog}
                    updateDestination={updateDestination}
                    hideDestination={hideDestination}
                />
            )}
        </div>
    );
}

export default BucketListLocations;

