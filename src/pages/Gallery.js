import React from 'react';
import './Gallery.css';
import Header from '../components/Header';
import Footer from '../components/Footer';

// Import all images
import img1 from '../images/gallery/1.jpg';
import img2 from '../images/gallery/2.jpg';
import img3 from '../images/gallery/3.jpg';
import img4 from '../images/gallery/4.jpg';
import img5 from '../images/gallery/5.jpg';
import img6 from '../images/gallery/6.jpg';
import img7 from '../images/gallery/7.jpg';
import img8 from '../images/gallery/8.jpg';
import img9 from '../images/gallery/9.jpg';
import img10 from '../images/gallery/10.jpg';
import img11 from '../images/gallery/11.jpg';
import img12 from '../images/gallery/12.jpg';
import img13 from '../images/gallery/13.jpg';
import img14 from '../images/gallery/14.jpg';
import img15 from '../images/gallery/15.jpg';
import img16 from '../images/gallery/16.jpg';
import img17 from '../images/gallery/17.jpg';
import img18 from '../images/gallery/18.jpg';
import img19 from '../images/gallery/19.jpg';
import img20 from '../images/gallery/20.jpg';
import img21 from '../images/gallery/21.jpg';
import img22 from '../images/gallery/22.jpg';
import img23 from '../images/gallery/23.jpg';
import img24 from '../images/gallery/24.jpg';
import img25 from '../images/gallery/25.jpg';
import img26 from '../images/gallery/26.jpg';
import img27 from '../images/gallery/27.jpg';
import img28 from '../images/gallery/28.jpg';
import img29 from '../images/gallery/29.jpg';
import img30 from '../images/gallery/30.jpg';
import img31 from '../images/gallery/31.jpg';
import img32 from '../images/gallery/32.jpg';
import img33 from '../images/gallery/33.jpg';

const Gallery = () => {
  const photoGallery = [
    img1, img2, img3, img4, img5, img6, img7, img8, img9, img10,
    img11, img12, img13, img14, img15, img16, img17, img18, img19, img20,
    img21, img22, img23, img24, img25, img26, img27, img28, img29, img30,
    img31, img32, img33
  ];

  return (
    <main className='gallery'>
      <Header />
      <div className='photogallery'>
        <h2>Photo Gallery</h2>
        <ul>
          {photoGallery.map((imageSrc, index) => (
            <li key={index}>
              <img 
                src={imageSrc} 
                alt={`Gallery image ${index + 1}`} 
              />
            </li>
          ))}
        </ul>
      </div>
      <Footer />
    </main>
  );
};

export default Gallery;
