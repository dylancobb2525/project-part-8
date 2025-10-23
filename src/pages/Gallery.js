import React, { useState } from 'react';
import PageHeader from '../components/PageHeader';
import GalleryItem from '../components/GalleryItem';
import './Gallery.css';

function Gallery() {
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
                title="Gallery" 
                backgroundImage="/images/hero.png"
            />
            
            <main id="main-content">
                <section id="gallery-content">
                    <div className="gallery-grid">
                        <GalleryItem 
                            image="/images/nyc.png" 
                            alt="New York City" 
                            size="large"
                            onClick={() => expandImage('/images/nyc.png')}
                        />
                        <GalleryItem 
                            image="/images/aruba.png" 
                            alt="Aruba" 
                            size="medium"
                            onClick={() => expandImage('/images/aruba.png')}
                        />
                        <GalleryItem 
                            image="/images/stbart.png" 
                            alt="St Barths" 
                            size="small"
                            onClick={() => expandImage('/images/stbart.png')}
                        />
                        <GalleryItem 
                            image="/images/fortl.png" 
                            alt="Fort Lauderdale" 
                            size="medium"
                            onClick={() => expandImage('/images/fortl.png')}
                        />
                        <GalleryItem 
                            image="/images/stmart.png" 
                            alt="St Maarten" 
                            size="large"
                            onClick={() => expandImage('/images/stmart.png')}
                        />
                        <GalleryItem 
                            image="/images/boca.png" 
                            alt="Boca Raton" 
                            size="small"
                            onClick={() => expandImage('/images/boca.png')}
                        />
                        <GalleryItem 
                            image="/images/dc.png" 
                            alt="Washington DC" 
                            size="medium"
                            onClick={() => expandImage('/images/dc.png')}
                        />
                        <GalleryItem 
                            image="/images/ang.png" 
                            alt="Anguilla" 
                            size="small"
                            onClick={() => expandImage('/images/ang.png')}
                        />
                        <GalleryItem 
                            image="/images/bermuda.png" 
                            alt="Bermuda" 
                            size="large"
                            onClick={() => expandImage('/images/bermuda.png')}
                        />
                        <GalleryItem 
                            image="/images/char.png" 
                            alt="Charleston" 
                            size="medium"
                            onClick={() => expandImage('/images/char.png')}
                        />
                        <GalleryItem 
                            image="/images/gat.png" 
                            alt="Gatlinburg" 
                            size="small"
                            onClick={() => expandImage('/images/gat.png')}
                        />
                        <GalleryItem 
                            image="/images/punta.png" 
                            alt="Punta Cana" 
                            size="medium"
                            onClick={() => expandImage('/images/punta.png')}
                        />
                        <GalleryItem 
                            image="/images/riv.png" 
                            alt="Riviera Maya" 
                            size="large"
                            onClick={() => expandImage('/images/riv.png')}
                        />
                        <GalleryItem 
                            image="/images/niagra.png" 
                            alt="Niagara Falls" 
                            size="small"
                            onClick={() => expandImage('/images/niagra.png')}
                        />
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

export default Gallery;

