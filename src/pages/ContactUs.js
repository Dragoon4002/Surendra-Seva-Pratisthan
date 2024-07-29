import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'

const ContactUs = () => {
  return (
    <main className='contactUs'>
        <Header/>
        <div className='contactUs_table'>
            <h2>Contact Us through any of the following option</h2>
        </div>
        <table width="650" border="1" align="center" cellpadding="2" cellspacing="2" bordercolor="#E1E1E1">
              <tbody>
                <tr>
                <td height="40" align="left" valign="middle" class="home_font03"><strong>Kokata Address: </strong></td>
                <td height="40" align="left" valign="top" class="home_font04"><strong>"Swapna Villa", <br/>
                Ground Floor, 87/ 48 A, Bose Pukur Road, Kolkata - 700 042<br/>
                  Dist: South 24 Prgns, P.O. &amp; P.S. - Kasba.
</strong></td>
              </tr>
              <tr>
                <td width="152" height="40" align="left" valign="middle" class="home_font03"><strong>Hooghly Address:</strong></td>
                <td width="478" height="40" align="left" valign="top" class="home_font04"><p class="home_font04"><strong>Village:Hasimpur, P.O. &amp; P.S. – Balagarh, Dist. – Hooghly, <br/>
                  Pin –712501</strong></p></td>
              </tr>
              <tr>
                <td height="40" align="left" valign="middle" class="home_font03"><strong>Contact Person: </strong></td>
                <td height="40" align="left" valign="top" class="home_font04"><p class="home_font04"><strong>Depak Sarkar : &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <span class="home_font03">+91 98306 91431 </span><br/>
                  Dr. Gouranga Ch. Barai : &nbsp;&nbsp;&nbsp;</strong><span class="home_font03"><strong>+91 91530 42325 </strong></span><strong><br/>
                    Pradeep Kumar Bose:  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="home_font03">+91 94324 93292 </span><br/>
                    Niranjan Beru: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="home_font03">&nbsp;+91 9153062571</span></strong></p></td>
              </tr>
              <tr>
                <td height="40" align="left" valign="middle" class="home_font03"><strong>Email:</strong></td>
                <td height="40" align="left" valign="middle" class="home_font04"><a href="mailto:surendrasevapratisthan@gmail.com?cc=admin@calcuttayellowpages.com"><strong>surendrasevapratisthan@gmail.com</strong></a></td>
              </tr>
              <tr>
                <td height="40" align="left" valign="middle" class="home_font03"><strong>Website:</strong></td>
                <td height="40" align="left" valign="top" class="home_font04"><a href="http://www.surendrasevapratisthan.org" target="_blank"><strong>http://www.surendrasevapratisthan.org</strong></a></td>
              </tr>
            </tbody></table>
        <Footer/>
    </main>
  )
}

export default ContactUs