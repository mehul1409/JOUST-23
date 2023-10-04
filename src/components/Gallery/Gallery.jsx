import React from 'react'
import './Gallery.css';

const imageSources = [
  "https://www.jiit.ac.in/sites/default/files/New%20Picture.jpg",
  "https://www.jiit.ac.in/sites/default/files/gallery-19_0.jpg",
  "https://www.jiit.ac.in/sites/default/files/gallery-15_0.jpg",
  "https://www.jiit.ac.in/sites/default/files/gallery-13_0.jpg",
  "https://www.jiit.ac.in/sites/default/files/gallery-11_0.jpg",
  "https://www.jiit.ac.in/sites/default/files/gallery-10_0.jpg",
  "https://www.jiit.ac.in/sites/default/files/gallery-1_0.jpg",
  "https://www.jiit.ac.in/sites/default/files/gallery-3_0.jpg",
  "https://www.jiit.ac.in/sites/default/files/gallery-5_0.jpg",


];

export const Gallery = () => {
  return (
    <>
    <div className='GalleryDiv'>
    <div className='Gh1'>Our Past Gallery</div>

    <div className="Gallerycontainer">
      <div id="carousel">
        {imageSources.map((src, index) => (
          <figure key={index} style={{ transform: `rotateY(${(index * 40)}deg) translateZ(280px)` }}>
            <img src={src} alt={`age ${index + 1}`} />
          </figure>
        ))}
      </div>
    </div>
    </div>
  </>
  )
}
