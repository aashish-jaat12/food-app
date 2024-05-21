import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Model from '../Model'
import Mycart from './Mycart'
function Navebar() {
const [cartview , setcartview] = useState(false)

  const logout = () => {
    localStorage.removeItem("authtoken")

  }
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-success">
        <div className="container-fluid">
          <Link className="navbar-brand fs-1 fst-italic" >GoFood</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active fs-5 " aria-current="page" to="#">Home</Link>
              </li>
              

            </ul>
            {(!localStorage.getItem("authtoken")) ?
              <div className='d-flex' > <Link className="btn bg-white text-success mx-1 " to="/login">Log-in</Link>
                <Link className="btn bg-white text-success mx-1" to="/signup">SignUp</Link> </div>
              : <div className='d-flex' > <div className="btn bg-white text-success mx-1 " onClick={()=> setcartview(true)}>
               My Cart{""}
               
                </div>
                {cartview? <Model onClose={()=> setcartview(false)} ><Mycart/></Model>: null}
                
                <div className='d-flex mx-2'>
                  <Link className="btn bg-white text-danger mx-1 " onClick={logout} to="/login">Logout</Link></div>
              </div>
            }
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Navebar
