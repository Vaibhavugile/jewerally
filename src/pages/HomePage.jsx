// HomePage.jsx
import React from 'react';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import CollectionCard from '../components/CollectionCard';
import BrowseCollectionSection from '../components/BrowseCollectionSection';
import Footer from '../components/Footer';
import earrings from '../assets/earing.jpeg';
import necklaces from '../assets/necklace.jpeg';
import bracelets from '../assets/bracelate.jpeg';
import rings from '../assets/ring1.jpeg';

const collections = [
  { title: 'Earrings', image: earrings },
  { title: 'Necklaces', image: necklaces },
  { title: 'Bracelets', image: bracelets },
  { title: 'Rings', image: rings },
];

const HomePage = () => {
  return (
    <>
      <Navbar />
      <HeroSection />
      <div className="collections-section">
        <h3>Featured Collections</h3>
        <div className="collections-grid">
          {collections.map((item, idx) => (
            <CollectionCard key={idx} title={item.title} image={item.image} />
          ))}
        </div>
      </div>
      <BrowseCollectionSection />
      <Footer />
    </>
  );
};

export default HomePage;
