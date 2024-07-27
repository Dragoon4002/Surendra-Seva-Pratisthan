import React from 'react'
import Header from '../components/Header.js'
import './HomePage.css'
import Footer from '../components/Footer.js'

const HomePage = () => {
  const whatWeDo = [
    "Charity Donation",
    "Nutrition Programme",
    "Charitabe Eye Examine Camp",
    "Blood Donation Camp",
    "Art & Culture BIVAG",
    "Pathological Investigation",
    "Homeopathic Charitable Dispensary",
    "Awareness for Consumer Affairs & Fair Business",
    "Medicine Supplu Programme",
    "Free Coaching Educational Programme",
    "Rural Health Programme of Aged & Children"
  ]
  return (
    <main>
      <Header/>
      <div className='title'>
        <span>
          <h3>Our Mission</h3>
          <h1>Change the lives of Those who have no Hope</h1>
          <p>
          The main idea to established of this institution is to provide a low– cost but effective medical service to the under privilege people  in the area of Hooghly district: West Bengal.
          </p>
          <button className='Donate'>
            Donate Now
          </button>
        </span>
      </div>
      <div className='aboutUs'>
        <div className='Text'>
          <h2>About Us</h2>
          <strong>Surendra Seva Pratisthan</strong> is a dedicated social organization registered under the <em>West Bengal Societies Registration Act, 1961</em>. Established on January 5, 2004, we have been committed to providing essential health care services to the rural communities of Balagarh in the Hooghly district. Our headquarters are located in Hasimpur Village, Balagarh, Hooghly.<br/>

          <em>As a registered society, Surendra Seva Pratisthan enjoys tax-exempt status under section 12A of the Income Tax Act, 1961, since January 21, 2009. We are also eligible for donations under section 80G (5) (vi) of the Income Tax Act, 1961. Furthermore, we were granted approval under the Foreign Contribution Regulation Act (FCRA), with registration number 146990125, from October 21, 2013, to October 20, 2018, for our social activities.</em><br/>

          Our organization conducts a range of health initiatives, including eye check-up camps and general health check-ups, aimed at the underprivileged sections of society in the Balagarh Block. These efforts are part of our broader mission to improve the health and well-being of rural communities.<br/>

          Founded by Dr. Gouranga Chandra Barai, Surendra Seva Pratisthan is named in honor of his father, Sri Surendra Barai. Dr. Barai, a respected figure in Balagarh, Hooghly, is deeply committed to social service and serves as the organization's founding President.<br/>

          Our organization was founded with the vision of providing low-cost but effective medical services to the underprivileged in Hooghly district. Since our inception in 2003, we have strived to offer accessible healthcare to the poorest of the poor through our Out-patient Department (OPD) at Jirat, Hooghly. However, we soon realized that treatment alone was not enough. Therefore, we expanded our services to include disease prevention and health promotion programs in nearby underserved areas.<br/>

          <strong>At Surendra Seva Pratisthan, we are dedicated to fostering a healthier community, ensuring that everyone has access to quality healthcare regardless of their socio-economic status.</strong>
        </div>
        <div className='banner'>
          <ul>
            <h3>Why donate to us</h3>
            <li>
              Exemption Certificate No.
              CIT /KOL-XX- 12A &
              80G / 11 /2011 -2012 / 203
              Dated 17/6/2011
            </li>
            <li>
            Approval U/S. 80G (5) (vi) of
            the I.T Act 1961
            </li>
            <li>
            Granted by the Commissioner of Income Tax kol-XX. KOLKATA
            </li>
          </ul>
        </div>
      </div>
      <hr/>
      <div className='whatWeDo'>
        <h2>What We Do</h2>
        <ol>
          {whatWeDo.map((task, index) => (
            <li key={index}>{task}</li>
          ))}
        </ol>
      </div>
      <Footer/>
    </main>
  )
}

export default HomePage