import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [hamSignSelected, setHamSignSelected] = useState(false);

  const handleHamburgerClick = () => {
    setIsNavOpen(!isNavOpen);
    setHamSignSelected(!hamSignSelected);
  };

  return (
    <header>
      <div className='logo'>SURENDRA SEVA PRATISTHAN</div>
      <div className='hamburger'>
        <div className={`hamburger-icon ${hamSignSelected ? 'click' : ''}`} onClick={handleHamburgerClick}>
          <span/>
          <span/>
          <span/>
        </div>
        <nav className={isNavOpen ? 'selected' : ''}>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/objective">Objective</Link></li>
            <li><Link to="/activities">Activities</Link></li>
            <li><Link to="/members">Members</Link></li>
            <li><Link to="/testimonials">Testimonials</Link></li>
            <li><Link to="/gallery">Gallery</Link></li>
          </ul>
          <Link to="/donation"><button>Donate Now</button></Link>
        </nav>
      </div>
    </header>
  );
}

export default Header;
