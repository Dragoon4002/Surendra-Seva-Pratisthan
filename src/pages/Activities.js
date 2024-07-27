import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'

const Activities = () => {
  return (
    <main>
        <Header/>
        <div className='Programme-Activities'>
            <h2>Programme Activities</h2>
            <p>
            SURANDRA SEVA PRATISTHAN Connected with a CHARITABLE EYE CATARACT OPERATION CAMP held on 23rd November, 2009
            at Astha Nursing Home, Hasimpur, Balagarh, Hooghly.
            </p>
        </div>
        <div className='Annual-Activities'>
            <h2>Annual Activities</h2>
            <h4>For further detailed list of activities please check the doucuments given below</h4>
            <ul>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
            </ul>
        </div>
        <div className='Project-Reports'>
            <h2>Project Reports</h2>
            <h4>For further detailed list of our Project Reports please check the doucuments given below</h4>
            <ul>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
            </ul>
        </div>
        <div></div>
        <Footer/>
    </main>
  )
}

export default Activities