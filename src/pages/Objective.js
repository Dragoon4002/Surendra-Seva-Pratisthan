import React from 'react'
import './Objective.css'
import Header from '../components/Header'
import Footer from '../components/Footer'

const Objective = () => {
  return (
    <main className='objective'>
        <Header/>
        <h1>About Us And Our Objective</h1>
        <hr/>
        <div className='aboutUs'>
            <h2>SURENDRA  SEVA  PRATISTHAN</h2>
            <p><strong>
Register under West Bengal Societies Registration Act xxvi of 1961<br/>
Registration No. S/1L/19154 OF 2003 – 2004<br/>
Village:Hasimpur, P.O. & P.S. – Balagarh, Dist. – Hooghly, Pin – 712501
ESTD – 2003<br/>

Exemption Certificate No. CIT/KOL -XX / 12A & 80G /11/2011-2012/203, Dated-17/6/2011<br/>
Approval U/S. 80G(5)  (vi) of the I.T Act 1961<br/>
Granted by the Commissioner of Income Tax kol- XX. KOLKATA<br/>
[VAPID IN PFRPIATUITY]<br/>
Approval Of FCRA (Registration No – 146990125) Nature – Social. Valid – 20/10/2018<br/>
            </strong></p>
            <div className='certificates'>
                <img className='c1' alt='certificate'/>
                <img className='c2' alt='certificate'/>
                <img className='c3' alt='certificate'/>
                <p>Certificate of Registration of Society</p>
                <p>Registration under Foreign Contribution (Regulation) Act, 2010</p>
            </div>
        </div>
        <hr/>
        <div className='list'>
            <h2>Our Objective</h2>
            <p>The objects for which the society is established are :</p>
            <ol>
                <li>To acquire, establish, start, aid, run, maintain or manage Primary Schools, libraries, for the benefit of the public.</li>
                <li>To arrange and organise lectures, debates, discussions, seminars & excursions for the diffusion of knowledge.</li>
                <li>To publish or cause to be published useful literatures, papers, magazines, books etc. without profit motive.</li>
                <li>To study, cultivate and demonstrate the art of music and dancing.</li>
                <li>To promote and encourage advancement of literary, cultural, political, religious, scientific and technical education.</li>
                <li>To help the needy students of all communities for the prosecution of studies.</li>
                <li>To collect and preserve manuscripts, painting sculptures, works of art, antiquities, natural history specimens, mechanical and scientific instruments and designs.</li>
                <li>To help the aged , sick, helpless and indigent persons.</li>
                <li>To alleviate the sufferings of animals, or other living creatures as may be deemed appropriate.</li>
                <li>To engaged and assist in such other philanthropic activities as may deemed appropriate by the  governing body of the society.</li>
                <li>The above activities will not be undertake without any mission other than philanthropy and will in no way be tantamount to running business activities day members of the society which their own profit motive. </li>
                <li>The above  object shall be undertake subject to the approval; of the Govt. of West Bengal or any other Govt. in the necessary and or mandatory.</li>
                <li>The society will not conthar section 4/2 of the W.B.S.R act 1961 in any way</li>
                <li>To construct, maintain, improve, develop and after any buildings, houses or other works necessary or convenient for the
                use of society.</li>
                <li>To do all such acts, deeds, matters and things as may be deemed incidental or conducive to the foregoing objects.</li>
            </ol>
            <strong>The income and properties of the society whatsoever derived or obtained shall be applied solely towards the promotion of the object of the society and no portion thereof shall be paid to or divided amongst any of its members by way of profits.</strong>
        </div>
        <Footer/>
    </main>
  )
}

export default Objective