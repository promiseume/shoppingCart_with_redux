import React from 'react'
import {useSelector} from "react-redux";
import PickedItems from '../container/selectedItem/pickedItems'
import '../container/selectedItem/pickedItem.css';
export default function CartItems() {
  
    const cartItems = useSelector((state) => state.cart.items);
    let total = 0;
  cartItems.forEach((item)=>{
    total += item.total
  })
    console.log(cartItems)
  return (
    <section>
       <div className='cart-header'>
        <div className='cart-title'>Products</div>
        <div className='cart-total'>Total</div>
       </div>
        <ul className='cart-lists'>
        {cartItems.map((item) =>
        <li className='cart-product-item'>
           <PickedItems id={item.id} name={item.name} imageUrl={item.imageUrl} price={item.price} total={item.total} quantity={item.quantity}/>
           </li>
        )}
        </ul>
        <div>
          <p>Total</p>
          <h3>${total}</h3>
        </div>
    </section>
  )
}
