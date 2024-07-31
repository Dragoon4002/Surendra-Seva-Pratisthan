import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import './Activities.css'

const Activities = () => {
    const annual_activities = [];
    const project_report = [];
  return (
    <main className='activities'>
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
                {annual_activities.map(activity=>{
                    return(
                        <li>
                            /Something something
                        </li>
                    )
                })}
            </ul>
        </div>
        <div className='Project-Reports'>
            <h2>Project Reports</h2>
            <h4>For further detailed list of our Project Reports please check the doucuments given below</h4>
            <ul>
                {project_report.map(activity=>{
                    return(
                        <li>
                            /Something something
                        </li>
                    )
                })}
            </ul>
        </div>
        <div></div>
        <Footer/>
    </main>
  )
}

export default Activities