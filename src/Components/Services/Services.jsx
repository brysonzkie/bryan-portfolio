import React from 'react';
import './Services.css';
import Services_Data from '../../assets/services_data.js';

const Services = () => {
  return (
    <div id='services' className='services'>
        <div className="services-title">
            <h1>My Experience</h1>
        </div>
        <div className="services-container">
            {Services_Data.map((service,index) => (
                <div key={index} className="services-format">
                    <div className="service-header">
                        <h3>{service.s_no}</h3>
                        <h2>{service.s_name}</h2>
                        <p className="company">{service.company}</p>
                    </div>
                    <div className="service-description">
                        <p>{service.s_desc}</p>
                    </div>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Services;