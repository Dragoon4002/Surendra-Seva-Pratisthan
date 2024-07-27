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
            <h3>Menu</h3>
            <ul>
                <li>Home</li>
                <li>Activities</li>
                <li>Objective</li>
                <li>Members</li>
                <li>Testimonials</li>
                <li>Gallery</li>
            </ul>
        </div>
    </footer>
  )
}

export default Footer