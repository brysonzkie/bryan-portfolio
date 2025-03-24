import React from 'react'
import './Navbar.css'
import logo from '../../assets/logo.svg'

const Navbar = () => {
  // Function to handle smooth scrolling
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      window.scrollTo({
        behavior: 'smooth',
        top: element.offsetTop - 80 // Offset by navbar height (adjust as needed)
      });
    }
  };

  return (
    <div className='navbar'>  
        <ul className="nav-menu">
            <li onClick={() => scrollToSection('home')}>Home</li>
            <li onClick={() => scrollToSection('about')}>About Me</li>
            <li onClick={() => scrollToSection('services')}>Services</li>
            <li onClick={() => scrollToSection('work')}>Portfolio</li>
            <li onClick={() => scrollToSection('contact')}>Contact</li>
        </ul>
    </div>
  )
}

export default Navbar