import React from 'react';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import CollectionCard from '../components/CollectionCard';
import BrowseCollectionSection from '../components/BrowseCollectionSection';
import Footer from '../components/Footer';
const collections = [
  { title: 'Earrings' },
  { title: 'Necklaces' },
  { title: 'Bracelets' },
  { title: 'Rings' },
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
