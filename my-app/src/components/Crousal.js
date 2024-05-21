import React from 'react'

function crousal() {
  return (
<div >
      <div id="carouselExampleControls" className="carousel slide " data-bs-ride="carousel" style={{"objectFit":"contain !important"  }}>
  <div className="carousel-inner hightss">
  <div class="carousel-caption d-none d-md-block" style={{zIndex: "1"}}>
    <form class="d-flex">
        <input class="form-control bg-dark me-2 text-white" type="search" placeholder="Search........" aria-label="Search"/>
        <button class="btn btn-outline-success text-white bg-danger">Search </button>
      </form>
      </div>
    <div className="carousel-item active">
   
      <img src="https://source.unsplash.com/random/900×500/?Pizzas" className="d-block w-100" style={{filter: "brightness(30%)"}} alt="..." />
    </div>
    <div className="carousel-item">
      <img src="https://source.unsplash.com/random/900×500/?Starter" className="d-block w-100" alt="..." style={{filter: "brightness(30%)"}} />
    </div>
    <div className="carousel-item">
      <img src="https://source.unsplash.com/random/900×500/?pastry" className="d-block w-100" alt="..." style={{filter: "brightness(30%)"}} />
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
</div>
  )
}

export default crousal
