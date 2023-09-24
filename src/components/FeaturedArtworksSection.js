import React from 'react';

function FeaturedArtworksSection() {
  return (
    <section id="featured-artworks">
      <h2>Featured Artworks</h2>
      <div className="artwork-grid">
        <div className="artwork-item">
          <img src="../images/hero-image.jpg" alt="Artwork 1" />
          <h3>Artwork 1</h3>
          <p>Artist: Artist 1</p>
        </div>
        <div className="artwork-item">
          <img src="images/artwork2.jpg" alt="Artwork 2" />
          <h3>Artwork 2</h3>
          <p>Artist: Artist 2</p>
        </div>
        <div className="artwork-item">
          <img src="images/artwork3.jpg" alt="Artwork 3" />
          <h3>Artwork 3</h3>
          <p>Artist: Artist 3</p>
        </div>
      </div>
    </section>
  );
}

export default FeaturedArtworksSection;
