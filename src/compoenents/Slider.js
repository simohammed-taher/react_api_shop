import React from 'react'
import './Slider.css'

function Slider() {
  return (
<>
<div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src="https://static.lematin.ma/files/lematin/images/articles/2022/01/dd91f48262cc5e8a67ef2aa81d62c5b7.jpg" className="d-block w-90" alt="..." />
    </div>
    <div className="carousel-item">
      <img src="https://i0.wp.com/leseco.ma/wp-content/uploads/2020/05/E-commerce.jpg?fit=1200%2C600&ssl=1" className="d-block w-90 " alt="..." />
    </div>
    <div className="carousel-item">
      <img src="https://www.lopinion.ma/photo/art/grande/55867579-41715514.jpg?v=1619621174" className="d-block w-90" alt="..." />
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
</>
  )
}

export default Slider
