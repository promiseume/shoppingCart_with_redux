import React from 'react'
import {useSelector} from "react-redux";
import PickedItems from './pickedItems'

export default function CartItems() {
    const cartItems = useSelector((state) => state.cart.items);
    console.log(cartItems)
  return (
    <div>
        <h1>Your Cart</h1>
        <ul>
        {cartItems.map((item) =>
            <li key={item.id}>
           <PickedItems id={item.id} name={item.name} price={item.price} total={item.total} quantity={item.quantity}/>
           </li>
        )}
        </ul>
    </div>
  )
}
