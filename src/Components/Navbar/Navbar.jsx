import React, { useState } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      window.scrollTo({
        behavior: 'smooth',
        top: element.offsetTop - 80
      });
    }
    setMenuOpen(false);
  };

  return (
    <div className='navbar'>  
      <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
        <div className={`line ${menuOpen ? 'line1' : ''}`}></div>
        <div className={`line ${menuOpen ? 'line2' : ''}`}></div>
        <div className={`line ${menuOpen ? 'line3' : ''}`}></div>
      </div>
      
      <ul className={`nav-menu ${menuOpen ? 'active' : ''}`}>
        <li onClick={() => scrollToSection('home')}>Home</li>
        <li onClick={() => scrollToSection('about')}>About Me</li>
        <li onClick={() => scrollToSection('services')}>Services</li>
        <li onClick={() => scrollToSection('work')}>Portfolio</li>
        <li onClick={() => scrollToSection('contact')}>Contact</li>
      </ul>
    </div>
  );
};

export default Navbar;