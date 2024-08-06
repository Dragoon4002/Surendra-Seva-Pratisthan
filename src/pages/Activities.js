import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import './Activities.css'
import image1src from '../images/activities/1.jpg'
import image2src from '../images/activities/2.jpg'
import fileThumbnail from '../images/pdf.png'

const Activities = () => {
    const annual_activities = [
        {
            year: '2013 - 2014',
            file: '110837annual_01.pdf',
        },
        {
            year: '2012 - 2013',
            file: '110837annual_02.pdf',
        },
        {
            year: '2011 - 2012',
            file: '110837annual_03.pdf',
        },
        // Add more activities as needed
    ];
    const project_report = [
        {
            title: 'Project Report for 2011-2012',
            file: '110837project_01.pdf',
        },
        {
            title: 'Project Report for 2010-2011',
            file: '110837project_02.pdf',
        },
        {
            title: 'Project Report For 2009 - 2010',
            file: '110837project_03.pdf',
        },
        {
            title: 'Project Report for 2008-2009',
            file: '110837project_04.pdf',
        },
        {
            title: 'Project Report for 2007-2008',
            file: '110837project_05.pdf',
        },
        {
            title: 'Consumer Affairs and Fair Business Practices Hooghly Regional Office, Chinsura, Hooghly',
            file: '110837project_06.pdf',
        },
        // Add project report data here
    ];

  return (
    <main className='activities'>
        <Header/>
        <div className='Programme-Activities'>
            <h2>Programme Activities</h2>
            <p>
                SURANDRA SEVA PRATISTHAN Connected with a CHARITABLE EYE CATARACT OPERATION CAMP held on 23rd November, 2009
                at Astha Nursing Home, Hasimpur, Balagarh, Hooghly.
            </p>
            <div className='images'>
                <img src={image1src} alt='programmes hosted'/>
                <img src={image2src} alt='programmes hosted'/>
            </div>
        </div>
        <div className='Annual-Activities'>
            <h2>Annual Activities</h2>
            <h4>For further detailed list of activities please check the documents given below</h4>
            <ul>
                {annual_activities.map((activity, index) => (
                    <li key={index}>
                        <a href={`/document/annual_activities/${activity.file}`} target="_blank">
                            <img src={fileThumbnail} width="60" height="59" vspace="10" border="0" alt={activity.year}/>
                            <p>Annual Activities for the year {activity.year}</p>
                        </a>
                    </li>
                ))}
            </ul>
        </div>
        <div className='Project-Reports'>
            <h2>Project Reports</h2>
            <h4>For further detailed list of our Project Reports please check the documents given below</h4>
            <ul>
            {project_report.map((report, index) => (
                    <li key={index}>
                        <a href={`/document/project_report/${report.file}`} target="_blank">
                            <img src={fileThumbnail} width="60" height="59" vspace="10" border="0" alt={report.title}/>
                            <p>{report.title}</p>
                        </a>
                    </li>
                ))}
            </ul>
        </div>
        <Footer/>
    </main>
  )
}

export default Activities