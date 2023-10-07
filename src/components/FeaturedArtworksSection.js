import React from 'react';
import WSPGallery from './WSPGallery';

function FeaturedArtworksSection() {
  const galleryImages = [
    {
      img: 'https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg?auto=compress&cs=tinys',
    },
    {
      img: 'https://images.pexels.com/photos/3861458/pexels-photo-3861458.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    },
    {
      img: 'https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    },
    {
      img: 'https://images.pexels.com/photos/1194713/pexels-photo-1194713.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    },
    // {
    //   img: 'https://images.pexels.com/photos/39284/macbook-apple-imac-computer-39284.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    // },
    // {
    //   img: 'https://images.pexels.com/photos/1712/sunglasses-apple-iphone-desk.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    // },
  ];

  return (
    <section id="featured-artworks">
      <h2>Featured Artworks</h2>

      <div className="artwork-grid">
        <div className="artwork-item">
          <WSPGallery galleryImages={galleryImages} />
          <h3>Artwork 1</h3>
          <p>Artist: Artist 1</p>
        </div>
        <div className="artwork-item">
          <WSPGallery galleryImages={galleryImages} />
          <h3>Artwork 2</h3>
          <p>Artist: Artist 2</p>
        </div>
        <div className="artwork-item">
          <WSPGallery galleryImages={galleryImages} />
          <h3>Artwork 3</h3>
          <p>Artist: Artist 3</p>
        </div>
      </div>
    </section>
  );
}

export default FeaturedArtworksSection;
