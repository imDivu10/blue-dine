import React, { useState } from 'react';
import './Gallery.css';

function Gallery() {
  const [selectedImage, setSelectedImage] = useState(null);

  const images = [
    { id: 1, title: 'Tandoori Platter', category: 'Main Course' },
    { id: 2, title: 'Paneer Tikka', category: 'Starters' },
    { id: 3, title: 'Chinese Sizzler', category: 'Chinese' },
    { id: 4, title: 'Restaurant Ambiance', category: 'Ambiance' },
    { id: 5, title: 'Chicken Lollipop', category: 'Starters' },
    { id: 6, title: 'Sizzling Brownie', category: 'Desserts' },
  ];

  const getImageColor = (id) => {
    const colors = ['#FFE5B4', '#FFD4A3', '#FFCF99', '#E8D4C4', '#D4C5B9', '#C4B5AA'];
    return colors[id - 1];
  };

  return (
    <div className="gallery-page">
      <div className="gallery-header">
        <h1>Gallery</h1>
        <p>Check out our delicious dishes</p>
      </div>

      <div className="container">
        <div className="gallery-grid">
          {images.map(image => (
            <div
              key={image.id}
              className="gallery-item"
              onClick={() => setSelectedImage(image)}
              style={{ backgroundColor: getImageColor(image.id) }}
            >
              <div className="image-placeholder">
                <div className="image-content">
                  <h3>{image.title}</h3>
                  <p>{image.category}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {selectedImage && (
        <div className="lightbox" onClick={() => setSelectedImage(null)}>
          <div className="lightbox-content" onClick={e => e.stopPropagation()}>
            <span className="close" onClick={() => setSelectedImage(null)}>&times;</span>
            <h3 style={{ textAlign: 'center', color: '#2c3e50' }}>{selectedImage.title}</h3>
          </div>
        </div>
      )}
    </div>
  );
}

export default Gallery;
