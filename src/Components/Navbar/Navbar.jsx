import React, { useState, useEffect } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (menuOpen && !e.target.closest('.nav-menu') && !e.target.closest('.hamburger')) {
        setMenuOpen(false);
      }
    };
    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, [menuOpen]);

  // Prevent body scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : 'auto';
  }, [menuOpen]);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      window.scrollTo({
        behavior: 'smooth',
        top: element.offsetTop - 80,
      });
    }
    setMenuOpen(false);
  };

  return (
    <div className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div
        className="hamburger"
        role="button"
        aria-label="Toggle navigation"
        tabIndex={0}
        onClick={(e) => {
          e.stopPropagation();
          setMenuOpen(!menuOpen);
        }}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            setMenuOpen(!menuOpen);
          }
        }}
      >
        <div className={`line ${menuOpen ? 'line1' : ''}`}></div>
        <div className={`line ${menuOpen ? 'line2' : ''}`}></div>
        <div className={`line ${menuOpen ? 'line3' : ''}`}></div>
      </div>

      <ul className={`nav-menu ${menuOpen ? 'active' : ''}`}>
        <li onClick={() => scrollToSection('home')}>Home</li>
        <li onClick={() => scrollToSection('about')}>About</li>
        <li onClick={() => scrollToSection('services')}>Experience</li>
        <li onClick={() => scrollToSection('work')}>Work</li>
        <li onClick={() => scrollToSection('contact')}>Contact</li>
      </ul>
    </div>
  );
};

export default Navbar;
