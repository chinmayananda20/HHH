import React from 'react'
import img1 from './champagne-2178775.jpg';
import img2 from './cocktails-and-mocktails-7235129.jpg'
import img3 from './drink-7172325.jpg'
// import './Slider.css'
export default function 
() {
  return (
    <div className='slider'>
    <div id="carouselExampleCaptions" className="carousel slide" data-ride="carousel">
    <ol className="carousel-indicators">
    <li data-target="#carouselExampleCaptions" data-slide-to="0" className="active"></li>
    <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
    <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
  </ol>
  <div className="carousel-inner">
    <div className="carousel-item active">
      <div className="carousel-caption d-none d-md-block">
      </div>
      <img src={img1} className="d-block w-100" alt="..." contain/>
    </div>
    <div className="carousel-item">
      <div className="carousel-caption d-none d-md-block">
      </div>
      <img src={img2} className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item">
      <div className="carousel-caption d-none d-md-block">

      </div>
      <img src={img3} className="d-block w-100" alt="..."/>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-target="#carouselExampleCaptions" data-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="sr-only">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-target="#carouselExampleCaptions" data-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="sr-only">Next</span>
  </button>
</div>
    </div>
  )
}
