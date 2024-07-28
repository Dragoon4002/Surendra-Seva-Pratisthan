import React from 'react'
import './Testimonial.css'
import Header from '../components/Header'
import Footer from '../components/Footer'

const Testimonial = () => {
  const writing_img_src = [];
  const news_img_src = [];
  return (
    <main className='testimonial'>
        <Header/>
        <h1>Here is a list of some of the reviews and Testimonials by others</h1>
        <div className='video'>
          <h2>A video documentation</h2>
        </div>
        <div className='writing'>
          <h2>Written Testimonial</h2>
          <ul>
            {writing_img_src.map(image=>{
              return(
                <li>
                  <img src={image} alt='Writen Testimonials in govt documents'/>
                </li>
              )
            })}
          </ul>
        </div>
        <div className='article'>
        <h2>News Articles</h2>
          <ul>
            {news_img_src.map(image=>{
              return(
                <li>
                  <img src={image} alt='Articles on Us in Newspapers'/>
                </li>
              )
            })}
          </ul>
        </div>
        <div className=''></div>
        <Footer/>
    </main>
  )
}

export default Testimonial