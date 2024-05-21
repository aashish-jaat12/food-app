import React, { useEffect, useState } from 'react'
import Navebar from '../components/Navebar'
import Footer from '../components/Footer'
import Card from '../components/Card'

function Home() {
  const [fooditem, setcarditem] = useState([])
  const [search, setsearch] = useState()

  const request = async () => {

    let result = await fetch('/displaydata', {
      method: 'post',
      headers: {
        "Content-Type": "application/json"
      }
    })
    const datas = await result.json()
    setcarditem(datas)
  }
  useEffect(() => {

    request()
  }, [])


  return (
    <div>
      <Navebar />
      <div>
        <div id="carouselExampleControls" className="carousel slide " data-bs-ride="carousel" style={{ "objectFit": "contain !important" }}>
          <div className="carousel-inner hightss">
            <div class="carousel-caption d-none d-md-block" style={{ zIndex: "1" }}>
              <div class="d-flex justify-content-center">
                <input class="form-control bg-dark me-2 text-white" type="search" value={search}  onChange={(e)=>setsearch(e.target.value)} placeholder="Search" aria-label="Search" />
                <button class="btn btn-outline-success text-white bg-danger">Search</button>
              </div>
            </div>
            <div className="carousel-item active">

              <img src="https://source.unsplash.com/random/900×500/?Pizzas" className="d-block w-100" style={{ filter: "brightness(40%)" }} alt="..." />
            </div>
            <div className="carousel-item">
              <img src="https://source.unsplash.com/random/900×500/?Starter" className="d-block w-100" alt="..." style={{ filter: "brightness(40%)" }} />
            </div>
            <div className="carousel-item">
              <img src="https://source.unsplash.com/random/900×500/?pastry" className="d-block w-100" alt="..." style={{ filter: "brightness(40%)" }} />
            </div>
          </div>
          
        </div></div>
        
      <div className='m-4  row justify-content-center'>
        
        {
          fooditem === [] ? <div>no item</div>
           :fooditem
            // .filter(
            //   (items) =>  (items.name.toLowerCase().includes(search.toLowerCase())))
              .map((data) => {
                return <Card className=' col-12 col-md-6 col-lg-3'
                  result ={data}
                  option={data.options}
                  
                  options={data.options[0]} /> })
              }
      </div>

      <Footer />
    </div>
  )
}

export default Home
