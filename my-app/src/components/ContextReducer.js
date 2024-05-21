import React, { createContext, useContext, useReducer } from "react";
const cardStateContext = createContext()
const cardDispatchContext = createContext()
const resucer = (state, action) => {
  switch (action.type) {
    case "ADD":
      return [...state, { id: action.id, img: action.img, name: action.name, price: action.price, qty: action.qty, size: action.size }]
   
   
      case "REMOVE":
      let newarr = [...state]
      newarr.splice(action.index, 1)
      return newarr;


    case "UPDATE":
      let arr = [...state]
      arr.find((food, index) => {
        if (food.id === action.id) {
          arr[index] = { ...food, qty: parseInt(action.qty) + parseInt(food.qty), price: action.price + food.price }
        }
        return arr
      })
      return arr
    default:
      console.log("err")
  }
}



export const Cartprovider = ({ children }) => {

  const [state, dispatch] = useReducer(resucer, [])
  return (
    <cardDispatchContext.Provider value={dispatch}>
      <cardStateContext.Provider value={state} >
        {children}
      </cardStateContext.Provider>
    </cardDispatchContext.Provider>

  )
}
export const useCart = () => useContext(cardStateContext)
export const useDispatchCart = () => useContext(cardDispatchContext)