import React from 'react'
import './Member.css'
import Header from '../components/Header'
import Footer from '../components/Footer'

const Member = () => {
  const year= '2015-16';
  const body = [
    {
      src: '',
      name: 'Deepak Sarkar',
      designation: 'Chairman'
    },
    {
      src: '',
      name: 'Dr. Gouranga Ch. Barai',
      designation: 'President'
    },
    {
      src: '',
      name: 'Pradeep Kumar Bose',
      designation: 'Vice President'
    },
    {
      src: '',
      name: 'Niranjan Beru',
      designation: 'Secretary'
    },
    {
      src: '',
      name: 'Banani Beru',
      designation: 'Assistant Secretary'
    },
    {
      src: '',
      name: 'Soumen Barai',
      designation: 'Treasurer'
    },
    {
      src: '',
      name: 'Santosh Barai',
      designation: 'Member'
    },
    {
      src: '',
      name: 'Sheuli Barai',
      designation: 'Member'
    },
    {
      src: '',
      name: 'Ratan Mondal',
      designation: 'Member'
    },
    {
      src: '',
      name: 'Prabir Karmakar',
      designation: 'Member'
    },
    {
      src: '',
      name: 'Bharat Ch. Roy',
      designation: 'Member'
    }
  ];
  
  return (
    <main className='member'>
        <Header/>
        <div className='ourMember'>
          <h2>Governing Body of {year}</h2>
          <hr/>
          <ul>
            {body.map((member,index)=>{
              return(
                <li key={index}>
                  <img src={member.src} alt="members' image"/>
                  <div className='designation'>
                    <p>{member.name}</p>
                    <p>{member.designation}</p>
                  </div>
                </li>
              )
            })}
            <li className='newMember'>
              <h3>Want to become a member?</h3>
              <button>Join Now</button>
            </li>
          </ul>
        </div>
        <div className=''></div>
        <div className=''></div>
        <Footer/>
    </main>
  )
}

export default Member