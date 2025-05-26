// src/components/Footer.jsx
import React from 'react';
import logo from '../assets/logoj.png'; // your actual logo path

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-section about">
        <img src={logo} alt="Kiyuziyu Logo" className="logo" />
        <p>We supply anti-tarnish imitation jewellery to wholesalers and resellers in all over India.</p>
        <div className="social-icons">
          <i className="fab fa-instagram" />
          <i className="fab fa-facebook" />
          <i className="fab fa-twitter" />
          <i className="fab fa-linkedin" />
          <i className="fab fa-tiktok" />
        </div>
      </div>
      <div className="footer-section contact">
        <h4>Contact Us</h4>
        <p>📍 Streets Of Europe Hinjewadi PUNE</p>
        <p>📞 +91 7897897441</p>
        <p>✉️ Kiyuziyuofficial@gmail.com</p>
      </div>
      <div className="footer-section links">
        <h4>Important Links</h4>
        <ul>
          <li>Home</li>
          <li>Collections</li>
          <li>Gallery</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
