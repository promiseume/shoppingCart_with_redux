import React from 'react'
import {useSelector} from "react-redux";
export default function Cart() {
    const quantity = useSelector(state => state.cart.totalQuantity)
  return (
    <div>
        <h1>Cart: {quantity} items</h1>
    </div>
  )
}
