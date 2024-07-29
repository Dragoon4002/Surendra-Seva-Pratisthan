import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'

const Feedback = () => {
  return (
    <main className='Feedback'>
        <Header/>
        <table width="400" border="0" align="left" cellpadding="2" cellspacing="2">
                    <tbody><tr>
                      <td align="center" valign="middle"><p class="home_font02"><strong> Please Fill in the Detail Requirement so that we can get in touch 
                        with you for your requirement. </strong></p>
                          <form action="http://www.calcuttayellowpages.com/cgi-calcuttayellowpages/fmail.cgi" method="POST" target="_blank">
                            <center>
                              <div align="center">
                                <center>
                                      <input type="hidden" name="recipient" value="surendrasevapratisthan@gmail.com,admin@calcuttayellowpages.com"/>
                                      <input type="hidden" name="required" value="realname,email"/>
                                      <input type="hidden" name="subject" value="Feedback Form from calcuttayellowpages.com"/>
                                      </center><center>
                                    <center>
                                      </center></center><table width="360" border="0" align="center" cellpadding="2" cellspacing="2">
                                  <tbody><tr>
                                    <td align="right" valign="middle" class="home_font02"><strong>Name&nbsp;(required) : </strong></td>
                                    
                                    <td align="left" valign="middle"><input name="realname" type="text" size="30" maxlength="120"/>
                                    </td>
                                  </tr>
                                  <tr>
                                        <td align="right" valign="middle" class="home_font02"><strong>Email&nbsp;(required) : </strong></td>
                                        <td align="left" valign="middle"><input name="email" type="email" size="30" maxlength="120"/>
                                        </td>
                                      </tr>
                                      <tr>
                                        <td align="right" valign="middle" class="home_font02"><strong>&nbsp;Address : </strong></td>
                                        <td align="left" valign="middle"><input name="address" type="text" value="" size="30" maxlength="600"/>
                                        </td>
                                      </tr>
                                      <tr>
                                        <td align="right" valign="middle" class="home_font02"><strong>Phone : </strong></td>
                                        <td align="left" valign="middle"><input name="telephone" type="number" size="30" maxlength="120"/>
                                        </td>
                                      </tr>
                                      <tr>
                                        <td align="right" valign="middle" class="home_font02"><strong>Mobile : </strong></td>
                                        <td align="left" valign="middle"><input name="mobile" type="number" size="30" maxlength="120"/>
                                        </td>
                                      </tr>
                                      <tr>
                                        <td align="right" valign="middle" class="home_font02"><strong>Comments : </strong></td>
                                        <td align="left" valign="middle"><textarea rows="2" name="comments" cols="24"></textarea></td>
                                      </tr>
                                    
                                  
                                </tbody></table>
                              </div>
                            </center>
                            <p align="center">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                <input name="submit" type="submit" value="Submit"/>
                              &nbsp;&nbsp;&nbsp;&nbsp;
                              <input name="reset" type="reset" value="Reset"/>
                            </p>
                          </form></td>
                    </tr>
                </tbody></table>
        <Footer/>
    </main>
  )
}

export default Feedback