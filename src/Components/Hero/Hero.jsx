import React from 'react'
import './Hero.css'
import profile_img from '../../assets/profile_img.jpg'

const Hero = () => {
  return (
    <div id='home' className='hero'>
        <img src={profile_img} alt="" />
        <h1><span>Hello, I'm Bryan,</span> BSIT graduate from Cebu City</h1>
        <p>I'm passionate about building user-friendly interfaces and creating engaging experiences.</p>
        <div className="hero-action">
            <div className="hero-connect">My resume</div>
            
        </div>
    </div>
  )
}

export default Hero