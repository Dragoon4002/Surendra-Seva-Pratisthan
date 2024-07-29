import React from 'react'
import './Gallery.css'
import Header from '../components/Header'
import Footer from '../components/Footer'

const Gallery = () => {
  const photogallery = [];
  return (
    <main className='gallery'>
        <Header/>
        <div className='photogallery'>
          <h2>Photo Gallery</h2>
          <ul>
            {photogallery.map(imagesrc => {
              return(
                <li><img src={imagesrc}/></li>
              )
            })}
          </ul>
        </div>
        <Footer/>
    </main>
  )
}

export default Gallery