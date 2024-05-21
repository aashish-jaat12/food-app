import React, { useEffect, useRef, useState } from 'react'
import { useDispatchCart, useCart } from './ContextReducer'
function Card(props) {
  let dispatch = useDispatchCart()
  let data = useCart()
  const priceref = useRef()
  const option = props.options
  const priceoption = Object.keys(option)
  let fooditem = props.result;
  const [qty, setqty] = useState('1')
  const [size, setsize] = useState("")

  const addtocart = async () => {
    let food = []
    for (const item of data) {
      if (item.id === fooditem._id) {
        food = item
        break;
      }
    }
    if (food != []) {
      if (food.size === size) {
 await dispatch({ type: "UPDATE", id: fooditem._id, price: finalprice, qty: qty })
        return
      }
      else if (food.size !== size) {

        await dispatch({ type: "ADD", id: fooditem._id, name: fooditem.name, price: finalprice, qty: qty, size: size, img: fooditem.im })
        return
      }
      return
    }

    await dispatch({ type: "ADD", id: fooditem._id, name: fooditem.name, price: finalprice, qty: qty, size: size, img: fooditem.im })
  }

  let finalprice = qty * parseInt(option[size])

  useEffect(() => {
    setsize(priceref.current.value)
  }, [])
  return (
    <div class="card m-3 mb-5 text-white bg-dark" style={{ "width": "18rem", "maxHeight ": "360px" }}>
      <img src={fooditem.img} class="card-img-top" alt="..." style={{ objectFit: "fill", height: "160px" }} />
      <div class="card-body">
        <h5 class="card-title">{fooditem.name}</h5>
        <div className='container'>
          <select className='m-2 h-100 rounded bg-success' onChange={(e) => setqty(e.target.value)}>
            {Array.from(Array(6), (e, i) => {
              return <option key={i + 1} value={i + 1}> {i + 1}</option>
            })}
          </select>

          <select className='m-2 h-100 rounded bg-success' ref={priceref} onChange={(e) => setsize(e.target.value)}>
            {priceoption.map((data) => {
              return <option key={data} value={data}>{data}</option>
            })}

          </select>
          <div className='d-inline h-100 fs-5'> {finalprice}/-</div>
        </div>
        <hr />
        <div onClick={addtocart} className='btn text-white btn-success text-center  ' >Add cart/-</div>

      </div>
    </div>
  )
}

export default Card
