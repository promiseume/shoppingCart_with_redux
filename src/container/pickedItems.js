import React from 'react'
import {useDispatch} from 'react-redux'
import {cartActions} from "../redux/cartAction"

export default function Items({name,price,total,quantity,id}) {
  const dispatch = useDispatch();
  const addItem =()=>{
    dispatch(cartActions.addToCart({
      name,
      id,
      price
    }))
  }
  const removeItem =()=>{
    dispatch(cartActions.removeFromCart(id))
  }
  return (
    <div>
        <h1>{name}</h1>
        <p>${price}</p>
        <p>{quantity}</p>
        <p>{total}</p>
        <button onClick={removeItem}>-</button>
        <button onClick={addItem}>+</button>
    </div>
  )
}
