import React, { useState } from 'react';
import PageHeader from '../components/PageHeader';
import GalleryItem from '../components/GalleryItem';
import Slideshow from '../components/Slideshow';
import '../styles/pages-styles/Gallery.css';

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
                backgroundImage={`${process.env.PUBLIC_URL}/images/hero.png`}
            />

            <Slideshow />
            
            <main id="main-content">
                <section id="gallery-content">
                    <div className="gallery-grid">
                        <GalleryItem 
                            image={`${process.env.PUBLIC_URL}/images/nyc.png`} 
                            alt="New York City" 
                            size="large"
                            onClick={() => expandImage(`${process.env.PUBLIC_URL}/images/nyc.png`)}
                        />
                        <GalleryItem 
                            image={`${process.env.PUBLIC_URL}/images/aruba.png`} 
                            alt="Aruba" 
                            size="medium"
                            onClick={() => expandImage(`${process.env.PUBLIC_URL}/images/aruba.png`)}
                        />
                        <GalleryItem 
                            image={`${process.env.PUBLIC_URL}/images/stbart.png`} 
                            alt="St Barths" 
                            size="small"
                            onClick={() => expandImage(`${process.env.PUBLIC_URL}/images/stbart.png`)}
                        />
                        <GalleryItem 
                            image={`${process.env.PUBLIC_URL}/images/fortl.png`} 
                            alt="Fort Lauderdale" 
                            size="medium"
                            onClick={() => expandImage(`${process.env.PUBLIC_URL}/images/fortl.png`)}
                        />
                        <GalleryItem 
                            image={`${process.env.PUBLIC_URL}/images/stmart.png`} 
                            alt="St Maarten" 
                            size="large"
                            onClick={() => expandImage(`${process.env.PUBLIC_URL}/images/stmart.png`)}
                        />
                        <GalleryItem 
                            image={`${process.env.PUBLIC_URL}/images/boca.png`} 
                            alt="Boca Raton" 
                            size="small"
                            onClick={() => expandImage(`${process.env.PUBLIC_URL}/images/boca.png`)}
                        />
                        <GalleryItem 
                            image={`${process.env.PUBLIC_URL}/images/dc.png`} 
                            alt="Washington DC" 
                            size="medium"
                            onClick={() => expandImage(`${process.env.PUBLIC_URL}/images/dc.png`)}
                        />
                        <GalleryItem 
                            image={`${process.env.PUBLIC_URL}/images/ang.png`} 
                            alt="Anguilla" 
                            size="small"
                            onClick={() => expandImage(`${process.env.PUBLIC_URL}/images/ang.png`)}
                        />
                        <GalleryItem 
                            image={`${process.env.PUBLIC_URL}/images/bermuda.png`} 
                            alt="Bermuda" 
                            size="large"
                            onClick={() => expandImage(`${process.env.PUBLIC_URL}/images/bermuda.png`)}
                        />
                        <GalleryItem 
                            image={`${process.env.PUBLIC_URL}/images/char.png`} 
                            alt="Charleston" 
                            size="medium"
                            onClick={() => expandImage(`${process.env.PUBLIC_URL}/images/char.png`)}
                        />
                        <GalleryItem 
                            image={`${process.env.PUBLIC_URL}/images/gat.png`} 
                            alt="Gatlinburg" 
                            size="small"
                            onClick={() => expandImage(`${process.env.PUBLIC_URL}/images/gat.png`)}
                        />
                        <GalleryItem 
                            image={`${process.env.PUBLIC_URL}/images/punta.png`} 
                            alt="Punta Cana" 
                            size="medium"
                            onClick={() => expandImage(`${process.env.PUBLIC_URL}/images/punta.png`)}
                        />
                        <GalleryItem 
                            image={`${process.env.PUBLIC_URL}/images/riv.png`} 
                            alt="Riviera Maya" 
                            size="large"
                            onClick={() => expandImage(`${process.env.PUBLIC_URL}/images/riv.png`)}
                        />
                        <GalleryItem 
                            image={`${process.env.PUBLIC_URL}/images/niagra.png`} 
                            alt="Niagara Falls" 
                            size="small"
                            onClick={() => expandImage(`${process.env.PUBLIC_URL}/images/niagra.png`)}
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

