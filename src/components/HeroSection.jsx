import React, { useEffect, useState } from 'react';


const images = [
  require('../assets/hero1.jpg'),
  require('../assets/hero2.jpg'),
  require('../assets/hero3.jpg'),
];

const HeroSection = () => {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % images.length);
    }, 4000); // change image every 4s

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className="hero"
      style={{
        backgroundImage: `url(${images[currentImage]})`,
      }}
    >
      <div className="hero-overlay">
        <h2>Discover Timeless Jewellery Crafted with Elegance</h2>
        <button>Shop Collection</button>
      </div>
    </div>
  );
};

export default HeroSection;
