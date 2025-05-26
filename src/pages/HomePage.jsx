import React from 'react';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import CollectionCard from '../components/CollectionCard';
import BrowseCollectionSection from '../components/BrowseCollectionSection';
import Footer from '../components/Footer';
import earrings from '../assets/ring.jpg';
import necklaces from '../assets/ring.jpg';
import bracelets from '../assets/ring.jpg';
import rings from '../assets/ring.jpg';

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
            <CollectionCard key={idx} title={item.title} />
          ))}
        </div>
      </div>
       <BrowseCollectionSection /> {/* New Section */}
      <Footer /> 

    </>
  );
};

export default HomePage;
