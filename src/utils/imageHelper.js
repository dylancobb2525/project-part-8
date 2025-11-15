const BASE_IMAGE_URL = 'https://travel-server-yn4b.onrender.com/images';

export const getDestinationImageUrl = (imagePath) => {
    if (!imagePath) {
        return `${process.env.PUBLIC_URL}/images/hero.png`;
    }

    if (imagePath.startsWith('http')) {
        return imagePath;
    }

    const trimmedPath = imagePath.replace(/^images\//, '').replace(/^\/+/, '');
    return `${BASE_IMAGE_URL}/${trimmedPath}`;
};

