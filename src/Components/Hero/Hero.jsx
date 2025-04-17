import React from 'react';
import './Hero.css';
import profile_img from '../../assets/profile_img.jpg';
import resumeFile from '../../assets/john bryan bustamante RESUME.pdf'; // Import your resume file

const Hero = () => {
  const handleDownload = () => {
    // Create a temporary anchor element
    const link = document.createElement('a');
    link.href = resumeFile;
    link.download = 'Bryan_Bustamante_CV-Resume.pdf'; // Set the filename for download
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div id='home' className='hero'>
        <img src={profile_img} alt="Profile" />
        <h1><span>Hello, I'm Bryan,</span> <br />BSIT Graduate from Cebu City</h1>
        <p>I'm passionate about building user-friendly interfaces and creating engaging experiences.</p>
        <div className="hero-action">
            <button className="hero-connect" onClick={handleDownload}>
            My CV/Resume
            </button>
        </div>
    </div>
  )
}

export default Hero;