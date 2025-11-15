import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import PageHeader from '../components/PageHeader';
import BucketCard from '../components/BucketCard';
import AddDestination from '../components/AddDestination';
import '../styles/pages-styles/BucketList.css';

function BucketList() {
    const [popupImage, setPopupImage] = useState(null);
    const [showAddDialog, setShowAddDialog] = useState(false);
    const [bucketListDestinations, setBucketListDestinations] = useState([]);

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

    const expandImage = (imgSrc) => {
        setPopupImage(imgSrc);
    };

    const closePopup = () => {
        setPopupImage(null);
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
                        {bucketListDestinations.slice(0, 6).map((destination) => (
                            <BucketCard
                                key={destination._id}
                                image={`https://travel-server-yn4b.onrender.com/${destination.main_image}`}
                                title={destination.name}
                                description={destination.description}
                                onClick={() => expandImage(`https://travel-server-yn4b.onrender.com/${destination.main_image}`)}
                            />
                        ))}
                    </div>
                    
                    <Link to="/bucket-list-locations" className="load-more-btn">Load More</Link>
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

export default BucketList;

