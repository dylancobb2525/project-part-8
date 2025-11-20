import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import PageHeader from '../components/PageHeader';
import BucketCard from '../components/BucketCard';
import AddDestination from '../components/AddDestination';
import DestinationDialog from '../components/DestinationDialog';
import { getDestinationImageUrl } from '../utils/imageHelper';
import '../styles/pages-styles/BucketList.css';

function BucketList() {
    const [selectedDestination, setSelectedDestination] = useState(null);
    const [showAddDialog, setShowAddDialog] = useState(false);
    const [bucketListDestinations, setBucketListDestinations] = useState([]);
    const [successMessage, setSuccessMessage] = useState("");

    useEffect(() => {
        loadBucketList();
    }, []);

    const loadBucketList = async () => {
        try {
            const response = await axios.get('https://travel-server-yn4b.onrender.com/api/destinations');
            const bucketList = response.data.filter(dest => dest.category === "Bucket List");
            setBucketListDestinations(bucketList);
        } catch (error) {
            console.error('Error loading bucket list:', error);
        }
    };

    const openAddDialog = () => {
        setShowAddDialog(true);
    };

    const closeAddDialog = () => {
        setShowAddDialog(false);
    };

    const updateDestinations = (newDestination) => {
        setBucketListDestinations((destinations) => [...destinations, newDestination]);
    };

    const openDestinationDialog = (destination) => {
        setSelectedDestination(destination);
    };

    const closeDestinationDialog = () => {
        setSelectedDestination(null);
    };

    const updateDestination = (updatedDestination) => {
        setBucketListDestinations((destinations) =>
            destinations.map((dest) =>
                dest._id === updatedDestination._id ? updatedDestination : dest
            )
        );
        setSuccessMessage("Destination updated successfully!");
        setTimeout(() => setSuccessMessage(""), 3000);
    };

    const hideDestination = () => {
        setBucketListDestinations((destinations) =>
            destinations.filter((dest) => dest._id !== selectedDestination._id)
        );
        setSuccessMessage("Destination deleted successfully!");
        setTimeout(() => setSuccessMessage(""), 3000);
        setSelectedDestination(null);
    };

    return (
        <div>
            <PageHeader 
                title="Bucket List" 
                subtitle="My top destinations to visit"
                backgroundImage={`${process.env.PUBLIC_URL}/images/hero.png`}
            />
            
            <main id="main-content">
                <button id="add-destination-btn" onClick={openAddDialog}>+ Add New Destination</button>

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

                {showAddDialog ? (
                    <AddDestination 
                        closeAddDialog={closeAddDialog}
                        updateDestinations={updateDestinations}
                    />
                ) : (
                    ""
                )}

                <section id="bucket-list-content">
                    <div className="bucket-grid">
                        {bucketListDestinations.slice(0, 6).map((destination) => {
                            const imageUrl = getDestinationImageUrl(destination.main_image);
                            return (
                                <BucketCard
                                    key={destination._id}
                                    image={imageUrl}
                                    title={destination.name}
                                    description={destination.description}
                                    onClick={() => openDestinationDialog(destination)}
                                />
                            );
                        })}
                    </div>
                    
                    <Link to="/bucket-list-locations" className="load-more-btn">Load More</Link>
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

export default BucketList;

