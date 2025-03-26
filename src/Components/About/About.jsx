import React from 'react'
import './About.css'
import profile_img from '../../assets/profile_img2.jpg'

const About = () => {
  return (
    <div id='about' className='about'>
        <div className="about-title">
            <h1>About me</h1>
        </div>
        <div className="about-sections">
            <div className="about-left">
                <img src={profile_img} alt="" />
            </div>
            <div className="about-right">
                <div className="about-para">
                    <p>
                    A passionate BSIT graduate from Cebu with hands-on experience in both development and design. 
    I thrive at the intersection of logic and creativity—whether I'm building responsive web apps 
    with React or polishing UI designs in Figma. My time at MYT SoftDev and RipeConcepts taught me 
    how to bridge technical solutions with user-friendly experiences.                    </p>
                    <p>
                        I'm always eager to learn more about new technologies and programming languages.
                    </p>
                </div>
                <div className="about-skills">
                    <div className="about-skill"><p>HTML & CSS</p></div>
                    <div className="about-skill"><p>JavaScript</p></div>
                    <div className="about-skill"><p>PHP</p></div>
                    <div className="about-skill"><p>Bootstrap</p></div>
                    <div className="about-skill"><p>ReactJS</p></div>
                    <div className="about-skill"><p>React Bootstrap</p></div>
                    <div className="about-skill"><p>C#</p></div>
                    <div className="about-skill"><p>NodeJS</p></div>
                    <div className="about-skill"><p>MYSQL</p></div>
                    <div className="about-skill"><p>CodeIgniter</p></div>
                    <div className="about-skill"><p>ASP.NET</p></div>
                    <div className="about-skill"><p>Python</p></div>
                    <div className="about-skill"><p>Figma</p></div>
                    <div className="about-skill"><p>Adobe Photoshop</p></div>
                    <div className="about-skill"><p>Adobe Illustrator</p></div>
                    <div className="about-skill"><p>UI/UX Principles</p></div>
                </div>
            </div>
        </div>
        {/* <div className="about-achivements">
            <div className="about-achievement">
                <h1>1+</h1>
                <p>YEARS OF EXPERIENCE</p>
            </div>
            <hr />
            <div className="about-achievement">
                <h1>(Number of)</h1>
                <p>PROJECTS COMPLETED</p>
            </div>
        </div> */}
    </div>
  )
}

export default About