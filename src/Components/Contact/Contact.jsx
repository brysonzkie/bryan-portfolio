import React from 'react'
import './Contact.css'
import mail_icon from '../../assets/mail_icon.svg'
import location_icon from '../../assets/location_icon.svg'
import call_icon from '../../assets/call_icon.svg'

const Contact = () => {
  return (
    <div id='contact' className='contact'>
        <div className="contact-title">
            <h1>Contact</h1>
        </div>
        <div className="contact-section">
            <div className="contact-details">
                <div className="contact-detail">
                    <img src={mail_icon} alt="" /> <p>jbbustamante07.shs@gmail.com</p>
                </div>
                <div className="contact-detail">
                    <img src={call_icon} alt="" /> <p>09616290424</p>
                    
                </div>
                <div className="contact-detail">
                    <img src={location_icon} alt="" /> <p>Cebu City, Philippines</p>
                </div>  
            </div>
        </div>
    </div>
  )
}

export default Contact