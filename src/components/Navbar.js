import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          🍽️ Blue Dine
        </Link>
        
        <div className={`menu-icon ${menuOpen ? 'active' : ''}`} onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>

        <ul className={`nav-menu ${menuOpen ? 'active' : ''}`}>
          <li className="nav-item">
            <Link to="/" className="nav-link" onClick={() => setMenuOpen(false)}>Home</Link>
          </li>
          <li className="nav-item">
            <Link to="/menu" className="nav-link" onClick={() => setMenuOpen(false)}>Menu</Link>
          </li>
          <li className="nav-item">
            <Link to="/gallery" className="nav-link" onClick={() => setMenuOpen(false)}>Gallery</Link>
          </li>
          <li className="nav-item">
            <Link to="/booking" className="nav-link" onClick={() => setMenuOpen(false)}>Booking</Link>
          </li>
          <li className="nav-item">
            <Link to="/reviews" className="nav-link" onClick={() => setMenuOpen(false)}>Reviews</Link>
          </li>
          <li className="nav-item">
            <Link to="/contact" className="nav-link" onClick={() => setMenuOpen(false)}>Contact</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
