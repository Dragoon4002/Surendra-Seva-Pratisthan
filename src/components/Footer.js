import { Link } from 'react-router-dom';
import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <footer>
        <div className='socials'>
            <h3>Surendra-Seva-Pratisthan</h3>
            <p>
            Surendra Seva Pratisthan provides affordable healthcare and health promotion to underprivileged communities in Balagarh, Hooghly district, West Bengal.
            </p>
            <ul className='Socials'>
                <li><i className="fa-solid fa-house"></i>Village: Hasimpur, P.O. & P.S.- Balagarh, Dist.- Hooghly, Pin- 712501, West Bengal</li>
                <li><i className="fa-solid fa-phone"></i>Niranjan Beru:+91 9153062571</li>
                <li><i className="fa-solid fa-envelope"></i>surendrasevapratisthan@gmail.com</li>
            </ul>
        </div>
        <div className='Menu'>
            <div className='mainMenu'>
                <h3>Menu</h3>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/activities">Activities</Link></li>
                    <li><Link to="/objective">Objective</Link></li>
                    <li><Link to="/members">Members</Link></li>
                    <li><Link to="/testimonials">Testimonials</Link></li>
                    <li><Link to="/gallery">Gallery</Link></li>
                </ul>
            </div>
            <div className='extraMenu'>
                <h3>Special Menu</h3>
                <ul>
                    <li><Link to="/contactus">Contact Us</Link></li>
                    <li><Link to="/feedback">Feedback Form</Link></li>
                </ul>
            </div>
        </div>
    </footer>
  )
}

export default Footer