import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PageHeader from '../components/PageHeader';
import BucketCard from '../components/BucketCard';
import './BucketList.css';

function BucketList() {
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
                title="Bucket List" 
                subtitle="My top destinations to visit"
                backgroundImage="/images/hero.png"
            />
            
            <main id="main-content">
                <section id="bucket-list-content">
                    <div className="bucket-grid">
                        <BucketCard 
                            image="/images/flor.png"
                            title="Florence, Italy"
                            description="I have never been to Europe and I want to start with Florence because it is where I plan to study abroad. Between the sight seeing and good food, this is at the top of my list."
                            onClick={() => expandImage('/images/flor.png')}
                        />
                        <BucketCard 
                            image="/images/paris.png"
                            title="Paris, France"
                            description="The food, shopping, and landmarks such as the Eiffel Tower are all things that I hope to experience in the next few years."
                            onClick={() => expandImage('/images/paris.png')}
                        />
                        <BucketCard 
                            image="/images/hawaii.png"
                            title="Hawaii, USA"
                            description="I have been to a handful of islands, but this island is definitely a must see for me one day. The nature here looks insane."
                            onClick={() => expandImage('/images/hawaii.png')}
                        />
                        <BucketCard 
                            image="/images/bora.png"
                            title="Bora Bora, French Polynesia"
                            description="The water looks crystal clear and seems like a dream for me to experience. This is a trip I hope to take in my later 20s."
                            onClick={() => expandImage('/images/bora.png')}
                        />
                        <BucketCard 
                            image="/images/moroc.png"
                            title="Morocco Desert"
                            description="When I study abroad I hope to visit Morocco and ride a camel in the desert, as it is such a unique experience and something I have never been able to do."
                            onClick={() => expandImage('/images/moroc.png')}
                        />
                        <BucketCard 
                            image="/images/dubai.png"
                            title="Dubai, UAE"
                            description="This is a trip I plan to take later on in my life, but the luxury and insane architecture makes it so enticing to visit."
                            onClick={() => expandImage('/images/dubai.png')}
                        />
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

