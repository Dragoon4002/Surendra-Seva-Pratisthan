import React from 'react'
import './Testimonial.css'
import Header from '../components/Header'
import Footer from '../components/Footer'
import written_testimonial1 from '../images/testimonial/written_testimonial/1.jpg'
import written_testimonial2 from '../images/testimonial/written_testimonial/2.jpg'
import written_testimonial3 from '../images/testimonial/written_testimonial/3.jpg'
import written_testimonial4 from '../images/testimonial/written_testimonial/4.jpg'
import written_testimonial5 from '../images/testimonial/written_testimonial/5.jpg'
import new_article1 from '../images/testimonial/news_article/1.jpg'
import new_article2 from '../images/testimonial/news_article/2.jpg'
import new_article3 from '../images/testimonial/news_article/3.jpg'
import new_article4 from '../images/testimonial/news_article/4.jpg'
import new_article5 from '../images/testimonial/news_article/5.jpg'
import new_article6 from '../images/testimonial/news_article/6.jpg'
// import written_testimonial6 from '../images/written_testimonial/6.jpg'

const Testimonial = () => {
  const writing_img_src = [
    written_testimonial1, written_testimonial2, written_testimonial3, written_testimonial4, written_testimonial5
  ];
  const news_img_src = [new_article1,new_article2,new_article3,new_article4,new_article5,new_article6];
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
                  <img src={image} alt='Written Testimonials in govt documents'/>
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