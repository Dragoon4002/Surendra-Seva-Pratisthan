import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  return (
    <header>
      <div className='logo'>SURENDRA SEVA PRATISTHAN</div>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/activities">Activities</Link></li>
          <li><Link to="/objective">Objective</Link></li>
          <li><Link to="/members">Members</Link></li>
          <li><Link to="/testimonials">Testimonials</Link></li>
          <li><Link to="/gallery">Gallery</Link></li>
        </ul>
      </nav>
      <button>Donation</button>
    </header>
  );
}

export default Header;
