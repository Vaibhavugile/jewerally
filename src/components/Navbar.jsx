import React from 'react';
import logo from '../assets/logoj.png'; // your actual logo path

const Navbar = () => {
  return (
    <nav className="navbar">
      {/* Left: Logo */}
      <div className="navbar-left">
        <img src={logo} alt="Kiyuziyu Logo" className="logo" />
      </div>

      {/* Center: Title */}
      <div className="navbar-center">
        <h1 className="navbar-title">Kiyuziyu</h1>
      </div>

      {/* Right: Nav Links */}
      <ul className="navbar-right">
        <li><a href="#">Home</a></li>
        <li><a href="#">Collections</a></li>
        <li><a href="#">Contact</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
