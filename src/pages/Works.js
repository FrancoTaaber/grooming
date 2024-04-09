import React, { useEffect, useState } from 'react';

function Works() {
    const [photos, setPhotos] = useState([]);

    useEffect(() => {
        async function fetchPhotos() {
            const response = await fetch('/api/photos');
            const data = await response.json();
            setPhotos(data.photos);
        }

        fetchPhotos();
    }, []);

    return (
        <div>
            <h1>Tehtud tööd</h1>
            <div>
                {photos.map((photo, index) => (
                    <img key={index} src={photo.url} alt="Tehtud töö" />
                ))}
            </div>
        </div>
    );
}

export default Works;
