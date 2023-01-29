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
   
  return (
    <section className='container'>
       <div className='cart-header'>
        <div className='cart-title'><p>Products</p></div>
        <div className='cart-total'><p>Total</p></div>
       </div>
        <ul className='cart-lists'>
          {JSON.parse(localStorage.getItem('cartItem')) ?
          <>
        {JSON.parse(localStorage.getItem('cartItem')).map((item) =>
        <li className='cart-product-item'>
           <PickedItems id={item.id} name={item.name} imageUrl={item.imageUrl} price={item.price} total={item.total} quantity={item.quantity}/>
           </li>
        )}</>:
        <>
        {cartItems.map((item) =>
        <li className='cart-product-item'>
           <PickedItems id={item.id} name={item.name} imageUrl={item.imageUrl} price={item.price} total={item.total} quantity={item.quantity}/>
           </li>
        )}
        </>
  }

        </ul>
        <div>
          <p>Total</p>
          <h3>${total}</h3>
        </div>
    </section>
  )
}
