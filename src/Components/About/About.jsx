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
                        I'm a full-stack developer with a passion for creating engaging user experiences. My background in information technology and software engineering has allowed me to develop innovative solutions for various industries. I am currently working remotely at a small software company, focusing on creating cutting-edge web and mobile applications.
                    </p>
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
         
                </div>
            </div>
        </div>
        <div className="about-achivements">
            <div className="about-achievement">
                <h1>1+</h1>
                <p>YEARS OF EXPERIENCE</p>
            </div>
            <hr />
            <div className="about-achievement">
                <h1>(Number of)</h1>
                <p>PROJECTS COMPLETED</p>
            </div>
        </div>
    </div>
  )
}

export default About